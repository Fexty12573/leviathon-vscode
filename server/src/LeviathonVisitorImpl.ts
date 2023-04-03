import { LeviathonVisitor } from './parser/LeviathonVisitor';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import * as nack from './parser/LeviathonParser';
import { ProgramContext } from './parser/LeviathonParser';

import { Diagnostic } from 'vscode-languageserver/node';
import { URI, Utils } from 'vscode-uri';
import { Token } from 'antlr4ts';
import { AliasDecl, ImportType, NackFile, Node } from './NackFile';
import { FandFile } from './FandFile';
import * as fs from 'fs';
import { LanguageServer } from './LanguageServer';
import { LeviathonValidator } from './LeviationValidator';
import { TextDocument } from 'vscode-languageserver-textdocument';
import MetaValues from './MetaValues.json';

export type DiagnosticHandler = (diagnostic: Diagnostic) => void;

enum SegmentType {
	If,
	Random,
	Nop,
	Control,
	Register,
	Function,
	Action,
	Node,
	Directive
}

export class LeviathonVisitorImpl extends AbstractParseTreeVisitor<any> implements LeviathonVisitor<any> {
	private handler: DiagnosticHandler;
	public files: NackFile[] = [];
	public fandFile: FandFile | undefined;
	public activeIndex: number;

	constructor(handler: DiagnosticHandler, files: NackFile[], activeIndex: number, fandFile: FandFile | undefined) {
		super();
		this.handler = handler;
		this.fandFile = fandFile;
		this.files = files;
		this.activeIndex = activeIndex;
	}

