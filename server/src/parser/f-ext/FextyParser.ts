// Generated from ./server/grammar/f-ext/Fexty.g4 by ANTLR 4.9.0-SNAPSHOT


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

import { FextyListener } from "./FextyListener";
import { FextyVisitor } from "./FextyVisitor";


export class FextyParser extends Parser {
	public static readonly LEFT_BRACE = 1;
	public static readonly RIGHT_BRACE = 2;
	public static readonly LEFT_PAREN = 3;
	public static readonly RIGHT_PAREN = 4;
	public static readonly COLON = 5;
	public static readonly DOT = 6;
	public static readonly EQ = 7;
	public static readonly CONSTANT = 8;
	public static readonly HEX_ID = 9;
	public static readonly ID = 10;
	public static readonly FUNC_ID = 11;
	public static readonly PARAMETER12 = 12;
	public static readonly END_RANDOM = 13;
	public static readonly FLOW_CONTROL = 14;
	public static readonly BRANCH_CONTROL = 15;
	public static readonly UNKN1 = 16;
	public static readonly UNKN2 = 17;
	public static readonly ABC = 18;
	public static readonly PARAMETER_1 = 19;
	public static readonly UNKN3 = 20;
	public static readonly UNKN4 = 21;
	public static readonly UNKN5 = 22;
	public static readonly UNKN6 = 23;
	public static readonly PARAMETER_2 = 24;
	public static readonly NODE_ENDING_DATA = 25;
	public static readonly EXT_REF_THK_ID = 26;
	public static readonly EXT_REF_NODE_ID = 27;
	public static readonly LOCAL_REF_NODE_ID = 28;
	public static readonly UNKN7 = 29;
	public static readonly UNKN8 = 30;
	public static readonly UNKN9 = 31;
	public static readonly UNKN10 = 32;
	public static readonly UNKN11 = 33;
	public static readonly ACTION_ID = 34;
	public static readonly ACTION_UNK0 = 35;
	public static readonly ACTION_UNK1 = 36;
	public static readonly ACTION_UNK2 = 37;
	public static readonly UNKN12 = 38;
	public static readonly ACTION_UNK3 = 39;
	public static readonly ACTION_UNK4 = 40;
	public static readonly UNK_EXTRA0 = 41;
	public static readonly UNK_EXTRA1 = 42;
	public static readonly UNK_EXTRA2 = 43;
	public static readonly ST_ENUM = 44;
	public static readonly EM_ENUM = 45;
	public static readonly OTHERWISE = 46;
	public static readonly PASS = 47;
	public static readonly OTHERWISE_PASS = 48;
	public static readonly RIGHT_ARROW = 49;
	public static readonly COMMA = 50;
	public static readonly USE_HEX = 51;
	public static readonly LINESKIP = 52;
	public static readonly WS = 53;
	public static readonly RULE_file = 0;
	public static readonly RULE_f_extension = 1;
	public static readonly RULE_fexty_rule = 2;
	public static readonly RULE_fexty_inline_rule = 3;
	public static readonly RULE_chained_inline_function = 4;
	public static readonly RULE_chained_function = 5;
	public static readonly RULE_fexty_rule_body = 6;
	public static readonly RULE_fexty_rule_function_declarator = 7;
	public static readonly RULE_parameter_clause = 8;
	public static readonly RULE_otherwise_clause = 9;
	public static readonly RULE_function_params = 10;
	public static readonly RULE_binding_parameter = 11;
	public static readonly RULE_enum_parameter = 12;
	public static readonly RULE_defined_parameter = 13;
	public static readonly RULE_parameter = 14;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"file", "f_extension", "fexty_rule", "fexty_inline_rule", "chained_inline_function", 
		"chained_function", "fexty_rule_body", "fexty_rule_function_declarator", 
		"parameter_clause", "otherwise_clause", "function_params", "binding_parameter", 
		"enum_parameter", "defined_parameter", "parameter",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'{'", "'}'", "'('", "')'", "':'", "'.'", "'=='", undefined, 
		undefined, undefined, undefined, undefined, "'endRandom'", "'flowControl'", 
		"'branchingControl'", "'unkn1'", "'unkn2'", "'functionType'", "'parameter1'", 
		"'unkn3'", "'unkn4'", "'unkn5'", "'unkn6'", "'parameter2'", "'nodeEndingData'", 
		"'extRefThkID'", "'extRefNodeID'", "'localRefNodeID'", "'unkn7'", "'unkn8'", 
		"'unkn9'", "'unkn10'", "'unkn11'", "'actionID'", "'actionUnkn0'", "'actionUnkn1'", 
		"'actionUnkn2'", "'unkn12'", "'actionUnkn3'", "'actionUnkn4'", "'unknExtra0'", 
		"'unknExtra1'", "'unknExtra2'", "'st_enum'", "'em_enum'", "'otherwise'", 
		"'pass'", undefined, "'>'", "','",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "LEFT_BRACE", "RIGHT_BRACE", "LEFT_PAREN", "RIGHT_PAREN", "COLON", 
		"DOT", "EQ", "CONSTANT", "HEX_ID", "ID", "FUNC_ID", "PARAMETER12", "END_RANDOM", 
		"FLOW_CONTROL", "BRANCH_CONTROL", "UNKN1", "UNKN2", "ABC", "PARAMETER_1", 
		"UNKN3", "UNKN4", "UNKN5", "UNKN6", "PARAMETER_2", "NODE_ENDING_DATA", 
		"EXT_REF_THK_ID", "EXT_REF_NODE_ID", "LOCAL_REF_NODE_ID", "UNKN7", "UNKN8", 
		"UNKN9", "UNKN10", "UNKN11", "ACTION_ID", "ACTION_UNK0", "ACTION_UNK1", 
		"ACTION_UNK2", "UNKN12", "ACTION_UNK3", "ACTION_UNK4", "UNK_EXTRA0", "UNK_EXTRA1", 
		"UNK_EXTRA2", "ST_ENUM", "EM_ENUM", "OTHERWISE", "PASS", "OTHERWISE_PASS", 
		"RIGHT_ARROW", "COMMA", "USE_HEX", "LINESKIP", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(FextyParser._LITERAL_NAMES, FextyParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return FextyParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Fexty.g4"; }

	// @Override
	public get ruleNames(): string[] { return FextyParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return FextyParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(FextyParser._ATN, this);
	}
	// @RuleVersion(0)
	public file(): FileContext {
		let _localctx: FileContext = new FileContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, FextyParser.RULE_file);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 31;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FextyParser.USE_HEX) {
				{
				this.state = 30;
				this.match(FextyParser.USE_HEX);
				}
			}

