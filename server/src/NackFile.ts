import { URI } from 'vscode-uri';
import { ProgramContext, LeviathonParser } from './parser/LeviathonParser';
import { LeviathonLexer } from './parser/LeviathonLexer';
import { CommonTokenStream } from 'antlr4ts';
import { Position, TextEdit } from 'vscode-languageserver';

export class Node {
	public name: AliasDecl = { text: '', charPos: -1 };
	public aliases: AliasDecl[] = [];
	public index = -1;
	public id = -1;
	public declarationLine = -1;
	public declarationChar = -1;
	public references: NodeReference[] = [];

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

	public rename(pos: Position, newName: string): TextEdit[] {
		const original = this.getAliasByPosition(pos);
		if (!original) {
			return [];
		}

		let edits: TextEdit[] = [];

		for (let ref of this.references) {
			if (ref.refName === original) {
				edits.push(TextEdit.replace({
					start: { line: ref.line, character: ref.char },
					end: { line: ref.line, character: ref.endChar }
				}, newName));
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

export class NackFile {
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
		return this.nodes.find(node => node.declarationLine == pos.line);
	}

	public clear(): void {
		this.nodes = [];
		this.importMap.clear();
	}

	public empty(): boolean {
		return this.nodes.length === 0 && this.importMap.size === 0;
	}
}
