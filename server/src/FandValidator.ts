import { DiagnosticHandler } from './LeviathonVisitorImpl';
import * as fand from './parser/fand/FandParser';
import {  ProjectContext } from './parser/fand/FandParser';
import { FandVisitor } from './parser/fand/FandVisitor';
import { FandLexer } from './parser/fand/FandLexer';
import { FandFile } from './FandFile';
import { URI, Utils } from 'vscode-uri';
import * as fs from 'fs';
import * as Path from 'path';

import { Diagnostic, DiagnosticSeverity } from 'vscode-languageserver/node';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ANTLRErrorListener, RecognitionException, Recognizer, Token, CommonTokenStream, ConsoleErrorListener, CharStreams } from 'antlr4ts';
import { LanguageServer } from './LanguageServer';

export function validateFandFile(path: string): [FandFile, Diagnostic[]] {
	const diagnostics: Diagnostic[] = [];

	const listener = new FandErrorListener((diagnostic: Diagnostic) => {
		diagnostics.push(diagnostic);
	});

	const lexer = new FandLexer(CharStreams.fromString(fs.readFileSync(path, 'utf8')));

	lexer.removeErrorListener(ConsoleErrorListener.INSTANCE);
	lexer.addErrorListener(listener);

	const tokenStream = new CommonTokenStream(lexer);
	const parser = new fand.FandParser(tokenStream);

	parser.removeErrorListener(ConsoleErrorListener.INSTANCE);
	parser.addErrorListener(listener);

	const uri = URI.file(path);
	const tree: ProjectContext = parser.project();
	const visitor = new FandVisitorImpl(uri, (diagnostic) => { diagnostics.push(diagnostic); });

	return [visitor.visitProject(tree), diagnostics];
}

export class FandErrorListener implements ANTLRErrorListener<any> {
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

export class FandVisitorImpl extends AbstractParseTreeVisitor<void> implements FandVisitor<void> {
	private handler: DiagnosticHandler;
	private file: FandFile;
	private rootDir: string;

	constructor(uri: URI, handler: DiagnosticHandler) {
		super();
		this.handler = handler;
		this.file = new FandFile(uri);
		this.rootDir = URI.parse(LanguageServer.get().RootFolder.uri).fsPath;
		LanguageServer.logMessage('Project root dir: ' + this.rootDir);
	}

	private reportError(token: Token, line: number, column: number, msg: string): void {
		this.handler({
			severity: 1,
			range: {
				start: { line: line - 1, character: column },
				end: { line: line - 1, character: column + token.text!.length }
			},
			message: msg,
			source: 'Leviathon'
		});
	}

	protected defaultResult(): any {
		return 0;
	}

	visitProject(ctx: ProjectContext): FandFile {
		for (const line of ctx.fand_line()) {
			this.visitFand_line(line);
		}
		
		return this.file;
	}

	visitFand_line(ctx: fand.Fand_lineContext): any {
		if (ctx.at_path()) {
			this.visitAt_path(ctx.at_path()!);
		} else if (ctx.through_path()) {
			this.visitThrough_path(ctx.through_path()!);
			return;
		} else if (ctx.is_monster()) {
			this.visitIs_monster(ctx.is_monster()!);
			return;
		} else if (ctx.register_declaration()) {
			this.visitRegister_declaration(ctx.register_declaration()!);
			return;
		} else if (ctx.thk_alias()) {
			this.visitThk_alias(ctx.thk_alias()!);
			return;
		} else if (ctx.has_entries()) {
			this.visitHas_entries(ctx.has_entries()!);
			return;
		} else {
			LanguageServer.logMessage(`Evaluating rule: unknown '${ctx.text}'`);
		}
	}

	visitAt_path(ctx: fand.At_pathContext): any {
		return null;
	}

	visitThrough_path(ctx: fand.Through_pathContext): any {
		return null;
	}

	visitIs_monster(ctx: fand.Is_monsterContext): any {
		return null;
	}

	visitRegister_declaration(ctx: fand.Register_declarationContext): any {
		const name = ctx._name.text!;
		const register = ctx._register_name ? ctx._register_name.text! : "__CompileTimeRegister";
		LanguageServer.logMessage('Register declaration: ' + name + ' -> ' + register);
		this.file.registerMap.set(name, {
			alias: name,
			register: register,
			declarationLine: ctx.start.line
		});
	}

	visitThk_alias(ctx: fand.Thk_aliasContext): any {
		const name = ctx._alias.text!;
		if (!ctx._file) {
			LanguageServer.logMessage(`Missing file for alias: ` + name);
			return;
		}

		const file = ctx._file.text!;
		this.file.thkMap.set(name, URI.file(Path.resolve(this.rootDir, file)));

		if (ctx._meta && ctx._meta.text) {
			const meta = ctx._meta.text;
			if (isNaN(parseInt(meta, 16))) {
				const token = (ctx._meta.HEX_NUMBER()?.symbol || ctx._meta.NUMBER()?.symbol || ctx._meta.ID()?.symbol)!;
				this.reportError(token, token.line, token.charPositionInLine, 'Invalid meta value: ' + meta + '. Must be a hexadecimal number.');
			}
		}
	}

	visitHas_entries(ctx: fand.Has_entriesContext): any {
		return null;
	}
}
