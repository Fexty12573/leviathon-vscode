import { URI } from 'vscode-uri';
import { ProjectContext } from './parser/fand/FandParser';

export type RegisterAlias = {
	alias: string;
	register: string;
	declarationLine: number;
}

export class FandFile {
	public uri: URI;

	public thkMap: Map<string, URI> = new Map<string, URI>();
	public registerMap: Map<string, RegisterAlias> = new Map<string, RegisterAlias>();
	public lastParseState?: ProjectContext;

	public constructor(uri: URI) {
		this.uri = uri;
	}
}