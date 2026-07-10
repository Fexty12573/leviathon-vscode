/**
 * Centralized store of symbol occurrences (definitions + references).
 *
 * The key design rule — and the thing that eliminates the reference-growth / staleness
 * bugs that come from hand-maintaining reference lists on FandFile/NackFile — is that
 * every occurrence records the *source file* that produced it. Re-indexing a file is then
 * always two steps: `removeContributionsFrom(uri)` then re-add. One code path, all symbol
 * kinds, no per-kind purge methods to forget.
 */

export enum SymbolKind {
	Register = 'register',
	Node = 'node',
}

export interface SymbolOccurrence {
	sourceUri: string;
	/** line 1..n */
	line: number;
	char: number;
	endChar: number;
	name: string;
	isDefinition: boolean;
}

export class SymbolIndex {
	// `${kind}:${scopeUri}:${symbolName}` -> occurrences
	private occurrences: Map<string, SymbolOccurrence[]> = new Map();

	// A symbol's identity is (kind, scope, name). `scopeUri` is the URI of the file that
	// declares the symbol.
	private key(kind: SymbolKind, scopeUri: string, name: string): string {
		return `${kind}:${scopeUri}:${name}`;
	}

	public add(kind: SymbolKind, scopeUri: string, name: string, occurrence: SymbolOccurrence): void {
		const key = this.key(kind, scopeUri, name);
		const list = this.occurrences.get(key);
		if (list) {
			list.push(occurrence);
		} else {
			this.occurrences.set(key, [occurrence]);
		}
	}

	public get(kind: SymbolKind, scopeUri: string, name: string): readonly SymbolOccurrence[] {
		return this.occurrences.get(this.key(kind, scopeUri, name)) ?? [];
	}

	// Drop every occurrence contributed by the given file. Call this before re-parsing a
	// file, then let the parse re-add its occurrences.
	public removeContributionsFrom(sourceUri: string): void {
		for (const [key, list] of this.occurrences) {
			const kept = list.filter(occ => occ.sourceUri !== sourceUri);
			if (kept.length === 0) {
				this.occurrences.delete(key);
			} else if (kept.length !== list.length) {
				this.occurrences.set(key, kept);
			}
		}
	}
}
