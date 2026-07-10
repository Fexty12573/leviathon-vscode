import { URI } from 'vscode-uri';
import { ProgramContext, LeviathonParser } from './parser/LeviathonParser';
import { LeviathonLexer } from './parser/LeviathonLexer';
import { CommonTokenStream } from 'antlr4ts';
import { Position, TextEdit } from 'vscode-languageserver';
import { IFile } from './IFile';
import { EditList } from './LeviathonUtility';

export class Node {
	public name: AliasDecl = { text: '', charPos: -1 };
	public aliases: AliasDecl[] = [];
	public index = -1;
	public id = -1;
	public declarationFile: NackFile;
	public declarationLine = -1;
	public declarationChar = -1;
	public references: NodeReference[] = [];

	constructor(file: NackFile) {
		this.declarationFile = file;
	}

	public hasName(name: string): boolean {
		return this.name.text === name || this.aliases.find(decl => decl.text === name) !== undefined;
	}

	public matches(node: Node): boolean {
		return this.hasName(node.name.text);
	}

	public getAliasByPosition(pos: Position): string | undefined {
		if (pos.line != this.declarationLine) {
			return undefined;
		}

		if (pos.character >= this.name.charPos && pos.character < (this.name.charPos + this.name.text.length)) {
			return this.name.text;
		}

		return this.aliases.find(alias => pos.character >= alias.charPos && pos.character < (alias.charPos + alias.text.length))?.text;
	}

	public rename(pos: Position, newName: string): EditList {
		const original = this.getAliasByPosition(pos);
		if (!original) {
			return new EditList();
		}

		return this.renameFrom(original, newName);
	}

	public renameFrom(original: string, newName: string): EditList {
		let edits = new EditList();

		if (original == this.name.text) {
			edits.add(
				this.declarationFile.uri.toString(),
				TextEdit.replace({
					start: { line: this.declarationLine - 1, character: this.declarationChar },
					end: { line: this.declarationLine - 1, character: this.declarationChar + this.name.text.length }
				}, newName)
			);
		}

		for (let alias of this.aliases) {
			if (alias.text === original) {
				edits.add(
					this.declarationFile.uri.toString(),
					TextEdit.replace({
						start: { line: this.declarationLine - 1, character: alias.charPos },
						end: { line: this.declarationLine - 1, character: alias.charPos + alias.text.length }
					}, newName)
				);
			}
		}

		for (let ref of this.references) {
			if (ref.refName === original) {
				edits.add(
					ref.file.uri.toString(),
					TextEdit.replace({
						start: { line: ref.line - 1, character: ref.char },
						end: { line: ref.line - 1, character: ref.endChar }
					}, newName)
				);
			}
		}

		return edits;
	}
}

export type ParseState = {
	program: ProgramContext;
	lexer: LeviathonLexer;
	parser: LeviathonParser;
	stream: CommonTokenStream;
}

export enum ImportType {
	Library,
	Actions
}

export type Import = {
	type: ImportType;
	uri: URI | undefined;
	name: string;
	declarationLine: number;
	importedFile: NackFile | undefined;
}

export type NodeReference = {
	file: NackFile;
	line: number;
	char: number;
	endChar: number;
	refName: string;
}

export class AliasDecl {
	public text: string = '';
	public charPos: number = -1;

	public toString(): string {
		return this.text;
	}
}

export class NackFile implements IFile {
	public uri: URI;
	public nodes: Node[] = [];
	public importMap: Map<string, Import> = new Map<string, Import>();
	public lastParseState?: ParseState;

	constructor(uri: URI) {
		this.uri = uri;
	}

	public get length(): number {
		return this.nodes.length;
	}

	public get(index: number): Node {
		return this.nodes[index];
	}

	public add(node: Node): void {
		this.nodes.push(node);
	}

	public findByName(name: string, exclude: Node | undefined = undefined): Node | undefined {
		return this.nodes.find(node => (exclude ? exclude !== node : true) && node.hasName(name));
	}

	public findById(id: number): Node | undefined {
		return this.nodes.find(node => node.id === id);
	}

	public findByIndex(index: number): Node | undefined {
		return this.nodes.find(node => node.index === index);
	}

	public findByPosition(pos: Position): Node | undefined {
		return this.nodes.find(node => node.declarationLine - 1 == pos.line);
	}

	public clear(): void {
		this.nodes = [];
		this.importMap.clear();
	}

	// Node references are stored on the target node, which may live in a different NackFile
	// (resolved through an import). clear() only drops this file's own nodes, so references
	// this file contributed to *other* files' nodes must be purged here before re-parsing.
	public clearReferencesFrom(file: IFile): void {
		const uri = file.uri.toString();
		for (const node of this.nodes) {
			node.references = node.references.filter(ref => ref.file.uri.toString() !== uri);
		}
	}

	public empty(): boolean {
		return this.nodes.length === 0 && this.importMap.size === 0;
	}
}
