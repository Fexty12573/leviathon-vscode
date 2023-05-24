import { DiagnosticHandler } from './LeviathonVisitorImpl';
import * as fext from './parser/f-ext/FextyParser';
import { FileContext } from './parser/f-ext/FextyParser';
import { FextyVisitor } from './parser/f-ext/FextyVisitor';
import { FextyLexer } from './parser/f-ext/FextyLexer';
import { FextyFile, FextyInlineRule, FextyRule } from './FextyFile';
import { URI, Utils } from 'vscode-uri';
import * as fs from 'fs';
import * as Path from 'path';

import { Diagnostic, DiagnosticSeverity } from 'vscode-languageserver/node';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ANTLRErrorListener, RecognitionException, Recognizer, Token, CommonTokenStream, ConsoleErrorListener, CharStreams } from 'antlr4ts';
import { LanguageServer } from './LanguageServer';


export function validateFextyFile(path: string): [FextyFile, Diagnostic[]] {
    const diagnostics: Diagnostic[] = [];

	const listener = new FextyErrorListener((diagnostic: Diagnostic) => {
		diagnostics.push(diagnostic);
	});

	const lexer = new FextyLexer(CharStreams.fromString(fs.readFileSync(path, 'utf8')));

	lexer.removeErrorListener(ConsoleErrorListener.INSTANCE);
	lexer.addErrorListener(listener);

	const tokenStream = new CommonTokenStream(lexer);
	const parser = new fext.FextyParser(tokenStream);

	parser.removeErrorListener(ConsoleErrorListener.INSTANCE);
	parser.addErrorListener(listener);

	const uri = URI.file(path);
	const tree: FileContext = parser.file();
	const visitor = new FextyVisitorImpl(uri, (diagnostic) => { diagnostics.push(diagnostic); });

	const result = visitor.visitFile(tree);
	result.lastParseState = tree;
	return [result, diagnostics];
}

export class FextyErrorListener implements ANTLRErrorListener<any> {
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

export class FextyVisitorImpl extends AbstractParseTreeVisitor<FextyFile> implements FextyVisitor<FextyFile> {
    private handler: DiagnosticHandler;
	private file: FextyFile;

    constructor(uri: URI, handler: DiagnosticHandler) {
		super();
		this.handler = handler;
		this.file = new FextyFile();
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

    visitFile(ctx: fext.FileContext): FextyFile {
        for (const extension of ctx.f_extension()) {
            const result = this.visitF_extension(extension);
            if (result) {
                this.file.rules.set(result[0], result[1]);
            }
        }

        return this.file;
    }

    visitF_extension(ctx: fext.F_extensionContext): any {
        if (ctx.fexty_inline_rule()) {
            return this.visitFexty_inline_rule(ctx.fexty_inline_rule()!);
        } else if (ctx.fexty_rule()) {
            return this.visitFexty_rule(ctx.fexty_rule()!);
        }

        return undefined;
    }

    visitFexty_inline_rule(ctx: fext.Fexty_inline_ruleContext): any {
        const id = parseInt(ctx._id.text!);
		const func = visitFunction_component(ctx.function_component());
        const name = ctx.function_component().text;
        return [id, new FextyInlineRule(id, name)];
    }

	visitFunction_component(ctx: fext.Function_componentContext): any {
		
	}

    visitFexty_rule(ctx: fext.Fexty_ruleContext): any {

    }
}
