import { ImportType, NackFile, Node } from './NackFile';
import { CodeCompletionCore } from 'antlr4-c3';
import { CompletionItem, CompletionItemKind, Location, Position, Range } from 'vscode-languageserver';
import { LeviathonValidator } from './LeviationValidator';
import { TextDocument } from 'vscode-languageserver-textdocument';
import * as fs from 'fs';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { ParseTree } from 'antlr4ts/tree/ParseTree';
import { LeviathonParser } from './parser/LeviathonParser';
import * as nack from './parser/LeviathonParser';
import { FandFile } from './FandFile';
import { LanguageServer } from './LanguageServer';
import { ErrorNode } from 'antlr4ts/tree/ErrorNode';

import MetaValues from './MetaValues.json';
import Directives from './Directives.json';

export type TokenPosition = {
	index: number;
	context: ParseTree;
};

export class LeviathonUtility {
	public static INSTANCE: LeviathonUtility;

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
		LeviathonParser.CALL_OP,
		LeviathonParser.EQ,
		LeviathonParser.NE,
		LeviathonParser.LT,
		LeviathonParser.LEQ,
		LeviathonParser.GT,
		LeviathonParser.GEQ,
		LeviathonParser.INCREMENT,
		LeviathonParser.RESET_VAL,
		LeviathonParser.USELESS_OP,
		LeviathonParser.COLON,
		LeviathonParser.COMMA,
		LeviathonParser.DOT,
		LeviathonParser.HASH,
		LeviathonParser.ALIAS_OP,
		LeviathonParser.QUOTE
	]);
	private preferredRules = new Set([
		LeviathonParser.RULE_import_name,
		LeviathonParser.RULE_node_name,
		LeviathonParser.RULE_action_name,
		LeviathonParser.RULE_monster_name,
		LeviathonParser.RULE_function_name,
		LeviathonParser.RULE_meta_name,
		LeviathonParser.RULE_import_alias,
		LeviathonParser.RULE_monster_alias,
		LeviathonParser.RULE_directive_statement
	]);

	public static get(): LeviathonUtility {
		return LeviathonUtility.INSTANCE;
	}

	public getCompletions(position: Position, files: NackFile[], currentFileIdx: number, fandFile: FandFile | undefined): CompletionItem[] {
		const completions: CompletionItem[] = [];
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
		
		LanguageServer.logMessage("Computing completion items, context type: " + pos.context.constructor.name);
		if (pos.context instanceof ErrorNode) {
			LanguageServer.logMessage("Error Node, parent: " + pos.context.parent?.constructor.name ?? "null");

			if (pos.context.parent instanceof nack.Node_call_statementContext) {
				const ctx = pos.context.parent;
				const text = ctx.text;
				const match = text.match(/>>([A-Za-z_][A-Za-z0-9_']*)\./);
				if (match && fandFile) {
					const importName = match[1];
					const importFile = this.getNackFileFromImportAlias(importName, file, files, fandFile);
					if (importFile) {
						importFile.nodes.forEach(n => {
							completions.push({
								label: n.name,
								kind: CompletionItemKind.Function
							});
						});
					} else {
						LanguageServer.logMessage("Could not find import file for alias " + importName);
					}
				} else if (ctx.node_call()) {
					file.nodes.forEach(n => {
						completions.push({
							label: n.name,
							kind: CompletionItemKind.Function
						});
					});
				} else {
					if (ctx.scoped_raw_node_call()) {
						LanguageServer.logMessage("Scoped raw node call");
					} else if (ctx.raw_node_call()) {
						LanguageServer.logMessage("Raw node call");
					} else {
						LanguageServer.logMessage("Unknown node call type '" + ctx.text + "'");
					}
				}
			} else if (pos.context.parent instanceof nack.Action_statementContext) {
				// TODO: Check for regex like above and provide action completions
			}
		}

		const core = new CodeCompletionCore(file.lastParseState!.parser);
		core.ignoredTokens = this.ignoredTokens;
		core.preferredRules = this.preferredRules;

		const candidates = core.collectCandidates(pos.index);

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
						if (pos.context.parent instanceof nack.Segtype_nodeContext) {
							const ctx = pos.context.parent as nack.Segtype_nodeContext;
							if (!ctx.node_call_statement().scoped_node_call()) {
								break;
							}

							const source = this.getNackFileFromImportAlias(
								ctx.node_call_statement().scoped_node_call()!.import_alias().text, 
								file, files, fandFile
							);

							if (!source) {
								break;
							}

							source.nodes.forEach(n => {
								completions.push({
									label: n.name,
									kind: CompletionItemKind.Function
								});
							});
						}
					}

					file.nodes.forEach(n => {
						completions.push({
							label: n.name,
							kind: CompletionItemKind.Function
						});
					});
					break;
				case LeviathonParser.RULE_meta_name:
					for (const name of MetaValues) {
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
				case LeviathonParser.RULE_directive_statement:
					for (const name of Directives) {
						completions.push({
							label: name,
							kind: CompletionItemKind.Keyword
						});
					}
					break;
				default: break;
			}
		}

		return completions;
	}

	public getDefinition(location: Position, files: NackFile[], currentFileIdx: number, fandFile: FandFile | undefined): Location[] {
		const toLocation = (node: Node, sourceFile: NackFile): Location => {
			return {
				uri: sourceFile.uri.toString(),
				range: {
					start: {
						line: node.declarationLine - 1,
						character: node.declarationChar
					},
					end: {
						line: node.declarationLine - 1,
						character: node.declarationChar + node.name.length
					}
				}
			};
		};

		const file = files[currentFileIdx];
		if (!file.lastParseState) {
			LanguageServer.logMessage("Parsing file for completions");
			LeviathonValidator.get().validate(
				TextDocument.create(file.uri.toString(), 'leviathon', 0, fs.readFileSync(file.uri.fsPath).toString())
			);
		}

		const pos = this.computeTokenPosition(file.lastParseState!.program, location);
		if (pos.index < 0) {
			LanguageServer.logMessage("No token found at position");
			return [];
		}

		LanguageServer.logMessage(`Found token ${pos.context.constructor.name} at index ${pos.index}: '${pos.context.text}'`);
		let parent = pos.context.parent ?? pos.context;
		let tokenType = LeviathonParser.RULE_nop_statement;

		while (parent.parent) {
			parent = parent.parent;
			if (parent instanceof nack.Node_nameContext) {
				tokenType = LeviathonParser.RULE_node_name;
				break;
			} else if (parent instanceof nack.Import_nameContext) {
				tokenType = LeviathonParser.RULE_import_name;
				break;
			} else if (parent instanceof nack.Import_aliasContext) {
				tokenType = LeviathonParser.RULE_import_alias;
				break;
			} else if (parent instanceof nack.Monster_aliasContext) {
				tokenType = LeviathonParser.RULE_monster_alias;
				break;
			} else if (parent instanceof nack.Import_pathContext) {
				tokenType = LeviathonParser.RULE_import_path;
				break;
			} else if (parent instanceof nack.Register_statementContext) {
				tokenType = LeviathonParser.RULE_register_statement;
				break;
			} else if (parent instanceof nack.Register_conditionContext) {
				tokenType = LeviathonParser.RULE_register_condition;
				break;
			}
		}

		switch (tokenType) {
			case LeviathonParser.RULE_node_name: {
				const ctx = parent as nack.Node_nameContext;
				if (ctx.parent instanceof nack.Node_callContext) {
					const nodeCall = ctx.parent as nack.Node_callContext;
					const nodeName = nodeCall.node_name().text;

					const node = file.findByName(nodeName);
					if (node) {
						return [toLocation(node, file)];
					}
				} else if (ctx.parent instanceof nack.Scoped_node_callContext) {
					const nodeCall = ctx.parent as nack.Scoped_node_callContext;
					const nodeName = nodeCall.node_name().text;
					const importAlias = nodeCall.import_alias().text;

					if (fandFile) {
						const source = this.getNackFileFromImportAlias(importAlias, file, files, fandFile);
						if (!source) {
							return [];
						}

						const def = source.findByName(nodeName);
						if (!def) {
							return [];
						}

						return [toLocation(def, source)];
					} else {
						const mapping = file.importMap.get(importAlias);
						if (mapping && mapping.uri) {
							const source = files.find(f => f.uri.toString() === mapping.uri!.toString());
							if (!source) {
								return [];
							}

							const def = source.findByName(nodeName);
							if (!def) {
								return [];
							}

							return [toLocation(def, source)];
						}
					}
				}
				break;
			}
			case LeviathonParser.RULE_import_name: {
				const ctx = parent as nack.Import_nameContext;
				const importName = ctx.text;

				if (fandFile) {
					const source = this.getNackFileFromImportName(importName, file, files, fandFile);
					if (source) {
						return [{ 
							uri: source.uri.toString(), 
							range: Range.create(0, 0, 0, 0) 
						}];
					}
				}
				break;
			}
			case LeviathonParser.RULE_import_alias: {
				const ctx = parent as nack.Import_aliasContext;
				const importAlias = ctx.text;

				if (fandFile) {
					const source = this.getNackFileFromImportAlias(importAlias, file, files, fandFile);
					if (source) {
						return [{ 
							uri: source.uri.toString(), 
							range: Range.create(0, 0, 0, 0) 
						}];
					}
				} else {
					const mapping = file.importMap.get(importAlias);
					if (mapping && mapping.uri) {
						return [{ uri: mapping.uri.toString(), range: Range.create(0, 0, 0, 0) }];
					}
				}
				break;
			}
			case LeviathonParser.RULE_monster_alias: {
				const ctx = parent as nack.Monster_aliasContext;
				const monsterAlias = ctx.text;
				const _import = file.importMap.get(monsterAlias);
				if (_import && _import.type == ImportType.Actions) {
					return [{ 
						uri: file.uri.toString(), 
						range: Range.create(_import.declarationLine - 1, 0, _import.declarationLine - 1, 0) 
					}];
				}

				break;
			}
			case LeviathonParser.RULE_import_path: {
				break;
			}
			case LeviathonParser.RULE_register_statement: {
				if (!fandFile) {
					return [];
				}

				LanguageServer.logMessage("register statement");

				const ctx = parent as nack.Register_statementContext;
				const registerName = ctx._operand.text ?? '$';
				if (registerName[0] === '$') {
					LanguageServer.logMessage("Can't find register definition for " + registerName);
					return [];
				}

				const register = fandFile.registerMap.get(registerName);
				if (!register) {
					LanguageServer.logMessage("Register not found: " + registerName);
					return [];
				}

				return [{ uri: fandFile.uri.toString(), range: Range.create(register.declarationLine - 1, 0, register.declarationLine - 1, 0) }];
			}

			default: break;
		}

		// const ctx = parent as nack.Node_call_statementContext;
		// if (ctx.node_call()) {
		// 	const name = ctx.node_call()!.node_name().text;
		// 	const def = file.nodes.find(n => n.name === name);
		// 	if (def) {
		// 		return [toLocation(def, file)];
		// 	}
		// } else if (ctx.scoped_node_call()) {
		// 	const name = ctx.scoped_node_call()!.node_name().text;
		// 	const alias = ctx.scoped_node_call()!.import_alias().text;
		// 	if (fandFile) {
		// 		const source = this.getNackFileFromImportAlias(alias, file, files, fandFile);
		// 		if (!source) {
		// 			return [];
		// 		}

		// 		const def = source.findByName(name);
		// 		if (!def) {
		// 			return [];
		// 		}

		// 		return [toLocation(def, source)];
		// 	} else {
		// 		const mapping = file.importMap.get(alias);
		// 		if (mapping && mapping[1]) {
		// 			const source = files.find(f => f.uri.toString() === mapping[1]?.toString());
		// 			if (!source) {
		// 				return [];
		// 			}

		// 			const def = source.findByName(name);
		// 			if (!def) {
		// 				return [];
		// 			}

		// 			return [toLocation(def, source)];
		// 		}
		// 	}
		// } else if (ctx.raw_node_call()) {
		// 	const idx = parseInt(ctx.raw_node_call()!._call.text?.substring(5) ?? 'NaN');
		// 	if (isNaN(idx)) {
		// 		return [];
		// 	}

		// 	const def = file.findByIndex(idx);
		// 	if (!def) {
		// 		return [];
		// 	}

		// 	return [toLocation(def, file)];
		// } else if (ctx.scoped_raw_node_call()) {
		// 	const alias = ctx.scoped_raw_node_call()!.import_alias().text;
		// 	const id = parseInt(ctx.scoped_raw_node_call()!._node_id.text?.substring(1) ?? 'NaN');
		// 	if (isNaN(id)) {
		// 		return [];
		// 	}

		// 	if (fandFile) {
		// 		const source = this.getNackFileFromImportAlias(alias, file, files, fandFile);
		// 		if (!source) {
		// 			return [];
		// 		}

		// 		const def = source.findById(id);
		// 		if (!def) {
		// 			return [];
		// 		}

		// 		return [toLocation(def, source)];
		// 	} else {
		// 		const mapping = file.importMap.get(alias);
		// 		if (mapping && mapping[1]) {
		// 			const source = files.find(f => f.uri.toString() === mapping[1]?.toString());
		// 			if (!source) {
		// 				return [];
		// 			}

		// 			const def = source.findById(id);
		// 			if (!def) {
		// 				return [];
		// 			}

		// 			return [toLocation(def, source)];
		// 		}
		// 	}
		// }

		return [];
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

	private computeTokenPositionFromLocation(tree: ParseTree, location: Location): TokenPosition {
		if (tree instanceof TerminalNode) {
			return this.computeTokenPositionOfTerminalNodeFromLocation(tree, location);
		} else {
			return this.computeTokenPositionOfChildNodeFromLocation(tree, location);
		}
	}

	private computeTokenPositionOfTerminalNodeFromLocation(node: TerminalNode, location: Location): TokenPosition {
		if (node.symbol.line == location.range.start.line + 1 && node.symbol.charPositionInLine == location.range.start.character) {
			return { index: node.symbol.tokenIndex, context: node };
		} else {
			return { index: -1, context: node };
		}
	}

	private computeTokenPositionOfChildNodeFromLocation(tree: ParseTree, location: Location): TokenPosition {
		for (let i = 0; i < tree.childCount; ++i) {
			const pos = this.computeTokenPositionFromLocation(tree.getChild(i), location);
			if (pos.index >= 0) {
				return pos;
			}
		}
		
		return { index: -1, context: tree };
	}

	private getNackFileFromImportAlias(alias: string, file: NackFile, files: NackFile[], fandFile: FandFile): NackFile | undefined {
		const mappedName = file.importMap.get(alias);
		if (!mappedName) {
			return undefined;
		}

		const thk = fandFile.thkMap.get(mappedName.name);
		if (!thk) {
			return undefined;
		}

		return files.find(f => f.uri.toString() == thk.toString());
	}

	private getNackFileFromImportName(name: string, file: NackFile, files: NackFile[], fandFile: FandFile): NackFile | undefined {
		const thk = fandFile.thkMap.get(name);
		if (!thk) {
			return undefined;
		}

		return files.find(f => f.uri.toString() == thk.toString());
	}
}
