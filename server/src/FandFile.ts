import { URI } from 'vscode-uri';
import { ProjectContext } from './parser/fand/FandParser';
import { NackFile } from './NackFile';
import { IFile } from './IFile';

export type RegisterReference = {
	file: IFile,
	line: number,
	char: number,
	endChar: number,
	isAlias: boolean,
};

export type RegisterAlias = {
	alias: string;
	register: string;
	declarationLine: number;
	references: RegisterReference[];
}

export class FandFile implements IFile {
	public uri: URI;

	public thkMap: Map<string, URI> = new Map<string, URI>();
	public registerMap: Map<string, RegisterAlias> = new Map<string, RegisterAlias>();
	public lastParseState?: ProjectContext;

	public constructor(uri: URI) {
		this.uri = uri;
	}

	// Register references are contributed both by the .fand declaration and by every .nack
	// file that uses the register. Since this FandFile outlives a single nack re-parse,
	// drop the given file's references before they are re-added, so the list doesn't grow.
	public clearReferencesFrom(file: IFile): void {
		const uri = file.uri.toString();
		for (const alias of this.registerMap.values()) {
			alias.references = alias.references.filter(ref => ref.file.uri.toString() !== uri);
		}
	}
}