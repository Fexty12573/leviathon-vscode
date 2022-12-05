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
	public static readonly PARAMETER = 12;
	public static readonly ENUM_PARAMETER = 13;
	public static readonly END_RANDOM = 14;
	public static readonly FLOW_CONTROL = 15;
	public static readonly BRANCH_CONTROL = 16;
	public static readonly UNKN1 = 17;
	public static readonly UNKN2 = 18;
	public static readonly ABC = 19;
	public static readonly PARAMETER_1 = 20;
	public static readonly UNKN3 = 21;
	public static readonly UNKN4 = 22;
	public static readonly UNKN5 = 23;
	public static readonly UNKN6 = 24;
	public static readonly PARAMETER_2 = 25;
	public static readonly NODE_ENDING_DATA = 26;
	public static readonly EXT_REF_THK_ID = 27;
	public static readonly EXT_REF_NODE_ID = 28;
	public static readonly LOCAL_REF_NODE_ID = 29;
	public static readonly UNKN7 = 30;
	public static readonly UNKN8 = 31;
	public static readonly UNKN9 = 32;
	public static readonly UNKN10 = 33;
	public static readonly UNKN11 = 34;
	public static readonly ACTION_ID = 35;
	public static readonly ACTION_UNK0 = 36;
	public static readonly ACTION_UNK1 = 37;
	public static readonly ACTION_UNK2 = 38;
	public static readonly UNKN12 = 39;
	public static readonly ACTION_UNK3 = 40;
	public static readonly ACTION_UNK4 = 41;
	public static readonly UNK_EXTRA0 = 42;
	public static readonly UNK_EXTRA1 = 43;
	public static readonly UNK_EXTRA2 = 44;
	public static readonly ST_ENUM = 45;
	public static readonly EM_ENUM = 46;
	public static readonly OTHERWISE = 47;
	public static readonly PASS = 48;
	public static readonly OTHERWISE_PASS = 49;
	public static readonly RIGHT_ARROW = 50;
	public static readonly COMMA = 51;
	public static readonly ANYTHING = 52;
	public static readonly USE_HEX = 53;
	public static readonly LINESKIP = 54;
	public static readonly WS = 55;
	public static readonly RULE_file = 0;
	public static readonly RULE_f_extension = 1;
	public static readonly RULE_fexty_rule = 2;
	public static readonly RULE_fexty_inline_rule = 3;
	public static readonly RULE_inline_function = 4;
	public static readonly RULE_fexty_rule_body = 5;
	public static readonly RULE_fexty_rule_predefined_function_name = 6;
	public static readonly RULE_fexty_rule_function_declarator = 7;
	public static readonly RULE_fexty_rule_parameter_clause = 8;
	public static readonly RULE_fexty_rule_otherwise_clause = 9;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"file", "f_extension", "fexty_rule", "fexty_inline_rule", "inline_function", 
		"fexty_rule_body", "fexty_rule_predefined_function_name", "fexty_rule_function_declarator", 
		"fexty_rule_parameter_clause", "fexty_rule_otherwise_clause",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'{'", "'}'", "'('", "')'", "':'", "'.'", "'=='", undefined, 
		undefined, undefined, undefined, undefined, undefined, "'endRandom'", 
		"'flowControl'", "'branchingControl'", "'unkn1'", "'unkn2'", "'functionType'", 
		"'parameter1'", "'unkn3'", "'unkn4'", "'unkn5'", "'unkn6'", "'parameter2'", 
		"'nodeEndingData'", "'extRefThkID'", "'extRefNodeID'", "'localRefNodeID'", 
		"'unkn7'", "'unkn8'", "'unkn9'", "'unkn10'", "'unkn11'", "'actionID'", 
		"'actionUnkn0'", "'actionUnkn1'", "'actionUnkn2'", "'unkn12'", "'actionUnkn3'", 
		"'actionUnkn4'", "'unknExtra0'", "'unknExtra1'", "'unknExtra2'", "'st_enum'", 
		"'em_enum'", "'otherwise'", "'pass'", undefined, "'>'", "','",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "LEFT_BRACE", "RIGHT_BRACE", "LEFT_PAREN", "RIGHT_PAREN", "COLON", 
		"DOT", "EQ", "CONSTANT", "HEX_ID", "ID", "FUNC_ID", "PARAMETER", "ENUM_PARAMETER", 
		"END_RANDOM", "FLOW_CONTROL", "BRANCH_CONTROL", "UNKN1", "UNKN2", "ABC", 
		"PARAMETER_1", "UNKN3", "UNKN4", "UNKN5", "UNKN6", "PARAMETER_2", "NODE_ENDING_DATA", 
		"EXT_REF_THK_ID", "EXT_REF_NODE_ID", "LOCAL_REF_NODE_ID", "UNKN7", "UNKN8", 
		"UNKN9", "UNKN10", "UNKN11", "ACTION_ID", "ACTION_UNK0", "ACTION_UNK1", 
		"ACTION_UNK2", "UNKN12", "ACTION_UNK3", "ACTION_UNK4", "UNK_EXTRA0", "UNK_EXTRA1", 
		"UNK_EXTRA2", "ST_ENUM", "EM_ENUM", "OTHERWISE", "PASS", "OTHERWISE_PASS", 
		"RIGHT_ARROW", "COMMA", "ANYTHING", "USE_HEX", "LINESKIP", "WS",
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
			this.state = 21;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FextyParser.USE_HEX) {
				{
				this.state = 20;
				this.match(FextyParser.USE_HEX);
				}
			}

			this.state = 29;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FextyParser.CONSTANT || _la === FextyParser.LINESKIP) {
				{
				this.state = 27;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case FextyParser.LINESKIP:
					{
					this.state = 23;
					this.match(FextyParser.LINESKIP);
					}
					break;
				case FextyParser.CONSTANT:
					{
					this.state = 24;
					this.f_extension();
					this.state = 25;
					this.match(FextyParser.LINESKIP);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 31;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 32;
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
			this.state = 40;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 34;
				this.fexty_rule();
				this.state = 35;
				this.match(FextyParser.LINESKIP);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 37;
				this.fexty_inline_rule();
				this.state = 38;
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
			this.state = 42;
			_localctx._id = this.match(FextyParser.CONSTANT);
			this.state = 43;
			this.match(FextyParser.LEFT_BRACE);
			this.state = 44;
			this.match(FextyParser.LINESKIP);
			this.state = 48;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FextyParser.RIGHT_ARROW) {
				{
				this.state = 45;
				this.fexty_rule_predefined_function_name();
				this.state = 46;
				this.match(FextyParser.LINESKIP);
				}
			}

			this.state = 55;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FextyParser.PARAMETER_1 || _la === FextyParser.PARAMETER_2) {
				{
				{
				this.state = 50;
				this.fexty_rule_parameter_clause();
				this.state = 51;
				this.match(FextyParser.LINESKIP);
				}
				}
				this.state = 57;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 61;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FextyParser.OTHERWISE) {
				{
				this.state = 58;
				this.fexty_rule_otherwise_clause();
				this.state = 59;
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
			this.state = 63;
			_localctx._id = this.match(FextyParser.CONSTANT);
			this.state = 64;
			this.match(FextyParser.COLON);
			this.state = 65;
			this.inline_function();
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
	public inline_function(): Inline_functionContext {
		let _localctx: Inline_functionContext = new Inline_functionContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, FextyParser.RULE_inline_function);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 67;
			_localctx._name = this.match(FextyParser.ID);
			this.state = 68;
			this.match(FextyParser.LEFT_PAREN);
			this.state = 74;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FextyParser.PARAMETER) {
				{
				this.state = 69;
				_localctx._arg = this.match(FextyParser.PARAMETER);
				this.state = 72;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FextyParser.COMMA) {
					{
					this.state = 70;
					this.match(FextyParser.COMMA);
					this.state = 71;
					_localctx._arg = this.match(FextyParser.PARAMETER);
					}
				}

				}
			}

			this.state = 76;
			this.match(FextyParser.RIGHT_PAREN);
			this.state = 81;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 77;
					this.match(FextyParser.DOT);
					this.state = 78;
					this.inline_function();
					}
					}
				}
				this.state = 83;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
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
		this.enterRule(_localctx, 10, FextyParser.RULE_fexty_rule_body);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 84;
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
	public fexty_rule_predefined_function_name(): Fexty_rule_predefined_function_nameContext {
		let _localctx: Fexty_rule_predefined_function_nameContext = new Fexty_rule_predefined_function_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, FextyParser.RULE_fexty_rule_predefined_function_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 86;
			this.match(FextyParser.RIGHT_ARROW);
			this.state = 87;
			this.fexty_rule_function_declarator();
			this.state = 88;
			this.match(FextyParser.LINESKIP);
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
			this.state = 90;
			_localctx._name = this.match(FextyParser.ID);
			this.state = 106;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FextyParser.LEFT_PAREN) {
				{
				this.state = 91;
				this.match(FextyParser.LEFT_PAREN);
				this.state = 95;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FextyParser.ANYTHING) {
					{
					{
					this.state = 92;
					_localctx._param_data = this.match(FextyParser.ANYTHING);
					}
					}
					this.state = 97;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 98;
				this.match(FextyParser.RIGHT_PAREN);
				this.state = 99;
				this.match(FextyParser.DOT);
				this.state = 103;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 100;
						this.fexty_rule_function_declarator();
						}
						}
					}
					this.state = 105;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
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
	public fexty_rule_parameter_clause(): Fexty_rule_parameter_clauseContext {
		let _localctx: Fexty_rule_parameter_clauseContext = new Fexty_rule_parameter_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, FextyParser.RULE_fexty_rule_parameter_clause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 108;
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
			this.state = 109;
			this.match(FextyParser.EQ);
			this.state = 110;
			this.match(FextyParser.CONSTANT);
			this.state = 115;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FextyParser.COMMA) {
				{
				this.state = 111;
				this.match(FextyParser.COMMA);
				this.state = 112;
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
				this.state = 113;
				this.match(FextyParser.EQ);
				this.state = 114;
				this.match(FextyParser.CONSTANT);
				}
			}

			this.state = 117;
			this.match(FextyParser.COLON);
			this.state = 118;
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
	public fexty_rule_otherwise_clause(): Fexty_rule_otherwise_clauseContext {
		let _localctx: Fexty_rule_otherwise_clauseContext = new Fexty_rule_otherwise_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, FextyParser.RULE_fexty_rule_otherwise_clause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 120;
			this.match(FextyParser.OTHERWISE);
			this.state = 121;
			this.match(FextyParser.COLON);
			this.state = 124;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FextyParser.ID:
				{
				this.state = 122;
				this.fexty_rule_function_declarator();
				}
				break;
			case FextyParser.PASS:
				{
				this.state = 123;
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

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x039\x81\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x03\x02\x05\x02\x18\n\x02" +
		"\x03\x02\x03\x02\x03\x02\x03\x02\x07\x02\x1E\n\x02\f\x02\x0E\x02!\v\x02" +
		"\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03" +
		"+\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x043\n\x04" +
		"\x03\x04\x03\x04\x03\x04\x07\x048\n\x04\f\x04\x0E\x04;\v\x04\x03\x04\x03" +
		"\x04\x03\x04\x05\x04@\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x05\x06K\n\x06\x05\x06M\n\x06\x03\x06\x03" +
		"\x06\x03\x06\x07\x06R\n\x06\f\x06\x0E\x06U\v\x06\x03\x07\x03\x07\x03\b" +
		"\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x07\t`\n\t\f\t\x0E\tc\v\t\x03\t\x03" +
		"\t\x03\t\x07\th\n\t\f\t\x0E\tk\v\t\x05\tm\n\t\x03\n\x03\n\x03\n\x03\n" +
		"\x03\n\x03\n\x03\n\x05\nv\n\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03" +
		"\v\x05\v\x7F\n\v\x03\v\x02\x02\x02\f\x02\x02\x04\x02\x06\x02\b\x02\n\x02" +
		"\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x02\x03\x04\x02\x16\x16\x1B\x1B" +
		"\x02\x85\x02\x17\x03\x02\x02\x02\x04*\x03\x02\x02\x02\x06,\x03\x02\x02" +
		"\x02\bA\x03\x02\x02\x02\nE\x03\x02\x02\x02\fV\x03\x02\x02\x02\x0EX\x03" +
		"\x02\x02\x02\x10\\\x03\x02\x02\x02\x12n\x03\x02\x02\x02\x14z\x03\x02\x02" +
		"\x02\x16\x18\x077\x02\x02\x17\x16\x03\x02\x02\x02\x17\x18\x03\x02\x02" +
		"\x02\x18\x1F\x03\x02\x02\x02\x19\x1E\x078\x02\x02\x1A\x1B\x05\x04\x03" +
		"\x02\x1B\x1C\x078\x02\x02\x1C\x1E\x03\x02\x02\x02\x1D\x19\x03\x02\x02" +
		"\x02\x1D\x1A\x03\x02\x02\x02\x1E!\x03\x02\x02\x02\x1F\x1D\x03\x02\x02" +
		"\x02\x1F \x03\x02\x02\x02 \"\x03\x02\x02\x02!\x1F\x03\x02\x02\x02\"#\x07" +
		"\x02\x02\x03#\x03\x03\x02\x02\x02$%\x05\x06\x04\x02%&\x078\x02\x02&+\x03" +
		"\x02\x02\x02\'(\x05\b\x05\x02()\x078\x02\x02)+\x03\x02\x02\x02*$\x03\x02" +
		"\x02\x02*\'\x03\x02\x02\x02+\x05\x03\x02\x02\x02,-\x07\n\x02\x02-.\x07" +
		"\x03\x02\x02.2\x078\x02\x02/0\x05\x0E\b\x0201\x078\x02\x0213\x03\x02\x02" +
		"\x022/\x03\x02\x02\x0223\x03\x02\x02\x0239\x03\x02\x02\x0245\x05\x12\n" +
		"\x0256\x078\x02\x0268\x03\x02\x02\x0274\x03\x02\x02\x028;\x03\x02\x02" +
		"\x0297\x03\x02\x02\x029:\x03\x02\x02\x02:?\x03\x02\x02\x02;9\x03\x02\x02" +
		"\x02<=\x05\x14\v\x02=>\x078\x02\x02>@\x03\x02\x02\x02?<\x03\x02\x02\x02" +
		"?@\x03\x02\x02\x02@\x07\x03\x02\x02\x02AB\x07\n\x02\x02BC\x07\x07\x02" +
		"\x02CD\x05\n\x06\x02D\t\x03\x02\x02\x02EF\x07\f\x02\x02FL\x07\x05\x02" +
		"\x02GJ\x07\x0E\x02\x02HI\x075\x02\x02IK\x07\x0E\x02\x02JH\x03\x02\x02" +
		"\x02JK\x03\x02\x02\x02KM\x03\x02\x02\x02LG\x03\x02\x02\x02LM\x03\x02\x02" +
		"\x02MN\x03\x02\x02\x02NS\x07\x06\x02\x02OP\x07\b\x02\x02PR\x05\n\x06\x02" +
		"QO\x03\x02\x02\x02RU\x03\x02\x02\x02SQ\x03\x02\x02\x02ST\x03\x02\x02\x02" +
		"T\v\x03\x02\x02\x02US\x03\x02\x02\x02VW\x074\x02\x02W\r\x03\x02\x02\x02" +
		"XY\x074\x02\x02YZ\x05\x10\t\x02Z[\x078\x02\x02[\x0F\x03\x02\x02\x02\\" +
		"l\x07\f\x02\x02]a\x07\x05\x02\x02^`\x076\x02\x02_^\x03\x02\x02\x02`c\x03" +
		"\x02\x02\x02a_\x03\x02\x02\x02ab\x03\x02\x02\x02bd\x03\x02\x02\x02ca\x03" +
		"\x02\x02\x02de\x07\x06\x02\x02ei\x07\b\x02\x02fh\x05\x10\t\x02gf\x03\x02" +
		"\x02\x02hk\x03\x02\x02\x02ig\x03\x02\x02\x02ij\x03\x02\x02\x02jm\x03\x02" +
		"\x02\x02ki\x03\x02\x02\x02l]\x03\x02\x02\x02lm\x03\x02\x02\x02m\x11\x03" +
		"\x02\x02\x02no\t\x02\x02\x02op\x07\t\x02\x02pu\x07\n\x02\x02qr\x075\x02" +
		"\x02rs\t\x02\x02\x02st\x07\t\x02\x02tv\x07\n\x02\x02uq\x03\x02\x02\x02" +
		"uv\x03\x02\x02\x02vw\x03\x02\x02\x02wx\x07\x07\x02\x02xy\x05\x10\t\x02" +
		"y\x13\x03\x02\x02\x02z{\x071\x02\x02{~\x07\x07\x02\x02|\x7F\x05\x10\t" +
		"\x02}\x7F\x072\x02\x02~|\x03\x02\x02\x02~}\x03\x02\x02\x02\x7F\x15\x03" +
		"\x02\x02\x02\x11\x17\x1D\x1F*29?JLSailu~";
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
	public fexty_rule_predefined_function_name(): Fexty_rule_predefined_function_nameContext | undefined {
		return this.tryGetRuleContext(0, Fexty_rule_predefined_function_nameContext);
	}
	public fexty_rule_parameter_clause(): Fexty_rule_parameter_clauseContext[];
	public fexty_rule_parameter_clause(i: number): Fexty_rule_parameter_clauseContext;
	public fexty_rule_parameter_clause(i?: number): Fexty_rule_parameter_clauseContext | Fexty_rule_parameter_clauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Fexty_rule_parameter_clauseContext);
		} else {
			return this.getRuleContext(i, Fexty_rule_parameter_clauseContext);
		}
	}
	public fexty_rule_otherwise_clause(): Fexty_rule_otherwise_clauseContext | undefined {
		return this.tryGetRuleContext(0, Fexty_rule_otherwise_clauseContext);
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
	public inline_function(): Inline_functionContext {
		return this.getRuleContext(0, Inline_functionContext);
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


export class Inline_functionContext extends ParserRuleContext {
	public _name!: Token;
	public _arg!: Token;
	public LEFT_PAREN(): TerminalNode { return this.getToken(FextyParser.LEFT_PAREN, 0); }
	public RIGHT_PAREN(): TerminalNode { return this.getToken(FextyParser.RIGHT_PAREN, 0); }
	public ID(): TerminalNode { return this.getToken(FextyParser.ID, 0); }
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FextyParser.DOT);
		} else {
			return this.getToken(FextyParser.DOT, i);
		}
	}
	public inline_function(): Inline_functionContext[];
	public inline_function(i: number): Inline_functionContext;
	public inline_function(i?: number): Inline_functionContext | Inline_functionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Inline_functionContext);
		} else {
			return this.getRuleContext(i, Inline_functionContext);
		}
	}
	public PARAMETER(): TerminalNode[];
	public PARAMETER(i: number): TerminalNode;
	public PARAMETER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FextyParser.PARAMETER);
		} else {
			return this.getToken(FextyParser.PARAMETER, i);
		}
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(FextyParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FextyParser.RULE_inline_function; }
	// @Override
	public enterRule(listener: FextyListener): void {
		if (listener.enterInline_function) {
			listener.enterInline_function(this);
		}
	}
	// @Override
	public exitRule(listener: FextyListener): void {
		if (listener.exitInline_function) {
			listener.exitInline_function(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FextyVisitor<Result>): Result {
		if (visitor.visitInline_function) {
			return visitor.visitInline_function(this);
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


export class Fexty_rule_predefined_function_nameContext extends ParserRuleContext {
	public RIGHT_ARROW(): TerminalNode { return this.getToken(FextyParser.RIGHT_ARROW, 0); }
	public fexty_rule_function_declarator(): Fexty_rule_function_declaratorContext {
		return this.getRuleContext(0, Fexty_rule_function_declaratorContext);
	}
	public LINESKIP(): TerminalNode { return this.getToken(FextyParser.LINESKIP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FextyParser.RULE_fexty_rule_predefined_function_name; }
	// @Override
	public enterRule(listener: FextyListener): void {
		if (listener.enterFexty_rule_predefined_function_name) {
			listener.enterFexty_rule_predefined_function_name(this);
		}
	}
	// @Override
	public exitRule(listener: FextyListener): void {
		if (listener.exitFexty_rule_predefined_function_name) {
			listener.exitFexty_rule_predefined_function_name(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FextyVisitor<Result>): Result {
		if (visitor.visitFexty_rule_predefined_function_name) {
			return visitor.visitFexty_rule_predefined_function_name(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Fexty_rule_function_declaratorContext extends ParserRuleContext {
	public _name!: Token;
	public _param_data!: Token;
	public ID(): TerminalNode { return this.getToken(FextyParser.ID, 0); }
	public LEFT_PAREN(): TerminalNode | undefined { return this.tryGetToken(FextyParser.LEFT_PAREN, 0); }
	public RIGHT_PAREN(): TerminalNode | undefined { return this.tryGetToken(FextyParser.RIGHT_PAREN, 0); }
	public DOT(): TerminalNode | undefined { return this.tryGetToken(FextyParser.DOT, 0); }
	public fexty_rule_function_declarator(): Fexty_rule_function_declaratorContext[];
	public fexty_rule_function_declarator(i: number): Fexty_rule_function_declaratorContext;
	public fexty_rule_function_declarator(i?: number): Fexty_rule_function_declaratorContext | Fexty_rule_function_declaratorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Fexty_rule_function_declaratorContext);
		} else {
			return this.getRuleContext(i, Fexty_rule_function_declaratorContext);
		}
	}
	public ANYTHING(): TerminalNode[];
	public ANYTHING(i: number): TerminalNode;
	public ANYTHING(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FextyParser.ANYTHING);
		} else {
			return this.getToken(FextyParser.ANYTHING, i);
		}
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


export class Fexty_rule_parameter_clauseContext extends ParserRuleContext {
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
	public PARAMETER_1(): TerminalNode[];
	public PARAMETER_1(i: number): TerminalNode;
	public PARAMETER_1(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FextyParser.PARAMETER_1);
		} else {
			return this.getToken(FextyParser.PARAMETER_1, i);
		}
	}
	public PARAMETER_2(): TerminalNode[];
	public PARAMETER_2(i: number): TerminalNode;
	public PARAMETER_2(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FextyParser.PARAMETER_2);
		} else {
			return this.getToken(FextyParser.PARAMETER_2, i);
		}
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(FextyParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FextyParser.RULE_fexty_rule_parameter_clause; }
	// @Override
	public enterRule(listener: FextyListener): void {
		if (listener.enterFexty_rule_parameter_clause) {
			listener.enterFexty_rule_parameter_clause(this);
		}
	}
	// @Override
	public exitRule(listener: FextyListener): void {
		if (listener.exitFexty_rule_parameter_clause) {
			listener.exitFexty_rule_parameter_clause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FextyVisitor<Result>): Result {
		if (visitor.visitFexty_rule_parameter_clause) {
			return visitor.visitFexty_rule_parameter_clause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Fexty_rule_otherwise_clauseContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return FextyParser.RULE_fexty_rule_otherwise_clause; }
	// @Override
	public enterRule(listener: FextyListener): void {
		if (listener.enterFexty_rule_otherwise_clause) {
			listener.enterFexty_rule_otherwise_clause(this);
		}
	}
	// @Override
	public exitRule(listener: FextyListener): void {
		if (listener.exitFexty_rule_otherwise_clause) {
			listener.exitFexty_rule_otherwise_clause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FextyVisitor<Result>): Result {
		if (visitor.visitFexty_rule_otherwise_clause) {
			return visitor.visitFexty_rule_otherwise_clause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