			this.state = 39;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FextyParser.CONSTANT || _la === FextyParser.LINESKIP) {
				{
				this.state = 37;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case FextyParser.LINESKIP:
					{
					this.state = 33;
					this.match(FextyParser.LINESKIP);
					}
					break;
				case FextyParser.CONSTANT:
					{
					this.state = 34;
					this.f_extension();
					this.state = 35;
					this.match(FextyParser.LINESKIP);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 41;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 42;
			this.match(FextyParser.EOF);
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
	public f_extension(): F_extensionContext {
		let _localctx: F_extensionContext = new F_extensionContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, FextyParser.RULE_f_extension);
		try {
			this.state = 50;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 44;
				this.fexty_rule();
				this.state = 45;
				this.match(FextyParser.LINESKIP);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 47;
				this.fexty_inline_rule();
				this.state = 48;
				this.match(FextyParser.LINESKIP);
				}
				break;
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
	public fexty_rule(): Fexty_ruleContext {
		let _localctx: Fexty_ruleContext = new Fexty_ruleContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, FextyParser.RULE_fexty_rule);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 52;
			_localctx._id = this.match(FextyParser.CONSTANT);
			this.state = 53;
			this.match(FextyParser.LEFT_BRACE);
			this.state = 54;
			this.match(FextyParser.LINESKIP);
			this.state = 58;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FextyParser.RIGHT_ARROW) {
				{
				this.state = 55;
				this.chained_function();
				this.state = 56;
				this.match(FextyParser.LINESKIP);
				}
			}

			this.state = 65;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FextyParser.PARAMETER_1 || _la === FextyParser.PARAMETER_2) {
				{
				{
				this.state = 60;
				this.parameter_clause();
				this.state = 61;
				this.match(FextyParser.LINESKIP);
				}
				}
				this.state = 67;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 71;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FextyParser.OTHERWISE) {
				{
				this.state = 68;
				this.otherwise_clause();
				this.state = 69;
				this.match(FextyParser.LINESKIP);
				}
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
	public fexty_inline_rule(): Fexty_inline_ruleContext {
		let _localctx: Fexty_inline_ruleContext = new Fexty_inline_ruleContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, FextyParser.RULE_fexty_inline_rule);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 73;
			_localctx._id = this.match(FextyParser.CONSTANT);
			this.state = 74;
			this.match(FextyParser.COLON);
			this.state = 75;
			this.chained_inline_function();
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
	public chained_inline_function(): Chained_inline_functionContext {
		let _localctx: Chained_inline_functionContext = new Chained_inline_functionContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, FextyParser.RULE_chained_inline_function);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 77;
			_localctx._name = this.match(FextyParser.ID);
			this.state = 78;
			this.match(FextyParser.LEFT_PAREN);
			this.state = 80;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FextyParser.LEFT_BRACE) | (1 << FextyParser.ID) | (1 << FextyParser.PARAMETER_1) | (1 << FextyParser.PARAMETER_2))) !== 0)) {
				{
				this.state = 79;
				this.function_params();
				}
			}

			this.state = 82;
			this.match(FextyParser.RIGHT_PAREN);
			this.state = 87;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 83;
					this.match(FextyParser.DOT);
					this.state = 84;
					this.chained_inline_function();
					}
					}
				}
				this.state = 89;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
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
	public chained_function(): Chained_functionContext {
		let _localctx: Chained_functionContext = new Chained_functionContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, FextyParser.RULE_chained_function);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 90;
			this.match(FextyParser.RIGHT_ARROW);
			this.state = 91;
			_localctx._name = this.match(FextyParser.ID);
			this.state = 104;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FextyParser.LEFT_PAREN) {
				{
				this.state = 92;
				this.match(FextyParser.LEFT_PAREN);
				this.state = 94;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FextyParser.LEFT_BRACE) | (1 << FextyParser.ID) | (1 << FextyParser.PARAMETER_1) | (1 << FextyParser.PARAMETER_2))) !== 0)) {
					{
					this.state = 93;
					this.function_params();
					}
				}

				this.state = 96;
				this.match(FextyParser.RIGHT_PAREN);
				this.state = 101;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 97;
						this.match(FextyParser.DOT);
						this.state = 98;
						this.chained_function();
						}
						}
					}
					this.state = 103;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
				}
				}
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
	public fexty_rule_body(): Fexty_rule_bodyContext {
		let _localctx: Fexty_rule_bodyContext = new Fexty_rule_bodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, FextyParser.RULE_fexty_rule_body);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 106;
			this.match(FextyParser.RIGHT_ARROW);
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
	public fexty_rule_function_declarator(): Fexty_rule_function_declaratorContext {
		let _localctx: Fexty_rule_function_declaratorContext = new Fexty_rule_function_declaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, FextyParser.RULE_fexty_rule_function_declarator);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 109;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FextyParser.ID) {
				{
				this.state = 108;
				_localctx._name = this.match(FextyParser.ID);
				}
			}

			this.state = 116;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FextyParser.LEFT_PAREN) {
				{
				this.state = 111;
				this.match(FextyParser.LEFT_PAREN);
				this.state = 113;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FextyParser.LEFT_BRACE) | (1 << FextyParser.ID) | (1 << FextyParser.PARAMETER_1) | (1 << FextyParser.PARAMETER_2))) !== 0)) {
					{
					this.state = 112;
					this.function_params();
					}
				}

				this.state = 115;
				this.match(FextyParser.RIGHT_PAREN);
				}
			}

			this.state = 122;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 118;
					this.match(FextyParser.DOT);
					this.state = 119;
					this.fexty_rule_function_declarator();
					}
					}
				}
				this.state = 124;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
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
	public parameter_clause(): Parameter_clauseContext {
		let _localctx: Parameter_clauseContext = new Parameter_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, FextyParser.RULE_parameter_clause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 125;
			this.defined_parameter();
			this.state = 126;
			this.match(FextyParser.EQ);
			this.state = 127;
			this.match(FextyParser.CONSTANT);
			this.state = 133;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FextyParser.COMMA) {
				{
				this.state = 128;
				this.match(FextyParser.COMMA);
				this.state = 129;
				this.defined_parameter();
				this.state = 130;
				this.match(FextyParser.EQ);
				this.state = 131;
				this.match(FextyParser.CONSTANT);
				}
			}

			this.state = 135;
			this.match(FextyParser.COLON);
			this.state = 136;
			this.fexty_rule_function_declarator();
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
	public otherwise_clause(): Otherwise_clauseContext {
		let _localctx: Otherwise_clauseContext = new Otherwise_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, FextyParser.RULE_otherwise_clause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 138;
			this.match(FextyParser.OTHERWISE);
			this.state = 139;
			this.match(FextyParser.COLON);
			this.state = 142;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FextyParser.LEFT_PAREN:
			case FextyParser.DOT:
			case FextyParser.ID:
			case FextyParser.LINESKIP:
				{
				this.state = 140;
				this.fexty_rule_function_declarator();
				}
				break;
			case FextyParser.PASS:
				{
				this.state = 141;
				this.match(FextyParser.PASS);
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public function_params(): Function_paramsContext {
		let _localctx: Function_paramsContext = new Function_paramsContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, FextyParser.RULE_function_params);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 144;
			_localctx._arg = this.parameter();
			this.state = 149;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FextyParser.COMMA) {
				{
				{
				this.state = 145;
				this.match(FextyParser.COMMA);
				this.state = 146;
				this.parameter();
				}
				}
				this.state = 151;
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
	public binding_parameter(): Binding_parameterContext {
		let _localctx: Binding_parameterContext = new Binding_parameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, FextyParser.RULE_binding_parameter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 152;
			this.match(FextyParser.LEFT_BRACE);
			this.state = 153;
			this.match(FextyParser.ID);
			this.state = 154;
			this.match(FextyParser.COLON);
			this.state = 155;
			this.match(FextyParser.PARAMETER12);
			this.state = 156;
			this.match(FextyParser.RIGHT_BRACE);
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
	public enum_parameter(): Enum_parameterContext {
		let _localctx: Enum_parameterContext = new Enum_parameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, FextyParser.RULE_enum_parameter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 158;
			this.match(FextyParser.ID);
			this.state = 159;
			this.match(FextyParser.DOT);
			this.state = 160;
			this.match(FextyParser.ID);
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
	public defined_parameter(): Defined_parameterContext {
		let _localctx: Defined_parameterContext = new Defined_parameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, FextyParser.RULE_defined_parameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 162;
			_la = this._input.LA(1);
			if (!(_la === FextyParser.PARAMETER_1 || _la === FextyParser.PARAMETER_2)) {
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
	public parameter(): ParameterContext {
		let _localctx: ParameterContext = new ParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, FextyParser.RULE_parameter);
		try {
			this.state = 167;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FextyParser.PARAMETER_1:
			case FextyParser.PARAMETER_2:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 164;
				this.defined_parameter();
				}
				break;
			case FextyParser.LEFT_BRACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 165;
				this.binding_parameter();
				}
				break;
			case FextyParser.ID:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 166;
				this.enum_parameter();
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

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x037\xAC\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x03\x02\x05\x02\"\n\x02\x03\x02" +
		"\x03\x02\x03\x02\x03\x02\x07\x02(\n\x02\f\x02\x0E\x02+\v\x02\x03\x02\x03" +
		"\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x035\n\x03\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04=\n\x04\x03\x04\x03" +
		"\x04\x03\x04\x07\x04B\n\x04\f\x04\x0E\x04E\v\x04\x03\x04\x03\x04\x03\x04" +
		"\x05\x04J\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06" +
		"\x05\x06S\n\x06\x03\x06\x03\x06\x03\x06\x07\x06X\n\x06\f\x06\x0E\x06[" +
		"\v\x06\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07a\n\x07\x03\x07\x03\x07" +
		"\x03\x07\x07\x07f\n\x07\f\x07\x0E\x07i\v\x07\x05\x07k\n\x07\x03\b\x03" +
		"\b\x03\t\x05\tp\n\t\x03\t\x03\t\x05\tt\n\t\x03\t\x05\tw\n\t\x03\t\x03" +
		"\t\x07\t{\n\t\f\t\x0E\t~\v\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n" +
		"\x03\n\x05\n\x88\n\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x05\v\x91" +
		"\n\v\x03\f\x03\f\x03\f\x07\f\x96\n\f\f\f\x0E\f\x99\v\f\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03" +
		"\x10\x03\x10\x03\x10\x05\x10\xAA\n\x10\x03\x10\x02\x02\x02\x11\x02\x02" +
		"\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16" +
		"\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02\x02\x03\x04\x02\x15\x15\x1A\x1A\x02" +
		"\xB1\x02!\x03\x02\x02\x02\x044\x03\x02\x02\x02\x066\x03\x02\x02\x02\b" +
		"K\x03\x02\x02\x02\nO\x03\x02\x02\x02\f\\\x03\x02\x02\x02\x0El\x03\x02" +
		"\x02\x02\x10o\x03\x02\x02\x02\x12\x7F\x03\x02\x02\x02\x14\x8C\x03\x02" +
		"\x02\x02\x16\x92\x03\x02\x02\x02\x18\x9A\x03\x02\x02\x02\x1A\xA0\x03\x02" +
		"\x02\x02\x1C\xA4\x03\x02\x02\x02\x1E\xA9\x03\x02\x02\x02 \"\x075\x02\x02" +
		"! \x03\x02\x02\x02!\"\x03\x02\x02\x02\")\x03\x02\x02\x02#(\x076\x02\x02" +
		"$%\x05\x04\x03\x02%&\x076\x02\x02&(\x03\x02\x02\x02\'#\x03\x02\x02\x02" +
		"\'$\x03\x02\x02\x02(+\x03\x02\x02\x02)\'\x03\x02\x02\x02)*\x03\x02\x02" +
		"\x02*,\x03\x02\x02\x02+)\x03\x02\x02\x02,-\x07\x02\x02\x03-\x03\x03\x02" +
		"\x02\x02./\x05\x06\x04\x02/0\x076\x02\x0205\x03\x02\x02\x0212\x05\b\x05" +
		"\x0223\x076\x02\x0235\x03\x02\x02\x024.\x03\x02\x02\x0241\x03\x02\x02" +
		"\x025\x05\x03\x02\x02\x0267\x07\n\x02\x0278\x07\x03\x02\x028<\x076\x02" +
		"\x029:\x05\f\x07\x02:;\x076\x02\x02;=\x03\x02\x02\x02<9\x03\x02\x02\x02" +
		"<=\x03\x02\x02\x02=C\x03\x02\x02\x02>?\x05\x12\n\x02?@\x076\x02\x02@B" +
		"\x03\x02\x02\x02A>\x03\x02\x02\x02BE\x03\x02\x02\x02CA\x03\x02\x02\x02" +
		"CD\x03\x02\x02\x02DI\x03\x02\x02\x02EC\x03\x02\x02\x02FG\x05\x14\v\x02" +
		"GH\x076\x02\x02HJ\x03\x02\x02\x02IF\x03\x02\x02\x02IJ\x03\x02\x02\x02" +
		"J\x07\x03\x02\x02\x02KL\x07\n\x02\x02LM\x07\x07\x02\x02MN\x05\n\x06\x02" +
		"N\t\x03\x02\x02\x02OP\x07\f\x02\x02PR\x07\x05\x02\x02QS\x05\x16\f\x02" +
		"RQ\x03\x02\x02\x02RS\x03\x02\x02\x02ST\x03\x02\x02\x02TY\x07\x06\x02\x02" +
		"UV\x07\b\x02\x02VX\x05\n\x06\x02WU\x03\x02\x02\x02X[\x03\x02\x02\x02Y" +
		"W\x03\x02\x02\x02YZ\x03\x02\x02\x02Z\v\x03\x02\x02\x02[Y\x03\x02\x02\x02" +
		"\\]\x073\x02\x02]j\x07\f\x02\x02^`\x07\x05\x02\x02_a\x05\x16\f\x02`_\x03" +
		"\x02\x02\x02`a\x03\x02\x02\x02ab\x03\x02\x02\x02bg\x07\x06\x02\x02cd\x07" +
		"\b\x02\x02df\x05\f\x07\x02ec\x03\x02\x02\x02fi\x03\x02\x02\x02ge\x03\x02" +
		"\x02\x02gh\x03\x02\x02\x02hk\x03\x02\x02\x02ig\x03\x02\x02\x02j^\x03\x02" +
		"\x02\x02jk\x03\x02\x02\x02k\r\x03\x02\x02\x02lm\x073\x02\x02m\x0F\x03" +
		"\x02\x02\x02np\x07\f\x02\x02on\x03\x02\x02\x02op\x03\x02\x02\x02pv\x03" +
		"\x02\x02\x02qs\x07\x05\x02\x02rt\x05\x16\f\x02sr\x03\x02\x02\x02st\x03" +
		"\x02\x02\x02tu\x03\x02\x02\x02uw\x07\x06\x02\x02vq\x03\x02\x02\x02vw\x03" +
		"\x02\x02\x02w|\x03\x02\x02\x02xy\x07\b\x02\x02y{\x05\x10\t\x02zx\x03\x02" +
		"\x02\x02{~\x03\x02\x02\x02|z\x03\x02\x02\x02|}\x03\x02\x02\x02}\x11\x03" +
		"\x02\x02\x02~|\x03\x02\x02\x02\x7F\x80\x05\x1C\x0F\x02\x80\x81\x07\t\x02" +
		"\x02\x81\x87\x07\n\x02\x02\x82\x83\x074\x02\x02\x83\x84\x05\x1C\x0F\x02" +
		"\x84\x85\x07\t\x02\x02\x85\x86\x07\n\x02\x02\x86\x88\x03\x02\x02\x02\x87" +
		"\x82\x03\x02\x02\x02\x87\x88\x03\x02\x02\x02\x88\x89\x03\x02\x02\x02\x89" +
		"\x8A\x07\x07\x02\x02\x8A\x8B\x05\x10\t\x02\x8B\x13\x03\x02\x02\x02\x8C" +
		"\x8D\x070\x02\x02\x8D\x90\x07\x07\x02\x02\x8E\x91\x05\x10\t\x02\x8F\x91" +
		"\x071\x02\x02\x90\x8E\x03\x02\x02\x02\x90\x8F\x03\x02\x02\x02\x91\x15" +
		"\x03\x02\x02\x02\x92\x97\x05\x1E\x10\x02\x93\x94\x074\x02\x02\x94\x96" +
		"\x05\x1E\x10\x02\x95\x93\x03\x02\x02\x02\x96\x99\x03\x02\x02\x02\x97\x95" +
		"\x03\x02\x02\x02\x97\x98\x03\x02\x02\x02\x98\x17\x03\x02\x02\x02\x99\x97" +
		"\x03\x02\x02\x02\x9A\x9B\x07\x03\x02\x02\x9B\x9C\x07\f\x02\x02\x9C\x9D" +
		"\x07\x07\x02\x02\x9D\x9E\x07\x0E\x02\x02\x9E\x9F\x07\x04\x02\x02\x9F\x19" +
		"\x03\x02\x02\x02\xA0\xA1\x07\f\x02\x02\xA1\xA2\x07\b\x02\x02\xA2\xA3\x07" +
		"\f\x02\x02\xA3\x1B\x03\x02\x02\x02\xA4\xA5\t\x02\x02\x02\xA5\x1D\x03\x02" +
		"\x02\x02\xA6\xAA\x05\x1C\x0F\x02\xA7\xAA\x05\x18\r\x02\xA8\xAA\x05\x1A" +
		"\x0E\x02\xA9\xA6\x03\x02\x02\x02\xA9\xA7\x03\x02\x02\x02\xA9\xA8\x03\x02" +
		"\x02\x02\xAA\x1F\x03\x02\x02\x02\x16!\')4<CIRY`gjosv|\x87\x90\x97\xA9";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!FextyParser.__ATN) {
			FextyParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(FextyParser._serializedATN));
		}

		return FextyParser.__ATN;
	}

}

export class FileContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(FextyParser.EOF, 0); }
	public USE_HEX(): TerminalNode | undefined { return this.tryGetToken(FextyParser.USE_HEX, 0); }
	public LINESKIP(): TerminalNode[];
	public LINESKIP(i: number): TerminalNode;
	public LINESKIP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FextyParser.LINESKIP);
		} else {
			return this.getToken(FextyParser.LINESKIP, i);
		}
	}
	public f_extension(): F_extensionContext[];
	public f_extension(i: number): F_extensionContext;
	public f_extension(i?: number): F_extensionContext | F_extensionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(F_extensionContext);
		} else {
			return this.getRuleContext(i, F_extensionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FextyParser.RULE_file; }
	// @Override
	public enterRule(listener: FextyListener): void {
		if (listener.enterFile) {
			listener.enterFile(this);
		}
	}
	// @Override
	public exitRule(listener: FextyListener): void {
		if (listener.exitFile) {
			listener.exitFile(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FextyVisitor<Result>): Result {
		if (visitor.visitFile) {
			return visitor.visitFile(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class F_extensionContext extends ParserRuleContext {
	public fexty_rule(): Fexty_ruleContext | undefined {
		return this.tryGetRuleContext(0, Fexty_ruleContext);
	}
	public LINESKIP(): TerminalNode { return this.getToken(FextyParser.LINESKIP, 0); }
	public fexty_inline_rule(): Fexty_inline_ruleContext | undefined {
		return this.tryGetRuleContext(0, Fexty_inline_ruleContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FextyParser.RULE_f_extension; }
	// @Override
	public enterRule(listener: FextyListener): void {
		if (listener.enterF_extension) {
			listener.enterF_extension(this);
		}
	}
	// @Override
	public exitRule(listener: FextyListener): void {
		if (listener.exitF_extension) {
			listener.exitF_extension(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FextyVisitor<Result>): Result {
		if (visitor.visitF_extension) {
			return visitor.visitF_extension(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Fexty_ruleContext extends ParserRuleContext {
	public _id!: Token;
	public LEFT_BRACE(): TerminalNode { return this.getToken(FextyParser.LEFT_BRACE, 0); }
	public LINESKIP(): TerminalNode[];
	public LINESKIP(i: number): TerminalNode;
	public LINESKIP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FextyParser.LINESKIP);
		} else {
			return this.getToken(FextyParser.LINESKIP, i);
		}
	}
	public CONSTANT(): TerminalNode { return this.getToken(FextyParser.CONSTANT, 0); }
	public chained_function(): Chained_functionContext | undefined {
		return this.tryGetRuleContext(0, Chained_functionContext);
	}
	public parameter_clause(): Parameter_clauseContext[];
	public parameter_clause(i: number): Parameter_clauseContext;
	public parameter_clause(i?: number): Parameter_clauseContext | Parameter_clauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Parameter_clauseContext);
		} else {
			return this.getRuleContext(i, Parameter_clauseContext);
		}
	}
	public otherwise_clause(): Otherwise_clauseContext | undefined {
		return this.tryGetRuleContext(0, Otherwise_clauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FextyParser.RULE_fexty_rule; }
	// @Override
	public enterRule(listener: FextyListener): void {
		if (listener.enterFexty_rule) {
			listener.enterFexty_rule(this);
		}
	}
	// @Override
	public exitRule(listener: FextyListener): void {
		if (listener.exitFexty_rule) {
			listener.exitFexty_rule(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FextyVisitor<Result>): Result {
		if (visitor.visitFexty_rule) {
			return visitor.visitFexty_rule(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Fexty_inline_ruleContext extends ParserRuleContext {
	public _id!: Token;
	public COLON(): TerminalNode { return this.getToken(FextyParser.COLON, 0); }
	public chained_inline_function(): Chained_inline_functionContext {
		return this.getRuleContext(0, Chained_inline_functionContext);
	}
	public CONSTANT(): TerminalNode { return this.getToken(FextyParser.CONSTANT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FextyParser.RULE_fexty_inline_rule; }
	// @Override
	public enterRule(listener: FextyListener): void {
		if (listener.enterFexty_inline_rule) {
			listener.enterFexty_inline_rule(this);
		}
	}
	// @Override
	public exitRule(listener: FextyListener): void {
		if (listener.exitFexty_inline_rule) {
			listener.exitFexty_inline_rule(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FextyVisitor<Result>): Result {
		if (visitor.visitFexty_inline_rule) {
			return visitor.visitFexty_inline_rule(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Chained_inline_functionContext extends ParserRuleContext {
	public _name!: Token;
	public LEFT_PAREN(): TerminalNode { return this.getToken(FextyParser.LEFT_PAREN, 0); }
	public RIGHT_PAREN(): TerminalNode { return this.getToken(FextyParser.RIGHT_PAREN, 0); }
	public ID(): TerminalNode { return this.getToken(FextyParser.ID, 0); }
	public function_params(): Function_paramsContext | undefined {
		return this.tryGetRuleContext(0, Function_paramsContext);
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FextyParser.DOT);
		} else {
			return this.getToken(FextyParser.DOT, i);
		}
	}
	public chained_inline_function(): Chained_inline_functionContext[];
	public chained_inline_function(i: number): Chained_inline_functionContext;
	public chained_inline_function(i?: number): Chained_inline_functionContext | Chained_inline_functionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Chained_inline_functionContext);
		} else {
			return this.getRuleContext(i, Chained_inline_functionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FextyParser.RULE_chained_inline_function; }
	// @Override
	public enterRule(listener: FextyListener): void {
		if (listener.enterChained_inline_function) {
			listener.enterChained_inline_function(this);
		}
	}
	// @Override
	public exitRule(listener: FextyListener): void {
		if (listener.exitChained_inline_function) {
			listener.exitChained_inline_function(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FextyVisitor<Result>): Result {
		if (visitor.visitChained_inline_function) {
			return visitor.visitChained_inline_function(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Chained_functionContext extends ParserRuleContext {
	public _name!: Token;
	public RIGHT_ARROW(): TerminalNode { return this.getToken(FextyParser.RIGHT_ARROW, 0); }
	public ID(): TerminalNode { return this.getToken(FextyParser.ID, 0); }
	public LEFT_PAREN(): TerminalNode | undefined { return this.tryGetToken(FextyParser.LEFT_PAREN, 0); }
	public RIGHT_PAREN(): TerminalNode | undefined { return this.tryGetToken(FextyParser.RIGHT_PAREN, 0); }
	public function_params(): Function_paramsContext | undefined {
		return this.tryGetRuleContext(0, Function_paramsContext);
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FextyParser.DOT);
		} else {
			return this.getToken(FextyParser.DOT, i);
		}
	}
	public chained_function(): Chained_functionContext[];
	public chained_function(i: number): Chained_functionContext;
	public chained_function(i?: number): Chained_functionContext | Chained_functionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Chained_functionContext);
		} else {
			return this.getRuleContext(i, Chained_functionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FextyParser.RULE_chained_function; }
	// @Override
	public enterRule(listener: FextyListener): void {
		if (listener.enterChained_function) {
			listener.enterChained_function(this);
		}
	}
	// @Override
	public exitRule(listener: FextyListener): void {
		if (listener.exitChained_function) {
			listener.exitChained_function(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FextyVisitor<Result>): Result {
		if (visitor.visitChained_function) {
			return visitor.visitChained_function(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Fexty_rule_bodyContext extends ParserRuleContext {
	public RIGHT_ARROW(): TerminalNode | undefined { return this.tryGetToken(FextyParser.RIGHT_ARROW, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FextyParser.RULE_fexty_rule_body; }
	// @Override
	public enterRule(listener: FextyListener): void {
		if (listener.enterFexty_rule_body) {
			listener.enterFexty_rule_body(this);
		}
	}
	// @Override
	public exitRule(listener: FextyListener): void {
		if (listener.exitFexty_rule_body) {
			listener.exitFexty_rule_body(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FextyVisitor<Result>): Result {
		if (visitor.visitFexty_rule_body) {
			return visitor.visitFexty_rule_body(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Fexty_rule_function_declaratorContext extends ParserRuleContext {
	public _name!: Token;
	public LEFT_PAREN(): TerminalNode | undefined { return this.tryGetToken(FextyParser.LEFT_PAREN, 0); }
	public RIGHT_PAREN(): TerminalNode | undefined { return this.tryGetToken(FextyParser.RIGHT_PAREN, 0); }
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FextyParser.DOT);
		} else {
			return this.getToken(FextyParser.DOT, i);
		}
	}
	public fexty_rule_function_declarator(): Fexty_rule_function_declaratorContext[];
	public fexty_rule_function_declarator(i: number): Fexty_rule_function_declaratorContext;
	public fexty_rule_function_declarator(i?: number): Fexty_rule_function_declaratorContext | Fexty_rule_function_declaratorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Fexty_rule_function_declaratorContext);
		} else {
			return this.getRuleContext(i, Fexty_rule_function_declaratorContext);
		}
	}
	public ID(): TerminalNode | undefined { return this.tryGetToken(FextyParser.ID, 0); }
	public function_params(): Function_paramsContext | undefined {
		return this.tryGetRuleContext(0, Function_paramsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FextyParser.RULE_fexty_rule_function_declarator; }
	// @Override
	public enterRule(listener: FextyListener): void {
		if (listener.enterFexty_rule_function_declarator) {
			listener.enterFexty_rule_function_declarator(this);
		}
	}
	// @Override
	public exitRule(listener: FextyListener): void {
		if (listener.exitFexty_rule_function_declarator) {
			listener.exitFexty_rule_function_declarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FextyVisitor<Result>): Result {
		if (visitor.visitFexty_rule_function_declarator) {
			return visitor.visitFexty_rule_function_declarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Parameter_clauseContext extends ParserRuleContext {
	public defined_parameter(): Defined_parameterContext[];
	public defined_parameter(i: number): Defined_parameterContext;
	public defined_parameter(i?: number): Defined_parameterContext | Defined_parameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Defined_parameterContext);
		} else {
			return this.getRuleContext(i, Defined_parameterContext);
		}
	}
	public EQ(): TerminalNode[];
	public EQ(i: number): TerminalNode;
	public EQ(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FextyParser.EQ);
		} else {
			return this.getToken(FextyParser.EQ, i);
		}
	}
	public CONSTANT(): TerminalNode[];
	public CONSTANT(i: number): TerminalNode;
	public CONSTANT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FextyParser.CONSTANT);
		} else {
			return this.getToken(FextyParser.CONSTANT, i);
		}
	}
	public COLON(): TerminalNode { return this.getToken(FextyParser.COLON, 0); }
	public fexty_rule_function_declarator(): Fexty_rule_function_declaratorContext {
		return this.getRuleContext(0, Fexty_rule_function_declaratorContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(FextyParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FextyParser.RULE_parameter_clause; }
	// @Override
	public enterRule(listener: FextyListener): void {
		if (listener.enterParameter_clause) {
			listener.enterParameter_clause(this);
		}
	}
	// @Override
	public exitRule(listener: FextyListener): void {
		if (listener.exitParameter_clause) {
			listener.exitParameter_clause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FextyVisitor<Result>): Result {
		if (visitor.visitParameter_clause) {
			return visitor.visitParameter_clause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Otherwise_clauseContext extends ParserRuleContext {
	public OTHERWISE(): TerminalNode { return this.getToken(FextyParser.OTHERWISE, 0); }
	public COLON(): TerminalNode { return this.getToken(FextyParser.COLON, 0); }
	public fexty_rule_function_declarator(): Fexty_rule_function_declaratorContext | undefined {
		return this.tryGetRuleContext(0, Fexty_rule_function_declaratorContext);
	}
	public PASS(): TerminalNode | undefined { return this.tryGetToken(FextyParser.PASS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FextyParser.RULE_otherwise_clause; }
	// @Override
	public enterRule(listener: FextyListener): void {
		if (listener.enterOtherwise_clause) {
			listener.enterOtherwise_clause(this);
		}
	}
	// @Override
	public exitRule(listener: FextyListener): void {
		if (listener.exitOtherwise_clause) {
			listener.exitOtherwise_clause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FextyVisitor<Result>): Result {
		if (visitor.visitOtherwise_clause) {
			return visitor.visitOtherwise_clause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Function_paramsContext extends ParserRuleContext {
	public _arg!: ParameterContext;
	public parameter(): ParameterContext[];
	public parameter(i: number): ParameterContext;
	public parameter(i?: number): ParameterContext | ParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterContext);
		} else {
			return this.getRuleContext(i, ParameterContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FextyParser.COMMA);
		} else {
			return this.getToken(FextyParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FextyParser.RULE_function_params; }
	// @Override
	public enterRule(listener: FextyListener): void {
		if (listener.enterFunction_params) {
			listener.enterFunction_params(this);
		}
	}
	// @Override
	public exitRule(listener: FextyListener): void {
		if (listener.exitFunction_params) {
			listener.exitFunction_params(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FextyVisitor<Result>): Result {
		if (visitor.visitFunction_params) {
			return visitor.visitFunction_params(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Binding_parameterContext extends ParserRuleContext {
	public LEFT_BRACE(): TerminalNode { return this.getToken(FextyParser.LEFT_BRACE, 0); }
	public ID(): TerminalNode { return this.getToken(FextyParser.ID, 0); }
	public COLON(): TerminalNode { return this.getToken(FextyParser.COLON, 0); }
	public PARAMETER12(): TerminalNode { return this.getToken(FextyParser.PARAMETER12, 0); }
	public RIGHT_BRACE(): TerminalNode { return this.getToken(FextyParser.RIGHT_BRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FextyParser.RULE_binding_parameter; }
	// @Override
	public enterRule(listener: FextyListener): void {
		if (listener.enterBinding_parameter) {
			listener.enterBinding_parameter(this);
		}
	}
	// @Override
	public exitRule(listener: FextyListener): void {
		if (listener.exitBinding_parameter) {
			listener.exitBinding_parameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FextyVisitor<Result>): Result {
		if (visitor.visitBinding_parameter) {
			return visitor.visitBinding_parameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Enum_parameterContext extends ParserRuleContext {
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FextyParser.ID);
		} else {
			return this.getToken(FextyParser.ID, i);
		}
	}
	public DOT(): TerminalNode { return this.getToken(FextyParser.DOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FextyParser.RULE_enum_parameter; }
	// @Override
	public enterRule(listener: FextyListener): void {
		if (listener.enterEnum_parameter) {
			listener.enterEnum_parameter(this);
		}
	}
	// @Override
	public exitRule(listener: FextyListener): void {
		if (listener.exitEnum_parameter) {
			listener.exitEnum_parameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FextyVisitor<Result>): Result {
		if (visitor.visitEnum_parameter) {
			return visitor.visitEnum_parameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Defined_parameterContext extends ParserRuleContext {
	public PARAMETER_1(): TerminalNode | undefined { return this.tryGetToken(FextyParser.PARAMETER_1, 0); }
	public PARAMETER_2(): TerminalNode | undefined { return this.tryGetToken(FextyParser.PARAMETER_2, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FextyParser.RULE_defined_parameter; }
	// @Override
	public enterRule(listener: FextyListener): void {
		if (listener.enterDefined_parameter) {
			listener.enterDefined_parameter(this);
		}
	}
	// @Override
	public exitRule(listener: FextyListener): void {
		if (listener.exitDefined_parameter) {
			listener.exitDefined_parameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FextyVisitor<Result>): Result {
		if (visitor.visitDefined_parameter) {
			return visitor.visitDefined_parameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterContext extends ParserRuleContext {
	public defined_parameter(): Defined_parameterContext | undefined {
		return this.tryGetRuleContext(0, Defined_parameterContext);
	}
	public binding_parameter(): Binding_parameterContext | undefined {
		return this.tryGetRuleContext(0, Binding_parameterContext);
	}
	public enum_parameter(): Enum_parameterContext | undefined {
		return this.tryGetRuleContext(0, Enum_parameterContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FextyParser.RULE_parameter; }
	// @Override
	public enterRule(listener: FextyListener): void {
		if (listener.enterParameter) {
			listener.enterParameter(this);
		}
	}
	// @Override
	public exitRule(listener: FextyListener): void {
		if (listener.exitParameter) {
			listener.exitParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FextyVisitor<Result>): Result {
		if (visitor.visitParameter) {
			return visitor.visitParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


