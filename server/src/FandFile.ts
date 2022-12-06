import { URI } from 'vscode-uri';

export type RegisterAlias = {
	alias: string;
	register: string;
	declarationLine: number;
}

export class FandFile {
	public uri: URI;

	public thkMap: Map<string, URI> = new Map<string, URI>();
	public registerMap: Map<string, RegisterAlias> = new Map<string, RegisterAlias>();

	public constructor(uri: URI) {
		this.uri = uri;
	}
}