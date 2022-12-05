import { URI } from 'vscode-uri';

export class FandFile {
	public thkMap: Map<string, URI> = new Map<string, URI>();
	public registerMap: Map<string, string> = new Map<string, string>();
}