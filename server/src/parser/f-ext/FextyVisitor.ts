// Generated from ./server/grammar/f-ext/Fexty.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { FileContext } from "./FextyParser";
import { F_extensionContext } from "./FextyParser";
import { Fexty_ruleContext } from "./FextyParser";
import { Fexty_rule_bodyContext } from "./FextyParser";
import { Fexty_inline_ruleContext } from "./FextyParser";
import { Chained_inline_functionContext } from "./FextyParser";
import { Chained_functionContext } from "./FextyParser";
import { Fexty_rule_function_declaratorContext } from "./FextyParser";
import { Parameter_clauseContext } from "./FextyParser";
import { Otherwise_clauseContext } from "./FextyParser";
import { Function_paramsContext } from "./FextyParser";
import { Binding_parameterContext } from "./FextyParser";
import { Enum_parameterContext } from "./FextyParser";
import { Defined_parameterContext } from "./FextyParser";
import { ParameterContext } from "./FextyParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `FextyParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface FextyVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `FextyParser.file`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFile?: (ctx: FileContext) => Result;

	/**
	 * Visit a parse tree produced by `FextyParser.f_extension`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitF_extension?: (ctx: F_extensionContext) => Result;

	/**
	 * Visit a parse tree produced by `FextyParser.fexty_rule`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFexty_rule?: (ctx: Fexty_ruleContext) => Result;

	/**
	 * Visit a parse tree produced by `FextyParser.fexty_rule_body`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFexty_rule_body?: (ctx: Fexty_rule_bodyContext) => Result;

	/**
	 * Visit a parse tree produced by `FextyParser.fexty_inline_rule`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFexty_inline_rule?: (ctx: Fexty_inline_ruleContext) => Result;

	/**
	 * Visit a parse tree produced by `FextyParser.chained_inline_function`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitChained_inline_function?: (ctx: Chained_inline_functionContext) => Result;

	/**
	 * Visit a parse tree produced by `FextyParser.chained_function`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitChained_function?: (ctx: Chained_functionContext) => Result;

	/**
	 * Visit a parse tree produced by `FextyParser.fexty_rule_function_declarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFexty_rule_function_declarator?: (ctx: Fexty_rule_function_declaratorContext) => Result;

	/**
	 * Visit a parse tree produced by `FextyParser.parameter_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameter_clause?: (ctx: Parameter_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `FextyParser.otherwise_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOtherwise_clause?: (ctx: Otherwise_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `FextyParser.function_params`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_params?: (ctx: Function_paramsContext) => Result;

	/**
	 * Visit a parse tree produced by `FextyParser.binding_parameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinding_parameter?: (ctx: Binding_parameterContext) => Result;

	/**
	 * Visit a parse tree produced by `FextyParser.enum_parameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnum_parameter?: (ctx: Enum_parameterContext) => Result;

	/**
	 * Visit a parse tree produced by `FextyParser.defined_parameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefined_parameter?: (ctx: Defined_parameterContext) => Result;

	/**
	 * Visit a parse tree produced by `FextyParser.parameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameter?: (ctx: ParameterContext) => Result;
}

