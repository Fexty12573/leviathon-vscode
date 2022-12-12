import { NackFile } from './NackFile';
import { CodeCompletionCore } from 'antlr4-c3';
import { CompletionItem, CompletionItemKind, Position } from 'vscode-languageserver';
import { LeviathonValidator } from './LeviationValidator';
import { TextDocument } from 'vscode-languageserver-textdocument';
import * as fs from 'fs';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { ParseTree } from 'antlr4ts/tree/ParseTree';
import { LeviathonParser } from './parser/LeviathonParser';
import * as nack from './parser/LeviathonParser';
import { FandFile } from './FandFile';
import MetaValues from './MetaValues.json';
import { LanguageServer } from './LanguageServer';

export type TokenPosition = {
	index: number;
	context: ParseTree;
};

export class LeviathonCodeCompletion {
	public static INSTANCE: LeviathonCodeCompletion;

	private ignoredTokens = new Set([
		LeviathonParser.WS,
		LeviathonParser.LINESKIP,
		LeviathonParser.LEFT_PAREN,
		LeviathonParser.RIGHT_PAREN,
		LeviathonParser.LEFT_BRACKET,
		LeviathonParser.RIGHT_BRACKET,
		LeviathonParser.DIRECTIVE_OP,
		LeviathonParser.META_OP,
		LeviathonParser.ACTION_OP,
		LeviathonParser.CALL_OP
	]);
	private preferredRules = new Set([
		LeviathonParser.RULE_import_name,
		LeviathonParser.RULE_node_name,
		LeviathonParser.RULE_action_name,
		LeviathonParser.RULE_monster_name,
		LeviathonParser.RULE_function_name,
		LeviathonParser.RULE_meta_name,
		LeviathonParser.RULE_import_alias,
		LeviathonParser.RULE_monster_alias
	]);

	public static get(): LeviathonCodeCompletion {
		return LeviathonCodeCompletion.INSTANCE;
	}

	public getCompletions(position: Position, files: NackFile[], currentFileIdx: number, fandFile: FandFile | undefined): CompletionItem[] {
		const file = files[currentFileIdx];
		if (!file.lastParseState) {
			LanguageServer.logMessage("Parsing file for completions");
			LeviathonValidator.get().validate(
				TextDocument.create(file.uri.toString(), 'leviathon', 0, fs.readFileSync(file.uri.fsPath).toString())
			);
		}

		LanguageServer.logMessage("Computing token position");
		const pos = this.computeTokenPosition(file.lastParseState!.program, position);
		if (pos.index < 0) {
			LanguageServer.logMessage("No token found at position");
			return [];
		}
		
		LanguageServer.logMessage("Computing completion items, token rule " + typeof pos.context ?? undefined);
		const core = new CodeCompletionCore(file.lastParseState!.parser);
		core.ignoredTokens = this.ignoredTokens;
		core.preferredRules = this.preferredRules;

		const candidates = core.collectCandidates(pos.index);

		const completions: CompletionItem[] = [];
		candidates.tokens.forEach((_, k) => {
			completions.push({
				label: file.lastParseState!.parser.vocabulary.getSymbolicName(k)!.toLowerCase(),
				kind: CompletionItemKind.Keyword
			});
		});

		for (const rule of candidates.rules.keys()) {
			LanguageServer.logMessage(`Found rule ${file.lastParseState!.parser.ruleNames[rule]}`);
			switch (rule) {
				case LeviathonParser.RULE_import_name:
					if (fandFile) {
						fandFile.thkMap.forEach((_, name) => {
							completions.push({
								label: name,
								kind: CompletionItemKind.Module
							});
						});
					}
					break;
				case LeviathonParser.RULE_node_name:
					if (fandFile) {
						const ctx = pos.context.parent as nack.Segtype_nodeContext;
						const thk = fandFile.thkMap.get(ctx.node_call_statement().scoped_node_call()?.import_alias().text ?? '');
						if (thk) {
							const uri = thk.toString();
							const source = files.find(f => f.uri.toString() === uri);
							if (source) {
								source.nodes.forEach(n => {
									completions.push({
										label: n.name,
										kind: CompletionItemKind.Function
									});
								});
							}
						} else {
							file.nodes.forEach(n => {
								completions.push({
									label: n.name,
									kind: CompletionItemKind.Function
								});
							});
						}
					}
					break;
				case LeviathonParser.RULE_meta_name:
					for (const name in MetaValues) {
						completions.push({
							label: name,
							kind: CompletionItemKind.Property
						});
					}
					break;
				case LeviathonParser.RULE_import_alias:
					file.importMap.forEach((_, name) => {
						completions.push({
							label: name,
							kind: CompletionItemKind.Module
						});
					});
					break;
				case LeviathonParser.RULE_monster_alias:
					file.importMap.forEach((_, name) => {
						completions.push({
							label: name,
							kind: CompletionItemKind.Class
						});
					});
					break;
				default: break;
			}
		}

		return completions;
	}

	private computeTokenPosition(tree: ParseTree, position: Position): TokenPosition {
		if (tree instanceof TerminalNode) {
			return this.computeTokenPositionOfTerminalNode(tree, position);
		} else {
			return this.computeTokenPositionOfChildNode(tree, position);
		}
	}

	private computeTokenPositionOfTerminalNode(node: TerminalNode, position: Position): TokenPosition {
		const start = node.symbol.charPositionInLine;
		const end = start + node.text.length;
		if (node.symbol.line == position.line + 1 && start <= position.character && position.character <= end) {
			return { index: node.symbol.tokenIndex, context: node };
		} else {
			return { index: -1, context: node };
		}
	}

	private computeTokenPositionOfChildNode(tree: ParseTree, position: Position): TokenPosition {
		for (let i = 0; i < tree.childCount; ++i) {
			const pos = this.computeTokenPosition(tree.getChild(i), position);
			if (pos.index >= 0) {
				return pos;
			}
		}

		return { index: -1, context: tree };
	}
}
