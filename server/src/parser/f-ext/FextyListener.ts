// Generated from ./server/grammar/f-ext/Fexty.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { FileContext } from "./FextyParser";
import { F_extensionContext } from "./FextyParser";
import { Fexty_ruleContext } from "./FextyParser";
import { Fexty_inline_ruleContext } from "./FextyParser";
import { Chained_inline_functionContext } from "./FextyParser";
import { Chained_functionContext } from "./FextyParser";
import { Fexty_rule_bodyContext } from "./FextyParser";
import { Fexty_rule_function_declaratorContext } from "./FextyParser";
import { Parameter_clauseContext } from "./FextyParser";
import { Otherwise_clauseContext } from "./FextyParser";
import { Function_paramsContext } from "./FextyParser";
import { Binding_parameterContext } from "./FextyParser";
import { Enum_parameterContext } from "./FextyParser";
import { Defined_parameterContext } from "./FextyParser";
import { ParameterContext } from "./FextyParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `FextyParser`.
 */
export interface FextyListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `FextyParser.file`.
	 * @param ctx the parse tree
	 */
	enterFile?: (ctx: FileContext) => void;
	/**
	 * Exit a parse tree produced by `FextyParser.file`.
	 * @param ctx the parse tree
	 */
	exitFile?: (ctx: FileContext) => void;

	/**
	 * Enter a parse tree produced by `FextyParser.f_extension`.
	 * @param ctx the parse tree
	 */
	enterF_extension?: (ctx: F_extensionContext) => void;
	/**
	 * Exit a parse tree produced by `FextyParser.f_extension`.
	 * @param ctx the parse tree
	 */
	exitF_extension?: (ctx: F_extensionContext) => void;

	/**
	 * Enter a parse tree produced by `FextyParser.fexty_rule`.
	 * @param ctx the parse tree
	 */
	enterFexty_rule?: (ctx: Fexty_ruleContext) => void;
	/**
	 * Exit a parse tree produced by `FextyParser.fexty_rule`.
	 * @param ctx the parse tree
	 */
	exitFexty_rule?: (ctx: Fexty_ruleContext) => void;

	/**
	 * Enter a parse tree produced by `FextyParser.fexty_inline_rule`.
	 * @param ctx the parse tree
	 */
	enterFexty_inline_rule?: (ctx: Fexty_inline_ruleContext) => void;
	/**
	 * Exit a parse tree produced by `FextyParser.fexty_inline_rule`.
	 * @param ctx the parse tree
	 */
	exitFexty_inline_rule?: (ctx: Fexty_inline_ruleContext) => void;

	/**
	 * Enter a parse tree produced by `FextyParser.chained_inline_function`.
	 * @param ctx the parse tree
	 */
	enterChained_inline_function?: (ctx: Chained_inline_functionContext) => void;
	/**
	 * Exit a parse tree produced by `FextyParser.chained_inline_function`.
	 * @param ctx the parse tree
	 */
	exitChained_inline_function?: (ctx: Chained_inline_functionContext) => void;

	/**
	 * Enter a parse tree produced by `FextyParser.chained_function`.
	 * @param ctx the parse tree
	 */
	enterChained_function?: (ctx: Chained_functionContext) => void;
	/**
	 * Exit a parse tree produced by `FextyParser.chained_function`.
	 * @param ctx the parse tree
	 */
	exitChained_function?: (ctx: Chained_functionContext) => void;

	/**
	 * Enter a parse tree produced by `FextyParser.fexty_rule_body`.
	 * @param ctx the parse tree
	 */
	enterFexty_rule_body?: (ctx: Fexty_rule_bodyContext) => void;
	/**
	 * Exit a parse tree produced by `FextyParser.fexty_rule_body`.
	 * @param ctx the parse tree
	 */
	exitFexty_rule_body?: (ctx: Fexty_rule_bodyContext) => void;

	/**
	 * Enter a parse tree produced by `FextyParser.fexty_rule_function_declarator`.
	 * @param ctx the parse tree
	 */
	enterFexty_rule_function_declarator?: (ctx: Fexty_rule_function_declaratorContext) => void;
	/**
	 * Exit a parse tree produced by `FextyParser.fexty_rule_function_declarator`.
	 * @param ctx the parse tree
	 */
	exitFexty_rule_function_declarator?: (ctx: Fexty_rule_function_declaratorContext) => void;

	/**
	 * Enter a parse tree produced by `FextyParser.parameter_clause`.
	 * @param ctx the parse tree
	 */
	enterParameter_clause?: (ctx: Parameter_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `FextyParser.parameter_clause`.
	 * @param ctx the parse tree
	 */
	exitParameter_clause?: (ctx: Parameter_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `FextyParser.otherwise_clause`.
	 * @param ctx the parse tree
	 */
	enterOtherwise_clause?: (ctx: Otherwise_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `FextyParser.otherwise_clause`.
	 * @param ctx the parse tree
	 */
	exitOtherwise_clause?: (ctx: Otherwise_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `FextyParser.function_params`.
	 * @param ctx the parse tree
	 */
	enterFunction_params?: (ctx: Function_paramsContext) => void;
	/**
	 * Exit a parse tree produced by `FextyParser.function_params`.
	 * @param ctx the parse tree
	 */
	exitFunction_params?: (ctx: Function_paramsContext) => void;

	/**
	 * Enter a parse tree produced by `FextyParser.binding_parameter`.
	 * @param ctx the parse tree
	 */
	enterBinding_parameter?: (ctx: Binding_parameterContext) => void;
	/**
	 * Exit a parse tree produced by `FextyParser.binding_parameter`.
	 * @param ctx the parse tree
	 */
	exitBinding_parameter?: (ctx: Binding_parameterContext) => void;

	/**
	 * Enter a parse tree produced by `FextyParser.enum_parameter`.
	 * @param ctx the parse tree
	 */
	enterEnum_parameter?: (ctx: Enum_parameterContext) => void;
	/**
	 * Exit a parse tree produced by `FextyParser.enum_parameter`.
	 * @param ctx the parse tree
	 */
	exitEnum_parameter?: (ctx: Enum_parameterContext) => void;

	/**
	 * Enter a parse tree produced by `FextyParser.defined_parameter`.
	 * @param ctx the parse tree
	 */
	enterDefined_parameter?: (ctx: Defined_parameterContext) => void;
	/**
	 * Exit a parse tree produced by `FextyParser.defined_parameter`.
	 * @param ctx the parse tree
	 */
	exitDefined_parameter?: (ctx: Defined_parameterContext) => void;

	/**
	 * Enter a parse tree produced by `FextyParser.parameter`.
	 * @param ctx the parse tree
	 */
	enterParameter?: (ctx: ParameterContext) => void;
	/**
	 * Exit a parse tree produced by `FextyParser.parameter`.
	 * @param ctx the parse tree
	 */
	exitParameter?: (ctx: ParameterContext) => void;
}

