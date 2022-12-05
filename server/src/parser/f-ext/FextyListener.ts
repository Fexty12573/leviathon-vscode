// Generated from ./server/grammar/f-ext/Fexty.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
	 * Enter a parse tree produced by `FextyParser.inline_function`.
	 * @param ctx the parse tree
	 */
	enterInline_function?: (ctx: Inline_functionContext) => void;
	/**
	 * Exit a parse tree produced by `FextyParser.inline_function`.
	 * @param ctx the parse tree
	 */
	exitInline_function?: (ctx: Inline_functionContext) => void;

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
	 * Enter a parse tree produced by `FextyParser.fexty_rule_predefined_function_name`.
	 * @param ctx the parse tree
	 */
	enterFexty_rule_predefined_function_name?: (ctx: Fexty_rule_predefined_function_nameContext) => void;
	/**
	 * Exit a parse tree produced by `FextyParser.fexty_rule_predefined_function_name`.
	 * @param ctx the parse tree
	 */
	exitFexty_rule_predefined_function_name?: (ctx: Fexty_rule_predefined_function_nameContext) => void;

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
	 * Enter a parse tree produced by `FextyParser.fexty_rule_parameter_clause`.
	 * @param ctx the parse tree
	 */
	enterFexty_rule_parameter_clause?: (ctx: Fexty_rule_parameter_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `FextyParser.fexty_rule_parameter_clause`.
	 * @param ctx the parse tree
	 */
	exitFexty_rule_parameter_clause?: (ctx: Fexty_rule_parameter_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `FextyParser.fexty_rule_otherwise_clause`.
	 * @param ctx the parse tree
	 */
	enterFexty_rule_otherwise_clause?: (ctx: Fexty_rule_otherwise_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `FextyParser.fexty_rule_otherwise_clause`.
	 * @param ctx the parse tree
	 */
	exitFexty_rule_otherwise_clause?: (ctx: Fexty_rule_otherwise_clauseContext) => void;
}

