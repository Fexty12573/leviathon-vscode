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
}