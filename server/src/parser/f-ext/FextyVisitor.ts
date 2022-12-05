// Generated from ./server/grammar/f-ext/Fexty.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { FileContext } from "./FextyParser";
import { F_extensionContext } from "./FextyParser";
import { Fexty_ruleContext } from "./FextyParser";
import { Fexty_inline_ruleContext } from "./FextyParser";
import { Inline_functionContext } from "./FextyParser";
import { Fexty_rule_bodyContext } from "./FextyParser";
import { Fexty_rule_predefined_function_nameContext } from "./FextyParser";
import { Fexty_rule_function_declaratorContext } from "./FextyParser";
import { Fexty_rule_parameter_clauseContext } from "./FextyParser";
import { Fexty_rule_otherwise_clauseContext } from "./FextyParser";


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
	 * Visit a parse tree produced by `FextyParser.fexty_inline_rule`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFexty_inline_rule?: (ctx: Fexty_inline_ruleContext) => Result;

	/**
	 * Visit a parse tree produced by `FextyParser.inline_function`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInline_function?: (ctx: Inline_functionContext) => Result;

	/**
	 * Visit a parse tree produced by `FextyParser.fexty_rule_body`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFexty_rule_body?: (ctx: Fexty_rule_bodyContext) => Result;

	/**
	 * Visit a parse tree produced by `FextyParser.fexty_rule_predefined_function_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFexty_rule_predefined_function_name?: (ctx: Fexty_rule_predefined_function_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `FextyParser.fexty_rule_function_declarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFexty_rule_function_declarator?: (ctx: Fexty_rule_function_declaratorContext) => Result;

	/**
	 * Visit a parse tree produced by `FextyParser.fexty_rule_parameter_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFexty_rule_parameter_clause?: (ctx: Fexty_rule_parameter_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `FextyParser.fexty_rule_otherwise_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFexty_rule_otherwise_clause?: (ctx: Fexty_rule_otherwise_clauseContext) => Result;
}

