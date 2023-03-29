// Generated from ./server/grammar/fand/FandParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { IdentifierContext } from "./FandParser";
import { Register_nameContext } from "./FandParser";
import { Thk_nameContext } from "./FandParser";
import { Hex_number_no_prefixContext } from "./FandParser";
import { At_pathContext } from "./FandParser";
import { Through_pathContext } from "./FandParser";
import { Is_monsterContext } from "./FandParser";
import { Register_declarationContext } from "./FandParser";
import { Thk_aliasContext } from "./FandParser";
import { Has_entriesContext } from "./FandParser";
import { PathContext } from "./FandParser";
import { Empty_lineContext } from "./FandParser";
import { Fand_lineContext } from "./FandParser";
import { ProjectContext } from "./FandParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `FandParser`.
 */
export interface FandParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `FandParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `FandParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `FandParser.register_name`.
	 * @param ctx the parse tree
	 */
	enterRegister_name?: (ctx: Register_nameContext) => void;
	/**
	 * Exit a parse tree produced by `FandParser.register_name`.
	 * @param ctx the parse tree
	 */
	exitRegister_name?: (ctx: Register_nameContext) => void;

	/**
	 * Enter a parse tree produced by `FandParser.thk_name`.
	 * @param ctx the parse tree
	 */
	enterThk_name?: (ctx: Thk_nameContext) => void;
	/**
	 * Exit a parse tree produced by `FandParser.thk_name`.
	 * @param ctx the parse tree
	 */
	exitThk_name?: (ctx: Thk_nameContext) => void;

	/**
	 * Enter a parse tree produced by `FandParser.hex_number_no_prefix`.
	 * @param ctx the parse tree
	 */
	enterHex_number_no_prefix?: (ctx: Hex_number_no_prefixContext) => void;
	/**
	 * Exit a parse tree produced by `FandParser.hex_number_no_prefix`.
	 * @param ctx the parse tree
	 */
	exitHex_number_no_prefix?: (ctx: Hex_number_no_prefixContext) => void;

	/**
	 * Enter a parse tree produced by `FandParser.at_path`.
	 * @param ctx the parse tree
	 */
	enterAt_path?: (ctx: At_pathContext) => void;
	/**
	 * Exit a parse tree produced by `FandParser.at_path`.
	 * @param ctx the parse tree
	 */
	exitAt_path?: (ctx: At_pathContext) => void;

	/**
	 * Enter a parse tree produced by `FandParser.through_path`.
	 * @param ctx the parse tree
	 */
	enterThrough_path?: (ctx: Through_pathContext) => void;
	/**
	 * Exit a parse tree produced by `FandParser.through_path`.
	 * @param ctx the parse tree
	 */
	exitThrough_path?: (ctx: Through_pathContext) => void;

	/**
	 * Enter a parse tree produced by `FandParser.is_monster`.
	 * @param ctx the parse tree
	 */
	enterIs_monster?: (ctx: Is_monsterContext) => void;
	/**
	 * Exit a parse tree produced by `FandParser.is_monster`.
	 * @param ctx the parse tree
	 */
	exitIs_monster?: (ctx: Is_monsterContext) => void;

	/**
	 * Enter a parse tree produced by `FandParser.register_declaration`.
	 * @param ctx the parse tree
	 */
	enterRegister_declaration?: (ctx: Register_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `FandParser.register_declaration`.
	 * @param ctx the parse tree
	 */
	exitRegister_declaration?: (ctx: Register_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `FandParser.thk_alias`.
	 * @param ctx the parse tree
	 */
	enterThk_alias?: (ctx: Thk_aliasContext) => void;
	/**
	 * Exit a parse tree produced by `FandParser.thk_alias`.
	 * @param ctx the parse tree
	 */
	exitThk_alias?: (ctx: Thk_aliasContext) => void;

	/**
	 * Enter a parse tree produced by `FandParser.has_entries`.
	 * @param ctx the parse tree
	 */
	enterHas_entries?: (ctx: Has_entriesContext) => void;
	/**
	 * Exit a parse tree produced by `FandParser.has_entries`.
	 * @param ctx the parse tree
	 */
	exitHas_entries?: (ctx: Has_entriesContext) => void;

	/**
	 * Enter a parse tree produced by `FandParser.path`.
	 * @param ctx the parse tree
	 */
	enterPath?: (ctx: PathContext) => void;
	/**
	 * Exit a parse tree produced by `FandParser.path`.
	 * @param ctx the parse tree
	 */
	exitPath?: (ctx: PathContext) => void;

	/**
	 * Enter a parse tree produced by `FandParser.empty_line`.
	 * @param ctx the parse tree
	 */
	enterEmpty_line?: (ctx: Empty_lineContext) => void;
	/**
	 * Exit a parse tree produced by `FandParser.empty_line`.
	 * @param ctx the parse tree
	 */
	exitEmpty_line?: (ctx: Empty_lineContext) => void;

	/**
	 * Enter a parse tree produced by `FandParser.fand_line`.
	 * @param ctx the parse tree
	 */
	enterFand_line?: (ctx: Fand_lineContext) => void;
	/**
	 * Exit a parse tree produced by `FandParser.fand_line`.
	 * @param ctx the parse tree
	 */
	exitFand_line?: (ctx: Fand_lineContext) => void;

	/**
	 * Enter a parse tree produced by `FandParser.project`.
	 * @param ctx the parse tree
	 */
	enterProject?: (ctx: ProjectContext) => void;
	/**
	 * Exit a parse tree produced by `FandParser.project`.
	 * @param ctx the parse tree
	 */
	exitProject?: (ctx: ProjectContext) => void;
}

