import * as nack from './parser/LeviathonParser';
import { ProgramContext } from './parser/LeviathonParser';
import { CommonTokenStream, CharStreams, ConsoleErrorListener } from 'antlr4ts';

import { Diagnostic } from 'vscode-languageserver/node';
import { URI } from 'vscode-uri';
import { Token } from 'antlr4ts';
import { NackFile, Node } from './NackFile';
import { FandFile } from './FandFile';
import { LanguageServer } from './LanguageServer';
import { LeviathonLexer } from './parser/LeviathonLexer';
import * as fs from 'fs';


export class LeviathonImportMapBuilder {
	private nackFiles: NackFile[] = [];
	private fandFile: FandFile;

	constructor(nackFiles: NackFile[], fandFile: FandFile) {
		this.nackFiles = nackFiles;
		this.fandFile = fandFile;
	}

	public build(): NackFile[] {
		for (const nackFile of this.nackFiles) {
			this.buildImports(nackFile);
		}

		return this.nackFiles;
	}

	private buildImports(nackFile: NackFile) {
		const contents = fs.readFileSync(nackFile.uri.fsPath, 'utf8');
		const lexer = new LeviathonLexer(CharStreams.fromString(contents));
		const tokenStream = new CommonTokenStream(lexer);
		const parser = new nack.LeviathonParser(tokenStream);

		parser.removeErrorListeners();
		parser.addErrorListener(ConsoleErrorListener.INSTANCE);

		const tree: ProgramContext = parser.program();

		for (const importAny of tree.importany()) {
			//
		}
	}
}
