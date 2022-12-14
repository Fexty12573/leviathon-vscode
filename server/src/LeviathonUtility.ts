import { Import, ImportType, NackFile, Node } from './NackFile';
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
import { URI } from 'vscode-uri';

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
		LeviathonParser.QUOTE,
		LeviathonParser.RAW_CALL,
		LeviathonParser.SCOPED_RAW_CALL
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
				const match = text.match(/>> *([A-Za-z_][A-Za-z0-9_']*)\./);
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
						LanguageServer.logMessage("Parent ctx: " + pos.context.parent?.constructor.name ?? "null");
						if (pos.context.parent instanceof nack.Segtype_nodeContext) {
							const ctx = (pos.context.parent as nack.Segtype_nodeContext).node_call_statement();
							if (!ctx) {
								break;
							}

							if (ctx.node_call()) {
								LanguageServer.logMessage("Node call");
								file.nodes.forEach(n => {
									completions.push({
										label: n.name,
										kind: CompletionItemKind.Function
									});
								});
							} else if (ctx.scoped_node_call()) {
								LanguageServer.logMessage("Scoped node call");
								const source = this.getNackFileFromImportAlias(
									ctx.scoped_node_call()!.import_alias().text, 
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
							} else if (ctx.scoped_raw_node_call()) {
								LanguageServer.logMessage("Scoped raw node call");
							} else if (ctx.raw_node_call()) {
								LanguageServer.logMessage("Raw node call");
							} else {
								LanguageServer.logMessage("Unknown node call type '" + ctx.text + "'");

								if (ctx.text.endsWith(".")) {
									const alias = ctx.text.substring(2, ctx.text.length - 1);
									const source = this.getNackFileFromImportAlias(alias, file, files, fandFile);

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

							// source.nodes.forEach(n => {
							// 	completions.push({
							// 		label: n.name,
							// 		kind: CompletionItemKind.Function
							// 	});
							// });
						}
					} else {
						file.nodes.forEach(n => {
							completions.push({
								label: n.name,
								kind: CompletionItemKind.Function
							});
						});
					}

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
			} else if (parent instanceof nack.Raw_node_callContext) {
				tokenType = LeviathonParser.RULE_raw_node_call;
				break;
			} else if (parent instanceof nack.Scoped_raw_node_callContext) {
				tokenType = LeviathonParser.RULE_scoped_raw_node_call;
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
			case LeviathonParser.RULE_raw_node_call: {
				const ctx = parent as nack.Raw_node_callContext;
				const strIdx = ctx.call_literal().text?.substring(5) ?? "NaN"; // Skip "call#"
				const idx = parseInt(strIdx);
				if (isNaN(idx)) {
					LanguageServer.logMessage("Invalid call index: " + strIdx);
					return [];
				}

				const node = file.findByIndex(idx);
				if (!node) {
					LanguageServer.logMessage("Node not found: " + idx);
					return [];
				}

				return [toLocation(node, file)];
			}
			case LeviathonParser.RULE_scoped_raw_node_call: {
				const ctx = parent as nack.Scoped_raw_node_callContext;
				const sourceThk = ctx.import_alias().text;
				const _import = file.importMap.get(sourceThk);

				if (!_import) {
					LanguageServer.logMessage("Import not found: " + sourceThk);
					return [];
				}

				const strId = ctx.scoped_call_literal().text?.substring(1) ?? "NaN"; // Skip "#"
				const id = parseInt(strId);
				if (isNaN(id)) {
					LanguageServer.logMessage("Invalid call id: " + strId);
					return [];
				}

				const sourceFile = files.find(f => f.uri.toString() === _import.uri?.toString());
				const node = sourceFile?.findById(id);
				if (!node) {
					LanguageServer.logMessage("Node not found: " + id);
					return [];
				}

				return [toLocation(node, sourceFile!)];
			}

			default: break;
		}

		return [];
	}

	public getHoverInfo(location: Position, files: NackFile[], currentFileIdx: number, fandFile: FandFile | undefined): string | undefined {
		const file = files[currentFileIdx];

		if (!file.lastParseState) {
			LanguageServer.logMessage("Parsing file for hover info");
			LeviathonValidator.get().validate(
				TextDocument.create(file.uri.toString(), 'leviathon', 0, fs.readFileSync(file.uri.fsPath).toString())
			);
		}

		LanguageServer.logMessage("Computing token position");
		const pos = this.computeTokenPosition(file.lastParseState!.program, location);
		
		if (pos.index < 0) {
			return 'No hover info (Token not found)';
		}

		let token = pos.context.parent ?? pos.context;
		let tokenType = LeviathonParser.RULE_nop_statement;

		while (token.parent) {
			token = token.parent;
			if (token instanceof nack.Node_nameContext) {
				tokenType = LeviathonParser.RULE_node_name;
				break;
			} else if (token instanceof nack.Import_aliasContext) {
				tokenType = LeviathonParser.RULE_import_alias;
				break;
			} else if (token instanceof nack.Raw_node_callContext) {
				tokenType = LeviathonParser.RULE_raw_node_call;
				break;
			} else if (token instanceof nack.Scoped_raw_node_callContext) {
				tokenType = LeviathonParser.RULE_scoped_raw_node_call;
				break;
			} else if (token instanceof nack.Monster_aliasContext) {
				tokenType = LeviathonParser.RULE_monster_alias;
				break;
			} else if (token instanceof nack.Register_nameContext) {
				tokenType = LeviathonParser.RULE_register_name;
				break;
			}
		}

		LanguageServer.logMessage("Token type: " + tokenType);

		switch (tokenType) {
			case LeviathonParser.RULE_node_name: {
				const ctx = token as nack.Node_nameContext;
				const nodeName = ctx.text;
				if (ctx.parent instanceof nack.Node_callContext) {
					const node = file.findByName(nodeName);
					const identifier = fandFile ? this.getThkIdentifierFromUri(file.uri.toString(), fandFile) : undefined;
					
					if (node) {
						const aliases = node.aliases.length > 0 ? node.aliases.join(' & ') : undefined;
						LanguageServer.logMessage("Hover for node: " + node.name + (aliases ? " & " + aliases : ""));

						return this.formatNodeName(node, identifier);
					}
				} else if (ctx.parent instanceof nack.Node_declarationContext) {
					const node = file.findByName(nodeName);

					if (node) {
						LanguageServer.logMessage("Hover for node: " + node.name);
						return this.formatNodeName(node, undefined);
					}
					//
				} else if (ctx.parent instanceof nack.Scoped_node_callContext) {
					const parctx = ctx.parent as nack.Scoped_node_callContext;
					const scope = parctx.import_alias().text;
					const _import = file.importMap.get(scope);
					
					if (_import) {
						let containingFile: URI | undefined = undefined;
						if (_import.uri) {
							containingFile = _import.uri;
						} else if (fandFile) {
							containingFile = fandFile.thkMap.get(_import.name);
						}

						if (!containingFile) {
							LanguageServer.logMessage("File not found: " + _import.name);
							break;
						}

						const node = files.find(f => f.uri.toString() === containingFile!.toString())?.findByName(nodeName);
						if (node) {
							LanguageServer.logMessage("Hover for node: " + node.name);
							return this.formatNodeName(node, _import.name);
						}
					}
				}
				break;
			}
			case LeviathonParser.RULE_import_alias: {
				const ctx = token as nack.Import_aliasContext;
				const importAlias = ctx.text;
				const _import = file.importMap.get(importAlias);
				if (_import) {
					return this.formatImport(_import, importAlias);
				}

				break;
			}
			case LeviathonParser.RULE_monster_alias: {
				const ctx = token as nack.Monster_aliasContext;
				const monsterAlias = ctx.text;
				const _import = file.importMap.get(monsterAlias);
				if (_import) {
					return this.formatImport(_import, monsterAlias);
				}

				break;
			}
			case LeviathonParser.RULE_raw_node_call: {
				const ctx = token as nack.Raw_node_callContext;
				const strIdx = ctx.call_literal()._call.text?.substring(5) ?? 'NaN';
				const idx = parseInt(strIdx);
				if (isNaN(idx)) {
					break;
				}

				const node = file.findByIndex(idx);
				if (node) {
					LanguageServer.logMessage("Hover for node: " + node.name);
					return this.formatNodeName(node, undefined);
				}

				break;
			}
			case LeviathonParser.RULE_scoped_raw_node_call: {
				const ctx = token as nack.Scoped_raw_node_callContext;
				const scope = ctx.import_alias().text;
				const _import = file.importMap.get(scope);

				if (_import) {
					let containingFile: URI | undefined = undefined;
					if (_import.uri) {
						containingFile = _import.uri;
					} else if (fandFile) {
						containingFile = fandFile.thkMap.get(_import.name);
					}

					if (!containingFile) {
						LanguageServer.logMessage("File not found: " + _import.name);
						break;
					}

					const strId = ctx.scoped_call_literal()._call.text?.substring(1) ?? 'NaN';
					const id = parseInt(strId);
					if (isNaN(id)) {
						break;
					}

					const node = files.find(f => f.uri.toString() === containingFile!.toString())?.findById(id);
					if (node) {
						LanguageServer.logMessage("Hover for node: " + node.name);
						return this.formatNodeName(node, _import.name);
					}
				}

				break;
			}
			case LeviathonParser.RULE_register_name: {
				const ctx = token as nack.Register_nameContext;
				const registerName = ctx.text;

				if (registerName[0] === '$') {
					return `\`\`\`leviathon
Register: ${registerName}
\`\`\``;
				}
				
				if (fandFile) {
					const register = fandFile.registerMap.get(registerName);
					if (register) {
						const id = register.register !== '@CTR' ? " as " + register.register : "";
						return `\`\`\`thkl
Register ${register.alias}${id}
\`\`\``;
					}
				}

				break;
			}
			default: break;
		}

		return undefined;
	}

	public getReferences(location: Position, files: NackFile[], currentFileIdx: number, fandFile: FandFile | undefined, includeDecl: boolean): Location[] {
		const file = files[currentFileIdx];

		if (!file.lastParseState) {
			LanguageServer.logMessage("Parsing file for hover info");
			LeviathonValidator.get().validate(
				TextDocument.create(file.uri.toString(), 'leviathon', 0, fs.readFileSync(file.uri.fsPath).toString())
			);
		}

		const pos = this.computeTokenPosition(file.lastParseState!.program, location);
		if (pos.index < 0) {
			LanguageServer.logMessage("No token found");
			return [];
		}

		let token = pos.context.parent ?? pos.context;
		let tokenType = LeviathonParser.RULE_nop_statement;

		while (token.parent) {
			token = token.parent;
			if (token instanceof nack.Import_aliasContext) {
				tokenType = LeviathonParser.RULE_import_alias;
				break;
			} else if (token instanceof nack.Monster_aliasContext) {
				tokenType = LeviathonParser.RULE_monster_alias;
				break;
			} else if (token instanceof nack.Import_nameContext) {
				tokenType = LeviathonParser.RULE_import_name;
				break;
			} else if (token instanceof nack.Monster_nameContext) {
				tokenType = LeviathonParser.RULE_monster_name;
				break;
			} else if (token instanceof nack.Node_nameContext) {
				tokenType = LeviathonParser.RULE_node_name;
				break;
			} else if (token instanceof nack.Register_nameContext) {
				tokenType = LeviathonParser.RULE_register_name;
				break;
			}
		}

		const locations: Location[] = [];

		switch (tokenType) {
			case LeviathonParser.RULE_import_alias: {	// Checks current file only
				const ctx = token as nack.Import_aliasContext;
				const alias = ctx.text;
				const _import = file.importMap.get(alias);

				if (!_import) {
					break;
				}

				locations.push(Location.create(
					file.uri.toString(),
					Range.create(
						_import.declarationLine - 1,
						0,
						_import.declarationLine - 1,
						50
					)
				));
				break;
			}
			case LeviathonParser.RULE_monster_alias: {	// Checks current file only
				const ctx = token as nack.Monster_aliasContext;
				const alias = ctx.text;
				const monster = file.importMap.get(alias);

				if (!monster) {
					break;
				}

				locations.push(Location.create(
					file.uri.toString(),
					Range.create(
						monster.declarationLine - 1,
						0,
						monster.declarationLine - 1,
						50
					)
				));
				break;
			}
			case LeviathonParser.RULE_import_name: {	// Checks all files
				const ctx = token as nack.Import_nameContext;
				const name = ctx.text;

				for (const _file of files) {
					for (const _import of _file.importMap.values()) {
						if (_import.name === name) {
							locations.push(Location.create(
								_file.uri.toString(),
								Range.create(
									_import.declarationLine - 1,
									0,
									_import.declarationLine - 1,
									50
								)
							));
						}
					}
				}
				break;
			}
			case LeviathonParser.RULE_monster_name: {	// Checks all files
				const ctx = token as nack.Monster_nameContext;
				const name = ctx.text;

				for (const _file of files) {
					for (const monster of _file.importMap.values()) {
						if (monster.name === name) {
							locations.push(Location.create(
								_file.uri.toString(),
								Range.create(
									monster.declarationLine - 1,
									0,
									monster.declarationLine - 1,
									50
								)
							));
						}
					}
				}
				break;
			}
			case LeviathonParser.RULE_node_name: {
				const ctx = token as nack.Node_nameContext;
				const name = ctx.text;
				if (ctx.parent instanceof nack.Node_callContext || ctx.parent instanceof nack.Node_namesContext) {
					const node = file.findByName(name);
					if (node) {
						for (const ref of node.references) {
							LanguageServer.logMessage(`Found reference to ${name} at ${ref.file.uri.toString()}:${ref.line}:${ref.char}`);
							locations.push(Location.create(
								ref.file.uri.toString(),
								Range.create(
									ref.line - 1,
									ref.char,
									ref.line - 1,
									ref.endChar
								)
							));
						}

						if (includeDecl) {
							locations.push(Location.create(
								file.uri.toString(),
								Range.create(
									node.declarationLine - 1,
									0,
									node.declarationLine - 1,
									50
								)
							));
						}
					}
				} else if (ctx.parent instanceof nack.Scoped_node_callContext) {
					const scope = file.importMap.get(ctx.parent.import_alias().text);
					if (scope && scope.importedFile) {
						const node = scope.importedFile.findByName(name);
						if (node) {
							for (const ref of node.references) {
								LanguageServer.logMessage(`Found reference to ${name} at ${ref.file.uri.toString()}:${ref.line}:${ref.char}`);
								locations.push(Location.create(
									ref.file.uri.toString(),
									Range.create(
										ref.line - 1,
										ref.char,
										ref.line - 1,
										ref.endChar
									)
								));
							}

							if (includeDecl) {
								locations.push(Location.create(
									scope.importedFile.uri.toString(),
									Range.create(
										node.declarationLine - 1,
										node.declarationChar,
										node.declarationLine - 1,
										50
									)
								));
							}
						}
					}
				}
				break;
			}
			case LeviathonParser.RULE_register_name: {
				break;
			}

			default: break;
		}

		return locations;
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
		if (node.symbol.line == position.line + 1 && start <= position.character + 1 && position.character + 1 <= end) {
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

	private getThkIdentifierFromUri(uri: string, fandFile: FandFile): string | undefined {
		for (const [key, value] of fandFile.thkMap) {
			if (value.toString() == uri) {
				return key;
			}
		}

		return undefined;
	}

	private formatNodeName(node: Node, sourceThk: string | undefined): string {
		const idStr = node.id < 0 ? "" : ` : ${node.id}`;
		const idxStr = node.index < 0 ? "" : ` @ ${node.index}`;
		if (sourceThk) {
			return `**Node:** Defined in THK ${sourceThk}
\`\`\`leviathon
def ${node.name}${node.aliases.length > 0 ? " & " + node.aliases.join(' & ') : ""}${idStr}${idxStr}
\`\`\``;
		} else {
			return `**Node:**
\`\`\`leviathon
def ${node.name}${node.aliases.length > 0 ? " & " + node.aliases.join(' & ') : ""}${idStr}${idxStr}
\`\`\``;
		}
	}

	private formatImport(import_: Import, alias: string): string {
		if (import_.type == ImportType.Library) {
			return `**Library Import:** 
\`\`\`leviathon 
importlibrary ${import_.name} as ${alias}
\`\`\``;
		} else if (import_.type == ImportType.Actions) {
			return `**Action Import:** 
\`\`\`leviathon 
importactions ${import_.name} as ${alias}
\`\`\``;
		} else {
			return 'No hover info';
		}
	}
}
