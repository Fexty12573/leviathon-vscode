// Generated from ./server/grammar/Leviathon.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { Segtype_ifContext } from "./LeviathonParser";
import { Segtype_randomContext } from "./LeviathonParser";
import { Segtype_nopContext } from "./LeviathonParser";
import { Segtype_controlContext } from "./LeviathonParser";
import { Segtype_registerContext } from "./LeviathonParser";
import { Segtype_functionContext } from "./LeviathonParser";
import { Segtype_actionContext } from "./LeviathonParser";
import { Segtype_nodeContext } from "./LeviathonParser";
import { Segtype_directiveContext } from "./LeviathonParser";
import { ProgramContext } from "./LeviathonParser";
import { ImportanyContext } from "./LeviathonParser";
import { IdentifierContext } from "./LeviathonParser";
import { Register_identifierContext } from "./LeviathonParser";
import { Import_nameContext } from "./LeviathonParser";
import { Node_nameContext } from "./LeviathonParser";
import { Action_nameContext } from "./LeviathonParser";
import { Monster_nameContext } from "./LeviathonParser";
import { Function_nameContext } from "./LeviathonParser";
import { Meta_nameContext } from "./LeviathonParser";
import { Import_aliasContext } from "./LeviathonParser";
import { Monster_aliasContext } from "./LeviathonParser";
import { Call_literalContext } from "./LeviathonParser";
import { Scoped_call_literalContext } from "./LeviathonParser";
import { Register_nameContext } from "./LeviathonParser";
import { Import_libraryContext } from "./LeviathonParser";
import { Import_actionsContext } from "./LeviathonParser";
import { NodeContext } from "./LeviathonParser";
import { Node_declarationContext } from "./LeviathonParser";
import { End_nodeContext } from "./LeviathonParser";
import { SegmentContext } from "./LeviathonParser";
import { Node_call_statementContext } from "./LeviathonParser";
import { Node_callContext } from "./LeviathonParser";
import { Scoped_node_callContext } from "./LeviathonParser";
import { Raw_node_callContext } from "./LeviathonParser";
import { Scoped_raw_node_callContext } from "./LeviathonParser";
import { Action_statementContext } from "./LeviathonParser";
import { Action_callContext } from "./LeviathonParser";
import { Raw_action_callContext } from "./LeviathonParser";
import { Function_callContext } from "./LeviathonParser";
import { Raw_function_callContext } from "./LeviathonParser";
import { Directive_statementContext } from "./LeviathonParser";
import { Meta_statementContext } from "./LeviathonParser";
import { Node_namesContext } from "./LeviathonParser";
import { Node_thk_idContext } from "./LeviathonParser";
import { Node_indexContext } from "./LeviathonParser";
import { Meta_valueContext } from "./LeviathonParser";
import { Import_pathContext } from "./LeviathonParser";
import { ParamsContext } from "./LeviathonParser";
import { If_statementContext } from "./LeviathonParser";
import { Else_statementContext } from "./LeviathonParser";
import { Elif_statementContext } from "./LeviathonParser";
import { Endif_statementContext } from "./LeviathonParser";
import { Endw_statementContext } from "./LeviathonParser";
import { Random_statementContext } from "./LeviathonParser";
import { Elser_statementContext } from "./LeviathonParser";
import { Endr_statementContext } from "./LeviathonParser";
import { Endrw_statementContext } from "./LeviathonParser";
import { Nop_statementContext } from "./LeviathonParser";
import { Control_statementContext } from "./LeviathonParser";
import { Register_statementContext } from "./LeviathonParser";
import { Register_conditionContext } from "./LeviathonParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `LeviathonParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface LeviathonVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `segtype_if`
	 * labeled alternative in `LeviathonParser.segment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSegtype_if?: (ctx: Segtype_ifContext) => Result;

	/**
	 * Visit a parse tree produced by the `segtype_random`
	 * labeled alternative in `LeviathonParser.segment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSegtype_random?: (ctx: Segtype_randomContext) => Result;

	/**
	 * Visit a parse tree produced by the `segtype_nop`
	 * labeled alternative in `LeviathonParser.segment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSegtype_nop?: (ctx: Segtype_nopContext) => Result;

	/**
	 * Visit a parse tree produced by the `segtype_control`
	 * labeled alternative in `LeviathonParser.segment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSegtype_control?: (ctx: Segtype_controlContext) => Result;

	/**
	 * Visit a parse tree produced by the `segtype_register`
	 * labeled alternative in `LeviathonParser.segment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSegtype_register?: (ctx: Segtype_registerContext) => Result;

	/**
	 * Visit a parse tree produced by the `segtype_function`
	 * labeled alternative in `LeviathonParser.segment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSegtype_function?: (ctx: Segtype_functionContext) => Result;

	/**
	 * Visit a parse tree produced by the `segtype_action`
	 * labeled alternative in `LeviathonParser.segment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSegtype_action?: (ctx: Segtype_actionContext) => Result;

	/**
	 * Visit a parse tree produced by the `segtype_node`
	 * labeled alternative in `LeviathonParser.segment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSegtype_node?: (ctx: Segtype_nodeContext) => Result;

	/**
	 * Visit a parse tree produced by the `segtype_directive`
	 * labeled alternative in `LeviathonParser.segment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSegtype_directive?: (ctx: Segtype_directiveContext) => Result;

	/**
	 * Visit a parse tree produced by `LeviathonParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `LeviathonParser.importany`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImportany?: (ctx: ImportanyContext) => Result;

	/**
	 * Visit a parse tree produced by `LeviathonParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `LeviathonParser.register_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRegister_identifier?: (ctx: Register_identifierContext) => Result;

	/**
	 * Visit a parse tree produced by `LeviathonParser.import_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImport_name?: (ctx: Import_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `LeviathonParser.node_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNode_name?: (ctx: Node_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `LeviathonParser.action_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAction_name?: (ctx: Action_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `LeviathonParser.monster_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMonster_name?: (ctx: Monster_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `LeviathonParser.function_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_name?: (ctx: Function_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `LeviathonParser.meta_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMeta_name?: (ctx: Meta_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `LeviathonParser.import_alias`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImport_alias?: (ctx: Import_aliasContext) => Result;

	/**
	 * Visit a parse tree produced by `LeviathonParser.monster_alias`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMonster_alias?: (ctx: Monster_aliasContext) => Result;

	/**
	 * Visit a parse tree produced by `LeviathonParser.call_literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCall_literal?: (ctx: Call_literalContext) => Result;

	/**
	 * Visit a parse tree produced by `LeviathonParser.scoped_call_literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScoped_call_literal?: (ctx: Scoped_call_literalContext) => Result;

	/**
	 * Visit a parse tree produced by `LeviathonParser.register_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRegister_name?: (ctx: Register_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `LeviathonParser.import_library`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImport_library?: (ctx: Import_libraryContext) => Result;

	/**
	 * Visit a parse tree produced by `LeviathonParser.import_actions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImport_actions?: (ctx: Import_actionsContext) => Result;

	/**
	 * Visit a parse tree produced by `LeviathonParser.node`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNode?: (ctx: NodeContext) => Result;

	/**
	 * Visit a parse tree produced by `LeviathonParser.node_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNode_declaration?: (ctx: Node_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `LeviathonParser.end_node`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnd_node?: (ctx: End_nodeContext) => Result;

	/**
	 * Visit a parse tree produced by `LeviathonParser.segment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSegment?: (ctx: SegmentContext) => Result;

	/**
	 * Visit a parse tree produced by `LeviathonParser.node_call_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNode_call_statement?: (ctx: Node_call_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `LeviathonParser.node_call`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNode_call?: (ctx: Node_callContext) => Result;

	/**
	 * Visit a parse tree produced by `LeviathonParser.scoped_node_call`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScoped_node_call?: (ctx: Scoped_node_callContext) => Result;

	/**
	 * Visit a parse tree produced by `LeviathonParser.raw_node_call`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRaw_node_call?: (ctx: Raw_node_callContext) => Result;

	/**
	 * Visit a parse tree produced by `LeviathonParser.scoped_raw_node_call`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScoped_raw_node_call?: (ctx: Scoped_raw_node_callContext) => Result;

	/**
	 * Visit a parse tree produced by `LeviathonParser.action_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAction_statement?: (ctx: Action_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `LeviathonParser.action_call`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAction_call?: (ctx: Action_callContext) => Result;

	/**
	 * Visit a parse tree produced by `LeviathonParser.raw_action_call`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRaw_action_call?: (ctx: Raw_action_callContext) => Result;

	/**
	 * Visit a parse tree produced by `LeviathonParser.function_call`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_call?: (ctx: Function_callContext) => Result;

	/**
	 * Visit a parse tree produced by `LeviathonParser.raw_function_call`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRaw_function_call?: (ctx: Raw_function_callContext) => Result;

	/**
	 * Visit a parse tree produced by `LeviathonParser.directive_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDirective_statement?: (ctx: Directive_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `LeviathonParser.meta_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMeta_statement?: (ctx: Meta_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `LeviathonParser.node_names`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNode_names?: (ctx: Node_namesContext) => Result;

	/**
	 * Visit a parse tree produced by `LeviathonParser.node_thk_id`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNode_thk_id?: (ctx: Node_thk_idContext) => Result;

	/**
	 * Visit a parse tree produced by `LeviathonParser.node_index`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNode_index?: (ctx: Node_indexContext) => Result;

	/**
	 * Visit a parse tree produced by `LeviathonParser.meta_value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMeta_value?: (ctx: Meta_valueContext) => Result;

	/**
	 * Visit a parse tree produced by `LeviathonParser.import_path`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImport_path?: (ctx: Import_pathContext) => Result;

	/**
	 * Visit a parse tree produced by `LeviathonParser.params`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParams?: (ctx: ParamsContext) => Result;

	/**
	 * Visit a parse tree produced by `LeviathonParser.if_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIf_statement?: (ctx: If_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `LeviathonParser.else_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElse_statement?: (ctx: Else_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `LeviathonParser.elif_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElif_statement?: (ctx: Elif_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `LeviathonParser.endif_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEndif_statement?: (ctx: Endif_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `LeviathonParser.endw_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEndw_statement?: (ctx: Endw_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `LeviathonParser.random_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRandom_statement?: (ctx: Random_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `LeviathonParser.elser_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElser_statement?: (ctx: Elser_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `LeviathonParser.endr_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEndr_statement?: (ctx: Endr_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `LeviathonParser.endrw_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEndrw_statement?: (ctx: Endrw_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `LeviathonParser.nop_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNop_statement?: (ctx: Nop_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `LeviathonParser.control_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitControl_statement?: (ctx: Control_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `LeviathonParser.register_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRegister_statement?: (ctx: Register_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `LeviathonParser.register_condition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRegister_condition?: (ctx: Register_conditionContext) => Result;
}

