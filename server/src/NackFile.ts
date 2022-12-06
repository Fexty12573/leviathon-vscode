import { URI } from 'vscode-uri';
import { ProgramContext, LeviathonParser } from './parser/LeviathonParser';
import { LeviathonLexer } from './parser/LeviathonLexer';
import { CommonTokenStream } from 'antlr4ts';

export class Node {
	public name = '';
	public aliases: string[] = [];
	public index = -1;
	public id = -1;
	public declarationLine = -1;
	public declarationChar = -1;

	hasName(name: string): boolean {
		return this.name === name || this.aliases.includes(name);
	}

	matches(node: Node): boolean {
		return this.hasName(node.name);
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

	public clear(): void {
		this.nodes = [];
		this.importMap.clear();
	}

	public empty(): boolean {
		return this.nodes.length === 0 && this.importMap.size === 0;
	}
}
