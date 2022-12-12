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
	public static readonly RULE_call_literal = 11;
	public static readonly RULE_scoped_call_literal = 12;
	public static readonly RULE_import_library = 13;
	public static readonly RULE_import_actions = 14;
	public static readonly RULE_node = 15;
	public static readonly RULE_node_declaration = 16;
	public static readonly RULE_end_node = 17;
	public static readonly RULE_segment = 18;
	public static readonly RULE_node_call_statement = 19;
	public static readonly RULE_node_call = 20;
	public static readonly RULE_scoped_node_call = 21;
	public static readonly RULE_raw_node_call = 22;
	public static readonly RULE_scoped_raw_node_call = 23;
	public static readonly RULE_action_statement = 24;
	public static readonly RULE_action_call = 25;
	public static readonly RULE_raw_action_call = 26;
	public static readonly RULE_function_call = 27;
	public static readonly RULE_raw_function_call = 28;
	public static readonly RULE_directive_statement = 29;
	public static readonly RULE_meta_statement = 30;
	public static readonly RULE_node_names = 31;
	public static readonly RULE_node_thk_id = 32;
	public static readonly RULE_node_index = 33;
	public static readonly RULE_meta_value = 34;
	public static readonly RULE_import_path = 35;
	public static readonly RULE_params = 36;
	public static readonly RULE_if_statement = 37;
	public static readonly RULE_else_statement = 38;
	public static readonly RULE_elif_statement = 39;
	public static readonly RULE_endif_statement = 40;
	public static readonly RULE_endw_statement = 41;
	public static readonly RULE_random_statement = 42;
	public static readonly RULE_elser_statement = 43;
	public static readonly RULE_endr_statement = 44;
	public static readonly RULE_endrw_statement = 45;
	public static readonly RULE_nop_statement = 46;
	public static readonly RULE_control_statement = 47;
	public static readonly RULE_register_statement = 48;
	public static readonly RULE_register_condition = 49;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "importany", "identifier", "import_name", "node_name", "action_name", 
		"monster_name", "function_name", "meta_name", "import_alias", "monster_alias", 
		"call_literal", "scoped_call_literal", "import_library", "import_actions", 
		"node", "node_declaration", "end_node", "segment", "node_call_statement", 
		"node_call", "scoped_node_call", "raw_node_call", "scoped_raw_node_call", 
		"action_statement", "action_call", "raw_action_call", "function_call", 
		"raw_function_call", "directive_statement", "meta_statement", "node_names", 
		"node_thk_id", "node_index", "meta_value", "import_path", "params", "if_statement", 
		"else_statement", "elif_statement", "endif_statement", "endw_statement", 
		"random_statement", "elser_statement", "endr_statement", "endrw_statement", 
		"nop_statement", "control_statement", "register_statement", "register_condition",
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
			this.state = 104;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 102;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case LeviathonParser.IMPORTLIB:
					case LeviathonParser.IMPORTACT:
						{
						this.state = 100;
						this.importany();
						}
						break;
					case LeviathonParser.LINESKIP:
						{
						this.state = 101;
						this.match(LeviathonParser.LINESKIP);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 106;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			}
			this.state = 111;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LeviathonParser.DEF || _la === LeviathonParser.LINESKIP) {
				{
				this.state = 109;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case LeviathonParser.DEF:
					{
					this.state = 107;
					this.node();
					}
					break;
				case LeviathonParser.LINESKIP:
					{
					this.state = 108;
					this.match(LeviathonParser.LINESKIP);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 113;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 114;
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
			this.state = 118;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LeviathonParser.IMPORTLIB:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 116;
				this.import_library();
				}
				break;
			case LeviathonParser.IMPORTACT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 117;
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
			this.state = 120;
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
	public node_name(): Node_nameContext {
		let _localctx: Node_nameContext = new Node_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, LeviathonParser.RULE_node_name);
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
	public action_name(): Action_nameContext {
		let _localctx: Action_nameContext = new Action_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, LeviathonParser.RULE_action_name);
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
	public monster_name(): Monster_nameContext {
		let _localctx: Monster_nameContext = new Monster_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, LeviathonParser.RULE_monster_name);
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
	public function_name(): Function_nameContext {
		let _localctx: Function_nameContext = new Function_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, LeviathonParser.RULE_function_name);
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
	public meta_name(): Meta_nameContext {
		let _localctx: Meta_nameContext = new Meta_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, LeviathonParser.RULE_meta_name);
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
	public import_alias(): Import_aliasContext {
		let _localctx: Import_aliasContext = new Import_aliasContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, LeviathonParser.RULE_import_alias);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 134;
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
			this.state = 136;
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
	public call_literal(): Call_literalContext {
		let _localctx: Call_literalContext = new Call_literalContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, LeviathonParser.RULE_call_literal);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 138;
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
	public scoped_call_literal(): Scoped_call_literalContext {
		let _localctx: Scoped_call_literalContext = new Scoped_call_literalContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, LeviathonParser.RULE_scoped_call_literal);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 140;
			_localctx._call = this.match(LeviathonParser.SCOPED_RAW_CALL);
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
		this.enterRule(_localctx, 26, LeviathonParser.RULE_import_library);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 142;
			this.match(LeviathonParser.IMPORTLIB);
			this.state = 145;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LeviathonParser.ID:
				{
				this.state = 143;
				this.import_name();
				}
				break;
			case LeviathonParser.QUOTE:
				{
				this.state = 144;
				this.import_path();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 147;
			this.match(LeviathonParser.AS);
			this.state = 148;
			_localctx._alias = this.match(LeviathonParser.ID);
			this.state = 149;
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
		this.enterRule(_localctx, 28, LeviathonParser.RULE_import_actions);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 151;
			this.match(LeviathonParser.IMPORTACT);
			this.state = 152;
			this.monster_name();
			this.state = 153;
			this.match(LeviathonParser.AS);
			this.state = 154;
			_localctx._alias = this.identifier();
			this.state = 155;
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
		this.enterRule(_localctx, 30, LeviathonParser.RULE_node);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 157;
			this.node_declaration();
			this.state = 161;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LeviathonParser.IF) | (1 << LeviathonParser.RANDOM) | (1 << LeviathonParser.RESET) | (1 << LeviathonParser.REPEAT) | (1 << LeviathonParser.RETURN) | (1 << LeviathonParser.CONCLUDE) | (1 << LeviathonParser.SELF) | (1 << LeviathonParser.LEFT_BRACKET))) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (LeviathonParser.CALL_OP - 41)) | (1 << (LeviathonParser.ACTION_OP - 41)) | (1 << (LeviathonParser.DIRECTIVE_OP - 41)) | (1 << (LeviathonParser.USELESS_OP - 41)) | (1 << (LeviathonParser.RAW_FUNCTION - 41)))) !== 0)) {
				{
				{
				this.state = 158;
				this.segment();
				}
				}
				this.state = 163;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 164;
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
		this.enterRule(_localctx, 32, LeviathonParser.RULE_node_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 166;
			this.match(LeviathonParser.DEF);
			this.state = 167;
			this.node_names();
			this.state = 169;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LeviathonParser.COLON) {
				{
				this.state = 168;
				this.node_thk_id();
				}
			}

			this.state = 172;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LeviathonParser.META_OP) {
				{
				this.state = 171;
				this.node_index();
				}
			}

			this.state = 174;
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
		this.enterRule(_localctx, 34, LeviathonParser.RULE_end_node);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 176;
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
			this.state = 178;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LeviathonParser.META_OP) {
				{
				this.state = 177;
				this.meta_statement();
				}
			}

			this.state = 180;
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
		this.enterRule(_localctx, 36, LeviathonParser.RULE_segment);
		let _la: number;
		try {
			this.state = 287;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LeviathonParser.IF:
				_localctx = new Segtype_ifContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 182;
				this.if_statement();
				this.state = 186;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LeviathonParser.IF) | (1 << LeviathonParser.RANDOM) | (1 << LeviathonParser.RESET) | (1 << LeviathonParser.REPEAT) | (1 << LeviathonParser.RETURN) | (1 << LeviathonParser.CONCLUDE) | (1 << LeviathonParser.SELF) | (1 << LeviathonParser.LEFT_BRACKET))) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (LeviathonParser.CALL_OP - 41)) | (1 << (LeviathonParser.ACTION_OP - 41)) | (1 << (LeviathonParser.DIRECTIVE_OP - 41)) | (1 << (LeviathonParser.USELESS_OP - 41)) | (1 << (LeviathonParser.RAW_FUNCTION - 41)))) !== 0)) {
					{
					{
					this.state = 183;
					this.segment();
					}
					}
					this.state = 188;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 198;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === LeviathonParser.ELIF) {
					{
					{
					this.state = 189;
					this.elif_statement();
					this.state = 193;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LeviathonParser.IF) | (1 << LeviathonParser.RANDOM) | (1 << LeviathonParser.RESET) | (1 << LeviathonParser.REPEAT) | (1 << LeviathonParser.RETURN) | (1 << LeviathonParser.CONCLUDE) | (1 << LeviathonParser.SELF) | (1 << LeviathonParser.LEFT_BRACKET))) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (LeviathonParser.CALL_OP - 41)) | (1 << (LeviathonParser.ACTION_OP - 41)) | (1 << (LeviathonParser.DIRECTIVE_OP - 41)) | (1 << (LeviathonParser.USELESS_OP - 41)) | (1 << (LeviathonParser.RAW_FUNCTION - 41)))) !== 0)) {
						{
						{
						this.state = 190;
						this.segment();
						}
						}
						this.state = 195;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					}
					this.state = 200;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 208;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LeviathonParser.ELSE) {
					{
					this.state = 201;
					this.else_statement();
					this.state = 205;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LeviathonParser.IF) | (1 << LeviathonParser.RANDOM) | (1 << LeviathonParser.RESET) | (1 << LeviathonParser.REPEAT) | (1 << LeviathonParser.RETURN) | (1 << LeviathonParser.CONCLUDE) | (1 << LeviathonParser.SELF) | (1 << LeviathonParser.LEFT_BRACKET))) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (LeviathonParser.CALL_OP - 41)) | (1 << (LeviathonParser.ACTION_OP - 41)) | (1 << (LeviathonParser.DIRECTIVE_OP - 41)) | (1 << (LeviathonParser.USELESS_OP - 41)) | (1 << (LeviathonParser.RAW_FUNCTION - 41)))) !== 0)) {
						{
						{
						this.state = 202;
						this.segment();
						}
						}
						this.state = 207;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 212;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case LeviathonParser.ENDIF:
					{
					this.state = 210;
					this.endif_statement();
					}
					break;
				case LeviathonParser.ENDW:
					{
					this.state = 211;
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
				this.state = 214;
				this.random_statement();
				this.state = 218;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LeviathonParser.IF) | (1 << LeviathonParser.RANDOM) | (1 << LeviathonParser.RESET) | (1 << LeviathonParser.REPEAT) | (1 << LeviathonParser.RETURN) | (1 << LeviathonParser.CONCLUDE) | (1 << LeviathonParser.SELF) | (1 << LeviathonParser.LEFT_BRACKET))) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (LeviathonParser.CALL_OP - 41)) | (1 << (LeviathonParser.ACTION_OP - 41)) | (1 << (LeviathonParser.DIRECTIVE_OP - 41)) | (1 << (LeviathonParser.USELESS_OP - 41)) | (1 << (LeviathonParser.RAW_FUNCTION - 41)))) !== 0)) {
					{
					{
					this.state = 215;
					this.segment();
					}
					}
					this.state = 220;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 230;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === LeviathonParser.ELSER || _la === LeviathonParser.ELSERANDOM) {
					{
					{
					this.state = 221;
					this.elser_statement();
					this.state = 225;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LeviathonParser.IF) | (1 << LeviathonParser.RANDOM) | (1 << LeviathonParser.RESET) | (1 << LeviathonParser.REPEAT) | (1 << LeviathonParser.RETURN) | (1 << LeviathonParser.CONCLUDE) | (1 << LeviathonParser.SELF) | (1 << LeviathonParser.LEFT_BRACKET))) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (LeviathonParser.CALL_OP - 41)) | (1 << (LeviathonParser.ACTION_OP - 41)) | (1 << (LeviathonParser.DIRECTIVE_OP - 41)) | (1 << (LeviathonParser.USELESS_OP - 41)) | (1 << (LeviathonParser.RAW_FUNCTION - 41)))) !== 0)) {
						{
						{
						this.state = 222;
						this.segment();
						}
						}
						this.state = 227;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					}
					this.state = 232;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 235;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case LeviathonParser.ENDR:
				case LeviathonParser.ENDRANDOM:
					{
					this.state = 233;
					this.endr_statement();
					}
					break;
				case LeviathonParser.ENDRW:
				case LeviathonParser.ENDRANDOMW:
					{
					this.state = 234;
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
				this.state = 237;
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
				this.state = 238;
				this.control_statement();
				}
				break;
			case LeviathonParser.LEFT_BRACKET:
				_localctx = new Segtype_registerContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 239;
				this.register_statement();
				}
				break;
			case LeviathonParser.SELF:
			case LeviathonParser.RAW_FUNCTION:
				_localctx = new Segtype_functionContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 244;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case LeviathonParser.SELF:
					{
					this.state = 240;
					this.match(LeviathonParser.SELF);
					this.state = 241;
					this.match(LeviathonParser.DOT);
					this.state = 242;
					this.function_call();
					}
					break;
				case LeviathonParser.RAW_FUNCTION:
					{
					this.state = 243;
					this.raw_function_call();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 247;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LeviathonParser.ACTION_OP) {
					{
					this.state = 246;
					this.action_statement();
					}
				}

				this.state = 250;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LeviathonParser.CALL_OP) {
					{
					this.state = 249;
					this.node_call_statement();
					}
				}

				this.state = 253;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LeviathonParser.DIRECTIVE_OP) {
					{
					this.state = 252;
					this.directive_statement();
					}
				}

				this.state = 256;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LeviathonParser.META_OP) {
					{
					this.state = 255;
					this.meta_statement();
					}
				}

				this.state = 258;
				this.match(LeviathonParser.LINESKIP);
				}
				break;
			case LeviathonParser.ACTION_OP:
				_localctx = new Segtype_actionContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 260;
				this.action_statement();
				this.state = 262;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LeviathonParser.CALL_OP) {
					{
					this.state = 261;
					this.node_call_statement();
					}
				}

				this.state = 265;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LeviathonParser.DIRECTIVE_OP) {
					{
					this.state = 264;
					this.directive_statement();
					}
				}

				this.state = 268;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LeviathonParser.META_OP) {
					{
					this.state = 267;
					this.meta_statement();
					}
				}

				this.state = 270;
				this.match(LeviathonParser.LINESKIP);
				}
				break;
			case LeviathonParser.CALL_OP:
				_localctx = new Segtype_nodeContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 272;
				this.node_call_statement();
				this.state = 274;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LeviathonParser.DIRECTIVE_OP) {
					{
					this.state = 273;
					this.directive_statement();
					}
				}

				this.state = 277;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LeviathonParser.META_OP) {
					{
					this.state = 276;
					this.meta_statement();
					}
				}

				this.state = 279;
				this.match(LeviathonParser.LINESKIP);
				}
				break;
			case LeviathonParser.DIRECTIVE_OP:
				_localctx = new Segtype_directiveContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 281;
				this.directive_statement();
				this.state = 283;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LeviathonParser.META_OP) {
					{
					this.state = 282;
					this.meta_statement();
					}
				}

				this.state = 285;
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
		this.enterRule(_localctx, 38, LeviathonParser.RULE_node_call_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 293;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
			case 1:
				{
				this.state = 289;
				this.node_call();
				}
				break;

			case 2:
				{
				this.state = 290;
				this.scoped_node_call();
				}
				break;

			case 3:
				{
				this.state = 291;
				this.raw_node_call();
				}
				break;

			case 4:
				{
				this.state = 292;
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
		this.enterRule(_localctx, 40, LeviathonParser.RULE_node_call);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 295;
			this.match(LeviathonParser.CALL_OP);
			this.state = 296;
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
		this.enterRule(_localctx, 42, LeviathonParser.RULE_scoped_node_call);
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
		this.enterRule(_localctx, 44, LeviathonParser.RULE_raw_node_call);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 303;
			this.match(LeviathonParser.CALL_OP);
			this.state = 304;
			this.call_literal();
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
		this.enterRule(_localctx, 46, LeviathonParser.RULE_scoped_raw_node_call);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 306;
			this.match(LeviathonParser.CALL_OP);
			this.state = 307;
			this.import_alias();
			this.state = 308;
			this.match(LeviathonParser.DOT);
			this.state = 309;
			this.scoped_call_literal();
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
		this.enterRule(_localctx, 48, LeviathonParser.RULE_action_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 313;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 33, this._ctx) ) {
			case 1:
				{
				this.state = 311;
				this.action_call();
				}
				break;

			case 2:
				{
				this.state = 312;
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
		this.enterRule(_localctx, 50, LeviathonParser.RULE_action_call);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 315;
			this.match(LeviathonParser.ACTION_OP);
			this.state = 316;
			this.monster_alias();
			this.state = 317;
			this.match(LeviathonParser.DOT);
			this.state = 318;
			this.action_name();
			this.state = 319;
			this.match(LeviathonParser.LEFT_PAREN);
			this.state = 321;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (LeviathonParser.ID - 53)) | (1 << (LeviathonParser.NUMBER - 53)) | (1 << (LeviathonParser.HEX_NUMBER - 53)))) !== 0)) {
				{
				this.state = 320;
				this.params();
				}
			}

			this.state = 323;
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
		this.enterRule(_localctx, 52, LeviathonParser.RULE_raw_action_call);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 325;
			this.match(LeviathonParser.ACTION_OP);
			this.state = 326;
			_localctx._action = this.match(LeviathonParser.RAW_ACTION);
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
		this.enterRule(_localctx, 54, LeviathonParser.RULE_function_call);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 333;
			_localctx._name = this.match(LeviathonParser.ID);
			this.state = 339;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LeviathonParser.LEFT_PAREN) {
				{
				this.state = 334;
				this.match(LeviathonParser.LEFT_PAREN);
				this.state = 336;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (LeviathonParser.ID - 53)) | (1 << (LeviathonParser.NUMBER - 53)) | (1 << (LeviathonParser.HEX_NUMBER - 53)))) !== 0)) {
					{
					this.state = 335;
					this.params();
					}
				}

				this.state = 338;
				this.match(LeviathonParser.RIGHT_PAREN);
				}
			}

			this.state = 345;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 341;
					this.match(LeviathonParser.DOT);
					this.state = 342;
					this.function_call();
					}
					}
				}
				this.state = 347;
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
		this.enterRule(_localctx, 56, LeviathonParser.RULE_raw_function_call);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 348;
			_localctx._func = this.match(LeviathonParser.RAW_FUNCTION);
			this.state = 349;
			this.match(LeviathonParser.LEFT_PAREN);
			this.state = 351;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (LeviathonParser.ID - 53)) | (1 << (LeviathonParser.NUMBER - 53)) | (1 << (LeviathonParser.HEX_NUMBER - 53)))) !== 0)) {
				{
				this.state = 350;
				this.params();
				}
			}

			this.state = 353;
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
		this.enterRule(_localctx, 58, LeviathonParser.RULE_directive_statement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 355;
			this.match(LeviathonParser.DIRECTIVE_OP);
			this.state = 356;
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
		this.enterRule(_localctx, 60, LeviathonParser.RULE_meta_statement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 358;
			this.match(LeviathonParser.META_OP);
			this.state = 359;
			this.meta_value();
			this.state = 364;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LeviathonParser.COMMA) {
				{
				{
				this.state = 360;
				this.match(LeviathonParser.COMMA);
				this.state = 361;
				this.meta_value();
				}
				}
				this.state = 366;
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
		this.enterRule(_localctx, 62, LeviathonParser.RULE_node_names);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 367;
			_localctx._name = this.node_name();
			this.state = 372;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 368;
					this.match(LeviathonParser.ALIAS_OP);
					this.state = 369;
					this.node_names();
					}
					}
				}
				this.state = 374;
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
		this.enterRule(_localctx, 64, LeviathonParser.RULE_node_thk_id);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 375;
			this.match(LeviathonParser.COLON);
			this.state = 376;
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
		this.enterRule(_localctx, 66, LeviathonParser.RULE_node_index);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 378;
			this.match(LeviathonParser.META_OP);
			this.state = 379;
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
		this.enterRule(_localctx, 68, LeviathonParser.RULE_meta_value);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 381;
			this.meta_name();
			this.state = 382;
			this.match(LeviathonParser.COLON);
			this.state = 383;
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
		this.enterRule(_localctx, 70, LeviathonParser.RULE_import_path);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 385;
			this.match(LeviathonParser.QUOTE);
			this.state = 386;
			_localctx._path = this.match(LeviathonParser.QUOTED_PATH);
			this.state = 387;
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
		this.enterRule(_localctx, 72, LeviathonParser.RULE_params);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 396;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LeviathonParser.NUMBER:
				{
				this.state = 389;
				_localctx._value = this.match(LeviathonParser.NUMBER);
				}
				break;
			case LeviathonParser.HEX_NUMBER:
				{
				this.state = 390;
				_localctx._value = this.match(LeviathonParser.HEX_NUMBER);
				}
				break;
			case LeviathonParser.ID:
				{
				this.state = 391;
				_localctx._enum_name = this.match(LeviathonParser.ID);
				this.state = 394;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LeviathonParser.DOT) {
					{
					this.state = 392;
					this.match(LeviathonParser.DOT);
					this.state = 393;
					_localctx._value = this.match(LeviathonParser.ID);
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 402;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 398;
					this.match(LeviathonParser.COMMA);
					this.state = 399;
					this.params();
					}
					}
				}
				this.state = 404;
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
		this.enterRule(_localctx, 74, LeviathonParser.RULE_if_statement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 405;
			this.match(LeviathonParser.IF);
			this.state = 413;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LeviathonParser.SELF:
			case LeviathonParser.RAW_FUNCTION:
				{
				this.state = 410;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case LeviathonParser.SELF:
					{
					this.state = 406;
					this.match(LeviathonParser.SELF);
					this.state = 407;
					this.match(LeviathonParser.DOT);
					this.state = 408;
					_localctx._func = this.function_call();
					}
					break;
				case LeviathonParser.RAW_FUNCTION:
					{
					this.state = 409;
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
				this.state = 412;
				_localctx._cond = this.register_condition();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 416;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LeviathonParser.ACTION_OP) {
				{
				this.state = 415;
				this.action_statement();
				}
			}

			this.state = 419;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LeviathonParser.CALL_OP) {
				{
				this.state = 418;
				this.node_call_statement();
				}
			}

			this.state = 422;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LeviathonParser.DIRECTIVE_OP) {
				{
				this.state = 421;
				this.directive_statement();
				}
			}

			this.state = 425;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LeviathonParser.META_OP) {
				{
				this.state = 424;
				this.meta_statement();
				}
			}

			this.state = 427;
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
		this.enterRule(_localctx, 76, LeviathonParser.RULE_else_statement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 429;
			this.match(LeviathonParser.ELSE);
			this.state = 434;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LeviathonParser.SELF:
				{
				this.state = 430;
				this.match(LeviathonParser.SELF);
				this.state = 431;
				this.match(LeviathonParser.DOT);
				this.state = 432;
				_localctx._func = this.function_call();
				}
				break;
			case LeviathonParser.RAW_FUNCTION:
				{
				this.state = 433;
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
			this.state = 437;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LeviathonParser.ACTION_OP) {
				{
				this.state = 436;
				this.action_statement();
				}
			}

			this.state = 440;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LeviathonParser.CALL_OP) {
				{
				this.state = 439;
				this.node_call_statement();
				}
			}

			this.state = 443;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LeviathonParser.DIRECTIVE_OP) {
				{
				this.state = 442;
				this.directive_statement();
				}
			}

			this.state = 446;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LeviathonParser.META_OP) {
				{
				this.state = 445;
				this.meta_statement();
				}
			}

			this.state = 448;
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
		this.enterRule(_localctx, 78, LeviathonParser.RULE_elif_statement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 450;
			this.match(LeviathonParser.ELIF);
			this.state = 458;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LeviathonParser.SELF:
			case LeviathonParser.RAW_FUNCTION:
				{
				this.state = 455;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case LeviathonParser.SELF:
					{
					this.state = 451;
					this.match(LeviathonParser.SELF);
					this.state = 452;
					this.match(LeviathonParser.DOT);
					this.state = 453;
					_localctx._func = this.function_call();
					}
					break;
				case LeviathonParser.RAW_FUNCTION:
					{
					this.state = 454;
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
				this.state = 457;
				_localctx._cond = this.register_condition();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 461;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LeviathonParser.ACTION_OP) {
				{
				this.state = 460;
				this.action_statement();
				}
			}

			this.state = 464;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LeviathonParser.CALL_OP) {
				{
				this.state = 463;
				this.node_call_statement();
				}
			}

			this.state = 467;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LeviathonParser.DIRECTIVE_OP) {
				{
				this.state = 466;
				this.directive_statement();
				}
			}

			this.state = 470;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LeviathonParser.META_OP) {
				{
				this.state = 469;
				this.meta_statement();
				}
			}

			this.state = 472;
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
		this.enterRule(_localctx, 80, LeviathonParser.RULE_endif_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 474;
			this.match(LeviathonParser.ENDIF);
			this.state = 475;
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
		this.enterRule(_localctx, 82, LeviathonParser.RULE_endw_statement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 477;
			this.match(LeviathonParser.ENDW);
			this.state = 479;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LeviathonParser.ACTION_OP) {
				{
				this.state = 478;
				this.action_statement();
				}
			}

			this.state = 482;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LeviathonParser.CALL_OP) {
				{
				this.state = 481;
				this.node_call_statement();
				}
			}

			this.state = 485;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LeviathonParser.DIRECTIVE_OP) {
				{
				this.state = 484;
				this.directive_statement();
				}
			}

			this.state = 488;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LeviathonParser.META_OP) {
				{
				this.state = 487;
				this.meta_statement();
				}
			}

			this.state = 490;
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
		this.enterRule(_localctx, 84, LeviathonParser.RULE_random_statement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 492;
			this.match(LeviathonParser.RANDOM);
			this.state = 493;
			this.match(LeviathonParser.LEFT_PAREN);
			this.state = 494;
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
			this.state = 495;
			this.match(LeviathonParser.RIGHT_PAREN);
			this.state = 497;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LeviathonParser.ACTION_OP) {
				{
				this.state = 496;
				this.action_statement();
				}
			}

			this.state = 500;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LeviathonParser.CALL_OP) {
				{
				this.state = 499;
				this.node_call_statement();
				}
			}

			this.state = 503;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LeviathonParser.DIRECTIVE_OP) {
				{
				this.state = 502;
				this.directive_statement();
				}
			}

			this.state = 506;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LeviathonParser.META_OP) {
				{
				this.state = 505;
				this.meta_statement();
				}
			}

			this.state = 508;
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
		this.enterRule(_localctx, 86, LeviathonParser.RULE_elser_statement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 510;
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
			this.state = 511;
			this.match(LeviathonParser.LEFT_PAREN);
			this.state = 512;
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
			this.state = 513;
			this.match(LeviathonParser.RIGHT_PAREN);
			this.state = 515;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LeviathonParser.ACTION_OP) {
				{
				this.state = 514;
				this.action_statement();
				}
			}

			this.state = 518;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LeviathonParser.CALL_OP) {
				{
				this.state = 517;
				this.node_call_statement();
				}
			}

			this.state = 521;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LeviathonParser.DIRECTIVE_OP) {
				{
				this.state = 520;
				this.directive_statement();
				}
			}

			this.state = 524;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LeviathonParser.META_OP) {
				{
				this.state = 523;
				this.meta_statement();
				}
			}

			this.state = 526;
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
		this.enterRule(_localctx, 88, LeviathonParser.RULE_endr_statement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 528;
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
			this.state = 529;
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
		this.enterRule(_localctx, 90, LeviathonParser.RULE_endrw_statement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 531;
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
			this.state = 533;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LeviathonParser.ACTION_OP) {
				{
				this.state = 532;
				this.action_statement();
				}
			}

			this.state = 536;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LeviathonParser.CALL_OP) {
				{
				this.state = 535;
				this.node_call_statement();
				}
			}

			this.state = 539;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LeviathonParser.DIRECTIVE_OP) {
				{
				this.state = 538;
				this.directive_statement();
				}
			}

			this.state = 542;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LeviathonParser.META_OP) {
				{
				this.state = 541;
				this.meta_statement();
				}
			}

			this.state = 544;
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
		this.enterRule(_localctx, 92, LeviathonParser.RULE_nop_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 546;
			this.match(LeviathonParser.USELESS_OP);
			this.state = 547;
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
		this.enterRule(_localctx, 94, LeviathonParser.RULE_control_statement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 549;
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
			this.state = 550;
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
		this.enterRule(_localctx, 96, LeviathonParser.RULE_register_statement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 552;
			this.match(LeviathonParser.LEFT_BRACKET);
			this.state = 553;
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
			this.state = 554;
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
			this.state = 555;
			this.match(LeviathonParser.RIGHT_BRACKET);
			this.state = 557;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LeviathonParser.ACTION_OP) {
				{
				this.state = 556;
				this.action_statement();
				}
			}

			this.state = 560;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LeviathonParser.CALL_OP) {
				{
				this.state = 559;
				this.node_call_statement();
				}
			}

			this.state = 563;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LeviathonParser.DIRECTIVE_OP) {
				{
				this.state = 562;
				this.directive_statement();
				}
			}

			this.state = 566;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LeviathonParser.META_OP) {
				{
				this.state = 565;
				this.meta_statement();
				}
			}

			this.state = 568;
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
		this.enterRule(_localctx, 98, LeviathonParser.RULE_register_condition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 570;
			this.match(LeviathonParser.LEFT_BRACKET);
			this.state = 571;
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
			this.state = 572;
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
			this.state = 573;
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
			this.state = 574;
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03A\u0243\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x03\x02" +
		"\x03\x02\x07\x02i\n\x02\f\x02\x0E\x02l\v\x02\x03\x02\x03\x02\x07\x02p" +
		"\n\x02\f\x02\x0E\x02s\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x05\x03y\n" +
		"\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03" +
		"\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03\r\x03\r\x03" +
		"\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x05\x0F\x94\n\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11" +
		"\x03\x11\x07\x11\xA2\n\x11\f\x11\x0E\x11\xA5\v\x11\x03\x11\x03\x11\x03" +
		"\x12\x03\x12\x03\x12\x05\x12\xAC\n\x12\x03\x12\x05\x12\xAF\n\x12\x03\x12" +
		"\x03\x12\x03\x13\x03\x13\x05\x13\xB5\n\x13\x03\x13\x03\x13\x03\x14\x03" +
		"\x14\x07\x14\xBB\n\x14\f\x14\x0E\x14\xBE\v\x14\x03\x14\x03\x14\x07\x14" +
		"\xC2\n\x14\f\x14\x0E\x14\xC5\v\x14\x07\x14\xC7\n\x14\f\x14\x0E\x14\xCA" +
		"\v\x14\x03\x14\x03\x14\x07\x14\xCE\n\x14\f\x14\x0E\x14\xD1\v\x14\x05\x14" +
		"\xD3\n\x14\x03\x14\x03\x14\x05\x14\xD7\n\x14\x03\x14\x03\x14\x07\x14\xDB" +
		"\n\x14\f\x14\x0E\x14\xDE\v\x14\x03\x14\x03\x14\x07\x14\xE2\n\x14\f\x14" +
		"\x0E\x14\xE5\v\x14\x07\x14\xE7\n\x14\f\x14\x0E\x14\xEA\v\x14\x03\x14\x03" +
		"\x14\x05\x14\xEE\n\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14" +
		"\x03\x14\x05\x14\xF7\n\x14\x03\x14\x05\x14\xFA\n\x14\x03\x14\x05\x14\xFD" +
		"\n\x14\x03\x14\x05\x14\u0100\n\x14\x03\x14\x05\x14\u0103\n\x14\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x05\x14\u0109\n\x14\x03\x14\x05\x14\u010C\n\x14" +
		"\x03\x14\x05\x14\u010F\n\x14\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14\u0115" +
		"\n\x14\x03\x14\x05\x14\u0118\n\x14\x03\x14\x03\x14\x03\x14\x03\x14\x05" +
		"\x14\u011E\n\x14\x03\x14\x03\x14\x05\x14\u0122\n\x14\x03\x15\x03\x15\x03" +
		"\x15\x03\x15\x05\x15\u0128\n\x15\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17" +
		"\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19" +
		"\x03\x19\x03\x19\x03\x1A\x03\x1A\x05\x1A\u013C\n\x1A\x03\x1B\x03\x1B\x03" +
		"\x1B\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u0144\n\x1B\x03\x1B\x03\x1B\x03\x1C" +
		"\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u014C\n\x1C\x03\x1C\x03\x1C\x03\x1D\x03" +
		"\x1D\x03\x1D\x05\x1D\u0153\n\x1D\x03\x1D\x05\x1D\u0156\n\x1D\x03\x1D\x03" +
		"\x1D\x07\x1D\u015A\n\x1D\f\x1D\x0E\x1D\u015D\v\x1D\x03\x1E\x03\x1E\x03" +
		"\x1E\x05\x1E\u0162\n\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03 " +
		"\x03 \x03 \x03 \x07 \u016D\n \f \x0E \u0170\v \x03!\x03!\x03!\x07!\u0175" +
		"\n!\f!\x0E!\u0178\v!\x03\"\x03\"\x03\"\x03#\x03#\x03#\x03$\x03$\x03$\x03" +
		"$\x03%\x03%\x03%\x03%\x03&\x03&\x03&\x03&\x03&\x05&\u018D\n&\x05&\u018F" +
		"\n&\x03&\x03&\x07&\u0193\n&\f&\x0E&\u0196\v&\x03\'\x03\'\x03\'\x03\'\x03" +
		"\'\x05\'\u019D\n\'\x03\'\x05\'\u01A0\n\'\x03\'\x05\'\u01A3\n\'\x03\'\x05" +
		"\'\u01A6\n\'\x03\'\x05\'\u01A9\n\'\x03\'\x05\'\u01AC\n\'\x03\'\x03\'\x03" +
		"(\x03(\x03(\x03(\x03(\x05(\u01B5\n(\x03(\x05(\u01B8\n(\x03(\x05(\u01BB" +
		"\n(\x03(\x05(\u01BE\n(\x03(\x05(\u01C1\n(\x03(\x03(\x03)\x03)\x03)\x03" +
		")\x03)\x05)\u01CA\n)\x03)\x05)\u01CD\n)\x03)\x05)\u01D0\n)\x03)\x05)\u01D3" +
		"\n)\x03)\x05)\u01D6\n)\x03)\x05)\u01D9\n)\x03)\x03)\x03*\x03*\x03*\x03" +
		"+\x03+\x05+\u01E2\n+\x03+\x05+\u01E5\n+\x03+\x05+\u01E8\n+\x03+\x05+\u01EB" +
		"\n+\x03+\x03+\x03,\x03,\x03,\x03,\x03,\x05,\u01F4\n,\x03,\x05,\u01F7\n" +
		",\x03,\x05,\u01FA\n,\x03,\x05,\u01FD\n,\x03,\x03,\x03-\x03-\x03-\x03-" +
		"\x03-\x05-\u0206\n-\x03-\x05-\u0209\n-\x03-\x05-\u020C\n-\x03-\x05-\u020F" +
		"\n-\x03-\x03-\x03.\x03.\x03.\x03/\x03/\x05/\u0218\n/\x03/\x05/\u021B\n" +
		"/\x03/\x05/\u021E\n/\x03/\x05/\u0221\n/\x03/\x03/\x030\x030\x030\x031" +
		"\x031\x031\x032\x032\x032\x032\x032\x052\u0230\n2\x032\x052\u0233\n2\x03" +
		"2\x052\u0236\n2\x032\x052\u0239\n2\x032\x032\x033\x033\x033\x033\x033" +
		"\x033\x033\x02\x02\x024\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E" +
		"\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 " +
		"\x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02" +
		"<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02" +
		"X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02\x02\v\x03\x02\t\v\x03\x02\x13\x16" +
		"\x03\x0289\x03\x02\r\x0E\x03\x02\x0F\x10\x03\x02\x11\x12\x03\x0267\x03" +
		"\x02)*\x03\x02#(\x02\u026D\x02j\x03\x02\x02\x02\x04x\x03\x02\x02\x02\x06" +
		"z\x03\x02\x02\x02\b|\x03\x02\x02\x02\n~\x03\x02\x02\x02\f\x80\x03\x02" +
		"\x02\x02\x0E\x82\x03\x02\x02\x02\x10\x84\x03\x02\x02\x02\x12\x86\x03\x02" +
		"\x02\x02\x14\x88\x03\x02\x02\x02\x16\x8A\x03\x02\x02\x02\x18\x8C\x03\x02" +
		"\x02\x02\x1A\x8E\x03\x02\x02\x02\x1C\x90\x03\x02\x02\x02\x1E\x99\x03\x02" +
		"\x02\x02 \x9F\x03\x02\x02\x02\"\xA8\x03\x02\x02\x02$\xB2\x03\x02\x02\x02" +
		"&\u0121\x03\x02\x02\x02(\u0127\x03\x02\x02\x02*\u0129\x03\x02\x02\x02" +
		",\u012C\x03\x02\x02\x02.\u0131\x03\x02\x02\x020\u0134\x03\x02\x02\x02" +
		"2\u013B\x03\x02\x02\x024\u013D\x03\x02\x02\x026\u0147\x03\x02\x02\x02" +
		"8\u014F\x03\x02\x02\x02:\u015E\x03\x02\x02\x02<\u0165\x03\x02\x02\x02" +
		">\u0168\x03\x02\x02\x02@\u0171\x03\x02\x02\x02B\u0179\x03\x02\x02\x02" +
		"D\u017C\x03\x02\x02\x02F\u017F\x03\x02\x02\x02H\u0183\x03\x02\x02\x02" +
		"J\u018E\x03\x02\x02\x02L\u0197\x03\x02\x02\x02N\u01AF\x03\x02\x02\x02" +
		"P\u01C4\x03\x02\x02\x02R\u01DC\x03\x02\x02\x02T\u01DF\x03\x02\x02\x02" +
		"V\u01EE\x03\x02\x02\x02X\u0200\x03\x02\x02\x02Z\u0212\x03\x02\x02\x02" +
		"\\\u0215\x03\x02\x02\x02^\u0224\x03\x02\x02\x02`\u0227\x03\x02\x02\x02" +
		"b\u022A\x03\x02\x02\x02d\u023C\x03\x02\x02\x02fi\x05\x04\x03\x02gi\x07" +
		"@\x02\x02hf\x03\x02\x02\x02hg\x03\x02\x02\x02il\x03\x02\x02\x02jh\x03" +
		"\x02\x02\x02jk\x03\x02\x02\x02kq\x03\x02\x02\x02lj\x03\x02\x02\x02mp\x05" +
		" \x11\x02np\x07@\x02\x02om\x03\x02\x02\x02on\x03\x02\x02\x02ps\x03\x02" +
		"\x02\x02qo\x03\x02\x02\x02qr\x03\x02\x02\x02rt\x03\x02\x02\x02sq\x03\x02" +
		"\x02\x02tu\x07\x02\x02\x03u\x03\x03\x02\x02\x02vy\x05\x1C\x0F\x02wy\x05" +
		"\x1E\x10\x02xv\x03\x02\x02\x02xw\x03\x02\x02\x02y\x05\x03\x02\x02\x02" +
		"z{\x077\x02\x02{\x07\x03\x02\x02\x02|}\x05\x06\x04\x02}\t\x03\x02\x02" +
		"\x02~\x7F\x05\x06\x04\x02\x7F\v\x03\x02\x02\x02\x80\x81\x05\x06\x04\x02" +
		"\x81\r\x03\x02\x02\x02\x82\x83\x05\x06\x04\x02\x83\x0F\x03\x02\x02\x02" +
		"\x84\x85\x05\x06\x04\x02\x85\x11\x03\x02\x02\x02\x86\x87\x05\x06\x04\x02" +
		"\x87\x13\x03\x02\x02\x02\x88\x89\x05\x06\x04\x02\x89\x15\x03\x02\x02\x02" +
		"\x8A\x8B\x05\x06\x04\x02\x8B\x17\x03\x02\x02\x02\x8C\x8D\x07>\x02\x02" +
		"\x8D\x19\x03\x02\x02\x02\x8E\x8F\x07?\x02\x02\x8F\x1B\x03\x02\x02\x02" +
		"\x90\x93\x07\x17\x02\x02\x91\x94\x05\b\x05\x02\x92\x94\x05H%\x02\x93\x91" +
		"\x03\x02\x02\x02\x93\x92\x03\x02\x02\x02\x94\x95\x03\x02\x02\x02\x95\x96" +
		"\x07\x19\x02\x02\x96\x97\x077\x02\x02\x97\x98\x07@\x02\x02\x98\x1D\x03" +
		"\x02\x02\x02\x99\x9A\x07\x18\x02\x02\x9A\x9B\x05\x0E\b\x02\x9B\x9C\x07" +
		"\x19\x02\x02\x9C\x9D\x05\x06\x04\x02\x9D\x9E\x07@\x02\x02\x9E\x1F\x03" +
		"\x02\x02\x02\x9F\xA3\x05\"\x12\x02\xA0\xA2\x05&\x14\x02\xA1\xA0\x03\x02" +
		"\x02\x02\xA2\xA5\x03\x02\x02\x02\xA3\xA1\x03\x02\x02\x02\xA3\xA4\x03\x02" +
		"\x02\x02\xA4\xA6\x03\x02\x02\x02\xA5\xA3\x03\x02\x02\x02\xA6\xA7\x05$" +
		"\x13\x02\xA7!\x03\x02\x02\x02\xA8\xA9\x07\b\x02\x02\xA9\xAB\x05@!\x02" +
		"\xAA\xAC\x05B\"\x02\xAB\xAA\x03\x02\x02\x02\xAB\xAC\x03\x02\x02\x02\xAC" +
		"\xAE\x03\x02\x02\x02\xAD\xAF\x05D#\x02\xAE\xAD\x03\x02\x02\x02\xAE\xAF" +
		"\x03\x02\x02\x02\xAF\xB0\x03\x02\x02\x02\xB0\xB1\x07@\x02\x02\xB1#\x03" +
		"\x02\x02\x02\xB2\xB4\t\x02\x02\x02\xB3\xB5\x05> \x02\xB4\xB3\x03\x02\x02" +
		"\x02\xB4\xB5\x03\x02\x02\x02\xB5\xB6\x03\x02\x02\x02\xB6\xB7\x07@\x02" +
		"\x02\xB7%\x03\x02\x02\x02\xB8\xBC\x05L\'\x02\xB9\xBB\x05&\x14\x02\xBA" +
		"\xB9\x03\x02\x02\x02\xBB\xBE\x03\x02\x02\x02\xBC\xBA\x03\x02\x02\x02\xBC" +
		"\xBD\x03\x02\x02\x02\xBD\xC8\x03\x02\x02\x02\xBE\xBC\x03\x02\x02\x02\xBF" +
		"\xC3\x05P)\x02\xC0\xC2\x05&\x14\x02\xC1\xC0\x03\x02\x02\x02\xC2\xC5\x03" +
		"\x02\x02\x02\xC3\xC1\x03\x02\x02\x02\xC3\xC4\x03\x02\x02\x02\xC4\xC7\x03" +
		"\x02\x02\x02\xC5\xC3\x03\x02\x02\x02\xC6\xBF\x03\x02\x02\x02\xC7\xCA\x03" +
		"\x02\x02\x02\xC8\xC6\x03\x02\x02\x02\xC8\xC9\x03\x02\x02\x02\xC9\xD2\x03" +
		"\x02\x02\x02\xCA\xC8\x03\x02\x02\x02\xCB\xCF\x05N(\x02\xCC\xCE\x05&\x14" +
		"\x02\xCD\xCC\x03\x02\x02\x02\xCE\xD1\x03\x02\x02\x02\xCF\xCD\x03\x02\x02" +
		"\x02\xCF\xD0\x03\x02\x02\x02\xD0\xD3\x03\x02\x02\x02\xD1\xCF\x03\x02\x02" +
		"\x02\xD2\xCB\x03\x02\x02\x02\xD2\xD3\x03\x02\x02\x02\xD3\xD6\x03\x02\x02" +
		"\x02\xD4\xD7\x05R*\x02\xD5\xD7\x05T+\x02\xD6\xD4\x03\x02\x02\x02\xD6\xD5" +
		"\x03\x02\x02\x02\xD7\u0122\x03\x02\x02\x02\xD8\xDC\x05V,\x02\xD9\xDB\x05" +
		"&\x14\x02\xDA\xD9\x03\x02\x02\x02\xDB\xDE\x03\x02\x02\x02\xDC\xDA\x03" +
		"\x02\x02\x02\xDC\xDD\x03\x02\x02\x02\xDD\xE8\x03\x02\x02\x02\xDE\xDC\x03" +
		"\x02\x02\x02\xDF\xE3\x05X-\x02\xE0\xE2\x05&\x14\x02\xE1\xE0\x03\x02\x02" +
		"\x02\xE2\xE5\x03\x02\x02\x02\xE3\xE1\x03\x02\x02\x02\xE3\xE4\x03\x02\x02" +
		"\x02\xE4\xE7\x03\x02\x02\x02\xE5\xE3\x03\x02\x02\x02\xE6\xDF\x03\x02\x02" +
		"\x02\xE7\xEA\x03\x02\x02\x02\xE8\xE6\x03\x02\x02\x02\xE8\xE9\x03\x02\x02" +
		"\x02\xE9\xED\x03\x02\x02\x02\xEA\xE8\x03\x02\x02\x02\xEB\xEE\x05Z.\x02" +
		"\xEC\xEE\x05\\/\x02\xED\xEB\x03\x02\x02\x02\xED\xEC\x03\x02\x02\x02\xEE" +
		"\u0122\x03\x02\x02\x02\xEF\u0122\x05^0\x02\xF0\u0122\x05`1\x02\xF1\u0122" +
		"\x05b2\x02\xF2\xF3\x07\x1B\x02\x02\xF3\xF4\x072\x02\x02\xF4\xF7\x058\x1D" +
		"\x02\xF5\xF7\x05:\x1E\x02\xF6\xF2\x03\x02\x02\x02\xF6\xF5\x03\x02\x02" +
		"\x02\xF7\xF9\x03\x02\x02\x02\xF8\xFA\x052\x1A\x02\xF9\xF8\x03\x02\x02" +
		"\x02\xF9\xFA\x03\x02\x02\x02\xFA\xFC\x03\x02\x02\x02\xFB\xFD\x05(\x15" +
		"\x02\xFC\xFB\x03\x02\x02\x02\xFC\xFD\x03\x02\x02\x02\xFD\xFF\x03\x02\x02" +
		"\x02\xFE\u0100\x05<\x1F\x02\xFF\xFE\x03\x02\x02\x02\xFF\u0100\x03\x02" +
		"\x02\x02\u0100\u0102\x03\x02\x02\x02\u0101\u0103\x05> \x02\u0102\u0101" +
		"\x03\x02\x02\x02\u0102\u0103\x03\x02\x02\x02\u0103\u0104\x03\x02\x02\x02" +
		"\u0104\u0105\x07@\x02\x02\u0105\u0122\x03\x02\x02\x02\u0106\u0108\x05" +
		"2\x1A\x02\u0107\u0109\x05(\x15\x02\u0108\u0107\x03\x02\x02\x02\u0108\u0109" +
		"\x03\x02\x02\x02\u0109\u010B\x03\x02\x02\x02\u010A\u010C\x05<\x1F\x02" +
		"\u010B\u010A\x03\x02\x02\x02\u010B\u010C\x03\x02\x02\x02\u010C\u010E\x03" +
		"\x02\x02\x02\u010D\u010F\x05> \x02\u010E\u010D\x03\x02\x02\x02\u010E\u010F" +
		"\x03\x02\x02\x02\u010F\u0110\x03\x02\x02\x02\u0110\u0111\x07@\x02\x02" +
		"\u0111\u0122\x03\x02\x02\x02\u0112\u0114\x05(\x15\x02\u0113\u0115\x05" +
		"<\x1F\x02\u0114\u0113\x03\x02\x02\x02\u0114\u0115\x03\x02\x02\x02\u0115" +
		"\u0117\x03\x02\x02\x02\u0116\u0118\x05> \x02\u0117\u0116\x03\x02\x02\x02" +
		"\u0117\u0118\x03\x02\x02\x02\u0118\u0119\x03\x02\x02\x02\u0119\u011A\x07" +
		"@\x02\x02\u011A\u0122\x03\x02\x02\x02\u011B\u011D\x05<\x1F\x02\u011C\u011E" +
		"\x05> \x02\u011D\u011C\x03\x02\x02\x02\u011D\u011E\x03\x02\x02\x02\u011E" +
		"\u011F\x03\x02\x02\x02\u011F\u0120\x07@\x02\x02\u0120\u0122\x03\x02\x02" +
		"\x02\u0121\xB8\x03\x02\x02\x02\u0121\xD8\x03\x02\x02\x02\u0121\xEF\x03" +
		"\x02\x02\x02\u0121\xF0\x03\x02\x02\x02\u0121\xF1\x03\x02\x02\x02\u0121" +
		"\xF6\x03\x02\x02\x02\u0121\u0106\x03\x02\x02\x02\u0121\u0112\x03\x02\x02" +
		"\x02\u0121\u011B\x03\x02\x02\x02\u0122\'\x03\x02\x02\x02\u0123\u0128\x05" +
		"*\x16\x02\u0124\u0128\x05,\x17\x02\u0125\u0128\x05.\x18\x02\u0126\u0128" +
		"\x050\x19\x02\u0127\u0123\x03\x02\x02\x02\u0127\u0124\x03\x02\x02\x02" +
		"\u0127\u0125\x03\x02\x02\x02\u0127\u0126\x03\x02\x02\x02\u0128)\x03\x02" +
		"\x02\x02\u0129\u012A\x07+\x02\x02\u012A\u012B\x05\n\x06\x02\u012B+\x03" +
		"\x02\x02\x02\u012C\u012D\x07+\x02\x02\u012D\u012E\x05\x14\v\x02\u012E" +
		"\u012F\x072\x02\x02\u012F\u0130\x05\n\x06\x02\u0130-\x03\x02\x02\x02\u0131" +
		"\u0132\x07+\x02\x02\u0132\u0133\x05\x18\r\x02\u0133/\x03\x02\x02\x02\u0134" +
		"\u0135\x07+\x02\x02\u0135\u0136\x05\x14\v\x02\u0136\u0137\x072\x02\x02" +
		"\u0137\u0138\x05\x1A\x0E\x02\u01381\x03\x02\x02\x02\u0139\u013C\x054\x1B" +
		"\x02\u013A\u013C\x056\x1C\x02\u013B\u0139\x03\x02\x02\x02\u013B\u013A" +
		"\x03\x02\x02\x02\u013C3\x03\x02\x02\x02\u013D\u013E\x07,\x02\x02\u013E" +
		"\u013F\x05\x16\f\x02\u013F\u0140\x072\x02\x02\u0140\u0141\x05\f\x07\x02" +
		"\u0141\u0143\x07!\x02\x02\u0142\u0144\x05J&\x02\u0143\u0142\x03\x02\x02" +
		"\x02\u0143\u0144\x03\x02\x02\x02\u0144\u0145\x03\x02\x02\x02\u0145\u0146" +
		"\x07\"\x02\x02\u01465\x03\x02\x02\x02\u0147\u0148\x07,\x02\x02\u0148\u0149" +
		"\x07=\x02\x02\u0149\u014B\x07!\x02\x02\u014A\u014C\x05J&\x02\u014B\u014A" +
		"\x03\x02\x02\x02\u014B\u014C\x03\x02\x02\x02\u014C\u014D\x03\x02\x02\x02" +
		"\u014D\u014E\x07\"\x02\x02\u014E7\x03\x02\x02\x02\u014F\u0155\x077\x02" +
		"\x02\u0150\u0152\x07!\x02\x02\u0151\u0153\x05J&\x02\u0152\u0151\x03\x02" +
		"\x02\x02\u0152\u0153\x03\x02\x02\x02\u0153\u0154\x03\x02\x02\x02\u0154" +
		"\u0156\x07\"\x02\x02\u0155\u0150\x03\x02\x02\x02\u0155\u0156\x03\x02\x02" +
		"\x02\u0156\u015B\x03\x02\x02\x02\u0157\u0158\x072\x02\x02\u0158\u015A" +
		"\x058\x1D\x02\u0159\u0157\x03\x02\x02\x02\u015A\u015D\x03\x02\x02\x02" +
		"\u015B\u0159\x03\x02\x02\x02\u015B\u015C\x03\x02\x02\x02\u015C9\x03\x02" +
		"\x02\x02\u015D\u015B\x03\x02\x02\x02\u015E\u015F\x07<\x02\x02\u015F\u0161" +
		"\x07!\x02\x02\u0160\u0162\x05J&\x02\u0161\u0160\x03\x02\x02\x02\u0161" +
		"\u0162\x03\x02\x02\x02\u0162\u0163\x03\x02\x02\x02\u0163\u0164\x07\"\x02" +
		"\x02\u0164;\x03\x02\x02\x02\u0165\u0166\x07-\x02\x02\u0166\u0167\t\x03" +
		"\x02\x02\u0167=\x03\x02\x02\x02\u0168\u0169\x07/\x02\x02\u0169\u016E\x05" +
		"F$\x02\u016A\u016B\x071\x02\x02\u016B\u016D\x05F$\x02\u016C\u016A\x03" +
		"\x02\x02\x02\u016D\u0170\x03\x02\x02\x02\u016E\u016C\x03\x02\x02\x02\u016E" +
		"\u016F\x03\x02\x02\x02\u016F?\x03\x02\x02\x02\u0170\u016E\x03\x02\x02" +
		"\x02\u0171\u0176\x05\n\x06\x02\u0172\u0173\x074\x02\x02\u0173\u0175\x05" +
		"@!\x02\u0174\u0172\x03\x02\x02\x02\u0175\u0178\x03\x02\x02\x02\u0176\u0174" +
		"\x03\x02\x02\x02\u0176\u0177\x03\x02\x02\x02\u0177A\x03\x02\x02\x02\u0178" +
		"\u0176\x03\x02\x02\x02\u0179\u017A\x070\x02\x02\u017A\u017B\t\x04\x02" +
		"\x02\u017BC\x03\x02\x02\x02\u017C\u017D\x07/\x02\x02\u017D\u017E\t\x04" +
		"\x02\x02\u017EE\x03\x02\x02\x02\u017F\u0180\x05\x12\n\x02\u0180\u0181" +
		"\x070\x02\x02\u0181\u0182\t\x04\x02\x02\u0182G\x03\x02\x02\x02\u0183\u0184" +
		"\x075\x02\x02\u0184\u0185\x07;\x02\x02\u0185\u0186\x075\x02\x02\u0186" +
		"I\x03\x02\x02\x02\u0187\u018F\x078\x02\x02\u0188\u018F\x079\x02\x02\u0189" +
		"\u018C\x077\x02\x02\u018A\u018B\x072\x02\x02\u018B\u018D\x077\x02\x02" +
		"\u018C\u018A\x03\x02\x02\x02\u018C\u018D\x03\x02\x02\x02\u018D\u018F\x03" +
		"\x02\x02\x02\u018E\u0187\x03\x02\x02\x02\u018E\u0188\x03\x02\x02\x02\u018E" +
		"\u0189\x03\x02\x02\x02\u018F\u0194\x03\x02\x02\x02\u0190\u0191\x071\x02" +
		"\x02\u0191\u0193\x05J&\x02\u0192\u0190\x03\x02\x02\x02\u0193\u0196\x03" +
		"\x02\x02\x02\u0194\u0192\x03\x02\x02\x02\u0194\u0195\x03\x02\x02\x02\u0195" +
		"K\x03\x02\x02\x02\u0196\u0194\x03\x02\x02\x02\u0197\u019F\x07\x03\x02" +
		"\x02\u0198\u0199\x07\x1B\x02\x02\u0199\u019A\x072\x02\x02\u019A\u019D" +
		"\x058\x1D\x02\u019B\u019D\x05:\x1E\x02\u019C\u0198\x03\x02\x02\x02\u019C" +
		"\u019B\x03\x02\x02\x02\u019D\u01A0\x03\x02\x02\x02\u019E\u01A0\x05d3\x02" +
		"\u019F\u019C\x03\x02\x02\x02\u019F\u019E\x03\x02\x02\x02\u01A0\u01A2\x03" +
		"\x02\x02\x02\u01A1\u01A3\x052\x1A\x02\u01A2\u01A1\x03\x02\x02\x02\u01A2" +
		"\u01A3\x03\x02\x02\x02\u01A3\u01A5\x03\x02\x02\x02\u01A4\u01A6\x05(\x15" +
		"\x02\u01A5\u01A4\x03\x02\x02\x02\u01A5\u01A6\x03\x02\x02\x02\u01A6\u01A8" +
		"\x03\x02\x02\x02\u01A7\u01A9\x05<\x1F\x02\u01A8\u01A7\x03\x02\x02\x02" +
		"\u01A8\u01A9\x03\x02\x02\x02\u01A9\u01AB\x03\x02\x02\x02\u01AA\u01AC\x05" +
		"> \x02\u01AB\u01AA\x03\x02\x02\x02\u01AB\u01AC\x03\x02\x02\x02\u01AC\u01AD" +
		"\x03\x02\x02\x02\u01AD\u01AE\x07@\x02\x02\u01AEM\x03\x02\x02\x02\u01AF" +
		"\u01B4\x07\x05\x02\x02\u01B0\u01B1\x07\x1B\x02\x02\u01B1\u01B2\x072\x02" +
		"\x02\u01B2\u01B5\x058\x1D\x02\u01B3\u01B5\x05:\x1E\x02\u01B4\u01B0\x03" +
		"\x02\x02\x02\u01B4\u01B3\x03\x02\x02\x02\u01B4\u01B5\x03\x02\x02\x02\u01B5" +
		"\u01B7\x03\x02\x02\x02\u01B6\u01B8\x052\x1A\x02\u01B7\u01B6\x03\x02\x02" +
		"\x02\u01B7\u01B8\x03\x02\x02\x02\u01B8\u01BA\x03\x02\x02\x02\u01B9\u01BB" +
		"\x05(\x15\x02\u01BA\u01B9\x03\x02\x02\x02\u01BA\u01BB\x03\x02\x02\x02" +
		"\u01BB\u01BD\x03\x02\x02\x02\u01BC\u01BE\x05<\x1F\x02\u01BD\u01BC\x03" +
		"\x02\x02\x02\u01BD\u01BE\x03\x02\x02\x02\u01BE\u01C0\x03\x02\x02\x02\u01BF" +
		"\u01C1\x05> \x02\u01C0\u01BF\x03\x02\x02\x02\u01C0\u01C1\x03\x02\x02\x02" +
		"\u01C1\u01C2\x03\x02\x02\x02\u01C2\u01C3\x07@\x02\x02\u01C3O\x03\x02\x02" +
		"\x02\u01C4\u01CC\x07\x04\x02\x02\u01C5\u01C6\x07\x1B\x02\x02\u01C6\u01C7" +
		"\x072\x02\x02\u01C7\u01CA\x058\x1D\x02\u01C8\u01CA\x05:\x1E\x02\u01C9" +
		"\u01C5\x03\x02\x02\x02\u01C9\u01C8\x03\x02\x02\x02\u01CA\u01CD\x03\x02" +
		"\x02\x02\u01CB\u01CD\x05d3\x02\u01CC\u01C9\x03\x02\x02\x02\u01CC\u01CB" +
		"\x03\x02\x02\x02\u01CD\u01CF\x03\x02\x02\x02\u01CE\u01D0\x052\x1A\x02" +
		"\u01CF\u01CE\x03\x02\x02\x02\u01CF\u01D0\x03\x02\x02\x02\u01D0\u01D2\x03" +
		"\x02\x02\x02\u01D1\u01D3\x05(\x15\x02\u01D2\u01D1\x03\x02\x02\x02\u01D2" +
		"\u01D3\x03\x02\x02\x02\u01D3\u01D5\x03\x02\x02\x02\u01D4\u01D6\x05<\x1F" +
		"\x02\u01D5\u01D4\x03\x02\x02\x02\u01D5\u01D6\x03\x02\x02\x02\u01D6\u01D8" +
		"\x03\x02\x02\x02\u01D7\u01D9\x05> \x02\u01D8\u01D7\x03\x02\x02\x02\u01D8" +
		"\u01D9\x03\x02\x02\x02\u01D9\u01DA\x03\x02\x02\x02\u01DA\u01DB\x07@\x02" +
		"\x02\u01DBQ\x03\x02\x02\x02\u01DC\u01DD\x07\x06\x02\x02\u01DD\u01DE\x07" +
		"@\x02\x02\u01DES\x03\x02\x02\x02\u01DF\u01E1\x07\x07\x02\x02\u01E0\u01E2" +
		"\x052\x1A\x02\u01E1\u01E0\x03\x02\x02\x02\u01E1\u01E2\x03\x02\x02\x02" +
		"\u01E2\u01E4\x03\x02\x02\x02\u01E3\u01E5\x05(\x15\x02\u01E4\u01E3\x03" +
		"\x02\x02\x02\u01E4\u01E5\x03\x02\x02\x02\u01E5\u01E7\x03\x02\x02\x02\u01E6" +
		"\u01E8\x05<\x1F\x02\u01E7\u01E6\x03\x02\x02\x02\u01E7\u01E8\x03\x02\x02" +
		"\x02\u01E8\u01EA\x03\x02\x02\x02\u01E9\u01EB\x05> \x02\u01EA\u01E9\x03" +
		"\x02\x02\x02\u01EA\u01EB\x03\x02\x02\x02\u01EB\u01EC\x03\x02\x02\x02\u01EC" +
		"\u01ED\x07@\x02\x02\u01EDU\x03\x02\x02\x02\u01EE\u01EF\x07\f\x02\x02\u01EF" +
		"\u01F0\x07!\x02\x02\u01F0\u01F1\t\x04\x02\x02\u01F1\u01F3\x07\"\x02\x02" +
		"\u01F2\u01F4\x052\x1A\x02\u01F3\u01F2\x03\x02\x02\x02\u01F3\u01F4\x03" +
		"\x02\x02\x02\u01F4\u01F6\x03\x02\x02\x02\u01F5\u01F7\x05(\x15\x02\u01F6" +
		"\u01F5\x03\x02\x02\x02\u01F6\u01F7\x03\x02\x02\x02\u01F7\u01F9\x03\x02" +
		"\x02\x02\u01F8\u01FA\x05<\x1F\x02\u01F9\u01F8\x03\x02\x02\x02\u01F9\u01FA" +
		"\x03\x02\x02\x02\u01FA\u01FC\x03\x02\x02\x02\u01FB\u01FD\x05> \x02\u01FC" +
		"\u01FB\x03\x02\x02\x02\u01FC\u01FD\x03\x02\x02\x02\u01FD\u01FE\x03\x02" +
		"\x02\x02\u01FE\u01FF\x07@\x02\x02\u01FFW\x03\x02\x02\x02\u0200\u0201\t" +
		"\x05\x02\x02\u0201\u0202\x07!\x02\x02\u0202\u0203\t\x04\x02\x02\u0203" +
		"\u0205\x07\"\x02\x02\u0204\u0206\x052\x1A\x02\u0205\u0204\x03\x02\x02" +
		"\x02\u0205\u0206\x03\x02\x02\x02\u0206\u0208\x03\x02\x02\x02\u0207\u0209" +
		"\x05(\x15\x02\u0208\u0207\x03\x02\x02\x02\u0208\u0209\x03\x02\x02\x02" +
		"\u0209\u020B\x03\x02\x02\x02\u020A\u020C\x05<\x1F\x02\u020B\u020A\x03" +
		"\x02\x02\x02\u020B\u020C\x03\x02\x02\x02\u020C\u020E\x03\x02\x02\x02\u020D" +
		"\u020F\x05> \x02\u020E\u020D\x03\x02\x02\x02\u020E\u020F\x03\x02\x02\x02" +
		"\u020F\u0210\x03\x02\x02\x02\u0210\u0211\x07@\x02\x02\u0211Y\x03\x02\x02" +
		"\x02\u0212\u0213\t\x06\x02\x02\u0213\u0214\x07@\x02\x02\u0214[\x03\x02" +
		"\x02\x02\u0215\u0217\t\x07\x02\x02\u0216\u0218\x052\x1A\x02\u0217\u0216" +
		"\x03\x02\x02\x02\u0217\u0218\x03\x02\x02\x02\u0218\u021A\x03\x02\x02\x02" +
		"\u0219\u021B\x05(\x15\x02\u021A\u0219\x03\x02\x02\x02\u021A\u021B\x03" +
		"\x02\x02\x02\u021B\u021D\x03\x02\x02\x02\u021C\u021E\x05<\x1F\x02\u021D" +
		"\u021C\x03\x02\x02\x02\u021D\u021E\x03\x02\x02\x02\u021E\u0220\x03\x02" +
		"\x02\x02\u021F\u0221\x05> \x02\u0220\u021F\x03\x02\x02\x02\u0220\u0221" +
		"\x03\x02\x02\x02\u0221\u0222\x03\x02\x02\x02\u0222\u0223\x07@\x02\x02" +
		"\u0223]\x03\x02\x02\x02\u0224\u0225\x07.\x02\x02\u0225\u0226\x07@\x02" +
		"\x02\u0226_\x03\x02\x02\x02\u0227\u0228\t\x03\x02\x02\u0228\u0229\x07" +
		"@\x02\x02\u0229a\x03\x02\x02\x02\u022A\u022B\x07\x1F\x02\x02\u022B\u022C" +
		"\t\b\x02\x02\u022C\u022D\t\t\x02\x02\u022D\u022F\x07 \x02\x02\u022E\u0230" +
		"\x052\x1A\x02\u022F\u022E\x03\x02\x02\x02\u022F\u0230\x03\x02\x02\x02" +
		"\u0230\u0232\x03\x02\x02\x02\u0231\u0233";
	private static readonly _serializedATNSegment1: string =
		"\x05(\x15\x02\u0232\u0231\x03\x02\x02\x02\u0232\u0233\x03\x02\x02\x02" +
		"\u0233\u0235\x03\x02\x02\x02\u0234\u0236\x05<\x1F\x02\u0235\u0234\x03" +
		"\x02\x02\x02\u0235\u0236\x03\x02\x02\x02\u0236\u0238\x03\x02\x02\x02\u0237" +
		"\u0239\x05> \x02\u0238\u0237\x03\x02\x02\x02\u0238\u0239\x03\x02\x02\x02" +
		"\u0239\u023A\x03\x02\x02\x02\u023A\u023B\x07@\x02\x02\u023Bc\x03\x02\x02" +
		"\x02\u023C\u023D\x07\x1F\x02\x02\u023D\u023E\t\b\x02\x02\u023E\u023F\t" +
		"\n\x02\x02\u023F\u0240\t\x04\x02\x02\u0240\u0241\x07 \x02\x02\u0241e\x03" +
		"\x02\x02\x02Thjoqx\x93\xA3\xAB\xAE\xB4\xBC\xC3\xC8\xCF\xD2\xD6\xDC\xE3" +
		"\xE8\xED\xF6\xF9\xFC\xFF\u0102\u0108\u010B\u010E\u0114\u0117\u011D\u0121" +
		"\u0127\u013B\u0143\u014B\u0152\u0155\u015B\u0161\u016E\u0176\u018C\u018E" +
		"\u0194\u019C\u019F\u01A2\u01A5\u01A8\u01AB\u01B4\u01B7\u01BA\u01BD\u01C0" +
		"\u01C9\u01CC\u01CF\u01D2\u01D5\u01D8\u01E1\u01E4\u01E7\u01EA\u01F3\u01F6" +
		"\u01F9\u01FC\u0205\u0208\u020B\u020E\u0217\u021A\u021D\u0220\u022F\u0232" +
		"\u0235\u0238";
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


export class Call_literalContext extends ParserRuleContext {
	public _call!: Token;
	public RAW_CALL(): TerminalNode { return this.getToken(LeviathonParser.RAW_CALL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LeviathonParser.RULE_call_literal; }
	// @Override
	public enterRule(listener: LeviathonListener): void {
		if (listener.enterCall_literal) {
			listener.enterCall_literal(this);
		}
	}
	// @Override
	public exitRule(listener: LeviathonListener): void {
		if (listener.exitCall_literal) {
			listener.exitCall_literal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LeviathonVisitor<Result>): Result {
		if (visitor.visitCall_literal) {
			return visitor.visitCall_literal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Scoped_call_literalContext extends ParserRuleContext {
	public _call!: Token;
	public SCOPED_RAW_CALL(): TerminalNode { return this.getToken(LeviathonParser.SCOPED_RAW_CALL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LeviathonParser.RULE_scoped_call_literal; }
	// @Override
	public enterRule(listener: LeviathonListener): void {
		if (listener.enterScoped_call_literal) {
			listener.enterScoped_call_literal(this);
		}
	}
	// @Override
	public exitRule(listener: LeviathonListener): void {
		if (listener.exitScoped_call_literal) {
			listener.exitScoped_call_literal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LeviathonVisitor<Result>): Result {
		if (visitor.visitScoped_call_literal) {
			return visitor.visitScoped_call_literal(this);
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
	public CALL_OP(): TerminalNode { return this.getToken(LeviathonParser.CALL_OP, 0); }
	public call_literal(): Call_literalContext {
		return this.getRuleContext(0, Call_literalContext);
	}
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
	public CALL_OP(): TerminalNode { return this.getToken(LeviathonParser.CALL_OP, 0); }
	public import_alias(): Import_aliasContext {
		return this.getRuleContext(0, Import_aliasContext);
	}
	public DOT(): TerminalNode { return this.getToken(LeviathonParser.DOT, 0); }
	public scoped_call_literal(): Scoped_call_literalContext {
		return this.getRuleContext(0, Scoped_call_literalContext);
	}
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


