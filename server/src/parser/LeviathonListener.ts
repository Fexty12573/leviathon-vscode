// Generated from ./server/grammar/Leviathon.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `LeviathonParser`.
 */
export interface LeviathonListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `segtype_if`
	 * labeled alternative in `LeviathonParser.segment`.
	 * @param ctx the parse tree
	 */
	enterSegtype_if?: (ctx: Segtype_ifContext) => void;
	/**
	 * Exit a parse tree produced by the `segtype_if`
	 * labeled alternative in `LeviathonParser.segment`.
	 * @param ctx the parse tree
	 */
	exitSegtype_if?: (ctx: Segtype_ifContext) => void;

	/**
	 * Enter a parse tree produced by the `segtype_random`
	 * labeled alternative in `LeviathonParser.segment`.
	 * @param ctx the parse tree
	 */
	enterSegtype_random?: (ctx: Segtype_randomContext) => void;
	/**
	 * Exit a parse tree produced by the `segtype_random`
	 * labeled alternative in `LeviathonParser.segment`.
	 * @param ctx the parse tree
	 */
	exitSegtype_random?: (ctx: Segtype_randomContext) => void;

	/**
	 * Enter a parse tree produced by the `segtype_nop`
	 * labeled alternative in `LeviathonParser.segment`.
	 * @param ctx the parse tree
	 */
	enterSegtype_nop?: (ctx: Segtype_nopContext) => void;
	/**
	 * Exit a parse tree produced by the `segtype_nop`
	 * labeled alternative in `LeviathonParser.segment`.
	 * @param ctx the parse tree
	 */
	exitSegtype_nop?: (ctx: Segtype_nopContext) => void;

	/**
	 * Enter a parse tree produced by the `segtype_control`
	 * labeled alternative in `LeviathonParser.segment`.
	 * @param ctx the parse tree
	 */
	enterSegtype_control?: (ctx: Segtype_controlContext) => void;
	/**
	 * Exit a parse tree produced by the `segtype_control`
	 * labeled alternative in `LeviathonParser.segment`.
	 * @param ctx the parse tree
	 */
	exitSegtype_control?: (ctx: Segtype_controlContext) => void;

	/**
	 * Enter a parse tree produced by the `segtype_register`
	 * labeled alternative in `LeviathonParser.segment`.
	 * @param ctx the parse tree
	 */
	enterSegtype_register?: (ctx: Segtype_registerContext) => void;
	/**
	 * Exit a parse tree produced by the `segtype_register`
	 * labeled alternative in `LeviathonParser.segment`.
	 * @param ctx the parse tree
	 */
	exitSegtype_register?: (ctx: Segtype_registerContext) => void;

	/**
	 * Enter a parse tree produced by the `segtype_function`
	 * labeled alternative in `LeviathonParser.segment`.
	 * @param ctx the parse tree
	 */
	enterSegtype_function?: (ctx: Segtype_functionContext) => void;
	/**
	 * Exit a parse tree produced by the `segtype_function`
	 * labeled alternative in `LeviathonParser.segment`.
	 * @param ctx the parse tree
	 */
	exitSegtype_function?: (ctx: Segtype_functionContext) => void;

	/**
	 * Enter a parse tree produced by the `segtype_action`
	 * labeled alternative in `LeviathonParser.segment`.
	 * @param ctx the parse tree
	 */
	enterSegtype_action?: (ctx: Segtype_actionContext) => void;
	/**
	 * Exit a parse tree produced by the `segtype_action`
	 * labeled alternative in `LeviathonParser.segment`.
	 * @param ctx the parse tree
	 */
	exitSegtype_action?: (ctx: Segtype_actionContext) => void;

	/**
	 * Enter a parse tree produced by the `segtype_node`
	 * labeled alternative in `LeviathonParser.segment`.
	 * @param ctx the parse tree
	 */
	enterSegtype_node?: (ctx: Segtype_nodeContext) => void;
	/**
	 * Exit a parse tree produced by the `segtype_node`
	 * labeled alternative in `LeviathonParser.segment`.
	 * @param ctx the parse tree
	 */
	exitSegtype_node?: (ctx: Segtype_nodeContext) => void;

	/**
	 * Enter a parse tree produced by the `segtype_directive`
	 * labeled alternative in `LeviathonParser.segment`.
	 * @param ctx the parse tree
	 */
	enterSegtype_directive?: (ctx: Segtype_directiveContext) => void;
	/**
	 * Exit a parse tree produced by the `segtype_directive`
	 * labeled alternative in `LeviathonParser.segment`.
	 * @param ctx the parse tree
	 */
	exitSegtype_directive?: (ctx: Segtype_directiveContext) => void;

	/**
	 * Enter a parse tree produced by `LeviathonParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `LeviathonParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;

	/**
	 * Enter a parse tree produced by `LeviathonParser.importany`.
	 * @param ctx the parse tree
	 */
	enterImportany?: (ctx: ImportanyContext) => void;
	/**
	 * Exit a parse tree produced by `LeviathonParser.importany`.
	 * @param ctx the parse tree
	 */
	exitImportany?: (ctx: ImportanyContext) => void;

	/**
	 * Enter a parse tree produced by `LeviathonParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `LeviathonParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `LeviathonParser.register_identifier`.
	 * @param ctx the parse tree
	 */
	enterRegister_identifier?: (ctx: Register_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `LeviathonParser.register_identifier`.
	 * @param ctx the parse tree
	 */
	exitRegister_identifier?: (ctx: Register_identifierContext) => void;

	/**
	 * Enter a parse tree produced by `LeviathonParser.import_name`.
	 * @param ctx the parse tree
	 */
	enterImport_name?: (ctx: Import_nameContext) => void;
	/**
	 * Exit a parse tree produced by `LeviathonParser.import_name`.
	 * @param ctx the parse tree
	 */
	exitImport_name?: (ctx: Import_nameContext) => void;

	/**
	 * Enter a parse tree produced by `LeviathonParser.node_name`.
	 * @param ctx the parse tree
	 */
	enterNode_name?: (ctx: Node_nameContext) => void;
	/**
	 * Exit a parse tree produced by `LeviathonParser.node_name`.
	 * @param ctx the parse tree
	 */
	exitNode_name?: (ctx: Node_nameContext) => void;

	/**
	 * Enter a parse tree produced by `LeviathonParser.action_name`.
	 * @param ctx the parse tree
	 */
	enterAction_name?: (ctx: Action_nameContext) => void;
	/**
	 * Exit a parse tree produced by `LeviathonParser.action_name`.
	 * @param ctx the parse tree
	 */
	exitAction_name?: (ctx: Action_nameContext) => void;

	/**
	 * Enter a parse tree produced by `LeviathonParser.monster_name`.
	 * @param ctx the parse tree
	 */
	enterMonster_name?: (ctx: Monster_nameContext) => void;
	/**
	 * Exit a parse tree produced by `LeviathonParser.monster_name`.
	 * @param ctx the parse tree
	 */
	exitMonster_name?: (ctx: Monster_nameContext) => void;

	/**
	 * Enter a parse tree produced by `LeviathonParser.function_name`.
	 * @param ctx the parse tree
	 */
	enterFunction_name?: (ctx: Function_nameContext) => void;
	/**
	 * Exit a parse tree produced by `LeviathonParser.function_name`.
	 * @param ctx the parse tree
	 */
	exitFunction_name?: (ctx: Function_nameContext) => void;

	/**
	 * Enter a parse tree produced by `LeviathonParser.meta_name`.
	 * @param ctx the parse tree
	 */
	enterMeta_name?: (ctx: Meta_nameContext) => void;
	/**
	 * Exit a parse tree produced by `LeviathonParser.meta_name`.
	 * @param ctx the parse tree
	 */
	exitMeta_name?: (ctx: Meta_nameContext) => void;

	/**
	 * Enter a parse tree produced by `LeviathonParser.import_alias`.
	 * @param ctx the parse tree
	 */
	enterImport_alias?: (ctx: Import_aliasContext) => void;
	/**
	 * Exit a parse tree produced by `LeviathonParser.import_alias`.
	 * @param ctx the parse tree
	 */
	exitImport_alias?: (ctx: Import_aliasContext) => void;

	/**
	 * Enter a parse tree produced by `LeviathonParser.monster_alias`.
	 * @param ctx the parse tree
	 */
	enterMonster_alias?: (ctx: Monster_aliasContext) => void;
	/**
	 * Exit a parse tree produced by `LeviathonParser.monster_alias`.
	 * @param ctx the parse tree
	 */
	exitMonster_alias?: (ctx: Monster_aliasContext) => void;

	/**
	 * Enter a parse tree produced by `LeviathonParser.call_literal`.
	 * @param ctx the parse tree
	 */
	enterCall_literal?: (ctx: Call_literalContext) => void;
	/**
	 * Exit a parse tree produced by `LeviathonParser.call_literal`.
	 * @param ctx the parse tree
	 */
	exitCall_literal?: (ctx: Call_literalContext) => void;

	/**
	 * Enter a parse tree produced by `LeviathonParser.scoped_call_literal`.
	 * @param ctx the parse tree
	 */
	enterScoped_call_literal?: (ctx: Scoped_call_literalContext) => void;
	/**
	 * Exit a parse tree produced by `LeviathonParser.scoped_call_literal`.
	 * @param ctx the parse tree
	 */
	exitScoped_call_literal?: (ctx: Scoped_call_literalContext) => void;

	/**
	 * Enter a parse tree produced by `LeviathonParser.register_name`.
	 * @param ctx the parse tree
	 */
	enterRegister_name?: (ctx: Register_nameContext) => void;
	/**
	 * Exit a parse tree produced by `LeviathonParser.register_name`.
	 * @param ctx the parse tree
	 */
	exitRegister_name?: (ctx: Register_nameContext) => void;

	/**
	 * Enter a parse tree produced by `LeviathonParser.import_library`.
	 * @param ctx the parse tree
	 */
	enterImport_library?: (ctx: Import_libraryContext) => void;
	/**
	 * Exit a parse tree produced by `LeviathonParser.import_library`.
	 * @param ctx the parse tree
	 */
	exitImport_library?: (ctx: Import_libraryContext) => void;

	/**
	 * Enter a parse tree produced by `LeviathonParser.import_actions`.
	 * @param ctx the parse tree
	 */
	enterImport_actions?: (ctx: Import_actionsContext) => void;
	/**
	 * Exit a parse tree produced by `LeviathonParser.import_actions`.
	 * @param ctx the parse tree
	 */
	exitImport_actions?: (ctx: Import_actionsContext) => void;

	/**
	 * Enter a parse tree produced by `LeviathonParser.node`.
	 * @param ctx the parse tree
	 */
	enterNode?: (ctx: NodeContext) => void;
	/**
	 * Exit a parse tree produced by `LeviathonParser.node`.
	 * @param ctx the parse tree
	 */
	exitNode?: (ctx: NodeContext) => void;

	/**
	 * Enter a parse tree produced by `LeviathonParser.node_declaration`.
	 * @param ctx the parse tree
	 */
	enterNode_declaration?: (ctx: Node_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `LeviathonParser.node_declaration`.
	 * @param ctx the parse tree
	 */
	exitNode_declaration?: (ctx: Node_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `LeviathonParser.end_node`.
	 * @param ctx the parse tree
	 */
	enterEnd_node?: (ctx: End_nodeContext) => void;
	/**
	 * Exit a parse tree produced by `LeviathonParser.end_node`.
	 * @param ctx the parse tree
	 */
	exitEnd_node?: (ctx: End_nodeContext) => void;

	/**
	 * Enter a parse tree produced by `LeviathonParser.segment`.
	 * @param ctx the parse tree
	 */
	enterSegment?: (ctx: SegmentContext) => void;
	/**
	 * Exit a parse tree produced by `LeviathonParser.segment`.
	 * @param ctx the parse tree
	 */
	exitSegment?: (ctx: SegmentContext) => void;

	/**
	 * Enter a parse tree produced by `LeviathonParser.node_call_statement`.
	 * @param ctx the parse tree
	 */
	enterNode_call_statement?: (ctx: Node_call_statementContext) => void;
	/**
	 * Exit a parse tree produced by `LeviathonParser.node_call_statement`.
	 * @param ctx the parse tree
	 */
	exitNode_call_statement?: (ctx: Node_call_statementContext) => void;

	/**
	 * Enter a parse tree produced by `LeviathonParser.node_call`.
	 * @param ctx the parse tree
	 */
	enterNode_call?: (ctx: Node_callContext) => void;
	/**
	 * Exit a parse tree produced by `LeviathonParser.node_call`.
	 * @param ctx the parse tree
	 */
	exitNode_call?: (ctx: Node_callContext) => void;

	/**
	 * Enter a parse tree produced by `LeviathonParser.scoped_node_call`.
	 * @param ctx the parse tree
	 */
	enterScoped_node_call?: (ctx: Scoped_node_callContext) => void;
	/**
	 * Exit a parse tree produced by `LeviathonParser.scoped_node_call`.
	 * @param ctx the parse tree
	 */
	exitScoped_node_call?: (ctx: Scoped_node_callContext) => void;

	/**
	 * Enter a parse tree produced by `LeviathonParser.raw_node_call`.
	 * @param ctx the parse tree
	 */
	enterRaw_node_call?: (ctx: Raw_node_callContext) => void;
	/**
	 * Exit a parse tree produced by `LeviathonParser.raw_node_call`.
	 * @param ctx the parse tree
	 */
	exitRaw_node_call?: (ctx: Raw_node_callContext) => void;

	/**
	 * Enter a parse tree produced by `LeviathonParser.scoped_raw_node_call`.
	 * @param ctx the parse tree
	 */
	enterScoped_raw_node_call?: (ctx: Scoped_raw_node_callContext) => void;
	/**
	 * Exit a parse tree produced by `LeviathonParser.scoped_raw_node_call`.
	 * @param ctx the parse tree
	 */
	exitScoped_raw_node_call?: (ctx: Scoped_raw_node_callContext) => void;

	/**
	 * Enter a parse tree produced by `LeviathonParser.action_statement`.
	 * @param ctx the parse tree
	 */
	enterAction_statement?: (ctx: Action_statementContext) => void;
	/**
	 * Exit a parse tree produced by `LeviathonParser.action_statement`.
	 * @param ctx the parse tree
	 */
	exitAction_statement?: (ctx: Action_statementContext) => void;

	/**
	 * Enter a parse tree produced by `LeviathonParser.action_call`.
	 * @param ctx the parse tree
	 */
	enterAction_call?: (ctx: Action_callContext) => void;
	/**
	 * Exit a parse tree produced by `LeviathonParser.action_call`.
	 * @param ctx the parse tree
	 */
	exitAction_call?: (ctx: Action_callContext) => void;

	/**
	 * Enter a parse tree produced by `LeviathonParser.raw_action_call`.
	 * @param ctx the parse tree
	 */
	enterRaw_action_call?: (ctx: Raw_action_callContext) => void;
	/**
	 * Exit a parse tree produced by `LeviathonParser.raw_action_call`.
	 * @param ctx the parse tree
	 */
	exitRaw_action_call?: (ctx: Raw_action_callContext) => void;

	/**
	 * Enter a parse tree produced by `LeviathonParser.function_call`.
	 * @param ctx the parse tree
	 */
	enterFunction_call?: (ctx: Function_callContext) => void;
	/**
	 * Exit a parse tree produced by `LeviathonParser.function_call`.
	 * @param ctx the parse tree
	 */
	exitFunction_call?: (ctx: Function_callContext) => void;

	/**
	 * Enter a parse tree produced by `LeviathonParser.raw_function_call`.
	 * @param ctx the parse tree
	 */
	enterRaw_function_call?: (ctx: Raw_function_callContext) => void;
	/**
	 * Exit a parse tree produced by `LeviathonParser.raw_function_call`.
	 * @param ctx the parse tree
	 */
	exitRaw_function_call?: (ctx: Raw_function_callContext) => void;

	/**
	 * Enter a parse tree produced by `LeviathonParser.directive_statement`.
	 * @param ctx the parse tree
	 */
	enterDirective_statement?: (ctx: Directive_statementContext) => void;
	/**
	 * Exit a parse tree produced by `LeviathonParser.directive_statement`.
	 * @param ctx the parse tree
	 */
	exitDirective_statement?: (ctx: Directive_statementContext) => void;

	/**
	 * Enter a parse tree produced by `LeviathonParser.meta_statement`.
	 * @param ctx the parse tree
	 */
	enterMeta_statement?: (ctx: Meta_statementContext) => void;
	/**
	 * Exit a parse tree produced by `LeviathonParser.meta_statement`.
	 * @param ctx the parse tree
	 */
	exitMeta_statement?: (ctx: Meta_statementContext) => void;

	/**
	 * Enter a parse tree produced by `LeviathonParser.node_names`.
	 * @param ctx the parse tree
	 */
	enterNode_names?: (ctx: Node_namesContext) => void;
	/**
	 * Exit a parse tree produced by `LeviathonParser.node_names`.
	 * @param ctx the parse tree
	 */
	exitNode_names?: (ctx: Node_namesContext) => void;

	/**
	 * Enter a parse tree produced by `LeviathonParser.node_thk_id`.
	 * @param ctx the parse tree
	 */
	enterNode_thk_id?: (ctx: Node_thk_idContext) => void;
	/**
	 * Exit a parse tree produced by `LeviathonParser.node_thk_id`.
	 * @param ctx the parse tree
	 */
	exitNode_thk_id?: (ctx: Node_thk_idContext) => void;

	/**
	 * Enter a parse tree produced by `LeviathonParser.node_index`.
	 * @param ctx the parse tree
	 */
	enterNode_index?: (ctx: Node_indexContext) => void;
	/**
	 * Exit a parse tree produced by `LeviathonParser.node_index`.
	 * @param ctx the parse tree
	 */
	exitNode_index?: (ctx: Node_indexContext) => void;

	/**
	 * Enter a parse tree produced by `LeviathonParser.meta_value`.
	 * @param ctx the parse tree
	 */
	enterMeta_value?: (ctx: Meta_valueContext) => void;
	/**
	 * Exit a parse tree produced by `LeviathonParser.meta_value`.
	 * @param ctx the parse tree
	 */
	exitMeta_value?: (ctx: Meta_valueContext) => void;

	/**
	 * Enter a parse tree produced by `LeviathonParser.import_path`.
	 * @param ctx the parse tree
	 */
	enterImport_path?: (ctx: Import_pathContext) => void;
	/**
	 * Exit a parse tree produced by `LeviathonParser.import_path`.
	 * @param ctx the parse tree
	 */
	exitImport_path?: (ctx: Import_pathContext) => void;

	/**
	 * Enter a parse tree produced by `LeviathonParser.params`.
	 * @param ctx the parse tree
	 */
	enterParams?: (ctx: ParamsContext) => void;
	/**
	 * Exit a parse tree produced by `LeviathonParser.params`.
	 * @param ctx the parse tree
	 */
	exitParams?: (ctx: ParamsContext) => void;

	/**
	 * Enter a parse tree produced by `LeviathonParser.if_statement`.
	 * @param ctx the parse tree
	 */
	enterIf_statement?: (ctx: If_statementContext) => void;
	/**
	 * Exit a parse tree produced by `LeviathonParser.if_statement`.
	 * @param ctx the parse tree
	 */
	exitIf_statement?: (ctx: If_statementContext) => void;

	/**
	 * Enter a parse tree produced by `LeviathonParser.else_statement`.
	 * @param ctx the parse tree
	 */
	enterElse_statement?: (ctx: Else_statementContext) => void;
	/**
	 * Exit a parse tree produced by `LeviathonParser.else_statement`.
	 * @param ctx the parse tree
	 */
	exitElse_statement?: (ctx: Else_statementContext) => void;

	/**
	 * Enter a parse tree produced by `LeviathonParser.elif_statement`.
	 * @param ctx the parse tree
	 */
	enterElif_statement?: (ctx: Elif_statementContext) => void;
	/**
	 * Exit a parse tree produced by `LeviathonParser.elif_statement`.
	 * @param ctx the parse tree
	 */
	exitElif_statement?: (ctx: Elif_statementContext) => void;

	/**
	 * Enter a parse tree produced by `LeviathonParser.endif_statement`.
	 * @param ctx the parse tree
	 */
	enterEndif_statement?: (ctx: Endif_statementContext) => void;
	/**
	 * Exit a parse tree produced by `LeviathonParser.endif_statement`.
	 * @param ctx the parse tree
	 */
	exitEndif_statement?: (ctx: Endif_statementContext) => void;

	/**
	 * Enter a parse tree produced by `LeviathonParser.endw_statement`.
	 * @param ctx the parse tree
	 */
	enterEndw_statement?: (ctx: Endw_statementContext) => void;
	/**
	 * Exit a parse tree produced by `LeviathonParser.endw_statement`.
	 * @param ctx the parse tree
	 */
	exitEndw_statement?: (ctx: Endw_statementContext) => void;

	/**
	 * Enter a parse tree produced by `LeviathonParser.random_statement`.
	 * @param ctx the parse tree
	 */
	enterRandom_statement?: (ctx: Random_statementContext) => void;
	/**
	 * Exit a parse tree produced by `LeviathonParser.random_statement`.
	 * @param ctx the parse tree
	 */
	exitRandom_statement?: (ctx: Random_statementContext) => void;

	/**
	 * Enter a parse tree produced by `LeviathonParser.elser_statement`.
	 * @param ctx the parse tree
	 */
	enterElser_statement?: (ctx: Elser_statementContext) => void;
	/**
	 * Exit a parse tree produced by `LeviathonParser.elser_statement`.
	 * @param ctx the parse tree
	 */
	exitElser_statement?: (ctx: Elser_statementContext) => void;

	/**
	 * Enter a parse tree produced by `LeviathonParser.endr_statement`.
	 * @param ctx the parse tree
	 */
	enterEndr_statement?: (ctx: Endr_statementContext) => void;
	/**
	 * Exit a parse tree produced by `LeviathonParser.endr_statement`.
	 * @param ctx the parse tree
	 */
	exitEndr_statement?: (ctx: Endr_statementContext) => void;

	/**
	 * Enter a parse tree produced by `LeviathonParser.endrw_statement`.
	 * @param ctx the parse tree
	 */
	enterEndrw_statement?: (ctx: Endrw_statementContext) => void;
	/**
	 * Exit a parse tree produced by `LeviathonParser.endrw_statement`.
	 * @param ctx the parse tree
	 */
	exitEndrw_statement?: (ctx: Endrw_statementContext) => void;

	/**
	 * Enter a parse tree produced by `LeviathonParser.nop_statement`.
	 * @param ctx the parse tree
	 */
	enterNop_statement?: (ctx: Nop_statementContext) => void;
	/**
	 * Exit a parse tree produced by `LeviathonParser.nop_statement`.
	 * @param ctx the parse tree
	 */
	exitNop_statement?: (ctx: Nop_statementContext) => void;

	/**
	 * Enter a parse tree produced by `LeviathonParser.control_statement`.
	 * @param ctx the parse tree
	 */
	enterControl_statement?: (ctx: Control_statementContext) => void;
	/**
	 * Exit a parse tree produced by `LeviathonParser.control_statement`.
	 * @param ctx the parse tree
	 */
	exitControl_statement?: (ctx: Control_statementContext) => void;

	/**
	 * Enter a parse tree produced by `LeviathonParser.register_statement`.
	 * @param ctx the parse tree
	 */
	enterRegister_statement?: (ctx: Register_statementContext) => void;
	/**
	 * Exit a parse tree produced by `LeviathonParser.register_statement`.
	 * @param ctx the parse tree
	 */
	exitRegister_statement?: (ctx: Register_statementContext) => void;

	/**
	 * Enter a parse tree produced by `LeviathonParser.register_condition`.
	 * @param ctx the parse tree
	 */
	enterRegister_condition?: (ctx: Register_conditionContext) => void;
	/**
	 * Exit a parse tree produced by `LeviathonParser.register_condition`.
	 * @param ctx the parse tree
	 */
	exitRegister_condition?: (ctx: Register_conditionContext) => void;
}