	private get File(): NackFile {
		return this.files[this.activeIndex];
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

	private reportWarning(token: Token, line: number, column: number, msg: string): void {
		this.handler({
			severity: 2,
			range: {
				start: { line: line - 1, character: column },
				end: { line: line - 1, character: column + token.text!.length }
			},
			message: msg,
			source: 'Leviathon'
		});
	}

	private visitPostSegmentStatements(ctx: any): any {
		if (ctx.action_statement()) {
			return this.visitAction_statement(ctx.action_statement());
		}
		if (ctx.node_call_statement()) {
			return this.visitNode_call_statement(ctx.node_call_statement());
		}
		if (ctx.directive_statement()) {
			return this.visitDirective_statement(ctx.directive_statement());
		}
		if (ctx.meta_statement()) {
			return this.visitMeta_statement(ctx.meta_statement());
		}
	}

	visitSegment(ctx: nack.SegmentContext): any {
		if (ctx instanceof nack.Segtype_ifContext) {
			return this.visitSegtype_if(ctx);
		} else if (ctx instanceof nack.Segtype_randomContext) {
			return this.visitSegtype_chance(ctx);
		} else if (ctx instanceof nack.Segtype_nopContext) {
			return this.visitSegtype_nop(ctx);
		} else if (ctx instanceof nack.Segtype_controlContext) {
			return this.visitSegtype_control(ctx);
		} else if (ctx instanceof nack.Segtype_registerContext) {
			return this.visitSegtype_register(ctx);
		} else if (ctx instanceof nack.Segtype_functionContext) {
			return this.visitSegtype_function(ctx);
		} else if (ctx instanceof nack.Segtype_actionContext) {
			return this.visitSegtype_action(ctx);
		} else if (ctx instanceof nack.Segtype_nodeContext) {
			return this.visitSegtype_node(ctx);
		} else {
			return this.visitSegtype_directive(ctx as nack.Segtype_directiveContext);
		}
	}
	
	protected defaultResult(): any {
		return 0;
	}

	protected aggregateResult(aggregate: number, nextResult: number): any {
		return aggregate + nextResult;
	}

	visit(ctx: ProgramContext): any {
		return this.visitProgram(ctx);
	}

	public visitProgram(ctx: ProgramContext): any {
		for (const imp of ctx.importany()) {
			this.visitImportany(imp);
		}

		// First pass, collect all nodes
		for (const node of ctx.node()) {
			const result = this.visitNode_declaration(node.node_declaration());
			if (result instanceof Node) {
				this.File.add(result);
			}
		}

		// Second pass, evaluate all nodes
		for (const node of ctx.node()) {
			this.visitNode(node);
		}
	}

	visitImportany(ctx: nack.ImportanyContext): any {
		if (ctx.import_library()) {
			this.visitImport_library(ctx.import_library()!);
		} else if (ctx.import_actions()) {
			this.visitImport_actions(ctx.import_actions()!);
		}
	}

	visitImport_library(ctx: nack.Import_libraryContext): any {
		const alias = ctx._alias?.text;
		if (!alias) {
			return;
		}

		const parseFile = (uri: URI) => {
			const diags = LeviathonValidator.get().validate(
				TextDocument.create(uri.toString(), 'leviathon', 0, fs.readFileSync(uri.fsPath).toString()),
			);

			LanguageServer.get().Connection.sendDiagnostics({ uri: uri.toString(), diagnostics: diags });
		};

		if (!this.fandFile) {
			this.reportWarning(ctx._alias, ctx._alias.line, ctx._alias.charPositionInLine, "Unable to resolve import without a project file.");
			return;
		}

		if (ctx.import_path()) /* import from file */ {
			const path = ctx.import_path()!;
			const uri = Utils.resolvePath(this.File.uri, path._path.text!);
			
			const file = this.files.find(f => f.uri === uri);
			if (file) {
				// Check if the file is already part of the project
				let found = false;
				for (const name of Object.keys(this.fandFile.thkMap)) {
					if (this.fandFile.thkMap.get(name) === file.uri) {
						this.File.importMap.set(alias, {
							type: ImportType.Library,
							name: name,
							uri: uri,
							declarationLine: path.QUOTED_PATH().symbol.line,
							importedFile: file,
						});
						found = true;
						break;
					}
				}

				if (!found) {
					this.File.importMap.set(alias, {
						type: ImportType.Library,
						name: "__UnnamedImport",
						uri: uri,
						declarationLine: path.QUOTED_PATH().symbol.line,
						importedFile: file,
					});
				}

				if (file.empty()) {
					// File is empty or not part of the project, has to be parsed before this file can be parsed
					parseFile(uri);
				}

			} else /* File is not part of the project */ {
				parseFile(uri);
			}
		} else /* Named import */ {
			const importCtx = ctx.import_name()!._name;
			const import_name = importCtx.text!;

			// Get the file URI from the project file
			const uri = this.fandFile.thkMap.get(import_name);
			if (uri) {
				if (this.File.uri === uri) {
					this.reportError(importCtx._id, importCtx._id.line, importCtx._id.charPositionInLine, `Cannot import self`);
					return;
				}
				
				let file = this.files.find(f => f.uri === uri);
				if (!file || (file && file.empty())) {
					// File is empty or not part of the project, has to be parsed before this file can be parsed
					parseFile(uri);
					file = LeviathonValidator.get().getFile(uri.toString())!;
				}

				// Add an import map entry for the file
				this.File.importMap.set(alias, {
					type: ImportType.Library,
					name: import_name,
					uri: uri,
					declarationLine: importCtx._id.line,
					importedFile: file,
				});
			}
		}
	}

	visitImport_actions(ctx: nack.Import_actionsContext): any {
		const alias = ctx._alias.text!;
		const import_name = ctx.monster_name()._name.text!;

		this.File.importMap.set(alias, {
			type: ImportType.Actions,
			name: import_name,
			uri: undefined,
			declarationLine: ctx.monster_name()._name._id.line,
			importedFile: undefined,
		});
	}

	visitNode(ctx: nack.NodeContext): any {
		// Don't visit the declaration, it was already visited in the first pass

		for (const segment of ctx.segment()) {
			this.visitSegment(segment);
		}
	}

	visitNode_declaration(ctx: nack.Node_declarationContext): any { 
		const node = new Node();

		const names = this.visitNode_names(ctx.node_names());
		node.name = names[0];
		node.aliases = names.slice(1);

		// Check for duplicate names
		let n = this.File.findByName(node.name.text);
		if (n) {
			const _name = ctx.node_names()._name._name._id;
			this.reportError(_name, _name.line, _name.charPositionInLine, `Multiple declarations of node '${node.name}, previous declaration at L${n.declarationLine}:${n.declarationChar}'`);
			return;
		}

		for (let i = 0; i < node.aliases.length; i++) {
			n = this.File.findByName(node.aliases[i].text);
			if (n) {
				const _alias = ctx.node_names().node_names(i)._name._name._id;
				this.reportError(_alias, _alias.line, _alias.charPositionInLine, `Multiple declarations of node '${node.aliases[i]}, previous declaration at L${n.declarationLine}:${n.declarationChar}'`);
				return;
			}
		}
		
		if (ctx.node_index()) {
			node.index = this.visitNode_index(ctx.node_index()!) as number;
		}
		if (ctx.node_thk_id()) {
			node.id = this.visitNode_thk_id(ctx.node_thk_id()!) as number;
		}

		node.declarationLine = ctx.node_names()._name._name._id.line;
		node.declarationChar = ctx.node_names()._name._name._id.charPositionInLine;

		return node;
	}
	visitNode_names(ctx: nack.Node_namesContext): AliasDecl[] {
		let names: AliasDecl[] = [];
		names.push({
			text: ctx._name.text!,
			charPos: ctx._name._name._id.charPositionInLine
		});

		for (const alias of ctx.node_names()) {
			names = names.concat(this.visitNode_names(alias));
		}

		return names;
	}
	visitNode_index(ctx: nack.Node_indexContext): any {
		return parseInt(ctx._idx.text!);
	}
	visitNode_thk_id(ctx: nack.Node_thk_idContext): any {
		return parseInt(ctx._id.text!);
	}
	visitEnd_node(ctx: nack.End_nodeContext): any {
		return null;
	}
	visitSegtype_if(ctx: nack.Segtype_ifContext): any {
		this.visitIf_statement(ctx.if_statement());

		for (const elif of ctx.elif_statement()) {
			this.visitElif_statement(elif);
		}

		if (ctx.else_statement()) {
			this.visitElse_statement(ctx.else_statement()!);
		}

		if (ctx.endw_statement()) {
			this.visitEndw_statement(ctx.endw_statement()!);
		}

		for (const segment of ctx.segment()) {
			this.visitSegment(segment);
		}
	}
	visitSegtype_chance(ctx: nack.Segtype_randomContext): any {
		this.visitRandom_statement(ctx.random_statement());

		for (const elser of ctx.elser_statement()) {
			this.visitElser_statement(elser);
		}

		if (ctx.endrw_statement()) {
			this.visitEndrw_statement(ctx.endrw_statement()!);
		}

		for (const segment of ctx.segment()) {
			this.visitSegment(segment);
		}
	}
	visitSegtype_nop(ctx: nack.Segtype_nopContext): any {
		this.visitNop_statement(ctx.nop_statement());
	}
	visitSegtype_control(ctx: nack.Segtype_controlContext): any {
		this.visitControl_statement(ctx.control_statement());
	}
	visitSegtype_register(ctx: nack.Segtype_registerContext): any {
		this.visitRegister_statement(ctx.register_statement());
	}
	visitSegtype_function(ctx: nack.Segtype_functionContext): any {
		if (ctx.function_call()) {
			this.visitFunction_call(ctx.function_call()!);
		} else if (ctx.raw_function_call()) {
			const rawcall = ctx.raw_function_call()!;
			this.visitRaw_function_call(ctx.raw_function_call()!);
		}

		this.visitPostSegmentStatements(ctx);
	}
	visitSegtype_action(ctx: nack.Segtype_actionContext): any {
		this.visitAction_statement(ctx.action_statement());
	}
	visitSegtype_node(ctx: nack.Segtype_nodeContext): any {
		this.visitNode_call_statement(ctx.node_call_statement()!);
		
		if (ctx.directive_statement()) {
			this.visitDirective_statement(ctx.directive_statement()!);
		}
		if (ctx.meta_statement()) {
			this.visitMeta_statement(ctx.meta_statement()!);
		}
	}
	visitSegtype_directive(ctx: nack.Segtype_directiveContext): any {
		if (ctx.directive_statement()) {
			this.visitDirective_statement(ctx.directive_statement()!);
		}
		if (ctx.meta_statement()) {
			this.visitMeta_statement(ctx.meta_statement()!);
		}
	}
	visitNode_call_statement(ctx: nack.Node_call_statementContext): any {
		const valid_node = (name: string, nodes: Node[]) => {
			for (const node of nodes) {
				if (node.hasName(name)) {
					return true;
				}
			}

			return false;
		};

		if (ctx.scoped_node_call()) {
			const sctx = ctx.scoped_node_call()!;
			const aliasCtx = sctx.import_alias()._name._id;
			const nodeCtx = sctx.node_name()._name._id;

			if (!this.File.importMap.has(sctx.import_alias().text)) {
				this.reportError(aliasCtx, aliasCtx.line, aliasCtx.charPositionInLine, `Import '${sctx.import_alias().text}' not found`);
			} else {
				if (this.fandFile) {
					const mapping = this.File.importMap.get(sctx.import_alias().text);
					if (mapping) {
						const mappedName = mapping.name;
						const thk = this.fandFile.thkMap.get(mappedName);
						if (!thk) {
							this.reportError(aliasCtx, aliasCtx.line, aliasCtx.charPositionInLine, `Import '${sctx.import_alias().text}' not found`);
						} else {
							const file = this.files.find((file) => file.uri.toString() === thk.toString());
							if (!file) {
								this.reportError(aliasCtx, aliasCtx.line, aliasCtx.charPositionInLine, `Import '${sctx.import_alias().text}' not found (URI resolution)`);
							} else {
								const name = sctx.node_name().text;
								const node = file.findByName(name);
								if (!node) {
									this.reportError(nodeCtx, nodeCtx.line, nodeCtx.charPositionInLine, `Undefined symbol '${nodeCtx.text}' in module '${aliasCtx.text}'`);
								} else {
									node.references.push({
										file: this.File,
										line: nodeCtx.line,
										char: nodeCtx.charPositionInLine,
										endChar: nodeCtx.charPositionInLine + nodeCtx.text!.length,
										refName: nodeCtx.text!
									});
								}
							}
						}
					} else {
						this.reportError(aliasCtx, aliasCtx.line, aliasCtx.charPositionInLine, `Import '${sctx.import_alias().text}' not found`);
					}
				}
			}
		} else if (ctx.node_call()) {
			const nctx = ctx.node_call()!;
			const nodeCtx = nctx.node_name()._name._id;
			const name = nctx.node_name().text;

			const node_ = this.File.findByName(name);

			if (!node_) {
				this.reportError(nodeCtx, nodeCtx.line, nodeCtx.charPositionInLine, `Node '${name}' not found`);
			} else {
				node_.references.push({
					file: this.File,
					line: nodeCtx.line,
					char: nodeCtx.charPositionInLine,
					endChar: nodeCtx.charPositionInLine + nodeCtx.text!.length,
					refName: nodeCtx.text!
				});
			}
		} else if (ctx.raw_node_call()) {
			this.visitRaw_node_call(ctx.raw_node_call()!);
		} else if (ctx.scoped_raw_node_call()) {
			this.visitScoped_raw_node_call(ctx.scoped_raw_node_call()!);
		}
	}
	visitRaw_node_call(ctx: nack.Raw_node_callContext): any {
		const call = ctx.call_literal()._call;
		const stdIdx = call.text?.substring(5) ?? 'NaN';
		const idx = parseInt(stdIdx);
		if (isNaN(idx)) {
			this.reportError(call, call.line, call.charPositionInLine, `Invalid node call index '${stdIdx}'`);
		}

		const node = this.File.findByIndex(idx);
		if (!node) {
			this.reportWarning(call, call.line, call.charPositionInLine, `Node at explicit index '${idx}' not found`);
		} else {
			node.references.push({
				file: this.File,
				line: call.line,
				char: call.charPositionInLine,
				endChar: ctx.CALL_OP()._symbol.charPositionInLine + ctx.text.length,
				refName: ctx.call_literal().text
			});
		}
	}
	visitScoped_raw_node_call(ctx: nack.Scoped_raw_node_callContext): any {
		const importCtx = ctx.import_alias()._name._id;
		const importName = ctx.import_alias().text;

		if (!this.File.importMap.has(importName)) {
			this.reportError(importCtx, importCtx.line, importCtx.charPositionInLine, `Import '${importName}' not found`);
		}

		if (this.fandFile) {
			const mapping = this.File.importMap.get(importName);
			if (!mapping) {
				this.reportError(importCtx, importCtx.line, importCtx.charPositionInLine, `Import '${importName}' not found`);
				return;
			}

			const mappedName = mapping.name;
			const thk = this.fandFile.thkMap.get(mappedName);
			if (!thk) {
				this.reportError(importCtx, importCtx.line, importCtx.charPositionInLine, `Import '${importName}' not found`);
				return;
			}
			
			// Can only check for existence of node if the thk file has IDs
			const file = this.files.find((file) => file.uri.toString() === thk.toString());
			if (!file) {
				this.reportError(importCtx, importCtx.line, importCtx.charPositionInLine, `Import '${importName}' not found (URI resolution)`);
				return;
			}

			const call = ctx.scoped_call_literal()._call;
			const id = parseInt(call.text?.substring(1) ?? 'NaN');
			LanguageServer.logMessage(`Checking for node with ID ${id} in file ${file.uri.fsPath}`);

			const node = file.findById(id);

			if (!node) {
				this.reportWarning(call, call.line, call.charPositionInLine, `Node with ID '${call.text}' not found`);
			} else {
				node.references.push({
					file: this.File,
					line: call.line,
					char: call.charPositionInLine,
					endChar: ctx.CALL_OP()._symbol.charPositionInLine + ctx.text.length,
					refName: ctx.scoped_call_literal().text
				});
			}
		}
	}
	visitAction_statement(ctx: nack.Action_statementContext): any {
		if (ctx.raw_action_call()) {
			this.visitRaw_action_call(ctx.raw_action_call()!);
		} else if (ctx.action_call()) {
			const actx = ctx.action_call()!;
			if (actx.monster_alias()) {
				const monsterCtx = actx.monster_alias()._name._id;
			
				if (!this.File.importMap.has(actx.monster_alias().text)) {
					this.reportError(monsterCtx, monsterCtx.line, monsterCtx.charPositionInLine, `Undefined monster qualifier '${monsterCtx.text!}'`);
				}
	
				// TODO: check if action exists in import
			}
		}
	}
	visitRaw_action_call(ctx: nack.Raw_action_callContext): any { return null; }
	visitFunction_call(ctx: nack.Function_callContext): any {
		// TODO: check if function exists
		// base on default.fexty or custom fExt file

		// TODO: check if function is called with valid parameters
		if (ctx.params()) {
			this.visitParams(ctx.params()!);
		}

		for (const call of ctx.function_call()) {
			this.visitFunction_call(call);
		}
	}
	visitRaw_function_call(ctx: nack.Raw_function_callContext): any { return null; }
	visitDirective_statement(ctx: nack.Directive_statementContext): any { return null; }
	visitMeta_statement(ctx: nack.Meta_statementContext): any {
		for (const value of ctx.meta_value()) {
			this.visitMeta_value(value);
		}
	}
	visitMeta_value(ctx: nack.Meta_valueContext): any {
		const metaCtx = ctx.meta_name()._name._id;
		if (!MetaValues.find((value) => value === ctx.meta_name().text)) {
			this.reportError(metaCtx, metaCtx.line, metaCtx.charPositionInLine, `Unknown meta value '${metaCtx.text}'`);
		}
	}
	visitParams(ctx: nack.ParamsContext): any {
		if (ctx._enum_name) {
			const func = ctx.parent as nack.Function_callContext;
			
			// Check the fExt file for the relevant function
		}

		for (const param of ctx.params()) {
			this.visitParams(param);
		}
	}
	visitIf_statement(ctx: nack.If_statementContext): any {
		if (ctx._func) {
			this.visitFunction_call(ctx._func);
		} else if (ctx._raw_func) {
			this.visitRaw_function_call(ctx._raw_func);
		} else if (ctx._cond) {
			this.visitRegister_condition(ctx._cond);
		}

		this.visitPostSegmentStatements(ctx);
	}
	visitElse_statement(ctx: nack.Else_statementContext): any {
		if (ctx._func) {
			this.visitFunction_call(ctx._func);
		} else if (ctx._raw_func) {
			this.visitRaw_function_call(ctx._raw_func);
		}

		this.visitPostSegmentStatements(ctx);
	}
	visitElif_statement(ctx: nack.Elif_statementContext): any {
		if (ctx._func) {
			this.visitFunction_call(ctx._func);
		} else if (ctx._raw_func) {
			this.visitRaw_function_call(ctx._raw_func);
		} else if (ctx._cond) {
			this.visitRegister_condition(ctx._cond);
		}

		this.visitPostSegmentStatements(ctx);
	}
	visitEndif_statement(ctx: nack.Endif_statementContext): any { return null; }
	visitEndw_statement(ctx: nack.Endw_statementContext): any {
		this.visitPostSegmentStatements(ctx);
	}
	visitRandom_statement(ctx: nack.Random_statementContext): any {
		this.visitPostSegmentStatements(ctx);
	}
	visitElser_statement(ctx: nack.Elser_statementContext): any {
		this.visitPostSegmentStatements(ctx);
	}
	visitEndr_statement(ctx: nack.Endr_statementContext): any { return null; }
	visitEndrw_statement(ctx: nack.Endrw_statementContext): any {
		this.visitPostSegmentStatements(ctx);
	}
	visitNop_statement(ctx: nack.Nop_statementContext): any { return null; }
	visitControl_statement(ctx: nack.Control_statementContext): any { return null; }
	visitRegister_statement(ctx: nack.Register_statementContext): any {
		if (ctx._operand.text) {
			const name = ctx._operand._name._name;
			const text = ctx._operand.text;
			if (text[0] !== '$' && this.fandFile) {
				if (!this.fandFile.registerMap.has(text)) {
					this.reportError(name, name.line, name.charPositionInLine, `Undefined symbol '${ctx._operand.text}'`);
				}
			}
		}

		this.visitPostSegmentStatements(ctx);
	}
	visitRegister_condition(ctx: nack.Register_conditionContext): any {
		const operand1 = ctx._operand1.text!;

		if (operand1[0] !== '$' && this.fandFile) {
			if (!this.fandFile.registerMap.has(operand1)) {
				const name = ctx._operand1._name._name;
				this.reportError(name, name.line, name.charPositionInLine, `Undefined symbol '${operand1}'`);
			}
		}
	}
}
