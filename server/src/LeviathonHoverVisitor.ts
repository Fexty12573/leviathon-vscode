import { LeviathonVisitor } from './parser/LeviathonVisitor';
import { ProgramContext } from './parser/LeviathonParser';
import { LeviathonValidator } from './LeviationValidator';
import { LanguageServer } from './LanguageServer';
import * as nack from './parser/LeviathonParser';

import { NackFile, Node } from './NackFile';
import { FandFile } from './FandFile';

import { TextDocument } from 'vscode-languageserver-textdocument';
import { Diagnostic } from 'vscode-languageserver/node';
import { URI, Utils } from 'vscode-uri';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { Token } from 'antlr4ts';
import * as fs from 'fs';


export class LeviathonHoverVisitor extends AbstractParseTreeVisitor<Diagnostic[]> implements LeviathonVisitor<Diagnostic[]> {
	private files: NackFile[];

	constructor(nackFiles: NackFile[]) {
		super();
		this.files = nackFiles;
	}

	public defaultResult(): Diagnostic[] {
		return [];
	}

	visit(ctx: ProgramContext): Diagnostic[] {
		for (const importAny of ctx.importany()) {
			//
		}

		return [];
	}
}
