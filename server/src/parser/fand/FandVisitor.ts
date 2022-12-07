// Generated from ./server/grammar/fand/Fand.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { Hex_number_no_prefixContext } from "./FandParser";
import { At_pathContext } from "./FandParser";
import { Through_pathContext } from "./FandParser";
import { Is_monsterContext } from "./FandParser";
import { Register_declarationContext } from "./FandParser";
import { Thk_aliasContext } from "./FandParser";
import { Has_entriesContext } from "./FandParser";
import { PathContext } from "./FandParser";
import { Fand_lineContext } from "./FandParser";
import { ProjectContext } from "./FandParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `FandParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface FandVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `FandParser.hex_number_no_prefix`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHex_number_no_prefix?: (ctx: Hex_number_no_prefixContext) => Result;

	/**
	 * Visit a parse tree produced by `FandParser.at_path`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAt_path?: (ctx: At_pathContext) => Result;

	/**
	 * Visit a parse tree produced by `FandParser.through_path`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitThrough_path?: (ctx: Through_pathContext) => Result;

	/**
	 * Visit a parse tree produced by `FandParser.is_monster`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIs_monster?: (ctx: Is_monsterContext) => Result;

	/**
	 * Visit a parse tree produced by `FandParser.register_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRegister_declaration?: (ctx: Register_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `FandParser.thk_alias`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitThk_alias?: (ctx: Thk_aliasContext) => Result;

	/**
	 * Visit a parse tree produced by `FandParser.has_entries`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHas_entries?: (ctx: Has_entriesContext) => Result;

	/**
	 * Visit a parse tree produced by `FandParser.path`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPath?: (ctx: PathContext) => Result;

	/**
	 * Visit a parse tree produced by `FandParser.fand_line`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFand_line?: (ctx: Fand_lineContext) => Result;

	/**
	 * Visit a parse tree produced by `FandParser.project`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProject?: (ctx: ProjectContext) => Result;
}

