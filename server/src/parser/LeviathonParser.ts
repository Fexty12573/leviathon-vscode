// Generated from ./server/grammar/Leviathon.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { LeviathonListener } from "./LeviathonListener";
import { LeviathonVisitor } from "./LeviathonVisitor";


export class LeviathonParser extends Parser {
	public static readonly IF = 1;
	public static readonly ELIF = 2;
	public static readonly ELSE = 3;
	public static readonly ENDIF = 4;
	public static readonly ENDW = 5;
	public static readonly DEF = 6;
	public static readonly ENDF = 7;
	public static readonly ENDDEF = 8;
	public static readonly ENDFUNCTION = 9;
	public static readonly RANDOM = 10;
	public static readonly ELSER = 11;
	public static readonly ELSERANDOM = 12;
	public static readonly ENDR = 13;
	public static readonly ENDRANDOM = 14;
	public static readonly ENDRW = 15;
	public static readonly ENDRANDOMW = 16;
	public static readonly RESET = 17;
	public static readonly REPEAT = 18;
	public static readonly RETURN = 19;
	public static readonly CONCLUDE = 20;
	public static readonly IMPORTLIB = 21;
	public static readonly IMPORTACT = 22;
	public static readonly AS = 23;
	public static readonly UNSAFE = 24;
	public static readonly SELF = 25;
	public static readonly FUNCTION = 26;
	public static readonly ACTION = 27;
	public static readonly CALL = 28;
	public static readonly LEFT_BRACKET = 29;
	public static readonly RIGHT_BRACKET = 30;
	public static readonly LEFT_PAREN = 31;
	public static readonly RIGHT_PAREN = 32;
	public static readonly EQ = 33;
	public static readonly NE = 34;
	public static readonly GT = 35;
	public static readonly LT = 36;
	public static readonly GEQ = 37;
	public static readonly LEQ = 38;
	public static readonly INCREMENT = 39;
	public static readonly RESET_VAL = 40;
	public static readonly CALL_OP = 41;
	public static readonly ACTION_OP = 42;
	public static readonly DIRECTIVE_OP = 43;
	public static readonly USELESS_OP = 44;
	public static readonly META_OP = 45;
	public static readonly COLON = 46;
	public static readonly COMMA = 47;
	public static readonly DOT = 48;
	public static readonly HASH = 49;
	public static readonly ALIAS_OP = 50;
	public static readonly QUOTE = 51;
	public static readonly REGISTER = 52;
	public static readonly ID = 53;
	public static readonly NUMBER = 54;
	public static readonly HEX_NUMBER = 55;
	public static readonly HEX_NO_PREFIX = 56;
	public static readonly QUOTED_PATH = 57;
	public static readonly RAW_FUNCTION = 58;
	public static readonly RAW_ACTION = 59;
	public static readonly RAW_CALL = 60;
	public static readonly SCOPED_RAW_CALL = 61;
	public static readonly LINESKIP = 62;
	public static readonly WS = 63;
	public static readonly RULE_program = 0;
	public static readonly RULE_importany = 1;
	public static readonly RULE_identifier = 2;
	public static readonly RULE_import_name = 3;
	public static readonly RULE_node_name = 4;
	public static readonly RULE_action_name = 5;
	public static readonly RULE_monster_name = 6;
	public static readonly RULE_function_name = 7;
	public static readonly RULE_meta_name = 8;
	public static readonly RULE_import_alias = 9;
	public static readonly RULE_monster_alias = 10;
	public static readonly RULE_import_library = 11;
	public static readonly RULE_import_actions = 12;
	public static readonly RULE_node = 13;
	public static readonly RULE_node_declaration = 14;
	public static readonly RULE_end_node = 15;
	public static readonly RULE_segment = 16;
	public static readonly RULE_node_call_statement = 17;
	public static readonly RULE_node_call = 18;
	public static readonly RULE_scoped_node_call = 19;
	public static readonly RULE_raw_node_call = 20;
	public static readonly RULE_scoped_raw_node_call = 21;
	public static readonly RULE_action_statement = 22;
	public static readonly RULE_action_call = 23;
	public static readonly RULE_raw_action_call = 24;
	public static readonly RULE_function_call = 25;
	public static readonly RULE_raw_function_call = 26;
	public static readonly RULE_directive_statement = 27;
	public static readonly RULE_meta_statement = 28;
	public static readonly RULE_node_names = 29;
	public static readonly RULE_node_thk_id = 30;
	public static readonly RULE_node_index = 31;
	public static readonly RULE_meta_value = 32;
	public static readonly RULE_import_path = 33;
	public static readonly RULE_params = 34;
	public static readonly RULE_if_statement = 35;
	public static readonly RULE_else_statement = 36;
	public static readonly RULE_elif_statement = 37;
	public static readonly RULE_endif_statement = 38;
	public static readonly RULE_endw_statement = 39;
	public static readonly RULE_random_statement = 40;
	public static readonly RULE_elser_statement = 41;
	public static readonly RULE_endr_statement = 42;
	public static readonly RULE_endrw_statement = 43;
	public static readonly RULE_nop_statement = 44;
	public static readonly RULE_control_statement = 45;
	public static readonly RULE_register_statement = 46;
	public static readonly RULE_register_condition = 47;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "importany", "identifier", "import_name", "node_name", "action_name", 
		"monster_name", "function_name", "meta_name", "import_alias", "monster_alias", 
		"import_library", "import_actions", "node", "node_declaration", "end_node", 
		"segment", "node_call_statement", "node_call", "scoped_node_call", "raw_node_call", 
		"scoped_raw_node_call", "action_statement", "action_call", "raw_action_call", 
		"function_call", "raw_function_call", "directive_statement", "meta_statement", 
		"node_names", "node_thk_id", "node_index", "meta_value", "import_path", 
		"params", "if_statement", "else_statement", "elif_statement", "endif_statement", 
		"endw_statement", "random_statement", "elser_statement", "endr_statement", 
		"endrw_statement", "nop_statement", "control_statement", "register_statement", 
		"register_condition",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'if'", "'elif'", "'else'", "'endif'", "'endwith'", "'def'", 
		"'endf'", "'enddef'", "'endfunction'", "'random'", "'elser'", "'elseRandom'", 
		"'endr'", "'endrandom'", "'endrwith'", "'endrandomwith'", "'reset'", "'repeat'", 
		"'return'", "'conclude'", "'importlibrary'", "'importactions'", "'as'", 
		"'unsafe'", "'self'", "'function'", "'action'", "'call'", "'['", "']'", 
		"'('", "')'", "'=='", "'!='", "'>'", "'<'", "'>='", "'<='", "'++'", "'|-'", 
		"'>>'", "'->'", "'=>'", "'*&'", "'@'", "':'", "','", "'.'", "'#'", "'&'", 
		"'\"'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "IF", "ELIF", "ELSE", "ENDIF", "ENDW", "DEF", "ENDF", "ENDDEF", 
		"ENDFUNCTION", "RANDOM", "ELSER", "ELSERANDOM", "ENDR", "ENDRANDOM", "ENDRW", 
		"ENDRANDOMW", "RESET", "REPEAT", "RETURN", "CONCLUDE", "IMPORTLIB", "IMPORTACT", 
		"AS", "UNSAFE", "SELF", "FUNCTION", "ACTION", "CALL", "LEFT_BRACKET", 
		"RIGHT_BRACKET", "LEFT_PAREN", "RIGHT_PAREN", "EQ", "NE", "GT", "LT", 
		"GEQ", "LEQ", "INCREMENT", "RESET_VAL", "CALL_OP", "ACTION_OP", "DIRECTIVE_OP", 
		"USELESS_OP", "META_OP", "COLON", "COMMA", "DOT", "HASH", "ALIAS_OP", 
		"QUOTE", "REGISTER", "ID", "NUMBER", "HEX_NUMBER", "HEX_NO_PREFIX", "QUOTED_PATH", 
		"RAW_FUNCTION", "RAW_ACTION", "RAW_CALL", "SCOPED_RAW_CALL", "LINESKIP", 
		"WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(LeviathonParser._LITERAL_NAMES, LeviathonParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return LeviathonParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Leviathon.g4"; }

	// @Override
	public get ruleNames(): string[] { return LeviathonParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return LeviathonParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(LeviathonParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, LeviathonParser.RULE_program);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 100;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 98;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case LeviathonParser.IMPORTLIB:
					case LeviathonParser.IMPORTACT:
						{
						this.state = 96;
						this.importany();
						}
						break;
					case LeviathonParser.LINESKIP:
						{
						this.state = 97;
						this.match(LeviathonParser.LINESKIP);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 102;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			}
			this.state = 107;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LeviathonParser.DEF || _la === LeviathonParser.LINESKIP) {
				{
				this.state = 105;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case LeviathonParser.DEF:
					{
					this.state = 103;
					this.node();
					}
					break;
				case LeviathonParser.LINESKIP:
					{
					this.state = 104;
					this.match(LeviathonParser.LINESKIP);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 109;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 110;
			this.match(LeviathonParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importany(): ImportanyContext {
		let _localctx: ImportanyContext = new ImportanyContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, LeviathonParser.RULE_importany);
		try {
			this.state = 114;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LeviathonParser.IMPORTLIB:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 112;
				this.import_library();
				}
				break;
			case LeviathonParser.IMPORTACT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 113;
				this.import_actions();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifier(): IdentifierContext {
		let _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, LeviathonParser.RULE_identifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 116;
			_localctx._id = this.match(LeviathonParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public import_name(): Import_nameContext {
		let _localctx: Import_nameContext = new Import_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, LeviathonParser.RULE_import_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 118;
			_localctx._name = this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public node_name(): Node_nameContext {
		let _localctx: Node_nameContext = new Node_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, LeviathonParser.RULE_node_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 120;
			_localctx._name = this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public action_name(): Action_nameContext {
		let _localctx: Action_nameContext = new Action_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, LeviathonParser.RULE_action_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 122;
			_localctx._name = this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public monster_name(): Monster_nameContext {
		let _localctx: Monster_nameContext = new Monster_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, LeviathonParser.RULE_monster_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 124;
			_localctx._name = this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public function_name(): Function_nameContext {
		let _localctx: Function_nameContext = new Function_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, LeviathonParser.RULE_function_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 126;
			_localctx._name = this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public meta_name(): Meta_nameContext {
		let _localctx: Meta_nameContext = new Meta_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, LeviathonParser.RULE_meta_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 128;
			_localctx._name = this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public import_alias(): Import_aliasContext {
		let _localctx: Import_aliasContext = new Import_aliasContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, LeviathonParser.RULE_import_alias);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 130;
			_localctx._name = this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public monster_alias(): Monster_aliasContext {
		let _localctx: Monster_aliasContext = new Monster_aliasContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, LeviathonParser.RULE_monster_alias);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 132;
			_localctx._name = this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public import_library(): Import_libraryContext {
		let _localctx: Import_libraryContext = new Import_libraryContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, LeviathonParser.RULE_import_library);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 134;
			this.match(LeviathonParser.IMPORTLIB);
			this.state = 137;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LeviathonParser.ID:
				{
				this.state = 135;
				this.import_name();
				}
				break;
			case LeviathonParser.QUOTE:
				{
				this.state = 136;
				this.import_path();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 139;
			this.match(LeviathonParser.AS);
			this.state = 140;
			_localctx._alias = this.match(LeviathonParser.ID);
			this.state = 141;
			this.match(LeviathonParser.LINESKIP);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public import_actions(): Import_actionsContext {
		let _localctx: Import_actionsContext = new Import_actionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, LeviathonParser.RULE_import_actions);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 143;
			this.match(LeviathonParser.IMPORTACT);
			this.state = 144;
			this.monster_name();
			this.state = 145;
			this.match(LeviathonParser.AS);
			this.state = 146;
			_localctx._alias = this.identifier();
			this.state = 147;
			this.match(LeviathonParser.LINESKIP);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public node(): NodeContext {
		let _localctx: NodeContext = new NodeContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, LeviathonParser.RULE_node);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 149;
			this.node_declaration();
			this.state = 153;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LeviathonParser.IF) | (1 << LeviathonParser.RANDOM) | (1 << LeviathonParser.RESET) | (1 << LeviathonParser.REPEAT) | (1 << LeviathonParser.RETURN) | (1 << LeviathonParser.CONCLUDE) | (1 << LeviathonParser.SELF) | (1 << LeviathonParser.LEFT_BRACKET))) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (LeviathonParser.CALL_OP - 41)) | (1 << (LeviathonParser.ACTION_OP - 41)) | (1 << (LeviathonParser.DIRECTIVE_OP - 41)) | (1 << (LeviathonParser.USELESS_OP - 41)) | (1 << (LeviathonParser.RAW_FUNCTION - 41)))) !== 0)) {
				{
				{
				this.state = 150;
				this.segment();
				}
				}
				this.state = 155;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 156;
			this.end_node();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public node_declaration(): Node_declarationContext {
		let _localctx: Node_declarationContext = new Node_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, LeviathonParser.RULE_node_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 158;
			this.match(LeviathonParser.DEF);
			this.state = 159;
			this.node_names();
			this.state = 161;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LeviathonParser.COLON) {
				{
				this.state = 160;
				this.node_thk_id();
				}
			}

			this.state = 164;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LeviathonParser.META_OP) {
				{
				this.state = 163;
				this.node_index();
				}
			}

			this.state = 166;
			this.match(LeviathonParser.LINESKIP);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public end_node(): End_nodeContext {
		let _localctx: End_nodeContext = new End_nodeContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, LeviathonParser.RULE_end_node);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 168;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LeviathonParser.ENDF) | (1 << LeviathonParser.ENDDEF) | (1 << LeviathonParser.ENDFUNCTION))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 170;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LeviathonParser.META_OP) {
				{
				this.state = 169;
				this.meta_statement();
				}
			}

			this.state = 172;
			this.match(LeviathonParser.LINESKIP);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public segment(): SegmentContext {
		let _localctx: SegmentContext = new SegmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, LeviathonParser.RULE_segment);
		let _la: number;
		try {
			this.state = 279;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LeviathonParser.IF:
				_localctx = new Segtype_ifContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 174;
				this.if_statement();
				this.state = 178;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LeviathonParser.IF) | (1 << LeviathonParser.RANDOM) | (1 << LeviathonParser.RESET) | (1 << LeviathonParser.REPEAT) | (1 << LeviathonParser.RETURN) | (1 << LeviathonParser.CONCLUDE) | (1 << LeviathonParser.SELF) | (1 << LeviathonParser.LEFT_BRACKET))) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (LeviathonParser.CALL_OP - 41)) | (1 << (LeviathonParser.ACTION_OP - 41)) | (1 << (LeviathonParser.DIRECTIVE_OP - 41)) | (1 << (LeviathonParser.USELESS_OP - 41)) | (1 << (LeviathonParser.RAW_FUNCTION - 41)))) !== 0)) {
					{
					{
					this.state = 175;
					this.segment();
					}
					}
					this.state = 180;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 190;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === LeviathonParser.ELIF) {
					{
					{
					this.state = 181;
					this.elif_statement();
					this.state = 185;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LeviathonParser.IF) | (1 << LeviathonParser.RANDOM) | (1 << LeviathonParser.RESET) | (1 << LeviathonParser.REPEAT) | (1 << LeviathonParser.RETURN) | (1 << LeviathonParser.CONCLUDE) | (1 << LeviathonParser.SELF) | (1 << LeviathonParser.LEFT_BRACKET))) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (LeviathonParser.CALL_OP - 41)) | (1 << (LeviathonParser.ACTION_OP - 41)) | (1 << (LeviathonParser.DIRECTIVE_OP - 41)) | (1 << (LeviathonParser.USELESS_OP - 41)) | (1 << (LeviathonParser.RAW_FUNCTION - 41)))) !== 0)) {
						{
						{
						this.state = 182;
						this.segment();
						}
						}
						this.state = 187;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					}
					this.state = 192;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 200;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LeviathonParser.ELSE) {
					{
					this.state = 193;
					this.else_statement();
					this.state = 197;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LeviathonParser.IF) | (1 << LeviathonParser.RANDOM) | (1 << LeviathonParser.RESET) | (1 << LeviathonParser.REPEAT) | (1 << LeviathonParser.RETURN) | (1 << LeviathonParser.CONCLUDE) | (1 << LeviathonParser.SELF) | (1 << LeviathonParser.LEFT_BRACKET))) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (LeviathonParser.CALL_OP - 41)) | (1 << (LeviathonParser.ACTION_OP - 41)) | (1 << (LeviathonParser.DIRECTIVE_OP - 41)) | (1 << (LeviathonParser.USELESS_OP - 41)) | (1 << (LeviathonParser.RAW_FUNCTION - 41)))) !== 0)) {
						{
						{
						this.state = 194;
						this.segment();
						}
						}
						this.state = 199;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 204;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case LeviathonParser.ENDIF:
					{
					this.state = 202;
					this.endif_statement();
					}
					break;
				case LeviathonParser.ENDW:
					{
					this.state = 203;
					this.endw_statement();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case LeviathonParser.RANDOM:
				_localctx = new Segtype_randomContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 206;
				this.random_statement();
				this.state = 210;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LeviathonParser.IF) | (1 << LeviathonParser.RANDOM) | (1 << LeviathonParser.RESET) | (1 << LeviathonParser.REPEAT) | (1 << LeviathonParser.RETURN) | (1 << LeviathonParser.CONCLUDE) | (1 << LeviathonParser.SELF) | (1 << LeviathonParser.LEFT_BRACKET))) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (LeviathonParser.CALL_OP - 41)) | (1 << (LeviathonParser.ACTION_OP - 41)) | (1 << (LeviathonParser.DIRECTIVE_OP - 41)) | (1 << (LeviathonParser.USELESS_OP - 41)) | (1 << (LeviathonParser.RAW_FUNCTION - 41)))) !== 0)) {
					{
					{
					this.state = 207;
					this.segment();
					}
					}
					this.state = 212;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 222;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === LeviathonParser.ELSER || _la === LeviathonParser.ELSERANDOM) {
					{
					{
					this.state = 213;
					this.elser_statement();
					this.state = 217;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LeviathonParser.IF) | (1 << LeviathonParser.RANDOM) | (1 << LeviathonParser.RESET) | (1 << LeviathonParser.REPEAT) | (1 << LeviathonParser.RETURN) | (1 << LeviathonParser.CONCLUDE) | (1 << LeviathonParser.SELF) | (1 << LeviathonParser.LEFT_BRACKET))) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (LeviathonParser.CALL_OP - 41)) | (1 << (LeviathonParser.ACTION_OP - 41)) | (1 << (LeviathonParser.DIRECTIVE_OP - 41)) | (1 << (LeviathonParser.USELESS_OP - 41)) | (1 << (LeviathonParser.RAW_FUNCTION - 41)))) !== 0)) {
						{
						{
						this.state = 214;
						this.segment();
						}
						}
						this.state = 219;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					}
					this.state = 224;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 227;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case LeviathonParser.ENDR:
				case LeviathonParser.ENDRANDOM:
					{
					this.state = 225;
					this.endr_statement();
					}
					break;
				case LeviathonParser.ENDRW:
				case LeviathonParser.ENDRANDOMW:
					{
					this.state = 226;
					this.endrw_statement();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case LeviathonParser.USELESS_OP:
				_localctx = new Segtype_nopContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 229;
				this.nop_statement();
				}
				break;
			case LeviathonParser.RESET:
			case LeviathonParser.REPEAT:
			case LeviathonParser.RETURN:
			case LeviathonParser.CONCLUDE:
				_localctx = new Segtype_controlContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 230;
				this.control_statement();
				}
				break;
			case LeviathonParser.LEFT_BRACKET:
				_localctx = new Segtype_registerContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 231;
				this.register_statement();
				}
				break;
			case LeviathonParser.SELF:
			case LeviathonParser.RAW_FUNCTION:
				_localctx = new Segtype_functionContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 236;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case LeviathonParser.SELF:
					{
					this.state = 232;
					this.match(LeviathonParser.SELF);
					this.state = 233;
					this.match(LeviathonParser.DOT);
					this.state = 234;
					this.function_call();
					}
					break;
				case LeviathonParser.RAW_FUNCTION:
					{
					this.state = 235;
					this.raw_function_call();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 239;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LeviathonParser.ACTION_OP) {
					{
					this.state = 238;
					this.action_statement();
					}
				}

				this.state = 242;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LeviathonParser.CALL_OP) {
					{
					this.state = 241;
					this.node_call_statement();
					}
				}

				this.state = 245;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LeviathonParser.DIRECTIVE_OP) {
					{
					this.state = 244;
					this.directive_statement();
					}
				}

				this.state = 248;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LeviathonParser.META_OP) {
					{
					this.state = 247;
					this.meta_statement();
					}
				}

				this.state = 250;
				this.match(LeviathonParser.LINESKIP);
				}
				break;
			case LeviathonParser.ACTION_OP:
				_localctx = new Segtype_actionContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 252;
				this.action_statement();
				this.state = 254;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LeviathonParser.CALL_OP) {
					{
					this.state = 253;
					this.node_call_statement();
					}
				}

				this.state = 257;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LeviathonParser.DIRECTIVE_OP) {
					{
					this.state = 256;
					this.directive_statement();
					}
				}

				this.state = 260;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LeviathonParser.META_OP) {
					{
					this.state = 259;
					this.meta_statement();
					}
				}

				this.state = 262;
				this.match(LeviathonParser.LINESKIP);
				}
				break;
			case LeviathonParser.CALL_OP:
				_localctx = new Segtype_nodeContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 264;
				this.node_call_statement();
				this.state = 266;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LeviathonParser.DIRECTIVE_OP) {
					{
					this.state = 265;
					this.directive_statement();
					}
				}

				this.state = 269;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LeviathonParser.META_OP) {
					{
					this.state = 268;
					this.meta_statement();
					}
				}

				this.state = 271;
				this.match(LeviathonParser.LINESKIP);
				}
				break;
			case LeviathonParser.DIRECTIVE_OP:
				_localctx = new Segtype_directiveContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 273;
				this.directive_statement();
				this.state = 275;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LeviathonParser.META_OP) {
					{
					this.state = 274;
					this.meta_statement();
					}
				}

				this.state = 277;
				this.match(LeviathonParser.LINESKIP);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public node_call_statement(): Node_call_statementContext {
		let _localctx: Node_call_statementContext = new Node_call_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, LeviathonParser.RULE_node_call_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 285;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
			case 1:
				{
				this.state = 281;
				this.node_call();
				}
				break;

			case 2:
				{
				this.state = 282;
				this.scoped_node_call();
				}
				break;

			case 3:
				{
				this.state = 283;
				this.raw_node_call();
				}
				break;

			case 4:
				{
				this.state = 284;
				this.scoped_raw_node_call();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public node_call(): Node_callContext {
		let _localctx: Node_callContext = new Node_callContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, LeviathonParser.RULE_node_call);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 287;
			this.match(LeviathonParser.CALL_OP);
			this.state = 288;
			this.node_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public scoped_node_call(): Scoped_node_callContext {
		let _localctx: Scoped_node_callContext = new Scoped_node_callContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, LeviathonParser.RULE_scoped_node_call);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 290;
			this.match(LeviathonParser.CALL_OP);
			this.state = 291;
			this.import_alias();
			this.state = 292;
			this.match(LeviathonParser.DOT);
			this.state = 293;
			this.node_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public raw_node_call(): Raw_node_callContext {
		let _localctx: Raw_node_callContext = new Raw_node_callContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, LeviathonParser.RULE_raw_node_call);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 295;
			this.match(LeviathonParser.CALL_OP);
			this.state = 296;
			_localctx._call = this.match(LeviathonParser.RAW_CALL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public scoped_raw_node_call(): Scoped_raw_node_callContext {
		let _localctx: Scoped_raw_node_callContext = new Scoped_raw_node_callContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, LeviathonParser.RULE_scoped_raw_node_call);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 298;
			this.match(LeviathonParser.CALL_OP);
			this.state = 299;
			this.import_alias();
			this.state = 300;
			this.match(LeviathonParser.DOT);
			this.state = 301;
			this.match(LeviathonParser.HASH);
			this.state = 302;
			_localctx._node_id = this.match(LeviathonParser.NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public action_statement(): Action_statementContext {
		let _localctx: Action_statementContext = new Action_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, LeviathonParser.RULE_action_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 306;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 33, this._ctx) ) {
			case 1:
				{
				this.state = 304;
				this.action_call();
				}
				break;

			case 2:
				{
				this.state = 305;
				this.raw_action_call();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public action_call(): Action_callContext {
		let _localctx: Action_callContext = new Action_callContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, LeviathonParser.RULE_action_call);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 308;
			this.match(LeviathonParser.ACTION_OP);
			this.state = 309;
			this.monster_alias();
			this.state = 310;
			this.match(LeviathonParser.DOT);
			this.state = 311;
			this.action_name();
			this.state = 312;
			this.match(LeviathonParser.LEFT_PAREN);
			this.state = 314;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (LeviathonParser.ID - 53)) | (1 << (LeviathonParser.NUMBER - 53)) | (1 << (LeviathonParser.HEX_NUMBER - 53)))) !== 0)) {
				{
				this.state = 313;
				this.params();
				}
			}

			this.state = 316;
			this.match(LeviathonParser.RIGHT_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public raw_action_call(): Raw_action_callContext {
		let _localctx: Raw_action_callContext = new Raw_action_callContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, LeviathonParser.RULE_raw_action_call);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 318;
			this.match(LeviathonParser.ACTION_OP);
			this.state = 319;
			_localctx._action = this.match(LeviathonParser.RAW_ACTION);
			this.state = 320;
			this.match(LeviathonParser.LEFT_PAREN);
			this.state = 322;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (LeviathonParser.ID - 53)) | (1 << (LeviathonParser.NUMBER - 53)) | (1 << (LeviathonParser.HEX_NUMBER - 53)))) !== 0)) {
				{
				this.state = 321;
				this.params();
				}
			}

			this.state = 324;
			this.match(LeviathonParser.RIGHT_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public function_call(): Function_callContext {
		let _localctx: Function_callContext = new Function_callContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, LeviathonParser.RULE_function_call);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 326;
			_localctx._name = this.match(LeviathonParser.ID);
			this.state = 332;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LeviathonParser.LEFT_PAREN) {
				{
				this.state = 327;
				this.match(LeviathonParser.LEFT_PAREN);
				this.state = 329;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (LeviathonParser.ID - 53)) | (1 << (LeviathonParser.NUMBER - 53)) | (1 << (LeviathonParser.HEX_NUMBER - 53)))) !== 0)) {
					{
					this.state = 328;
					this.params();
					}
				}

				this.state = 331;
				this.match(LeviathonParser.RIGHT_PAREN);
				}
			}

			this.state = 338;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 334;
					this.match(LeviathonParser.DOT);
					this.state = 335;
					this.function_call();
					}
					}
				}
				this.state = 340;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public raw_function_call(): Raw_function_callContext {
		let _localctx: Raw_function_callContext = new Raw_function_callContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, LeviathonParser.RULE_raw_function_call);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 341;
			_localctx._func = this.match(LeviathonParser.RAW_FUNCTION);
			this.state = 342;
			this.match(LeviathonParser.LEFT_PAREN);
			this.state = 344;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (LeviathonParser.ID - 53)) | (1 << (LeviathonParser.NUMBER - 53)) | (1 << (LeviathonParser.HEX_NUMBER - 53)))) !== 0)) {
				{
				this.state = 343;
				this.params();
				}
			}

			this.state = 346;
			this.match(LeviathonParser.RIGHT_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public directive_statement(): Directive_statementContext {
		let _localctx: Directive_statementContext = new Directive_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, LeviathonParser.RULE_directive_statement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 348;
			this.match(LeviathonParser.DIRECTIVE_OP);
			this.state = 349;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LeviathonParser.RESET) | (1 << LeviathonParser.REPEAT) | (1 << LeviathonParser.RETURN) | (1 << LeviathonParser.CONCLUDE))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public meta_statement(): Meta_statementContext {
		let _localctx: Meta_statementContext = new Meta_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, LeviathonParser.RULE_meta_statement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 351;
			this.match(LeviathonParser.META_OP);
			this.state = 352;
			this.meta_value();
			this.state = 357;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LeviathonParser.COMMA) {
				{
				{
				this.state = 353;
				this.match(LeviathonParser.COMMA);
				this.state = 354;
				this.meta_value();
				}
				}
				this.state = 359;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public node_names(): Node_namesContext {
		let _localctx: Node_namesContext = new Node_namesContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, LeviathonParser.RULE_node_names);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 360;
			_localctx._name = this.node_name();
			this.state = 365;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 361;
					this.match(LeviathonParser.ALIAS_OP);
					this.state = 362;
					this.node_names();
					}
					}
				}
				this.state = 367;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public node_thk_id(): Node_thk_idContext {
		let _localctx: Node_thk_idContext = new Node_thk_idContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, LeviathonParser.RULE_node_thk_id);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 368;
			this.match(LeviathonParser.COLON);
			this.state = 369;
			_localctx._id = this._input.LT(1);
			_la = this._input.LA(1);
			if (!(_la === LeviathonParser.NUMBER || _la === LeviathonParser.HEX_NUMBER)) {
				_localctx._id = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public node_index(): Node_indexContext {
		let _localctx: Node_indexContext = new Node_indexContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, LeviathonParser.RULE_node_index);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 371;
			this.match(LeviathonParser.META_OP);
			this.state = 372;
			_localctx._idx = this._input.LT(1);
			_la = this._input.LA(1);
			if (!(_la === LeviathonParser.NUMBER || _la === LeviathonParser.HEX_NUMBER)) {
				_localctx._idx = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public meta_value(): Meta_valueContext {
		let _localctx: Meta_valueContext = new Meta_valueContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, LeviathonParser.RULE_meta_value);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 374;
			this.meta_name();
			this.state = 375;
			this.match(LeviathonParser.COLON);
			this.state = 376;
			_la = this._input.LA(1);
			if (!(_la === LeviathonParser.NUMBER || _la === LeviathonParser.HEX_NUMBER)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public import_path(): Import_pathContext {
		let _localctx: Import_pathContext = new Import_pathContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, LeviathonParser.RULE_import_path);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 378;
			this.match(LeviathonParser.QUOTE);
			this.state = 379;
			_localctx._path = this.match(LeviathonParser.QUOTED_PATH);
			this.state = 380;
			this.match(LeviathonParser.QUOTE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public params(): ParamsContext {
		let _localctx: ParamsContext = new ParamsContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, LeviathonParser.RULE_params);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 389;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LeviathonParser.NUMBER:
				{
				this.state = 382;
				_localctx._value = this.match(LeviathonParser.NUMBER);
				}
				break;
			case LeviathonParser.HEX_NUMBER:
				{
				this.state = 383;
				_localctx._value = this.match(LeviathonParser.HEX_NUMBER);
				}
				break;
			case LeviathonParser.ID:
				{
				this.state = 384;
				_localctx._enum_name = this.match(LeviathonParser.ID);
				this.state = 387;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LeviathonParser.DOT) {
					{
					this.state = 385;
					this.match(LeviathonParser.DOT);
					this.state = 386;
					_localctx._value = this.match(LeviathonParser.ID);
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 395;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 391;
					this.match(LeviathonParser.COMMA);
					this.state = 392;
					this.params();
					}
					}
				}
				this.state = 397;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public if_statement(): If_statementContext {
		let _localctx: If_statementContext = new If_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, LeviathonParser.RULE_if_statement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 398;
			this.match(LeviathonParser.IF);
			this.state = 406;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LeviathonParser.SELF:
			case LeviathonParser.RAW_FUNCTION:
				{
				this.state = 403;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case LeviathonParser.SELF:
					{
					this.state = 399;
					this.match(LeviathonParser.SELF);
					this.state = 400;
					this.match(LeviathonParser.DOT);
					this.state = 401;
					_localctx._func = this.function_call();
					}
					break;
				case LeviathonParser.RAW_FUNCTION:
					{
					this.state = 402;
					_localctx._raw_func = this.raw_function_call();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case LeviathonParser.LEFT_BRACKET:
				{
				this.state = 405;
				_localctx._cond = this.register_condition();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 409;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LeviathonParser.ACTION_OP) {
				{
				this.state = 408;
				this.action_statement();
				}
			}

			this.state = 412;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LeviathonParser.CALL_OP) {
				{
				this.state = 411;
				this.node_call_statement();
				}
			}

			this.state = 415;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LeviathonParser.DIRECTIVE_OP) {
				{
				this.state = 414;
				this.directive_statement();
				}
			}

			this.state = 418;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LeviathonParser.META_OP) {
				{
				this.state = 417;
				this.meta_statement();
				}
			}

			this.state = 420;
			this.match(LeviathonParser.LINESKIP);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public else_statement(): Else_statementContext {
		let _localctx: Else_statementContext = new Else_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, LeviathonParser.RULE_else_statement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 422;
			this.match(LeviathonParser.ELSE);
			this.state = 427;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LeviathonParser.SELF:
				{
				this.state = 423;
				this.match(LeviathonParser.SELF);
				this.state = 424;
				this.match(LeviathonParser.DOT);
				this.state = 425;
				_localctx._func = this.function_call();
				}
				break;
			case LeviathonParser.RAW_FUNCTION:
				{
				this.state = 426;
				_localctx._raw_func = this.raw_function_call();
				}
				break;
			case LeviathonParser.CALL_OP:
			case LeviathonParser.ACTION_OP:
			case LeviathonParser.DIRECTIVE_OP:
			case LeviathonParser.META_OP:
			case LeviathonParser.LINESKIP:
				break;
			default:
				break;
			}
			this.state = 430;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LeviathonParser.ACTION_OP) {
				{
				this.state = 429;
				this.action_statement();
				}
			}

			this.state = 433;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LeviathonParser.CALL_OP) {
				{
				this.state = 432;
				this.node_call_statement();
				}
			}

			this.state = 436;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LeviathonParser.DIRECTIVE_OP) {
				{
				this.state = 435;
				this.directive_statement();
				}
			}

			this.state = 439;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LeviathonParser.META_OP) {
				{
				this.state = 438;
				this.meta_statement();
				}
			}

			this.state = 441;
			this.match(LeviathonParser.LINESKIP);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elif_statement(): Elif_statementContext {
		let _localctx: Elif_statementContext = new Elif_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, LeviathonParser.RULE_elif_statement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 443;
			this.match(LeviathonParser.ELIF);
			this.state = 451;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LeviathonParser.SELF:
			case LeviathonParser.RAW_FUNCTION:
				{
				this.state = 448;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case LeviathonParser.SELF:
					{
					this.state = 444;
					this.match(LeviathonParser.SELF);
					this.state = 445;
					this.match(LeviathonParser.DOT);
					this.state = 446;
					_localctx._func = this.function_call();
					}
					break;
				case LeviathonParser.RAW_FUNCTION:
					{
					this.state = 447;
					_localctx._raw_func = this.raw_function_call();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case LeviathonParser.LEFT_BRACKET:
				{
				this.state = 450;
				_localctx._cond = this.register_condition();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 454;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LeviathonParser.ACTION_OP) {
				{
				this.state = 453;
				this.action_statement();
				}
			}

			this.state = 457;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LeviathonParser.CALL_OP) {
				{
				this.state = 456;
				this.node_call_statement();
				}
			}

			this.state = 460;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LeviathonParser.DIRECTIVE_OP) {
				{
				this.state = 459;
				this.directive_statement();
				}
			}

			this.state = 463;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LeviathonParser.META_OP) {
				{
				this.state = 462;
				this.meta_statement();
				}
			}

			this.state = 465;
			this.match(LeviathonParser.LINESKIP);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public endif_statement(): Endif_statementContext {
		let _localctx: Endif_statementContext = new Endif_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, LeviathonParser.RULE_endif_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 467;
			this.match(LeviathonParser.ENDIF);
			this.state = 468;
			this.match(LeviathonParser.LINESKIP);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public endw_statement(): Endw_statementContext {
		let _localctx: Endw_statementContext = new Endw_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, LeviathonParser.RULE_endw_statement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 470;
			this.match(LeviathonParser.ENDW);
			this.state = 472;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LeviathonParser.ACTION_OP) {
				{
				this.state = 471;
				this.action_statement();
				}
			}

			this.state = 475;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LeviathonParser.CALL_OP) {
				{
				this.state = 474;
				this.node_call_statement();
				}
			}

			this.state = 478;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LeviathonParser.DIRECTIVE_OP) {
				{
				this.state = 477;
				this.directive_statement();
				}
			}

			this.state = 481;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LeviathonParser.META_OP) {
				{
				this.state = 480;
				this.meta_statement();
				}
			}

			this.state = 483;
			this.match(LeviathonParser.LINESKIP);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public random_statement(): Random_statementContext {
		let _localctx: Random_statementContext = new Random_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, LeviathonParser.RULE_random_statement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 485;
			this.match(LeviathonParser.RANDOM);
			this.state = 486;
			this.match(LeviathonParser.LEFT_PAREN);
			this.state = 487;
			_localctx._chance = this._input.LT(1);
			_la = this._input.LA(1);
			if (!(_la === LeviathonParser.NUMBER || _la === LeviathonParser.HEX_NUMBER)) {
				_localctx._chance = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 488;
			this.match(LeviathonParser.RIGHT_PAREN);
			this.state = 490;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LeviathonParser.ACTION_OP) {
				{
				this.state = 489;
				this.action_statement();
				}
			}

			this.state = 493;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LeviathonParser.CALL_OP) {
				{
				this.state = 492;
				this.node_call_statement();
				}
			}

			this.state = 496;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LeviathonParser.DIRECTIVE_OP) {
				{
				this.state = 495;
				this.directive_statement();
				}
			}

			this.state = 499;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LeviathonParser.META_OP) {
				{
				this.state = 498;
				this.meta_statement();
				}
			}

			this.state = 501;
			this.match(LeviathonParser.LINESKIP);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elser_statement(): Elser_statementContext {
		let _localctx: Elser_statementContext = new Elser_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, LeviathonParser.RULE_elser_statement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 503;
			_la = this._input.LA(1);
			if (!(_la === LeviathonParser.ELSER || _la === LeviathonParser.ELSERANDOM)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 504;
			this.match(LeviathonParser.LEFT_PAREN);
			this.state = 505;
			_localctx._chance = this._input.LT(1);
			_la = this._input.LA(1);
			if (!(_la === LeviathonParser.NUMBER || _la === LeviathonParser.HEX_NUMBER)) {
				_localctx._chance = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 506;
			this.match(LeviathonParser.RIGHT_PAREN);
			this.state = 508;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LeviathonParser.ACTION_OP) {
				{
				this.state = 507;
				this.action_statement();
				}
			}

			this.state = 511;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LeviathonParser.CALL_OP) {
				{
				this.state = 510;
				this.node_call_statement();
				}
			}

			this.state = 514;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LeviathonParser.DIRECTIVE_OP) {
				{
				this.state = 513;
				this.directive_statement();
				}
			}

			this.state = 517;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LeviathonParser.META_OP) {
				{
				this.state = 516;
				this.meta_statement();
				}
			}

			this.state = 519;
			this.match(LeviathonParser.LINESKIP);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public endr_statement(): Endr_statementContext {
		let _localctx: Endr_statementContext = new Endr_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, LeviathonParser.RULE_endr_statement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 521;
			_la = this._input.LA(1);
			if (!(_la === LeviathonParser.ENDR || _la === LeviathonParser.ENDRANDOM)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 522;
			this.match(LeviathonParser.LINESKIP);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public endrw_statement(): Endrw_statementContext {
		let _localctx: Endrw_statementContext = new Endrw_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, LeviathonParser.RULE_endrw_statement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 524;
			_la = this._input.LA(1);
			if (!(_la === LeviathonParser.ENDRW || _la === LeviathonParser.ENDRANDOMW)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 526;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LeviathonParser.ACTION_OP) {
				{
				this.state = 525;
				this.action_statement();
				}
			}

			this.state = 529;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LeviathonParser.CALL_OP) {
				{
				this.state = 528;
				this.node_call_statement();
				}
			}

			this.state = 532;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LeviathonParser.DIRECTIVE_OP) {
				{
				this.state = 531;
				this.directive_statement();
				}
			}

			this.state = 535;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LeviathonParser.META_OP) {
				{
				this.state = 534;
				this.meta_statement();
				}
			}

			this.state = 537;
			this.match(LeviathonParser.LINESKIP);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nop_statement(): Nop_statementContext {
		let _localctx: Nop_statementContext = new Nop_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, LeviathonParser.RULE_nop_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 539;
			this.match(LeviathonParser.USELESS_OP);
			this.state = 540;
			this.match(LeviathonParser.LINESKIP);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public control_statement(): Control_statementContext {
		let _localctx: Control_statementContext = new Control_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, LeviathonParser.RULE_control_statement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 542;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LeviathonParser.RESET) | (1 << LeviathonParser.REPEAT) | (1 << LeviathonParser.RETURN) | (1 << LeviathonParser.CONCLUDE))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 543;
			this.match(LeviathonParser.LINESKIP);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public register_statement(): Register_statementContext {
		let _localctx: Register_statementContext = new Register_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, LeviathonParser.RULE_register_statement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 545;
			this.match(LeviathonParser.LEFT_BRACKET);
			this.state = 546;
			_localctx._operand = this._input.LT(1);
			_la = this._input.LA(1);
			if (!(_la === LeviathonParser.REGISTER || _la === LeviathonParser.ID)) {
				_localctx._operand = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 547;
			_localctx._op = this._input.LT(1);
			_la = this._input.LA(1);
			if (!(_la === LeviathonParser.INCREMENT || _la === LeviathonParser.RESET_VAL)) {
				_localctx._op = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 548;
			this.match(LeviathonParser.RIGHT_BRACKET);
			this.state = 550;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LeviathonParser.ACTION_OP) {
				{
				this.state = 549;
				this.action_statement();
				}
			}

			this.state = 553;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LeviathonParser.CALL_OP) {
				{
				this.state = 552;
				this.node_call_statement();
				}
			}

			this.state = 556;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LeviathonParser.DIRECTIVE_OP) {
				{
				this.state = 555;
				this.directive_statement();
				}
			}

			this.state = 559;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LeviathonParser.META_OP) {
				{
				this.state = 558;
				this.meta_statement();
				}
			}

			this.state = 561;
			this.match(LeviathonParser.LINESKIP);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public register_condition(): Register_conditionContext {
		let _localctx: Register_conditionContext = new Register_conditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, LeviathonParser.RULE_register_condition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 563;
			this.match(LeviathonParser.LEFT_BRACKET);
			this.state = 564;
			_localctx._operand1 = this._input.LT(1);
			_la = this._input.LA(1);
			if (!(_la === LeviathonParser.REGISTER || _la === LeviathonParser.ID)) {
				_localctx._operand1 = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 565;
			_localctx._op = this._input.LT(1);
			_la = this._input.LA(1);
			if (!(((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (LeviathonParser.EQ - 33)) | (1 << (LeviathonParser.NE - 33)) | (1 << (LeviathonParser.GT - 33)) | (1 << (LeviathonParser.LT - 33)) | (1 << (LeviathonParser.GEQ - 33)) | (1 << (LeviathonParser.LEQ - 33)))) !== 0))) {
				_localctx._op = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 566;
			_localctx._operand2 = this._input.LT(1);
			_la = this._input.LA(1);
			if (!(_la === LeviathonParser.NUMBER || _la === LeviathonParser.HEX_NUMBER)) {
				_localctx._operand2 = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 567;
			this.match(LeviathonParser.RIGHT_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03A\u023C\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x03\x02\x03\x02\x07\x02" +
		"e\n\x02\f\x02\x0E\x02h\v\x02\x03\x02\x03\x02\x07\x02l\n\x02\f\x02\x0E" +
		"\x02o\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x05\x03u\n\x03\x03\x04\x03" +
		"\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t" +
		"\x03\t\x03\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03\r\x03\r\x03\r\x05\r\x8C" +
		"\n\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0F\x03\x0F\x07\x0F\x9A\n\x0F\f\x0F\x0E\x0F\x9D\v\x0F\x03\x0F" +
		"\x03\x0F\x03\x10\x03\x10\x03\x10\x05\x10\xA4\n\x10\x03\x10\x05\x10\xA7" +
		"\n\x10\x03\x10\x03\x10\x03\x11\x03\x11\x05\x11\xAD\n\x11\x03\x11\x03\x11" +
		"\x03\x12\x03\x12\x07\x12\xB3\n\x12\f\x12\x0E\x12\xB6\v\x12\x03\x12\x03" +
		"\x12\x07\x12\xBA\n\x12\f\x12\x0E\x12\xBD\v\x12\x07\x12\xBF\n\x12\f\x12" +
		"\x0E\x12\xC2\v\x12\x03\x12\x03\x12\x07\x12\xC6\n\x12\f\x12\x0E\x12\xC9" +
		"\v\x12\x05\x12\xCB\n\x12\x03\x12\x03\x12\x05\x12\xCF\n\x12\x03\x12\x03" +
		"\x12\x07\x12\xD3\n\x12\f\x12\x0E\x12\xD6\v\x12\x03\x12\x03\x12\x07\x12" +
		"\xDA\n\x12\f\x12\x0E\x12\xDD\v\x12\x07\x12\xDF\n\x12\f\x12\x0E\x12\xE2" +
		"\v\x12\x03\x12\x03\x12\x05\x12\xE6\n\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x05\x12\xEF\n\x12\x03\x12\x05\x12\xF2\n\x12\x03" +
		"\x12\x05\x12\xF5\n\x12\x03\x12\x05\x12\xF8\n\x12\x03\x12\x05\x12\xFB\n" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\u0101\n\x12\x03\x12\x05\x12" +
		"\u0104\n\x12\x03\x12\x05\x12\u0107\n\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
		"\x05\x12\u010D\n\x12\x03\x12\x05\x12\u0110\n\x12\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x05\x12\u0116\n\x12\x03\x12\x03\x12\x05\x12\u011A\n\x12\x03\x13" +
		"\x03\x13\x03\x13\x03\x13\x05\x13\u0120\n\x13\x03\x14\x03\x14\x03\x14\x03" +
		"\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x17\x03" +
		"\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x05\x18\u0135\n\x18" +
		"\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19\u013D\n\x19\x03" +
		"\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u0145\n\x1A\x03\x1A" +
		"\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u014C\n\x1B\x03\x1B\x05\x1B\u014F" +
		"\n\x1B\x03\x1B\x03\x1B\x07\x1B\u0153\n\x1B\f\x1B\x0E\x1B\u0156\v\x1B\x03" +
		"\x1C\x03\x1C\x03\x1C\x05\x1C\u015B\n\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D" +
		"\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x07\x1E\u0166\n\x1E\f\x1E\x0E" +
		"\x1E\u0169\v\x1E\x03\x1F\x03\x1F\x03\x1F\x07\x1F\u016E\n\x1F\f\x1F\x0E" +
		"\x1F\u0171\v\x1F\x03 \x03 \x03 \x03!\x03!\x03!\x03\"\x03\"\x03\"\x03\"" +
		"\x03#\x03#\x03#\x03#\x03$\x03$\x03$\x03$\x03$\x05$\u0186\n$\x05$\u0188" +
		"\n$\x03$\x03$\x07$\u018C\n$\f$\x0E$\u018F\v$\x03%\x03%\x03%\x03%\x03%" +
		"\x05%\u0196\n%\x03%\x05%\u0199\n%\x03%\x05%\u019C\n%\x03%\x05%\u019F\n" +
		"%\x03%\x05%\u01A2\n%\x03%\x05%\u01A5\n%\x03%\x03%\x03&\x03&\x03&\x03&" +
		"\x03&\x05&\u01AE\n&\x03&\x05&\u01B1\n&\x03&\x05&\u01B4\n&\x03&\x05&\u01B7" +
		"\n&\x03&\x05&\u01BA\n&\x03&\x03&\x03\'\x03\'\x03\'\x03\'\x03\'\x05\'\u01C3" +
		"\n\'\x03\'\x05\'\u01C6\n\'\x03\'\x05\'\u01C9\n\'\x03\'\x05\'\u01CC\n\'" +
		"\x03\'\x05\'\u01CF\n\'\x03\'\x05\'\u01D2\n\'\x03\'\x03\'\x03(\x03(\x03" +
		"(\x03)\x03)\x05)\u01DB\n)\x03)\x05)\u01DE\n)\x03)\x05)\u01E1\n)\x03)\x05" +
		")\u01E4\n)\x03)\x03)\x03*\x03*\x03*\x03*\x03*\x05*\u01ED\n*\x03*\x05*" +
		"\u01F0\n*\x03*\x05*\u01F3\n*\x03*\x05*\u01F6\n*\x03*\x03*\x03+\x03+\x03" +
		"+\x03+\x03+\x05+\u01FF\n+\x03+\x05+\u0202\n+\x03+\x05+\u0205\n+\x03+\x05" +
		"+\u0208\n+\x03+\x03+\x03,\x03,\x03,\x03-\x03-\x05-\u0211\n-\x03-\x05-" +
		"\u0214\n-\x03-\x05-\u0217\n-\x03-\x05-\u021A\n-\x03-\x03-\x03.\x03.\x03" +
		".\x03/\x03/\x03/\x030\x030\x030\x030\x030\x050\u0229\n0\x030\x050\u022C" +
		"\n0\x030\x050\u022F\n0\x030\x050\u0232\n0\x030\x030\x031\x031\x031\x03" +
		"1\x031\x031\x031\x02\x02\x022\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02" +
		"\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02" +
		" \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02" +
		"<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02" +
		"X\x02Z\x02\\\x02^\x02`\x02\x02\v\x03\x02\t\v\x03\x02\x13\x16\x03\x028" +
		"9\x03\x02\r\x0E\x03\x02\x0F\x10\x03\x02\x11\x12\x03\x0267\x03\x02)*\x03" +
		"\x02#(\x02\u0268\x02f\x03\x02\x02\x02\x04t\x03\x02\x02\x02\x06v\x03\x02" +
		"\x02\x02\bx\x03\x02\x02\x02\nz\x03\x02\x02\x02\f|\x03\x02\x02\x02\x0E" +
		"~\x03\x02\x02\x02\x10\x80\x03\x02\x02\x02\x12\x82\x03\x02\x02\x02\x14" +
		"\x84\x03\x02\x02\x02\x16\x86\x03\x02\x02\x02\x18\x88\x03\x02\x02\x02\x1A" +
		"\x91\x03\x02\x02\x02\x1C\x97\x03\x02\x02\x02\x1E\xA0\x03\x02\x02\x02 " +
		"\xAA\x03\x02\x02\x02\"\u0119\x03\x02\x02\x02$\u011F\x03\x02\x02\x02&\u0121" +
		"\x03\x02\x02\x02(\u0124\x03\x02\x02\x02*\u0129\x03\x02\x02\x02,\u012C" +
		"\x03\x02\x02\x02.\u0134\x03\x02\x02\x020\u0136\x03\x02\x02\x022\u0140" +
		"\x03\x02\x02\x024\u0148\x03\x02\x02\x026\u0157\x03\x02\x02\x028\u015E" +
		"\x03\x02\x02\x02:\u0161\x03\x02\x02\x02<\u016A\x03\x02\x02\x02>\u0172" +
		"\x03\x02\x02\x02@\u0175\x03\x02\x02\x02B\u0178\x03\x02\x02\x02D\u017C" +
		"\x03\x02\x02\x02F\u0187\x03\x02\x02\x02H\u0190\x03\x02\x02\x02J\u01A8" +
		"\x03\x02\x02\x02L\u01BD\x03\x02\x02\x02N\u01D5\x03\x02\x02\x02P\u01D8" +
		"\x03\x02\x02\x02R\u01E7\x03\x02\x02\x02T\u01F9\x03\x02\x02\x02V\u020B" +
		"\x03\x02\x02\x02X\u020E\x03\x02\x02\x02Z\u021D\x03\x02\x02\x02\\\u0220" +
		"\x03\x02\x02\x02^\u0223\x03\x02\x02\x02`\u0235\x03\x02\x02\x02be\x05\x04" +
		"\x03\x02ce\x07@\x02\x02db\x03\x02\x02\x02dc\x03\x02\x02\x02eh\x03\x02" +
		"\x02\x02fd\x03\x02\x02\x02fg\x03\x02\x02\x02gm\x03\x02\x02\x02hf\x03\x02" +
		"\x02\x02il\x05\x1C\x0F\x02jl\x07@\x02\x02ki\x03\x02\x02\x02kj\x03\x02" +
		"\x02\x02lo\x03\x02\x02\x02mk\x03\x02\x02\x02mn\x03\x02\x02\x02np\x03\x02" +
		"\x02\x02om\x03\x02\x02\x02pq\x07\x02\x02\x03q\x03\x03\x02\x02\x02ru\x05" +
		"\x18\r\x02su\x05\x1A\x0E\x02tr\x03\x02\x02\x02ts\x03\x02\x02\x02u\x05" +
		"\x03\x02\x02\x02vw\x077\x02\x02w\x07\x03\x02\x02\x02xy\x05\x06\x04\x02" +
		"y\t\x03\x02\x02\x02z{\x05\x06\x04\x02{\v\x03\x02\x02\x02|}\x05\x06\x04" +
		"\x02}\r\x03\x02\x02\x02~\x7F\x05\x06\x04\x02\x7F\x0F\x03\x02\x02\x02\x80" +
		"\x81\x05\x06\x04\x02\x81\x11\x03\x02\x02\x02\x82\x83\x05\x06\x04\x02\x83" +
		"\x13\x03\x02\x02\x02\x84\x85\x05\x06\x04\x02\x85\x15\x03\x02\x02\x02\x86" +
		"\x87\x05\x06\x04\x02\x87\x17\x03\x02\x02\x02\x88\x8B\x07\x17\x02\x02\x89" +
		"\x8C\x05\b\x05\x02\x8A\x8C\x05D#\x02\x8B\x89\x03\x02\x02\x02\x8B\x8A\x03" +
		"\x02\x02\x02\x8C\x8D\x03\x02\x02\x02\x8D\x8E\x07\x19\x02\x02\x8E\x8F\x07" +
		"7\x02\x02\x8F\x90\x07@\x02\x02\x90\x19\x03\x02\x02\x02\x91\x92\x07\x18" +
		"\x02\x02\x92\x93\x05\x0E\b\x02\x93\x94\x07\x19\x02\x02\x94\x95\x05\x06" +
		"\x04\x02\x95\x96\x07@\x02\x02\x96\x1B\x03\x02\x02\x02\x97\x9B\x05\x1E" +
		"\x10\x02\x98\x9A\x05\"\x12\x02\x99\x98\x03\x02\x02\x02\x9A\x9D\x03\x02" +
		"\x02\x02\x9B\x99\x03\x02\x02\x02\x9B\x9C\x03\x02\x02\x02\x9C\x9E\x03\x02" +
		"\x02\x02\x9D\x9B\x03\x02\x02\x02\x9E\x9F\x05 \x11\x02\x9F\x1D\x03\x02" +
		"\x02\x02\xA0\xA1\x07\b\x02\x02\xA1\xA3\x05<\x1F\x02\xA2\xA4\x05> \x02" +
		"\xA3\xA2\x03\x02\x02\x02\xA3\xA4\x03\x02\x02\x02\xA4\xA6\x03\x02\x02\x02" +
		"\xA5\xA7\x05@!\x02\xA6\xA5\x03\x02\x02\x02\xA6\xA7\x03\x02\x02\x02\xA7" +
		"\xA8\x03\x02\x02\x02\xA8\xA9\x07@\x02\x02\xA9\x1F\x03\x02\x02\x02\xAA" +
		"\xAC\t\x02\x02\x02\xAB\xAD\x05:\x1E\x02\xAC\xAB\x03\x02\x02\x02\xAC\xAD" +
		"\x03\x02\x02\x02\xAD\xAE\x03\x02\x02\x02\xAE\xAF\x07@\x02\x02\xAF!\x03" +
		"\x02\x02\x02\xB0\xB4\x05H%\x02\xB1\xB3\x05\"\x12\x02\xB2\xB1\x03\x02\x02" +
		"\x02\xB3\xB6\x03\x02\x02\x02\xB4\xB2\x03\x02\x02\x02\xB4\xB5\x03\x02\x02" +
		"\x02\xB5\xC0\x03\x02\x02\x02\xB6\xB4\x03\x02\x02\x02\xB7\xBB\x05L\'\x02" +
		"\xB8\xBA\x05\"\x12\x02\xB9\xB8\x03\x02\x02\x02\xBA\xBD\x03\x02\x02\x02" +
		"\xBB\xB9\x03\x02\x02\x02\xBB\xBC\x03\x02\x02\x02\xBC\xBF\x03\x02\x02\x02" +
		"\xBD\xBB\x03\x02\x02\x02\xBE\xB7\x03\x02\x02\x02\xBF\xC2\x03\x02\x02\x02" +
		"\xC0\xBE\x03\x02\x02\x02\xC0\xC1\x03\x02\x02\x02\xC1\xCA\x03\x02\x02\x02" +
		"\xC2\xC0\x03\x02\x02\x02\xC3\xC7\x05J&\x02\xC4\xC6\x05\"\x12\x02\xC5\xC4" +
		"\x03\x02\x02\x02\xC6\xC9\x03\x02\x02\x02\xC7\xC5\x03\x02\x02\x02\xC7\xC8" +
		"\x03\x02\x02\x02\xC8\xCB\x03\x02\x02\x02\xC9\xC7\x03\x02\x02\x02\xCA\xC3" +
		"\x03\x02\x02\x02\xCA\xCB\x03\x02\x02\x02\xCB\xCE\x03\x02\x02\x02\xCC\xCF" +
		"\x05N(\x02\xCD\xCF\x05P)\x02\xCE\xCC\x03\x02\x02\x02\xCE\xCD\x03\x02\x02" +
		"\x02\xCF\u011A\x03\x02\x02\x02\xD0\xD4\x05R*\x02\xD1\xD3\x05\"\x12\x02" +
		"\xD2\xD1\x03\x02\x02\x02\xD3\xD6\x03\x02\x02\x02\xD4\xD2\x03\x02\x02\x02" +
		"\xD4\xD5\x03\x02\x02\x02\xD5\xE0\x03\x02\x02\x02\xD6\xD4\x03\x02\x02\x02" +
		"\xD7\xDB\x05T+\x02\xD8\xDA\x05\"\x12\x02\xD9\xD8\x03\x02\x02\x02\xDA\xDD" +
		"\x03\x02\x02\x02\xDB\xD9\x03\x02\x02\x02\xDB\xDC\x03\x02\x02\x02\xDC\xDF" +
		"\x03\x02\x02\x02\xDD\xDB\x03\x02\x02\x02\xDE\xD7\x03\x02\x02\x02\xDF\xE2" +
		"\x03\x02\x02\x02\xE0\xDE\x03\x02\x02\x02\xE0\xE1\x03\x02\x02\x02\xE1\xE5" +
		"\x03\x02\x02\x02\xE2\xE0\x03\x02\x02\x02\xE3\xE6\x05V,\x02\xE4\xE6\x05" +
		"X-\x02\xE5\xE3\x03\x02\x02\x02\xE5\xE4\x03\x02\x02\x02\xE6\u011A\x03\x02" +
		"\x02\x02\xE7\u011A\x05Z.\x02\xE8\u011A\x05\\/\x02\xE9\u011A\x05^0\x02" +
		"\xEA\xEB\x07\x1B\x02\x02\xEB\xEC\x072\x02\x02\xEC\xEF\x054\x1B\x02\xED" +
		"\xEF\x056\x1C\x02\xEE\xEA\x03\x02\x02\x02\xEE\xED\x03\x02\x02\x02\xEF" +
		"\xF1\x03\x02\x02\x02\xF0\xF2\x05.\x18\x02\xF1\xF0\x03\x02\x02\x02\xF1" +
		"\xF2\x03\x02\x02\x02\xF2\xF4\x03\x02\x02\x02\xF3\xF5\x05$\x13\x02\xF4" +
		"\xF3\x03\x02\x02\x02\xF4\xF5\x03\x02\x02\x02\xF5\xF7\x03\x02\x02\x02\xF6" +
		"\xF8\x058\x1D\x02\xF7\xF6\x03\x02\x02\x02\xF7\xF8\x03\x02\x02\x02\xF8" +
		"\xFA\x03\x02\x02\x02\xF9\xFB\x05:\x1E\x02\xFA\xF9\x03\x02\x02\x02\xFA" +
		"\xFB\x03\x02\x02\x02\xFB\xFC\x03\x02\x02\x02\xFC\xFD\x07@\x02\x02\xFD" +
		"\u011A\x03\x02\x02\x02\xFE\u0100\x05.\x18\x02\xFF\u0101\x05$\x13\x02\u0100" +
		"\xFF\x03\x02\x02\x02\u0100\u0101\x03\x02\x02\x02\u0101\u0103\x03\x02\x02" +
		"\x02\u0102\u0104\x058\x1D\x02\u0103\u0102\x03\x02\x02\x02\u0103\u0104" +
		"\x03\x02\x02\x02\u0104\u0106\x03\x02\x02\x02\u0105\u0107\x05:\x1E\x02" +
		"\u0106\u0105\x03\x02\x02\x02\u0106\u0107\x03\x02\x02\x02\u0107\u0108\x03" +
		"\x02\x02\x02\u0108\u0109\x07@\x02\x02\u0109\u011A\x03\x02\x02\x02\u010A" +
		"\u010C\x05$\x13\x02\u010B\u010D\x058\x1D\x02\u010C\u010B\x03\x02\x02\x02" +
		"\u010C\u010D\x03\x02\x02\x02\u010D\u010F\x03\x02\x02\x02\u010E\u0110\x05" +
		":\x1E\x02\u010F\u010E\x03\x02\x02\x02\u010F\u0110\x03\x02\x02\x02\u0110" +
		"\u0111\x03\x02\x02\x02\u0111\u0112\x07@\x02\x02\u0112\u011A\x03\x02\x02" +
		"\x02\u0113\u0115\x058\x1D\x02\u0114\u0116\x05:\x1E\x02\u0115\u0114\x03" +
		"\x02\x02\x02\u0115\u0116\x03\x02\x02\x02\u0116\u0117\x03\x02\x02\x02\u0117" +
		"\u0118\x07@\x02\x02\u0118\u011A\x03\x02\x02\x02\u0119\xB0\x03\x02\x02" +
		"\x02\u0119\xD0\x03\x02\x02\x02\u0119\xE7\x03\x02\x02\x02\u0119\xE8\x03" +
		"\x02\x02\x02\u0119\xE9\x03\x02\x02\x02\u0119\xEE\x03\x02\x02\x02\u0119" +
		"\xFE\x03\x02\x02\x02\u0119\u010A\x03\x02\x02\x02\u0119\u0113\x03\x02\x02" +
		"\x02\u011A#\x03\x02\x02\x02\u011B\u0120\x05&\x14\x02\u011C\u0120\x05(" +
		"\x15\x02\u011D\u0120\x05*\x16\x02\u011E\u0120\x05,\x17\x02\u011F\u011B" +
		"\x03\x02\x02\x02\u011F\u011C\x03\x02\x02\x02\u011F\u011D\x03\x02\x02\x02" +
		"\u011F\u011E\x03\x02\x02\x02\u0120%\x03\x02\x02\x02\u0121\u0122\x07+\x02" +
		"\x02\u0122\u0123\x05\n\x06\x02\u0123\'\x03\x02\x02\x02\u0124\u0125\x07" +
		"+\x02\x02\u0125\u0126\x05\x14\v\x02\u0126\u0127\x072\x02\x02\u0127\u0128" +
		"\x05\n\x06\x02\u0128)\x03\x02\x02\x02\u0129\u012A\x07+\x02\x02\u012A\u012B" +
		"\x07>\x02\x02\u012B+\x03\x02\x02\x02\u012C\u012D\x07+\x02\x02\u012D\u012E" +
		"\x05\x14\v\x02\u012E\u012F\x072\x02\x02\u012F\u0130\x073\x02\x02\u0130" +
		"\u0131\x078\x02\x02\u0131-\x03\x02\x02\x02\u0132\u0135\x050\x19\x02\u0133" +
		"\u0135\x052\x1A\x02\u0134\u0132\x03\x02\x02\x02\u0134\u0133\x03\x02\x02" +
		"\x02\u0135/\x03\x02\x02\x02\u0136\u0137\x07,\x02\x02\u0137\u0138\x05\x16" +
		"\f\x02\u0138\u0139\x072\x02\x02\u0139\u013A\x05\f\x07\x02\u013A\u013C" +
		"\x07!\x02\x02\u013B\u013D\x05F$\x02\u013C\u013B\x03\x02\x02\x02\u013C" +
		"\u013D\x03\x02\x02\x02\u013D\u013E\x03\x02\x02\x02\u013E\u013F\x07\"\x02" +
		"\x02\u013F1\x03\x02\x02\x02\u0140\u0141\x07,\x02\x02\u0141\u0142\x07=" +
		"\x02\x02\u0142\u0144\x07!\x02\x02\u0143\u0145\x05F$\x02\u0144\u0143\x03" +
		"\x02\x02\x02\u0144\u0145\x03\x02\x02\x02\u0145\u0146\x03\x02\x02\x02\u0146" +
		"\u0147\x07\"\x02\x02\u01473\x03\x02\x02\x02\u0148\u014E\x077\x02\x02\u0149" +
		"\u014B\x07!\x02\x02\u014A\u014C\x05F$\x02\u014B\u014A\x03\x02\x02\x02" +
		"\u014B\u014C\x03\x02\x02\x02\u014C\u014D\x03\x02\x02\x02\u014D\u014F\x07" +
		"\"\x02\x02\u014E\u0149\x03\x02\x02\x02\u014E\u014F\x03\x02\x02\x02\u014F" +
		"\u0154\x03\x02\x02\x02\u0150\u0151\x072\x02\x02\u0151\u0153\x054\x1B\x02" +
		"\u0152\u0150\x03\x02\x02\x02\u0153\u0156\x03\x02\x02\x02\u0154\u0152\x03" +
		"\x02\x02\x02\u0154\u0155\x03\x02\x02\x02\u01555\x03\x02\x02\x02\u0156" +
		"\u0154\x03\x02\x02\x02\u0157\u0158\x07<\x02\x02\u0158\u015A\x07!\x02\x02" +
		"\u0159\u015B\x05F$\x02\u015A\u0159\x03\x02\x02\x02\u015A\u015B\x03\x02" +
		"\x02\x02\u015B\u015C\x03\x02\x02\x02\u015C\u015D\x07\"\x02\x02\u015D7" +
		"\x03\x02\x02\x02\u015E\u015F\x07-\x02\x02\u015F\u0160\t\x03\x02\x02\u0160" +
		"9\x03\x02\x02\x02\u0161\u0162\x07/\x02\x02\u0162\u0167\x05B\"\x02\u0163" +
		"\u0164\x071\x02\x02\u0164\u0166\x05B\"\x02\u0165\u0163\x03\x02\x02\x02" +
		"\u0166\u0169\x03\x02\x02\x02\u0167\u0165\x03\x02\x02\x02\u0167\u0168\x03" +
		"\x02\x02\x02\u0168;\x03\x02\x02\x02\u0169\u0167\x03\x02\x02\x02\u016A" +
		"\u016F\x05\n\x06\x02\u016B\u016C\x074\x02\x02\u016C\u016E\x05<\x1F\x02" +
		"\u016D\u016B\x03\x02\x02\x02\u016E\u0171\x03\x02\x02\x02\u016F\u016D\x03" +
		"\x02\x02\x02\u016F\u0170\x03\x02\x02\x02\u0170=\x03\x02\x02\x02\u0171" +
		"\u016F\x03\x02\x02\x02\u0172\u0173\x070\x02\x02\u0173\u0174\t\x04\x02" +
		"\x02\u0174?\x03\x02\x02\x02\u0175\u0176\x07/\x02\x02\u0176\u0177\t\x04" +
		"\x02\x02\u0177A\x03\x02\x02\x02\u0178\u0179\x05\x12\n\x02\u0179\u017A" +
		"\x070\x02\x02\u017A\u017B\t\x04\x02\x02\u017BC\x03\x02\x02\x02\u017C\u017D" +
		"\x075\x02\x02\u017D\u017E\x07;\x02\x02\u017E\u017F\x075\x02\x02\u017F" +
		"E\x03\x02\x02\x02\u0180\u0188\x078\x02\x02\u0181\u0188\x079\x02\x02\u0182" +
		"\u0185\x077\x02\x02\u0183\u0184\x072\x02\x02\u0184\u0186\x077\x02\x02" +
		"\u0185\u0183\x03\x02\x02\x02\u0185\u0186\x03\x02\x02\x02\u0186\u0188\x03" +
		"\x02\x02\x02\u0187\u0180\x03\x02\x02\x02\u0187\u0181\x03\x02\x02\x02\u0187" +
		"\u0182\x03\x02\x02\x02\u0188\u018D\x03\x02\x02\x02\u0189\u018A\x071\x02" +
		"\x02\u018A\u018C\x05F$\x02\u018B\u0189\x03\x02\x02\x02\u018C\u018F\x03" +
		"\x02\x02\x02\u018D\u018B\x03\x02\x02\x02\u018D\u018E\x03\x02\x02\x02\u018E" +
		"G\x03\x02\x02\x02\u018F\u018D\x03\x02\x02\x02\u0190\u0198\x07\x03\x02" +
		"\x02\u0191\u0192\x07\x1B\x02\x02\u0192\u0193\x072\x02\x02\u0193\u0196" +
		"\x054\x1B\x02\u0194\u0196\x056\x1C\x02\u0195\u0191\x03\x02\x02\x02\u0195" +
		"\u0194\x03\x02\x02\x02\u0196\u0199\x03\x02\x02\x02\u0197\u0199\x05`1\x02" +
		"\u0198\u0195\x03\x02\x02\x02\u0198\u0197\x03\x02\x02\x02\u0199\u019B\x03" +
		"\x02\x02\x02\u019A\u019C\x05.\x18\x02\u019B\u019A\x03\x02\x02\x02\u019B" +
		"\u019C\x03\x02\x02\x02\u019C\u019E\x03\x02\x02\x02\u019D\u019F\x05$\x13" +
		"\x02\u019E\u019D\x03\x02\x02\x02\u019E\u019F\x03\x02\x02\x02\u019F\u01A1" +
		"\x03\x02\x02\x02\u01A0\u01A2\x058\x1D\x02\u01A1\u01A0\x03\x02\x02\x02" +
		"\u01A1\u01A2\x03\x02\x02\x02\u01A2\u01A4\x03\x02\x02\x02\u01A3\u01A5\x05" +
		":\x1E\x02\u01A4\u01A3\x03\x02\x02\x02\u01A4\u01A5\x03\x02\x02\x02\u01A5" +
		"\u01A6\x03\x02\x02\x02\u01A6\u01A7\x07@\x02\x02\u01A7I\x03\x02\x02\x02" +
		"\u01A8\u01AD\x07\x05\x02\x02\u01A9\u01AA\x07\x1B\x02\x02\u01AA\u01AB\x07" +
		"2\x02\x02\u01AB\u01AE\x054\x1B\x02\u01AC\u01AE\x056\x1C\x02\u01AD\u01A9" +
		"\x03\x02\x02\x02\u01AD\u01AC\x03\x02\x02\x02\u01AD\u01AE\x03\x02\x02\x02" +
		"\u01AE\u01B0\x03\x02\x02\x02\u01AF\u01B1\x05.\x18\x02\u01B0\u01AF\x03" +
		"\x02\x02\x02\u01B0\u01B1\x03\x02\x02\x02\u01B1\u01B3\x03\x02\x02\x02\u01B2" +
		"\u01B4\x05$\x13\x02\u01B3\u01B2\x03\x02\x02\x02\u01B3\u01B4\x03\x02\x02" +
		"\x02\u01B4\u01B6\x03\x02\x02\x02\u01B5\u01B7\x058\x1D\x02\u01B6\u01B5" +
		"\x03\x02\x02\x02\u01B6\u01B7\x03\x02\x02\x02\u01B7\u01B9\x03\x02\x02\x02" +
		"\u01B8\u01BA\x05:\x1E\x02\u01B9\u01B8\x03\x02\x02\x02\u01B9\u01BA\x03" +
		"\x02\x02\x02\u01BA\u01BB\x03\x02\x02\x02\u01BB\u01BC\x07@\x02\x02\u01BC" +
		"K\x03\x02\x02\x02\u01BD\u01C5\x07\x04\x02\x02\u01BE\u01BF\x07\x1B\x02" +
		"\x02\u01BF\u01C0\x072\x02\x02\u01C0\u01C3\x054\x1B\x02\u01C1\u01C3\x05" +
		"6\x1C\x02\u01C2\u01BE\x03\x02\x02\x02\u01C2\u01C1\x03\x02\x02\x02\u01C3" +
		"\u01C6\x03\x02\x02\x02\u01C4\u01C6\x05`1\x02\u01C5\u01C2\x03\x02\x02\x02" +
		"\u01C5\u01C4\x03\x02\x02\x02\u01C6\u01C8\x03\x02\x02\x02\u01C7\u01C9\x05" +
		".\x18\x02\u01C8\u01C7\x03\x02\x02\x02\u01C8\u01C9\x03\x02\x02\x02\u01C9" +
		"\u01CB\x03\x02\x02\x02\u01CA\u01CC\x05$\x13\x02\u01CB\u01CA\x03\x02\x02" +
		"\x02\u01CB\u01CC\x03\x02\x02\x02\u01CC\u01CE\x03\x02\x02\x02\u01CD\u01CF" +
		"\x058\x1D\x02\u01CE\u01CD\x03\x02\x02\x02\u01CE\u01CF\x03\x02\x02\x02" +
		"\u01CF\u01D1\x03\x02\x02\x02\u01D0\u01D2\x05:\x1E\x02\u01D1\u01D0\x03" +
		"\x02\x02\x02\u01D1\u01D2\x03\x02\x02\x02\u01D2\u01D3\x03\x02\x02\x02\u01D3" +
		"\u01D4\x07@\x02\x02\u01D4M\x03\x02\x02\x02\u01D5\u01D6\x07\x06\x02\x02" +
		"\u01D6\u01D7\x07@\x02\x02\u01D7O\x03\x02\x02\x02\u01D8\u01DA\x07\x07\x02" +
		"\x02\u01D9\u01DB\x05.\x18\x02\u01DA\u01D9\x03\x02\x02\x02\u01DA\u01DB" +
		"\x03\x02\x02\x02\u01DB\u01DD\x03\x02\x02\x02\u01DC\u01DE\x05$\x13\x02" +
		"\u01DD\u01DC\x03\x02\x02\x02\u01DD\u01DE\x03\x02\x02\x02\u01DE\u01E0\x03" +
		"\x02\x02\x02\u01DF\u01E1\x058\x1D\x02\u01E0\u01DF\x03\x02\x02\x02\u01E0" +
		"\u01E1\x03\x02\x02\x02\u01E1\u01E3\x03\x02\x02\x02\u01E2\u01E4\x05:\x1E" +
		"\x02\u01E3\u01E2\x03\x02\x02\x02\u01E3\u01E4\x03\x02\x02\x02\u01E4\u01E5" +
		"\x03\x02\x02\x02\u01E5\u01E6\x07@\x02\x02\u01E6Q\x03\x02\x02\x02\u01E7" +
		"\u01E8\x07\f\x02\x02\u01E8\u01E9\x07!\x02\x02\u01E9\u01EA\t\x04\x02\x02" +
		"\u01EA\u01EC\x07\"\x02\x02\u01EB\u01ED\x05.\x18\x02\u01EC\u01EB\x03\x02" +
		"\x02\x02\u01EC\u01ED\x03\x02\x02\x02\u01ED\u01EF\x03\x02\x02\x02\u01EE" +
		"\u01F0\x05$\x13\x02\u01EF\u01EE\x03\x02\x02\x02\u01EF\u01F0\x03\x02\x02" +
		"\x02\u01F0\u01F2\x03\x02\x02\x02\u01F1\u01F3\x058\x1D\x02\u01F2\u01F1" +
		"\x03\x02\x02\x02\u01F2\u01F3\x03\x02\x02\x02\u01F3\u01F5\x03\x02\x02\x02" +
		"\u01F4\u01F6\x05:\x1E\x02\u01F5\u01F4\x03\x02\x02\x02\u01F5\u01F6\x03" +
		"\x02\x02\x02\u01F6\u01F7\x03\x02\x02\x02\u01F7\u01F8\x07@\x02\x02\u01F8" +
		"S\x03\x02\x02\x02\u01F9\u01FA\t\x05\x02\x02\u01FA\u01FB\x07!\x02\x02\u01FB" +
		"\u01FC\t\x04\x02\x02\u01FC\u01FE\x07\"\x02\x02\u01FD\u01FF\x05.\x18\x02" +
		"\u01FE\u01FD\x03\x02\x02\x02\u01FE\u01FF\x03\x02\x02\x02\u01FF\u0201\x03" +
		"\x02\x02\x02\u0200\u0202\x05$\x13\x02\u0201\u0200\x03\x02\x02\x02\u0201" +
		"\u0202\x03\x02\x02\x02\u0202\u0204\x03\x02\x02\x02\u0203\u0205\x058\x1D" +
		"\x02\u0204\u0203\x03\x02\x02\x02\u0204\u0205\x03\x02\x02\x02\u0205\u0207" +
		"\x03\x02\x02\x02\u0206\u0208\x05:\x1E\x02\u0207\u0206\x03\x02\x02\x02" +
		"\u0207\u0208\x03\x02\x02\x02\u0208\u0209\x03\x02\x02\x02\u0209\u020A\x07" +
		"@\x02\x02\u020AU\x03\x02\x02\x02\u020B\u020C\t\x06\x02\x02\u020C\u020D" +
		"\x07@\x02\x02\u020DW\x03\x02\x02\x02\u020E\u0210\t\x07\x02\x02\u020F\u0211" +
		"\x05.\x18\x02\u0210\u020F\x03\x02\x02\x02\u0210\u0211\x03\x02\x02\x02" +
		"\u0211\u0213\x03\x02\x02\x02\u0212\u0214\x05$\x13\x02\u0213\u0212\x03" +
		"\x02\x02\x02\u0213\u0214\x03\x02\x02\x02\u0214\u0216\x03\x02\x02\x02\u0215" +
		"\u0217\x058\x1D\x02\u0216\u0215\x03\x02\x02\x02\u0216\u0217\x03\x02\x02" +
		"\x02\u0217\u0219\x03\x02\x02\x02\u0218\u021A\x05:\x1E\x02\u0219\u0218" +
		"\x03\x02\x02\x02\u0219\u021A\x03\x02\x02\x02\u021A\u021B\x03\x02\x02\x02" +
		"\u021B\u021C\x07@\x02\x02\u021CY\x03\x02\x02\x02\u021D\u021E\x07.\x02" +
		"\x02\u021E\u021F\x07@\x02\x02\u021F[\x03\x02\x02\x02\u0220\u0221\t\x03" +
		"\x02\x02\u0221\u0222\x07@\x02\x02\u0222]\x03\x02\x02\x02\u0223\u0224\x07" +
		"\x1F\x02\x02\u0224\u0225\t\b\x02\x02\u0225\u0226\t\t\x02\x02\u0226\u0228" +
		"\x07 \x02\x02\u0227\u0229\x05.\x18\x02\u0228\u0227\x03\x02\x02\x02\u0228" +
		"\u0229\x03\x02\x02\x02\u0229\u022B\x03\x02\x02\x02\u022A\u022C\x05$\x13" +
		"\x02\u022B\u022A\x03\x02\x02\x02\u022B\u022C\x03\x02\x02\x02\u022C\u022E" +
		"\x03\x02\x02\x02\u022D\u022F\x058\x1D\x02\u022E\u022D\x03\x02\x02\x02" +
		"\u022E\u022F\x03\x02\x02\x02\u022F\u0231\x03\x02\x02\x02\u0230\u0232";
	private static readonly _serializedATNSegment1: string =
		"\x05:\x1E\x02\u0231\u0230\x03\x02\x02\x02\u0231\u0232\x03\x02\x02\x02" +
		"\u0232\u0233\x03\x02\x02\x02\u0233\u0234\x07@\x02\x02\u0234_\x03\x02\x02" +
		"\x02\u0235\u0236\x07\x1F\x02\x02\u0236\u0237\t\b\x02\x02\u0237\u0238\t" +
		"\n\x02\x02\u0238\u0239\t\x04\x02\x02\u0239\u023A\x07 \x02\x02\u023Aa\x03" +
		"\x02\x02\x02Tdfkmt\x8B\x9B\xA3\xA6\xAC\xB4\xBB\xC0\xC7\xCA\xCE\xD4\xDB" +
		"\xE0\xE5\xEE\xF1\xF4\xF7\xFA\u0100\u0103\u0106\u010C\u010F\u0115\u0119" +
		"\u011F\u0134\u013C\u0144\u014B\u014E\u0154\u015A\u0167\u016F\u0185\u0187" +
		"\u018D\u0195\u0198\u019B\u019E\u01A1\u01A4\u01AD\u01B0\u01B3\u01B6\u01B9" +
		"\u01C2\u01C5\u01C8\u01CB\u01CE\u01D1\u01DA\u01DD\u01E0\u01E3\u01EC\u01EF" +
		"\u01F2\u01F5\u01FE\u0201\u0204\u0207\u0210\u0213\u0216\u0219\u0228\u022B" +
		"\u022E\u0231";
	public static readonly _serializedATN: string = Utils.join(
		[
			LeviathonParser._serializedATNSegment0,
			LeviathonParser._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!LeviathonParser.__ATN) {
			LeviathonParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(LeviathonParser._serializedATN));
		}

		return LeviathonParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(LeviathonParser.EOF, 0); }
	public importany(): ImportanyContext[];
	public importany(i: number): ImportanyContext;
	public importany(i?: number): ImportanyContext | ImportanyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ImportanyContext);
		} else {
			return this.getRuleContext(i, ImportanyContext);
		}
	}
	public LINESKIP(): TerminalNode[];
	public LINESKIP(i: number): TerminalNode;
	public LINESKIP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LeviathonParser.LINESKIP);
		} else {
			return this.getToken(LeviathonParser.LINESKIP, i);
		}
	}
	public node(): NodeContext[];
	public node(i: number): NodeContext;
	public node(i?: number): NodeContext | NodeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NodeContext);
		} else {
			return this.getRuleContext(i, NodeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LeviathonParser.RULE_program; }
	// @Override
	public enterRule(listener: LeviathonListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: LeviathonListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LeviathonVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportanyContext extends ParserRuleContext {
	public import_library(): Import_libraryContext | undefined {
		return this.tryGetRuleContext(0, Import_libraryContext);
	}
	public import_actions(): Import_actionsContext | undefined {
		return this.tryGetRuleContext(0, Import_actionsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LeviathonParser.RULE_importany; }
	// @Override
	public enterRule(listener: LeviathonListener): void {
		if (listener.enterImportany) {
			listener.enterImportany(this);
		}
	}
	// @Override
	public exitRule(listener: LeviathonListener): void {
		if (listener.exitImportany) {
			listener.exitImportany(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LeviathonVisitor<Result>): Result {
		if (visitor.visitImportany) {
			return visitor.visitImportany(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	public _id!: Token;
	public ID(): TerminalNode { return this.getToken(LeviathonParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LeviathonParser.RULE_identifier; }
	// @Override
	public enterRule(listener: LeviathonListener): void {
		if (listener.enterIdentifier) {
			listener.enterIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: LeviathonListener): void {
		if (listener.exitIdentifier) {
			listener.exitIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LeviathonVisitor<Result>): Result {
		if (visitor.visitIdentifier) {
			return visitor.visitIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Import_nameContext extends ParserRuleContext {
	public _name!: IdentifierContext;
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LeviathonParser.RULE_import_name; }
	// @Override
	public enterRule(listener: LeviathonListener): void {
		if (listener.enterImport_name) {
			listener.enterImport_name(this);
		}
	}
	// @Override
	public exitRule(listener: LeviathonListener): void {
		if (listener.exitImport_name) {
			listener.exitImport_name(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LeviathonVisitor<Result>): Result {
		if (visitor.visitImport_name) {
			return visitor.visitImport_name(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Node_nameContext extends ParserRuleContext {
	public _name!: IdentifierContext;
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LeviathonParser.RULE_node_name; }
	// @Override
	public enterRule(listener: LeviathonListener): void {
		if (listener.enterNode_name) {
			listener.enterNode_name(this);
		}
	}
	// @Override
	public exitRule(listener: LeviathonListener): void {
		if (listener.exitNode_name) {
			listener.exitNode_name(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LeviathonVisitor<Result>): Result {
		if (visitor.visitNode_name) {
			return visitor.visitNode_name(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Action_nameContext extends ParserRuleContext {
	public _name!: IdentifierContext;
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LeviathonParser.RULE_action_name; }
	// @Override
	public enterRule(listener: LeviathonListener): void {
		if (listener.enterAction_name) {
			listener.enterAction_name(this);
		}
	}
	// @Override
	public exitRule(listener: LeviathonListener): void {
		if (listener.exitAction_name) {
			listener.exitAction_name(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LeviathonVisitor<Result>): Result {
		if (visitor.visitAction_name) {
			return visitor.visitAction_name(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Monster_nameContext extends ParserRuleContext {
	public _name!: IdentifierContext;
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LeviathonParser.RULE_monster_name; }
	// @Override
	public enterRule(listener: LeviathonListener): void {
		if (listener.enterMonster_name) {
			listener.enterMonster_name(this);
		}
	}
	// @Override
	public exitRule(listener: LeviathonListener): void {
		if (listener.exitMonster_name) {
			listener.exitMonster_name(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LeviathonVisitor<Result>): Result {
		if (visitor.visitMonster_name) {
			return visitor.visitMonster_name(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Function_nameContext extends ParserRuleContext {
	public _name!: IdentifierContext;
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LeviathonParser.RULE_function_name; }
	// @Override
	public enterRule(listener: LeviathonListener): void {
		if (listener.enterFunction_name) {
			listener.enterFunction_name(this);
		}
	}
	// @Override
	public exitRule(listener: LeviathonListener): void {
		if (listener.exitFunction_name) {
			listener.exitFunction_name(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LeviathonVisitor<Result>): Result {
		if (visitor.visitFunction_name) {
			return visitor.visitFunction_name(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Meta_nameContext extends ParserRuleContext {
	public _name!: IdentifierContext;
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LeviathonParser.RULE_meta_name; }
	// @Override
	public enterRule(listener: LeviathonListener): void {
		if (listener.enterMeta_name) {
			listener.enterMeta_name(this);
		}
	}
	// @Override
	public exitRule(listener: LeviathonListener): void {
		if (listener.exitMeta_name) {
			listener.exitMeta_name(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LeviathonVisitor<Result>): Result {
		if (visitor.visitMeta_name) {
			return visitor.visitMeta_name(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Import_aliasContext extends ParserRuleContext {
	public _name!: IdentifierContext;
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LeviathonParser.RULE_import_alias; }
	// @Override
	public enterRule(listener: LeviathonListener): void {
		if (listener.enterImport_alias) {
			listener.enterImport_alias(this);
		}
	}
	// @Override
	public exitRule(listener: LeviathonListener): void {
		if (listener.exitImport_alias) {
			listener.exitImport_alias(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LeviathonVisitor<Result>): Result {
		if (visitor.visitImport_alias) {
			return visitor.visitImport_alias(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Monster_aliasContext extends ParserRuleContext {
	public _name!: IdentifierContext;
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LeviathonParser.RULE_monster_alias; }
	// @Override
	public enterRule(listener: LeviathonListener): void {
		if (listener.enterMonster_alias) {
			listener.enterMonster_alias(this);
		}
	}
	// @Override
	public exitRule(listener: LeviathonListener): void {
		if (listener.exitMonster_alias) {
			listener.exitMonster_alias(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LeviathonVisitor<Result>): Result {
		if (visitor.visitMonster_alias) {
			return visitor.visitMonster_alias(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Import_libraryContext extends ParserRuleContext {
	public _alias!: Token;
	public IMPORTLIB(): TerminalNode { return this.getToken(LeviathonParser.IMPORTLIB, 0); }
	public AS(): TerminalNode { return this.getToken(LeviathonParser.AS, 0); }
	public LINESKIP(): TerminalNode { return this.getToken(LeviathonParser.LINESKIP, 0); }
	public ID(): TerminalNode { return this.getToken(LeviathonParser.ID, 0); }
	public import_name(): Import_nameContext | undefined {
		return this.tryGetRuleContext(0, Import_nameContext);
	}
	public import_path(): Import_pathContext | undefined {
		return this.tryGetRuleContext(0, Import_pathContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LeviathonParser.RULE_import_library; }
	// @Override
	public enterRule(listener: LeviathonListener): void {
		if (listener.enterImport_library) {
			listener.enterImport_library(this);
		}
	}
	// @Override
	public exitRule(listener: LeviathonListener): void {
		if (listener.exitImport_library) {
			listener.exitImport_library(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LeviathonVisitor<Result>): Result {
		if (visitor.visitImport_library) {
			return visitor.visitImport_library(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Import_actionsContext extends ParserRuleContext {
	public _alias!: IdentifierContext;
	public IMPORTACT(): TerminalNode { return this.getToken(LeviathonParser.IMPORTACT, 0); }
	public monster_name(): Monster_nameContext {
		return this.getRuleContext(0, Monster_nameContext);
	}
	public AS(): TerminalNode { return this.getToken(LeviathonParser.AS, 0); }
	public LINESKIP(): TerminalNode { return this.getToken(LeviathonParser.LINESKIP, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LeviathonParser.RULE_import_actions; }
	// @Override
	public enterRule(listener: LeviathonListener): void {
		if (listener.enterImport_actions) {
			listener.enterImport_actions(this);
		}
	}
	// @Override
	public exitRule(listener: LeviathonListener): void {
		if (listener.exitImport_actions) {
			listener.exitImport_actions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LeviathonVisitor<Result>): Result {
		if (visitor.visitImport_actions) {
			return visitor.visitImport_actions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NodeContext extends ParserRuleContext {
	public node_declaration(): Node_declarationContext {
		return this.getRuleContext(0, Node_declarationContext);
	}
	public end_node(): End_nodeContext {
		return this.getRuleContext(0, End_nodeContext);
	}
	public segment(): SegmentContext[];
	public segment(i: number): SegmentContext;
	public segment(i?: number): SegmentContext | SegmentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SegmentContext);
		} else {
			return this.getRuleContext(i, SegmentContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LeviathonParser.RULE_node; }
	// @Override
	public enterRule(listener: LeviathonListener): void {
		if (listener.enterNode) {
			listener.enterNode(this);
		}
	}
	// @Override
	public exitRule(listener: LeviathonListener): void {
		if (listener.exitNode) {
			listener.exitNode(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LeviathonVisitor<Result>): Result {
		if (visitor.visitNode) {
			return visitor.visitNode(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Node_declarationContext extends ParserRuleContext {
	public DEF(): TerminalNode { return this.getToken(LeviathonParser.DEF, 0); }
	public node_names(): Node_namesContext {
		return this.getRuleContext(0, Node_namesContext);
	}
	public LINESKIP(): TerminalNode { return this.getToken(LeviathonParser.LINESKIP, 0); }
	public node_thk_id(): Node_thk_idContext | undefined {
		return this.tryGetRuleContext(0, Node_thk_idContext);
	}
	public node_index(): Node_indexContext | undefined {
		return this.tryGetRuleContext(0, Node_indexContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LeviathonParser.RULE_node_declaration; }
	// @Override
	public enterRule(listener: LeviathonListener): void {
		if (listener.enterNode_declaration) {
			listener.enterNode_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: LeviathonListener): void {
		if (listener.exitNode_declaration) {
			listener.exitNode_declaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LeviathonVisitor<Result>): Result {
		if (visitor.visitNode_declaration) {
			return visitor.visitNode_declaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class End_nodeContext extends ParserRuleContext {
	public LINESKIP(): TerminalNode { return this.getToken(LeviathonParser.LINESKIP, 0); }
	public ENDF(): TerminalNode | undefined { return this.tryGetToken(LeviathonParser.ENDF, 0); }
	public ENDDEF(): TerminalNode | undefined { return this.tryGetToken(LeviathonParser.ENDDEF, 0); }
	public ENDFUNCTION(): TerminalNode | undefined { return this.tryGetToken(LeviathonParser.ENDFUNCTION, 0); }
	public meta_statement(): Meta_statementContext | undefined {
		return this.tryGetRuleContext(0, Meta_statementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LeviathonParser.RULE_end_node; }
	// @Override
	public enterRule(listener: LeviathonListener): void {
		if (listener.enterEnd_node) {
			listener.enterEnd_node(this);
		}
	}
	// @Override
	public exitRule(listener: LeviathonListener): void {
		if (listener.exitEnd_node) {
			listener.exitEnd_node(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LeviathonVisitor<Result>): Result {
		if (visitor.visitEnd_node) {
			return visitor.visitEnd_node(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SegmentContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LeviathonParser.RULE_segment; }
	public copyFrom(ctx: SegmentContext): void {
		super.copyFrom(ctx);
	}
}
export class Segtype_ifContext extends SegmentContext {
	public if_statement(): If_statementContext {
		return this.getRuleContext(0, If_statementContext);
	}
	public endif_statement(): Endif_statementContext | undefined {
		return this.tryGetRuleContext(0, Endif_statementContext);
	}
	public endw_statement(): Endw_statementContext | undefined {
		return this.tryGetRuleContext(0, Endw_statementContext);
	}
	public segment(): SegmentContext[];
	public segment(i: number): SegmentContext;
	public segment(i?: number): SegmentContext | SegmentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SegmentContext);
		} else {
			return this.getRuleContext(i, SegmentContext);
		}
	}
	public elif_statement(): Elif_statementContext[];
	public elif_statement(i: number): Elif_statementContext;
	public elif_statement(i?: number): Elif_statementContext | Elif_statementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Elif_statementContext);
		} else {
			return this.getRuleContext(i, Elif_statementContext);
		}
	}
	public else_statement(): Else_statementContext | undefined {
		return this.tryGetRuleContext(0, Else_statementContext);
	}
	constructor(ctx: SegmentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: LeviathonListener): void {
		if (listener.enterSegtype_if) {
			listener.enterSegtype_if(this);
		}
	}
	// @Override
	public exitRule(listener: LeviathonListener): void {
		if (listener.exitSegtype_if) {
			listener.exitSegtype_if(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LeviathonVisitor<Result>): Result {
		if (visitor.visitSegtype_if) {
			return visitor.visitSegtype_if(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Segtype_randomContext extends SegmentContext {
	public random_statement(): Random_statementContext {
		return this.getRuleContext(0, Random_statementContext);
	}
	public endr_statement(): Endr_statementContext | undefined {
		return this.tryGetRuleContext(0, Endr_statementContext);
	}
	public endrw_statement(): Endrw_statementContext | undefined {
		return this.tryGetRuleContext(0, Endrw_statementContext);
	}
	public segment(): SegmentContext[];
	public segment(i: number): SegmentContext;
	public segment(i?: number): SegmentContext | SegmentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SegmentContext);
		} else {
			return this.getRuleContext(i, SegmentContext);
		}
	}
	public elser_statement(): Elser_statementContext[];
	public elser_statement(i: number): Elser_statementContext;
	public elser_statement(i?: number): Elser_statementContext | Elser_statementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Elser_statementContext);
		} else {
			return this.getRuleContext(i, Elser_statementContext);
		}
	}
	constructor(ctx: SegmentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: LeviathonListener): void {
		if (listener.enterSegtype_random) {
			listener.enterSegtype_random(this);
		}
	}
	// @Override
	public exitRule(listener: LeviathonListener): void {
		if (listener.exitSegtype_random) {
			listener.exitSegtype_random(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LeviathonVisitor<Result>): Result {
		if (visitor.visitSegtype_random) {
			return visitor.visitSegtype_random(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Segtype_nopContext extends SegmentContext {
	public nop_statement(): Nop_statementContext {
		return this.getRuleContext(0, Nop_statementContext);
	}
	constructor(ctx: SegmentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: LeviathonListener): void {
		if (listener.enterSegtype_nop) {
			listener.enterSegtype_nop(this);
		}
	}
	// @Override
	public exitRule(listener: LeviathonListener): void {
		if (listener.exitSegtype_nop) {
			listener.exitSegtype_nop(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LeviathonVisitor<Result>): Result {
		if (visitor.visitSegtype_nop) {
			return visitor.visitSegtype_nop(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Segtype_controlContext extends SegmentContext {
	public control_statement(): Control_statementContext {
		return this.getRuleContext(0, Control_statementContext);
	}
	constructor(ctx: SegmentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: LeviathonListener): void {
		if (listener.enterSegtype_control) {
			listener.enterSegtype_control(this);
		}
	}
	// @Override
	public exitRule(listener: LeviathonListener): void {
		if (listener.exitSegtype_control) {
			listener.exitSegtype_control(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LeviathonVisitor<Result>): Result {
		if (visitor.visitSegtype_control) {
			return visitor.visitSegtype_control(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Segtype_registerContext extends SegmentContext {
	public register_statement(): Register_statementContext {
		return this.getRuleContext(0, Register_statementContext);
	}
	constructor(ctx: SegmentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: LeviathonListener): void {
		if (listener.enterSegtype_register) {
			listener.enterSegtype_register(this);
		}
	}
	// @Override
	public exitRule(listener: LeviathonListener): void {
		if (listener.exitSegtype_register) {
			listener.exitSegtype_register(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LeviathonVisitor<Result>): Result {
		if (visitor.visitSegtype_register) {
			return visitor.visitSegtype_register(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Segtype_functionContext extends SegmentContext {
	public LINESKIP(): TerminalNode { return this.getToken(LeviathonParser.LINESKIP, 0); }
	public SELF(): TerminalNode | undefined { return this.tryGetToken(LeviathonParser.SELF, 0); }
	public DOT(): TerminalNode | undefined { return this.tryGetToken(LeviathonParser.DOT, 0); }
	public function_call(): Function_callContext | undefined {
		return this.tryGetRuleContext(0, Function_callContext);
	}
	public raw_function_call(): Raw_function_callContext | undefined {
		return this.tryGetRuleContext(0, Raw_function_callContext);
	}
	public action_statement(): Action_statementContext | undefined {
		return this.tryGetRuleContext(0, Action_statementContext);
	}
	public node_call_statement(): Node_call_statementContext | undefined {
		return this.tryGetRuleContext(0, Node_call_statementContext);
	}
	public directive_statement(): Directive_statementContext | undefined {
		return this.tryGetRuleContext(0, Directive_statementContext);
	}
	public meta_statement(): Meta_statementContext | undefined {
		return this.tryGetRuleContext(0, Meta_statementContext);
	}
	constructor(ctx: SegmentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: LeviathonListener): void {
		if (listener.enterSegtype_function) {
			listener.enterSegtype_function(this);
		}
	}
	// @Override
	public exitRule(listener: LeviathonListener): void {
		if (listener.exitSegtype_function) {
			listener.exitSegtype_function(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LeviathonVisitor<Result>): Result {
		if (visitor.visitSegtype_function) {
			return visitor.visitSegtype_function(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Segtype_actionContext extends SegmentContext {
	public action_statement(): Action_statementContext {
		return this.getRuleContext(0, Action_statementContext);
	}
	public LINESKIP(): TerminalNode { return this.getToken(LeviathonParser.LINESKIP, 0); }
	public node_call_statement(): Node_call_statementContext | undefined {
		return this.tryGetRuleContext(0, Node_call_statementContext);
	}
	public directive_statement(): Directive_statementContext | undefined {
		return this.tryGetRuleContext(0, Directive_statementContext);
	}
	public meta_statement(): Meta_statementContext | undefined {
		return this.tryGetRuleContext(0, Meta_statementContext);
	}
	constructor(ctx: SegmentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: LeviathonListener): void {
		if (listener.enterSegtype_action) {
			listener.enterSegtype_action(this);
		}
	}
	// @Override
	public exitRule(listener: LeviathonListener): void {
		if (listener.exitSegtype_action) {
			listener.exitSegtype_action(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LeviathonVisitor<Result>): Result {
		if (visitor.visitSegtype_action) {
			return visitor.visitSegtype_action(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Segtype_nodeContext extends SegmentContext {
	public node_call_statement(): Node_call_statementContext {
		return this.getRuleContext(0, Node_call_statementContext);
	}
	public LINESKIP(): TerminalNode { return this.getToken(LeviathonParser.LINESKIP, 0); }
	public directive_statement(): Directive_statementContext | undefined {
		return this.tryGetRuleContext(0, Directive_statementContext);
	}
	public meta_statement(): Meta_statementContext | undefined {
		return this.tryGetRuleContext(0, Meta_statementContext);
	}
	constructor(ctx: SegmentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: LeviathonListener): void {
		if (listener.enterSegtype_node) {
			listener.enterSegtype_node(this);
		}
	}
	// @Override
	public exitRule(listener: LeviathonListener): void {
		if (listener.exitSegtype_node) {
			listener.exitSegtype_node(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LeviathonVisitor<Result>): Result {
		if (visitor.visitSegtype_node) {
			return visitor.visitSegtype_node(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Segtype_directiveContext extends SegmentContext {
	public directive_statement(): Directive_statementContext {
		return this.getRuleContext(0, Directive_statementContext);
	}
	public LINESKIP(): TerminalNode { return this.getToken(LeviathonParser.LINESKIP, 0); }
	public meta_statement(): Meta_statementContext | undefined {
		return this.tryGetRuleContext(0, Meta_statementContext);
	}
	constructor(ctx: SegmentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: LeviathonListener): void {
		if (listener.enterSegtype_directive) {
			listener.enterSegtype_directive(this);
		}
	}
	// @Override
	public exitRule(listener: LeviathonListener): void {
		if (listener.exitSegtype_directive) {
			listener.exitSegtype_directive(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LeviathonVisitor<Result>): Result {
		if (visitor.visitSegtype_directive) {
			return visitor.visitSegtype_directive(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Node_call_statementContext extends ParserRuleContext {
	public node_call(): Node_callContext | undefined {
		return this.tryGetRuleContext(0, Node_callContext);
	}
	public scoped_node_call(): Scoped_node_callContext | undefined {
		return this.tryGetRuleContext(0, Scoped_node_callContext);
	}
	public raw_node_call(): Raw_node_callContext | undefined {
		return this.tryGetRuleContext(0, Raw_node_callContext);
	}
	public scoped_raw_node_call(): Scoped_raw_node_callContext | undefined {
		return this.tryGetRuleContext(0, Scoped_raw_node_callContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LeviathonParser.RULE_node_call_statement; }
	// @Override
	public enterRule(listener: LeviathonListener): void {
		if (listener.enterNode_call_statement) {
			listener.enterNode_call_statement(this);
		}
	}
	// @Override
	public exitRule(listener: LeviathonListener): void {
		if (listener.exitNode_call_statement) {
			listener.exitNode_call_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LeviathonVisitor<Result>): Result {
		if (visitor.visitNode_call_statement) {
			return visitor.visitNode_call_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Node_callContext extends ParserRuleContext {
	public CALL_OP(): TerminalNode { return this.getToken(LeviathonParser.CALL_OP, 0); }
	public node_name(): Node_nameContext {
		return this.getRuleContext(0, Node_nameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LeviathonParser.RULE_node_call; }
	// @Override
	public enterRule(listener: LeviathonListener): void {
		if (listener.enterNode_call) {
			listener.enterNode_call(this);
		}
	}
	// @Override
	public exitRule(listener: LeviathonListener): void {
		if (listener.exitNode_call) {
			listener.exitNode_call(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LeviathonVisitor<Result>): Result {
		if (visitor.visitNode_call) {
			return visitor.visitNode_call(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Scoped_node_callContext extends ParserRuleContext {
	public CALL_OP(): TerminalNode { return this.getToken(LeviathonParser.CALL_OP, 0); }
	public import_alias(): Import_aliasContext {
		return this.getRuleContext(0, Import_aliasContext);
	}
	public DOT(): TerminalNode { return this.getToken(LeviathonParser.DOT, 0); }
	public node_name(): Node_nameContext {
		return this.getRuleContext(0, Node_nameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LeviathonParser.RULE_scoped_node_call; }
	// @Override
	public enterRule(listener: LeviathonListener): void {
		if (listener.enterScoped_node_call) {
			listener.enterScoped_node_call(this);
		}
	}
	// @Override
	public exitRule(listener: LeviathonListener): void {
		if (listener.exitScoped_node_call) {
			listener.exitScoped_node_call(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LeviathonVisitor<Result>): Result {
		if (visitor.visitScoped_node_call) {
			return visitor.visitScoped_node_call(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Raw_node_callContext extends ParserRuleContext {
	public _call!: Token;
	public CALL_OP(): TerminalNode { return this.getToken(LeviathonParser.CALL_OP, 0); }
	public RAW_CALL(): TerminalNode { return this.getToken(LeviathonParser.RAW_CALL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LeviathonParser.RULE_raw_node_call; }
	// @Override
	public enterRule(listener: LeviathonListener): void {
		if (listener.enterRaw_node_call) {
			listener.enterRaw_node_call(this);
		}
	}
	// @Override
	public exitRule(listener: LeviathonListener): void {
		if (listener.exitRaw_node_call) {
			listener.exitRaw_node_call(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LeviathonVisitor<Result>): Result {
		if (visitor.visitRaw_node_call) {
			return visitor.visitRaw_node_call(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Scoped_raw_node_callContext extends ParserRuleContext {
	public _node_id!: Token;
	public CALL_OP(): TerminalNode { return this.getToken(LeviathonParser.CALL_OP, 0); }
	public import_alias(): Import_aliasContext {
		return this.getRuleContext(0, Import_aliasContext);
	}
	public DOT(): TerminalNode { return this.getToken(LeviathonParser.DOT, 0); }
	public HASH(): TerminalNode { return this.getToken(LeviathonParser.HASH, 0); }
	public NUMBER(): TerminalNode { return this.getToken(LeviathonParser.NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LeviathonParser.RULE_scoped_raw_node_call; }
	// @Override
	public enterRule(listener: LeviathonListener): void {
		if (listener.enterScoped_raw_node_call) {
			listener.enterScoped_raw_node_call(this);
		}
	}
	// @Override
	public exitRule(listener: LeviathonListener): void {
		if (listener.exitScoped_raw_node_call) {
			listener.exitScoped_raw_node_call(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LeviathonVisitor<Result>): Result {
		if (visitor.visitScoped_raw_node_call) {
			return visitor.visitScoped_raw_node_call(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Action_statementContext extends ParserRuleContext {
	public action_call(): Action_callContext | undefined {
		return this.tryGetRuleContext(0, Action_callContext);
	}
	public raw_action_call(): Raw_action_callContext | undefined {
		return this.tryGetRuleContext(0, Raw_action_callContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LeviathonParser.RULE_action_statement; }
	// @Override
	public enterRule(listener: LeviathonListener): void {
		if (listener.enterAction_statement) {
			listener.enterAction_statement(this);
		}
	}
	// @Override
	public exitRule(listener: LeviathonListener): void {
		if (listener.exitAction_statement) {
			listener.exitAction_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LeviathonVisitor<Result>): Result {
		if (visitor.visitAction_statement) {
			return visitor.visitAction_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Action_callContext extends ParserRuleContext {
	public ACTION_OP(): TerminalNode { return this.getToken(LeviathonParser.ACTION_OP, 0); }
	public monster_alias(): Monster_aliasContext {
		return this.getRuleContext(0, Monster_aliasContext);
	}
	public DOT(): TerminalNode { return this.getToken(LeviathonParser.DOT, 0); }
	public action_name(): Action_nameContext {
		return this.getRuleContext(0, Action_nameContext);
	}
	public LEFT_PAREN(): TerminalNode { return this.getToken(LeviathonParser.LEFT_PAREN, 0); }
	public RIGHT_PAREN(): TerminalNode { return this.getToken(LeviathonParser.RIGHT_PAREN, 0); }
	public params(): ParamsContext | undefined {
		return this.tryGetRuleContext(0, ParamsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LeviathonParser.RULE_action_call; }
	// @Override
	public enterRule(listener: LeviathonListener): void {
		if (listener.enterAction_call) {
			listener.enterAction_call(this);
		}
	}
	// @Override
	public exitRule(listener: LeviathonListener): void {
		if (listener.exitAction_call) {
			listener.exitAction_call(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LeviathonVisitor<Result>): Result {
		if (visitor.visitAction_call) {
			return visitor.visitAction_call(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Raw_action_callContext extends ParserRuleContext {
	public _action!: Token;
	public ACTION_OP(): TerminalNode { return this.getToken(LeviathonParser.ACTION_OP, 0); }
	public LEFT_PAREN(): TerminalNode { return this.getToken(LeviathonParser.LEFT_PAREN, 0); }
	public RIGHT_PAREN(): TerminalNode { return this.getToken(LeviathonParser.RIGHT_PAREN, 0); }
	public RAW_ACTION(): TerminalNode { return this.getToken(LeviathonParser.RAW_ACTION, 0); }
	public params(): ParamsContext | undefined {
		return this.tryGetRuleContext(0, ParamsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LeviathonParser.RULE_raw_action_call; }
	// @Override
	public enterRule(listener: LeviathonListener): void {
		if (listener.enterRaw_action_call) {
			listener.enterRaw_action_call(this);
		}
	}
	// @Override
	public exitRule(listener: LeviathonListener): void {
		if (listener.exitRaw_action_call) {
			listener.exitRaw_action_call(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LeviathonVisitor<Result>): Result {
		if (visitor.visitRaw_action_call) {
			return visitor.visitRaw_action_call(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Function_callContext extends ParserRuleContext {
	public _name!: Token;
	public ID(): TerminalNode { return this.getToken(LeviathonParser.ID, 0); }
	public LEFT_PAREN(): TerminalNode | undefined { return this.tryGetToken(LeviathonParser.LEFT_PAREN, 0); }
	public RIGHT_PAREN(): TerminalNode | undefined { return this.tryGetToken(LeviathonParser.RIGHT_PAREN, 0); }
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LeviathonParser.DOT);
		} else {
			return this.getToken(LeviathonParser.DOT, i);
		}
	}
	public function_call(): Function_callContext[];
	public function_call(i: number): Function_callContext;
	public function_call(i?: number): Function_callContext | Function_callContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Function_callContext);
		} else {
			return this.getRuleContext(i, Function_callContext);
		}
	}
	public params(): ParamsContext | undefined {
		return this.tryGetRuleContext(0, ParamsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LeviathonParser.RULE_function_call; }
	// @Override
	public enterRule(listener: LeviathonListener): void {
		if (listener.enterFunction_call) {
			listener.enterFunction_call(this);
		}
	}
	// @Override
	public exitRule(listener: LeviathonListener): void {
		if (listener.exitFunction_call) {
			listener.exitFunction_call(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LeviathonVisitor<Result>): Result {
		if (visitor.visitFunction_call) {
			return visitor.visitFunction_call(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Raw_function_callContext extends ParserRuleContext {
	public _func!: Token;
	public LEFT_PAREN(): TerminalNode { return this.getToken(LeviathonParser.LEFT_PAREN, 0); }
	public RIGHT_PAREN(): TerminalNode { return this.getToken(LeviathonParser.RIGHT_PAREN, 0); }
	public RAW_FUNCTION(): TerminalNode { return this.getToken(LeviathonParser.RAW_FUNCTION, 0); }
	public params(): ParamsContext | undefined {
		return this.tryGetRuleContext(0, ParamsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LeviathonParser.RULE_raw_function_call; }
	// @Override
	public enterRule(listener: LeviathonListener): void {
		if (listener.enterRaw_function_call) {
			listener.enterRaw_function_call(this);
		}
	}
	// @Override
	public exitRule(listener: LeviathonListener): void {
		if (listener.exitRaw_function_call) {
			listener.exitRaw_function_call(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LeviathonVisitor<Result>): Result {
		if (visitor.visitRaw_function_call) {
			return visitor.visitRaw_function_call(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Directive_statementContext extends ParserRuleContext {
	public DIRECTIVE_OP(): TerminalNode { return this.getToken(LeviathonParser.DIRECTIVE_OP, 0); }
	public RETURN(): TerminalNode | undefined { return this.tryGetToken(LeviathonParser.RETURN, 0); }
	public RESET(): TerminalNode | undefined { return this.tryGetToken(LeviathonParser.RESET, 0); }
	public REPEAT(): TerminalNode | undefined { return this.tryGetToken(LeviathonParser.REPEAT, 0); }
	public CONCLUDE(): TerminalNode | undefined { return this.tryGetToken(LeviathonParser.CONCLUDE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LeviathonParser.RULE_directive_statement; }
	// @Override
	public enterRule(listener: LeviathonListener): void {
		if (listener.enterDirective_statement) {
			listener.enterDirective_statement(this);
		}
	}
	// @Override
	public exitRule(listener: LeviathonListener): void {
		if (listener.exitDirective_statement) {
			listener.exitDirective_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LeviathonVisitor<Result>): Result {
		if (visitor.visitDirective_statement) {
			return visitor.visitDirective_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Meta_statementContext extends ParserRuleContext {
	public META_OP(): TerminalNode { return this.getToken(LeviathonParser.META_OP, 0); }
	public meta_value(): Meta_valueContext[];
	public meta_value(i: number): Meta_valueContext;
	public meta_value(i?: number): Meta_valueContext | Meta_valueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Meta_valueContext);
		} else {
			return this.getRuleContext(i, Meta_valueContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LeviathonParser.COMMA);
		} else {
			return this.getToken(LeviathonParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LeviathonParser.RULE_meta_statement; }
	// @Override
	public enterRule(listener: LeviathonListener): void {
		if (listener.enterMeta_statement) {
			listener.enterMeta_statement(this);
		}
	}
	// @Override
	public exitRule(listener: LeviathonListener): void {
		if (listener.exitMeta_statement) {
			listener.exitMeta_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LeviathonVisitor<Result>): Result {
		if (visitor.visitMeta_statement) {
			return visitor.visitMeta_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Node_namesContext extends ParserRuleContext {
	public _name!: Node_nameContext;
	public node_name(): Node_nameContext {
		return this.getRuleContext(0, Node_nameContext);
	}
	public ALIAS_OP(): TerminalNode[];
	public ALIAS_OP(i: number): TerminalNode;
	public ALIAS_OP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LeviathonParser.ALIAS_OP);
		} else {
			return this.getToken(LeviathonParser.ALIAS_OP, i);
		}
	}
	public node_names(): Node_namesContext[];
	public node_names(i: number): Node_namesContext;
	public node_names(i?: number): Node_namesContext | Node_namesContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Node_namesContext);
		} else {
			return this.getRuleContext(i, Node_namesContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LeviathonParser.RULE_node_names; }
	// @Override
	public enterRule(listener: LeviathonListener): void {
		if (listener.enterNode_names) {
			listener.enterNode_names(this);
		}
	}
	// @Override
	public exitRule(listener: LeviathonListener): void {
		if (listener.exitNode_names) {
			listener.exitNode_names(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LeviathonVisitor<Result>): Result {
		if (visitor.visitNode_names) {
			return visitor.visitNode_names(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Node_thk_idContext extends ParserRuleContext {
	public _id!: Token;
	public COLON(): TerminalNode { return this.getToken(LeviathonParser.COLON, 0); }
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(LeviathonParser.NUMBER, 0); }
	public HEX_NUMBER(): TerminalNode | undefined { return this.tryGetToken(LeviathonParser.HEX_NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LeviathonParser.RULE_node_thk_id; }
	// @Override
	public enterRule(listener: LeviathonListener): void {
		if (listener.enterNode_thk_id) {
			listener.enterNode_thk_id(this);
		}
	}
	// @Override
	public exitRule(listener: LeviathonListener): void {
		if (listener.exitNode_thk_id) {
			listener.exitNode_thk_id(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LeviathonVisitor<Result>): Result {
		if (visitor.visitNode_thk_id) {
			return visitor.visitNode_thk_id(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Node_indexContext extends ParserRuleContext {
	public _idx!: Token;
	public META_OP(): TerminalNode { return this.getToken(LeviathonParser.META_OP, 0); }
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(LeviathonParser.NUMBER, 0); }
	public HEX_NUMBER(): TerminalNode | undefined { return this.tryGetToken(LeviathonParser.HEX_NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LeviathonParser.RULE_node_index; }
	// @Override
	public enterRule(listener: LeviathonListener): void {
		if (listener.enterNode_index) {
			listener.enterNode_index(this);
		}
	}
	// @Override
	public exitRule(listener: LeviathonListener): void {
		if (listener.exitNode_index) {
			listener.exitNode_index(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LeviathonVisitor<Result>): Result {
		if (visitor.visitNode_index) {
			return visitor.visitNode_index(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Meta_valueContext extends ParserRuleContext {
	public meta_name(): Meta_nameContext {
		return this.getRuleContext(0, Meta_nameContext);
	}
	public COLON(): TerminalNode { return this.getToken(LeviathonParser.COLON, 0); }
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(LeviathonParser.NUMBER, 0); }
	public HEX_NUMBER(): TerminalNode | undefined { return this.tryGetToken(LeviathonParser.HEX_NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LeviathonParser.RULE_meta_value; }
	// @Override
	public enterRule(listener: LeviathonListener): void {
		if (listener.enterMeta_value) {
			listener.enterMeta_value(this);
		}
	}
	// @Override
	public exitRule(listener: LeviathonListener): void {
		if (listener.exitMeta_value) {
			listener.exitMeta_value(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LeviathonVisitor<Result>): Result {
		if (visitor.visitMeta_value) {
			return visitor.visitMeta_value(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Import_pathContext extends ParserRuleContext {
	public _path!: Token;
	public QUOTE(): TerminalNode[];
	public QUOTE(i: number): TerminalNode;
	public QUOTE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LeviathonParser.QUOTE);
		} else {
			return this.getToken(LeviathonParser.QUOTE, i);
		}
	}
	public QUOTED_PATH(): TerminalNode { return this.getToken(LeviathonParser.QUOTED_PATH, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LeviathonParser.RULE_import_path; }
	// @Override
	public enterRule(listener: LeviathonListener): void {
		if (listener.enterImport_path) {
			listener.enterImport_path(this);
		}
	}
	// @Override
	public exitRule(listener: LeviathonListener): void {
		if (listener.exitImport_path) {
			listener.exitImport_path(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LeviathonVisitor<Result>): Result {
		if (visitor.visitImport_path) {
			return visitor.visitImport_path(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParamsContext extends ParserRuleContext {
	public _value!: Token;
	public _enum_name!: Token;
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(LeviathonParser.NUMBER, 0); }
	public HEX_NUMBER(): TerminalNode | undefined { return this.tryGetToken(LeviathonParser.HEX_NUMBER, 0); }
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LeviathonParser.ID);
		} else {
			return this.getToken(LeviathonParser.ID, i);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LeviathonParser.COMMA);
		} else {
			return this.getToken(LeviathonParser.COMMA, i);
		}
	}
	public params(): ParamsContext[];
	public params(i: number): ParamsContext;
	public params(i?: number): ParamsContext | ParamsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParamsContext);
		} else {
			return this.getRuleContext(i, ParamsContext);
		}
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(LeviathonParser.DOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LeviathonParser.RULE_params; }
	// @Override
	public enterRule(listener: LeviathonListener): void {
		if (listener.enterParams) {
			listener.enterParams(this);
		}
	}
	// @Override
	public exitRule(listener: LeviathonListener): void {
		if (listener.exitParams) {
			listener.exitParams(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LeviathonVisitor<Result>): Result {
		if (visitor.visitParams) {
			return visitor.visitParams(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class If_statementContext extends ParserRuleContext {
	public _func!: Function_callContext;
	public _raw_func!: Raw_function_callContext;
	public _cond!: Register_conditionContext;
	public IF(): TerminalNode { return this.getToken(LeviathonParser.IF, 0); }
	public LINESKIP(): TerminalNode { return this.getToken(LeviathonParser.LINESKIP, 0); }
	public register_condition(): Register_conditionContext | undefined {
		return this.tryGetRuleContext(0, Register_conditionContext);
	}
	public action_statement(): Action_statementContext | undefined {
		return this.tryGetRuleContext(0, Action_statementContext);
	}
	public node_call_statement(): Node_call_statementContext | undefined {
		return this.tryGetRuleContext(0, Node_call_statementContext);
	}
	public directive_statement(): Directive_statementContext | undefined {
		return this.tryGetRuleContext(0, Directive_statementContext);
	}
	public meta_statement(): Meta_statementContext | undefined {
		return this.tryGetRuleContext(0, Meta_statementContext);
	}
	public SELF(): TerminalNode | undefined { return this.tryGetToken(LeviathonParser.SELF, 0); }
	public DOT(): TerminalNode | undefined { return this.tryGetToken(LeviathonParser.DOT, 0); }
	public function_call(): Function_callContext | undefined {
		return this.tryGetRuleContext(0, Function_callContext);
	}
	public raw_function_call(): Raw_function_callContext | undefined {
		return this.tryGetRuleContext(0, Raw_function_callContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LeviathonParser.RULE_if_statement; }
	// @Override
	public enterRule(listener: LeviathonListener): void {
		if (listener.enterIf_statement) {
			listener.enterIf_statement(this);
		}
	}
	// @Override
	public exitRule(listener: LeviathonListener): void {
		if (listener.exitIf_statement) {
			listener.exitIf_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LeviathonVisitor<Result>): Result {
		if (visitor.visitIf_statement) {
			return visitor.visitIf_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Else_statementContext extends ParserRuleContext {
	public _func!: Function_callContext;
	public _raw_func!: Raw_function_callContext;
	public ELSE(): TerminalNode { return this.getToken(LeviathonParser.ELSE, 0); }
	public LINESKIP(): TerminalNode { return this.getToken(LeviathonParser.LINESKIP, 0); }
	public SELF(): TerminalNode | undefined { return this.tryGetToken(LeviathonParser.SELF, 0); }
	public DOT(): TerminalNode | undefined { return this.tryGetToken(LeviathonParser.DOT, 0); }
	public action_statement(): Action_statementContext | undefined {
		return this.tryGetRuleContext(0, Action_statementContext);
	}
	public node_call_statement(): Node_call_statementContext | undefined {
		return this.tryGetRuleContext(0, Node_call_statementContext);
	}
	public directive_statement(): Directive_statementContext | undefined {
		return this.tryGetRuleContext(0, Directive_statementContext);
	}
	public meta_statement(): Meta_statementContext | undefined {
		return this.tryGetRuleContext(0, Meta_statementContext);
	}
	public function_call(): Function_callContext | undefined {
		return this.tryGetRuleContext(0, Function_callContext);
	}
	public raw_function_call(): Raw_function_callContext | undefined {
		return this.tryGetRuleContext(0, Raw_function_callContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LeviathonParser.RULE_else_statement; }
	// @Override
	public enterRule(listener: LeviathonListener): void {
		if (listener.enterElse_statement) {
			listener.enterElse_statement(this);
		}
	}
	// @Override
	public exitRule(listener: LeviathonListener): void {
		if (listener.exitElse_statement) {
			listener.exitElse_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LeviathonVisitor<Result>): Result {
		if (visitor.visitElse_statement) {
			return visitor.visitElse_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Elif_statementContext extends ParserRuleContext {
	public _func!: Function_callContext;
	public _raw_func!: Raw_function_callContext;
	public _cond!: Register_conditionContext;
	public ELIF(): TerminalNode { return this.getToken(LeviathonParser.ELIF, 0); }
	public LINESKIP(): TerminalNode { return this.getToken(LeviathonParser.LINESKIP, 0); }
	public register_condition(): Register_conditionContext | undefined {
		return this.tryGetRuleContext(0, Register_conditionContext);
	}
	public action_statement(): Action_statementContext | undefined {
		return this.tryGetRuleContext(0, Action_statementContext);
	}
	public node_call_statement(): Node_call_statementContext | undefined {
		return this.tryGetRuleContext(0, Node_call_statementContext);
	}
	public directive_statement(): Directive_statementContext | undefined {
		return this.tryGetRuleContext(0, Directive_statementContext);
	}
	public meta_statement(): Meta_statementContext | undefined {
		return this.tryGetRuleContext(0, Meta_statementContext);
	}
	public SELF(): TerminalNode | undefined { return this.tryGetToken(LeviathonParser.SELF, 0); }
	public DOT(): TerminalNode | undefined { return this.tryGetToken(LeviathonParser.DOT, 0); }
	public function_call(): Function_callContext | undefined {
		return this.tryGetRuleContext(0, Function_callContext);
	}
	public raw_function_call(): Raw_function_callContext | undefined {
		return this.tryGetRuleContext(0, Raw_function_callContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LeviathonParser.RULE_elif_statement; }
	// @Override
	public enterRule(listener: LeviathonListener): void {
		if (listener.enterElif_statement) {
			listener.enterElif_statement(this);
		}
	}
	// @Override
	public exitRule(listener: LeviathonListener): void {
		if (listener.exitElif_statement) {
			listener.exitElif_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LeviathonVisitor<Result>): Result {
		if (visitor.visitElif_statement) {
			return visitor.visitElif_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Endif_statementContext extends ParserRuleContext {
	public ENDIF(): TerminalNode { return this.getToken(LeviathonParser.ENDIF, 0); }
	public LINESKIP(): TerminalNode { return this.getToken(LeviathonParser.LINESKIP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LeviathonParser.RULE_endif_statement; }
	// @Override
	public enterRule(listener: LeviathonListener): void {
		if (listener.enterEndif_statement) {
			listener.enterEndif_statement(this);
		}
	}
	// @Override
	public exitRule(listener: LeviathonListener): void {
		if (listener.exitEndif_statement) {
			listener.exitEndif_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LeviathonVisitor<Result>): Result {
		if (visitor.visitEndif_statement) {
			return visitor.visitEndif_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Endw_statementContext extends ParserRuleContext {
	public ENDW(): TerminalNode { return this.getToken(LeviathonParser.ENDW, 0); }
	public LINESKIP(): TerminalNode { return this.getToken(LeviathonParser.LINESKIP, 0); }
	public action_statement(): Action_statementContext | undefined {
		return this.tryGetRuleContext(0, Action_statementContext);
	}
	public node_call_statement(): Node_call_statementContext | undefined {
		return this.tryGetRuleContext(0, Node_call_statementContext);
	}
	public directive_statement(): Directive_statementContext | undefined {
		return this.tryGetRuleContext(0, Directive_statementContext);
	}
	public meta_statement(): Meta_statementContext | undefined {
		return this.tryGetRuleContext(0, Meta_statementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LeviathonParser.RULE_endw_statement; }
	// @Override
	public enterRule(listener: LeviathonListener): void {
		if (listener.enterEndw_statement) {
			listener.enterEndw_statement(this);
		}
	}
	// @Override
	public exitRule(listener: LeviathonListener): void {
		if (listener.exitEndw_statement) {
			listener.exitEndw_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LeviathonVisitor<Result>): Result {
		if (visitor.visitEndw_statement) {
			return visitor.visitEndw_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Random_statementContext extends ParserRuleContext {
	public _chance!: Token;
	public RANDOM(): TerminalNode { return this.getToken(LeviathonParser.RANDOM, 0); }
	public LEFT_PAREN(): TerminalNode { return this.getToken(LeviathonParser.LEFT_PAREN, 0); }
	public RIGHT_PAREN(): TerminalNode { return this.getToken(LeviathonParser.RIGHT_PAREN, 0); }
	public LINESKIP(): TerminalNode { return this.getToken(LeviathonParser.LINESKIP, 0); }
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(LeviathonParser.NUMBER, 0); }
	public HEX_NUMBER(): TerminalNode | undefined { return this.tryGetToken(LeviathonParser.HEX_NUMBER, 0); }
	public action_statement(): Action_statementContext | undefined {
		return this.tryGetRuleContext(0, Action_statementContext);
	}
	public node_call_statement(): Node_call_statementContext | undefined {
		return this.tryGetRuleContext(0, Node_call_statementContext);
	}
	public directive_statement(): Directive_statementContext | undefined {
		return this.tryGetRuleContext(0, Directive_statementContext);
	}
	public meta_statement(): Meta_statementContext | undefined {
		return this.tryGetRuleContext(0, Meta_statementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LeviathonParser.RULE_random_statement; }
	// @Override
	public enterRule(listener: LeviathonListener): void {
		if (listener.enterRandom_statement) {
			listener.enterRandom_statement(this);
		}
	}
	// @Override
	public exitRule(listener: LeviathonListener): void {
		if (listener.exitRandom_statement) {
			listener.exitRandom_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LeviathonVisitor<Result>): Result {
		if (visitor.visitRandom_statement) {
			return visitor.visitRandom_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Elser_statementContext extends ParserRuleContext {
	public _chance!: Token;
	public LEFT_PAREN(): TerminalNode { return this.getToken(LeviathonParser.LEFT_PAREN, 0); }
	public RIGHT_PAREN(): TerminalNode { return this.getToken(LeviathonParser.RIGHT_PAREN, 0); }
	public LINESKIP(): TerminalNode { return this.getToken(LeviathonParser.LINESKIP, 0); }
	public ELSER(): TerminalNode | undefined { return this.tryGetToken(LeviathonParser.ELSER, 0); }
	public ELSERANDOM(): TerminalNode | undefined { return this.tryGetToken(LeviathonParser.ELSERANDOM, 0); }
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(LeviathonParser.NUMBER, 0); }
	public HEX_NUMBER(): TerminalNode | undefined { return this.tryGetToken(LeviathonParser.HEX_NUMBER, 0); }
	public action_statement(): Action_statementContext | undefined {
		return this.tryGetRuleContext(0, Action_statementContext);
	}
	public node_call_statement(): Node_call_statementContext | undefined {
		return this.tryGetRuleContext(0, Node_call_statementContext);
	}
	public directive_statement(): Directive_statementContext | undefined {
		return this.tryGetRuleContext(0, Directive_statementContext);
	}
	public meta_statement(): Meta_statementContext | undefined {
		return this.tryGetRuleContext(0, Meta_statementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LeviathonParser.RULE_elser_statement; }
	// @Override
	public enterRule(listener: LeviathonListener): void {
		if (listener.enterElser_statement) {
			listener.enterElser_statement(this);
		}
	}
	// @Override
	public exitRule(listener: LeviathonListener): void {
		if (listener.exitElser_statement) {
			listener.exitElser_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LeviathonVisitor<Result>): Result {
		if (visitor.visitElser_statement) {
			return visitor.visitElser_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Endr_statementContext extends ParserRuleContext {
	public LINESKIP(): TerminalNode { return this.getToken(LeviathonParser.LINESKIP, 0); }
	public ENDR(): TerminalNode | undefined { return this.tryGetToken(LeviathonParser.ENDR, 0); }
	public ENDRANDOM(): TerminalNode | undefined { return this.tryGetToken(LeviathonParser.ENDRANDOM, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LeviathonParser.RULE_endr_statement; }
	// @Override
	public enterRule(listener: LeviathonListener): void {
		if (listener.enterEndr_statement) {
			listener.enterEndr_statement(this);
		}
	}
	// @Override
	public exitRule(listener: LeviathonListener): void {
		if (listener.exitEndr_statement) {
			listener.exitEndr_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LeviathonVisitor<Result>): Result {
		if (visitor.visitEndr_statement) {
			return visitor.visitEndr_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Endrw_statementContext extends ParserRuleContext {
	public LINESKIP(): TerminalNode { return this.getToken(LeviathonParser.LINESKIP, 0); }
	public ENDRW(): TerminalNode | undefined { return this.tryGetToken(LeviathonParser.ENDRW, 0); }
	public ENDRANDOMW(): TerminalNode | undefined { return this.tryGetToken(LeviathonParser.ENDRANDOMW, 0); }
	public action_statement(): Action_statementContext | undefined {
		return this.tryGetRuleContext(0, Action_statementContext);
	}
	public node_call_statement(): Node_call_statementContext | undefined {
		return this.tryGetRuleContext(0, Node_call_statementContext);
	}
	public directive_statement(): Directive_statementContext | undefined {
		return this.tryGetRuleContext(0, Directive_statementContext);
	}
	public meta_statement(): Meta_statementContext | undefined {
		return this.tryGetRuleContext(0, Meta_statementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LeviathonParser.RULE_endrw_statement; }
	// @Override
	public enterRule(listener: LeviathonListener): void {
		if (listener.enterEndrw_statement) {
			listener.enterEndrw_statement(this);
		}
	}
	// @Override
	public exitRule(listener: LeviathonListener): void {
		if (listener.exitEndrw_statement) {
			listener.exitEndrw_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LeviathonVisitor<Result>): Result {
		if (visitor.visitEndrw_statement) {
			return visitor.visitEndrw_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Nop_statementContext extends ParserRuleContext {
	public USELESS_OP(): TerminalNode { return this.getToken(LeviathonParser.USELESS_OP, 0); }
	public LINESKIP(): TerminalNode { return this.getToken(LeviathonParser.LINESKIP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LeviathonParser.RULE_nop_statement; }
	// @Override
	public enterRule(listener: LeviathonListener): void {
		if (listener.enterNop_statement) {
			listener.enterNop_statement(this);
		}
	}
	// @Override
	public exitRule(listener: LeviathonListener): void {
		if (listener.exitNop_statement) {
			listener.exitNop_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LeviathonVisitor<Result>): Result {
		if (visitor.visitNop_statement) {
			return visitor.visitNop_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Control_statementContext extends ParserRuleContext {
	public LINESKIP(): TerminalNode { return this.getToken(LeviathonParser.LINESKIP, 0); }
	public RETURN(): TerminalNode | undefined { return this.tryGetToken(LeviathonParser.RETURN, 0); }
	public RESET(): TerminalNode | undefined { return this.tryGetToken(LeviathonParser.RESET, 0); }
	public REPEAT(): TerminalNode | undefined { return this.tryGetToken(LeviathonParser.REPEAT, 0); }
	public CONCLUDE(): TerminalNode | undefined { return this.tryGetToken(LeviathonParser.CONCLUDE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LeviathonParser.RULE_control_statement; }
	// @Override
	public enterRule(listener: LeviathonListener): void {
		if (listener.enterControl_statement) {
			listener.enterControl_statement(this);
		}
	}
	// @Override
	public exitRule(listener: LeviathonListener): void {
		if (listener.exitControl_statement) {
			listener.exitControl_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LeviathonVisitor<Result>): Result {
		if (visitor.visitControl_statement) {
			return visitor.visitControl_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Register_statementContext extends ParserRuleContext {
	public _operand!: Token;
	public _op!: Token;
	public LEFT_BRACKET(): TerminalNode { return this.getToken(LeviathonParser.LEFT_BRACKET, 0); }
	public RIGHT_BRACKET(): TerminalNode { return this.getToken(LeviathonParser.RIGHT_BRACKET, 0); }
	public LINESKIP(): TerminalNode { return this.getToken(LeviathonParser.LINESKIP, 0); }
	public REGISTER(): TerminalNode | undefined { return this.tryGetToken(LeviathonParser.REGISTER, 0); }
	public ID(): TerminalNode | undefined { return this.tryGetToken(LeviathonParser.ID, 0); }
	public INCREMENT(): TerminalNode | undefined { return this.tryGetToken(LeviathonParser.INCREMENT, 0); }
	public RESET_VAL(): TerminalNode | undefined { return this.tryGetToken(LeviathonParser.RESET_VAL, 0); }
	public action_statement(): Action_statementContext | undefined {
		return this.tryGetRuleContext(0, Action_statementContext);
	}
	public node_call_statement(): Node_call_statementContext | undefined {
		return this.tryGetRuleContext(0, Node_call_statementContext);
	}
	public directive_statement(): Directive_statementContext | undefined {
		return this.tryGetRuleContext(0, Directive_statementContext);
	}
	public meta_statement(): Meta_statementContext | undefined {
		return this.tryGetRuleContext(0, Meta_statementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LeviathonParser.RULE_register_statement; }
	// @Override
	public enterRule(listener: LeviathonListener): void {
		if (listener.enterRegister_statement) {
			listener.enterRegister_statement(this);
		}
	}
	// @Override
	public exitRule(listener: LeviathonListener): void {
		if (listener.exitRegister_statement) {
			listener.exitRegister_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LeviathonVisitor<Result>): Result {
		if (visitor.visitRegister_statement) {
			return visitor.visitRegister_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Register_conditionContext extends ParserRuleContext {
	public _operand1!: Token;
	public _op!: Token;
	public _operand2!: Token;
	public LEFT_BRACKET(): TerminalNode { return this.getToken(LeviathonParser.LEFT_BRACKET, 0); }
	public RIGHT_BRACKET(): TerminalNode { return this.getToken(LeviathonParser.RIGHT_BRACKET, 0); }
	public REGISTER(): TerminalNode | undefined { return this.tryGetToken(LeviathonParser.REGISTER, 0); }
	public ID(): TerminalNode | undefined { return this.tryGetToken(LeviathonParser.ID, 0); }
	public EQ(): TerminalNode | undefined { return this.tryGetToken(LeviathonParser.EQ, 0); }
	public NE(): TerminalNode | undefined { return this.tryGetToken(LeviathonParser.NE, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(LeviathonParser.GT, 0); }
	public LT(): TerminalNode | undefined { return this.tryGetToken(LeviathonParser.LT, 0); }
	public GEQ(): TerminalNode | undefined { return this.tryGetToken(LeviathonParser.GEQ, 0); }
	public LEQ(): TerminalNode | undefined { return this.tryGetToken(LeviathonParser.LEQ, 0); }
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(LeviathonParser.NUMBER, 0); }
	public HEX_NUMBER(): TerminalNode | undefined { return this.tryGetToken(LeviathonParser.HEX_NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LeviathonParser.RULE_register_condition; }
	// @Override
	public enterRule(listener: LeviathonListener): void {
		if (listener.enterRegister_condition) {
			listener.enterRegister_condition(this);
		}
	}
	// @Override
	public exitRule(listener: LeviathonListener): void {
		if (listener.exitRegister_condition) {
			listener.exitRegister_condition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LeviathonVisitor<Result>): Result {
		if (visitor.visitRegister_condition) {
			return visitor.visitRegister_condition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


