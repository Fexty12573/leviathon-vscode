import { LeviathonVisitorImpl, DiagnosticHandler } from './LeviathonVisitorImpl';
import { LeviathonLexer } from './parser/LeviathonLexer';
import { LeviathonParser, ProgramContext } from './parser/LeviathonParser';
import { CommonTokenStream, CharStreams, ConsoleErrorListener } from 'antlr4ts';
import { ANTLRErrorListener, RecognitionException, Recognizer, Token } from 'antlr4ts';
import { Diagnostic, DiagnosticSeverity, WorkspaceFolder } from 'vscode-languageserver/node';
import { TextDocument } from 'vscode-languageserver-textdocument';
import { NackFile, Node } from './NackFile';
import { FextyFile } from './FextyFile';
import { FandFile } from './FandFile';
import { validateFandFile } from './FandValidator';
import { URI, Utils } from 'vscode-uri';
import * as fs from 'fs';

import { LanguageServer } from './LanguageServer';

class LeviathonErrorListener implements ANTLRErrorListener<any> {
	private handler: DiagnosticHandler;

	constructor(handler: DiagnosticHandler) {
		this.handler = handler;
	}

	syntaxError<T>(
		recognizer: Recognizer<T, any>,
		offendingSymbol: T | undefined,
		line: number,
		charPositionInLine: number,
		msg: string,
		e: RecognitionException | undefined
	): void {
		if (offendingSymbol) {
			const token = offendingSymbol as unknown as Token;
			const stopIndex = offendingSymbol ? token.text!.length : 1;

			this.handler({
				severity: DiagnosticSeverity.Error,
				range: {
					start: { line: line - 1, character: charPositionInLine },
					end: { line: line - 1, character: charPositionInLine + stopIndex }
				},
				message: msg,
				source: 'Leviathon'
			});
		}
	}
}

export class LeviathonValidator {
	public static INSTANCE: LeviathonValidator;
	public static get(): LeviathonValidator {
		return LeviathonValidator.INSTANCE;
	}

	private folder: WorkspaceFolder;
	private documentCache: NackFile[] = [];
	private fandFile: FandFile | undefined = undefined;
	private fextyFile: FextyFile | undefined = undefined;

	constructor() {
		this.folder = LanguageServer.get().RootFolder;
		const path = URI.parse(this.folder.uri);
		LanguageServer.logMessage(`Root folder: ${path.fsPath}, URI: ${this.folder.uri}`);

		fs.readdir(path.fsPath, (err, files) => {
			for (const file of files) {
				const fullPath = Utils.joinPath(path, file).fsPath;
				LanguageServer.logMessage(`Found file: ${fullPath}`);
				if (file.endsWith('.fand')) {
					const [fandFile, diags] = validateFandFile(fullPath);
					this.fandFile = fandFile;

					if (diags.length > 0) {
						LanguageServer.get().Connection.sendDiagnostics({
							uri: URI.file(fullPath).toString(),
							diagnostics: diags
						});
					}
				} else if (file.endsWith('.nack')) {
					const uri = URI.file(fullPath);
					LanguageServer.logMessage(`Registering thk file with URI ${uri.toString()}`);
					this.documentCache.push(new NackFile(uri));
				}
			}
		});
	}

	public validate(document: TextDocument): Diagnostic[] {
		let diagnostics: Diagnostic[] = [];

		if (document.uri.endsWith('.fand')) {
			const [fandFile, diags] = validateFandFile(document.uri);
			this.fandFile = fandFile;
			diagnostics = diags;

		} else if (document.uri.endsWith('.fexty')) {
			// TODO: Validate Fexty file
		} else if (document.uri.endsWith('.nack')) {
			let index = this.documentCache.findIndex(file => file.uri.toString() === document.uri);
			if (index >= 0) {
				this.documentCache[index].clear();
			} else {
				this.documentCache.push(new NackFile(URI.parse(document.uri)));
				index = this.documentCache.length - 1;
			}

			const listener = new LeviathonErrorListener((diagnostic: Diagnostic) => {
				diagnostics.push(diagnostic);
			});

			const lexer = new LeviathonLexer(CharStreams.fromString(document.getText()));

			lexer.removeErrorListener(ConsoleErrorListener.INSTANCE);
			lexer.addErrorListener(listener);

			const tokenStream = new CommonTokenStream(lexer);
			const parser = new LeviathonParser(tokenStream);
			
			parser.removeErrorListener(ConsoleErrorListener.INSTANCE);
			parser.addErrorListener(listener);

			const tree: ProgramContext = parser.program();
			const visitor = new LeviathonVisitorImpl((diagnostic) => { 
				diagnostics.push(diagnostic); 
			}, this.documentCache, index, this.fandFile);

			this.documentCache[index].lastParseState = {
				lexer: lexer,
				parser: parser,
				program: tree,
				stream: tokenStream
			};

			visitor.visit(tree);
		}

		return diagnostics;
	}

	public getIndexOfNackFile(uri: string): number {
		return this.documentCache.findIndex(file => file.uri.toString() === uri);
	}

	public getFile(uri: string): NackFile | undefined {
		return this.documentCache.find(file => file.uri.toString() === uri);
	}

	public getFandFile(): FandFile | undefined {
		return this.fandFile;
	}

	public getNackFiles(): NackFile[] {
		return this.documentCache;
	}
}
