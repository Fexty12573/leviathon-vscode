// Generated from ./server/grammar/fand/FandParser.g4 by ANTLR 4.9.0-SNAPSHOT


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

import { FandParserListener } from "./FandParserListener";
import { FandParserVisitor } from "./FandParserVisitor";


export class FandParser extends Parser {
	public static readonly AT = 1;
	public static readonly AS = 2;
	public static readonly THROUGH = 3;
	public static readonly IS = 4;
	public static readonly REGISTER = 5;
	public static readonly HAS = 6;
	public static readonly ENTRIES = 7;
	public static readonly REGISTER_IDENTIFIER = 8;
	public static readonly META_OP = 9;
	public static readonly EQUALS = 10;
	public static readonly ANY_NON_WHITESPACE = 11;
	public static readonly ID = 12;
	public static readonly NUMBER = 13;
	public static readonly HEX_NUMBER = 14;
	public static readonly LINESKIP = 15;
	public static readonly WS = 16;
	public static readonly PATH_CHARS = 17;
	public static readonly RULE_identifier = 0;
	public static readonly RULE_register_name = 1;
	public static readonly RULE_thk_name = 2;
	public static readonly RULE_hex_number_no_prefix = 3;
	public static readonly RULE_at_path = 4;
	public static readonly RULE_through_path = 5;
	public static readonly RULE_is_monster = 6;
	public static readonly RULE_register_declaration = 7;
	public static readonly RULE_thk_alias = 8;
	public static readonly RULE_has_entries = 9;
	public static readonly RULE_path = 10;
	public static readonly RULE_empty_line = 11;
	public static readonly RULE_fand_line = 12;
	public static readonly RULE_project = 13;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"identifier", "register_name", "thk_name", "hex_number_no_prefix", "at_path", 
		"through_path", "is_monster", "register_declaration", "thk_alias", "has_entries", 
		"path", "empty_line", "fand_line", "project",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'at'", "'as'", "'through'", "'is'", "'Register'", "'has'", 
		"'entries'", undefined, "'@'", "'='",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "AT", "AS", "THROUGH", "IS", "REGISTER", "HAS", "ENTRIES", 
		"REGISTER_IDENTIFIER", "META_OP", "EQUALS", "ANY_NON_WHITESPACE", "ID", 
		"NUMBER", "HEX_NUMBER", "LINESKIP", "WS", "PATH_CHARS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(FandParser._LITERAL_NAMES, FandParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return FandParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "FandParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return FandParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return FandParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(FandParser._ATN, this);
	}
	// @RuleVersion(0)
	public identifier(): IdentifierContext {
		let _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, FandParser.RULE_identifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 28;
			_localctx._id = this.match(FandParser.ID);
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
	public register_name(): Register_nameContext {
		let _localctx: Register_nameContext = new Register_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, FandParser.RULE_register_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 30;
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
	public thk_name(): Thk_nameContext {
		let _localctx: Thk_nameContext = new Thk_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, FandParser.RULE_thk_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 32;
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
	public hex_number_no_prefix(): Hex_number_no_prefixContext {
		let _localctx: Hex_number_no_prefixContext = new Hex_number_no_prefixContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, FandParser.RULE_hex_number_no_prefix);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 34;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FandParser.ID) | (1 << FandParser.NUMBER) | (1 << FandParser.HEX_NUMBER))) !== 0))) {
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
	public at_path(): At_pathContext {
		let _localctx: At_pathContext = new At_pathContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, FandParser.RULE_at_path);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 36;
			this.match(FandParser.AT);
			this.state = 37;
			this.path();
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
	public through_path(): Through_pathContext {
		let _localctx: Through_pathContext = new Through_pathContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, FandParser.RULE_through_path);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 39;
			this.match(FandParser.THROUGH);
			this.state = 40;
			this.path();
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
	public is_monster(): Is_monsterContext {
		let _localctx: Is_monsterContext = new Is_monsterContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, FandParser.RULE_is_monster);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 42;
			this.match(FandParser.IS);
			this.state = 43;
			_localctx._monster = this.match(FandParser.ID);
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
	public register_declaration(): Register_declarationContext {
		let _localctx: Register_declarationContext = new Register_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, FandParser.RULE_register_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 45;
			this.match(FandParser.REGISTER);
			this.state = 46;
			this.register_name();
			this.state = 49;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FandParser.AS) {
				{
				this.state = 47;
				this.match(FandParser.AS);
				this.state = 48;
				_localctx._register = this.match(FandParser.REGISTER_IDENTIFIER);
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
	public thk_alias(): Thk_aliasContext {
		let _localctx: Thk_aliasContext = new Thk_aliasContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, FandParser.RULE_thk_alias);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 51;
			this.thk_name();
			this.state = 52;
			this.match(FandParser.EQUALS);
			this.state = 53;
			_localctx._file = this.path();
			this.state = 56;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FandParser.META_OP) {
				{
				this.state = 54;
				this.match(FandParser.META_OP);
				this.state = 55;
				_localctx._meta = this.hex_number_no_prefix();
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
	public has_entries(): Has_entriesContext {
		let _localctx: Has_entriesContext = new Has_entriesContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, FandParser.RULE_has_entries);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 58;
			this.match(FandParser.HAS);
			this.state = 59;
			_localctx._amount = this.match(FandParser.NUMBER);
			this.state = 61;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FandParser.ENTRIES) {
				{
				this.state = 60;
				this.match(FandParser.ENTRIES);
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
	public path(): PathContext {
		let _localctx: PathContext = new PathContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, FandParser.RULE_path);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 63;
			this.match(FandParser.PATH_CHARS);
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
	public empty_line(): Empty_lineContext {
		let _localctx: Empty_lineContext = new Empty_lineContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, FandParser.RULE_empty_line);
		try {
			this.enterOuterAlt(_localctx, 1);
			// tslint:disable-next-line:no-empty
			{
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
	public fand_line(): Fand_lineContext {
		let _localctx: Fand_lineContext = new Fand_lineContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, FandParser.RULE_fand_line);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 74;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FandParser.AT:
				{
				this.state = 67;
				this.at_path();
				}
				break;
			case FandParser.THROUGH:
				{
				this.state = 68;
				this.through_path();
				}
				break;
			case FandParser.IS:
				{
				this.state = 69;
				this.is_monster();
				}
				break;
			case FandParser.REGISTER:
				{
				this.state = 70;
				this.register_declaration();
				}
				break;
			case FandParser.ID:
				{
				this.state = 71;
				this.thk_alias();
				}
				break;
			case FandParser.HAS:
				{
				this.state = 72;
				this.has_entries();
				}
				break;
			case FandParser.LINESKIP:
				{
				this.state = 73;
				this.empty_line();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 76;
			this.match(FandParser.LINESKIP);
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
	public project(): ProjectContext {
		let _localctx: ProjectContext = new ProjectContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, FandParser.RULE_project);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 81;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FandParser.AT) | (1 << FandParser.THROUGH) | (1 << FandParser.IS) | (1 << FandParser.REGISTER) | (1 << FandParser.HAS) | (1 << FandParser.ID) | (1 << FandParser.LINESKIP))) !== 0)) {
				{
				{
				this.state = 78;
				this.fand_line();
				}
				}
				this.state = 83;
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

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x13W\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04" +
		"\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\b" +
		"\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x05\t4\n\t\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x05\n;\n\n\x03\v\x03\v\x03\v\x05\v@\n\v\x03\f\x03\f\x03\r\x03" +
		"\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0EM\n" +
		"\x0E\x03\x0E\x03\x0E\x03\x0F\x07\x0FR\n\x0F\f\x0F\x0E\x0FU\v\x0F\x03\x0F" +
		"\x02\x02\x02\x10\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10" +
		"\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x02\x03\x03\x02\x0E" +
		"\x10\x02R\x02\x1E\x03\x02\x02\x02\x04 \x03\x02\x02\x02\x06\"\x03\x02\x02" +
		"\x02\b$\x03\x02\x02\x02\n&\x03\x02\x02\x02\f)\x03\x02\x02\x02\x0E,\x03" +
		"\x02\x02\x02\x10/\x03\x02\x02\x02\x125\x03\x02\x02\x02\x14<\x03\x02\x02" +
		"\x02\x16A\x03\x02\x02\x02\x18C\x03\x02\x02\x02\x1AL\x03\x02\x02\x02\x1C" +
		"S\x03\x02\x02\x02\x1E\x1F\x07\x0E\x02\x02\x1F\x03\x03\x02\x02\x02 !\x05" +
		"\x02\x02\x02!\x05\x03\x02\x02\x02\"#\x05\x02\x02\x02#\x07\x03\x02\x02" +
		"\x02$%\t\x02\x02\x02%\t\x03\x02\x02\x02&\'\x07\x03\x02\x02\'(\x05\x16" +
		"\f\x02(\v\x03\x02\x02\x02)*\x07\x05\x02\x02*+\x05\x16\f\x02+\r\x03\x02" +
		"\x02\x02,-\x07\x06\x02\x02-.\x07\x0E\x02\x02.\x0F\x03\x02\x02\x02/0\x07" +
		"\x07\x02\x0203\x05\x04\x03\x0212\x07\x04\x02\x0224\x07\n\x02\x0231\x03" +
		"\x02\x02\x0234\x03\x02\x02\x024\x11\x03\x02\x02\x0256\x05\x06\x04\x02" +
		"67\x07\f\x02\x027:\x05\x16\f\x0289\x07\v\x02\x029;\x05\b\x05\x02:8\x03" +
		"\x02\x02\x02:;\x03\x02\x02\x02;\x13\x03\x02\x02\x02<=\x07\b\x02\x02=?" +
		"\x07\x0F\x02\x02>@\x07\t\x02\x02?>\x03\x02\x02\x02?@\x03\x02\x02\x02@" +
		"\x15\x03\x02\x02\x02AB\x07\x13\x02\x02B\x17\x03\x02\x02\x02CD\x03\x02" +
		"\x02\x02D\x19\x03\x02\x02\x02EM\x05\n\x06\x02FM\x05\f\x07\x02GM\x05\x0E" +
		"\b\x02HM\x05\x10\t\x02IM\x05\x12\n\x02JM\x05\x14\v\x02KM\x05\x18\r\x02" +
		"LE\x03\x02\x02\x02LF\x03\x02\x02\x02LG\x03\x02\x02\x02LH\x03\x02\x02\x02" +
		"LI\x03\x02\x02\x02LJ\x03\x02\x02\x02LK\x03\x02\x02\x02MN\x03\x02\x02\x02" +
		"NO\x07\x11\x02\x02O\x1B\x03\x02\x02\x02PR\x05\x1A\x0E\x02QP\x03\x02\x02" +
		"\x02RU\x03\x02\x02\x02SQ\x03\x02\x02\x02ST\x03\x02\x02\x02T\x1D\x03\x02" +
		"\x02\x02US\x03\x02\x02\x02\x073:?LS";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!FandParser.__ATN) {
			FandParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(FandParser._serializedATN));
		}

		return FandParser.__ATN;
	}

}

export class IdentifierContext extends ParserRuleContext {
	public _id!: Token;
	public ID(): TerminalNode { return this.getToken(FandParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FandParser.RULE_identifier; }
	// @Override
	public enterRule(listener: FandParserListener): void {
		if (listener.enterIdentifier) {
			listener.enterIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: FandParserListener): void {
		if (listener.exitIdentifier) {
			listener.exitIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FandParserVisitor<Result>): Result {
		if (visitor.visitIdentifier) {
			return visitor.visitIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Register_nameContext extends ParserRuleContext {
	public _name!: IdentifierContext;
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FandParser.RULE_register_name; }
	// @Override
	public enterRule(listener: FandParserListener): void {
		if (listener.enterRegister_name) {
			listener.enterRegister_name(this);
		}
	}
	// @Override
	public exitRule(listener: FandParserListener): void {
		if (listener.exitRegister_name) {
			listener.exitRegister_name(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FandParserVisitor<Result>): Result {
		if (visitor.visitRegister_name) {
			return visitor.visitRegister_name(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Thk_nameContext extends ParserRuleContext {
	public _name!: IdentifierContext;
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FandParser.RULE_thk_name; }
	// @Override
	public enterRule(listener: FandParserListener): void {
		if (listener.enterThk_name) {
			listener.enterThk_name(this);
		}
	}
	// @Override
	public exitRule(listener: FandParserListener): void {
		if (listener.exitThk_name) {
			listener.exitThk_name(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FandParserVisitor<Result>): Result {
		if (visitor.visitThk_name) {
			return visitor.visitThk_name(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Hex_number_no_prefixContext extends ParserRuleContext {
	public ID(): TerminalNode | undefined { return this.tryGetToken(FandParser.ID, 0); }
	public HEX_NUMBER(): TerminalNode | undefined { return this.tryGetToken(FandParser.HEX_NUMBER, 0); }
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(FandParser.NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FandParser.RULE_hex_number_no_prefix; }
	// @Override
	public enterRule(listener: FandParserListener): void {
		if (listener.enterHex_number_no_prefix) {
			listener.enterHex_number_no_prefix(this);
		}
	}
	// @Override
	public exitRule(listener: FandParserListener): void {
		if (listener.exitHex_number_no_prefix) {
			listener.exitHex_number_no_prefix(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FandParserVisitor<Result>): Result {
		if (visitor.visitHex_number_no_prefix) {
			return visitor.visitHex_number_no_prefix(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class At_pathContext extends ParserRuleContext {
	public AT(): TerminalNode { return this.getToken(FandParser.AT, 0); }
	public path(): PathContext {
		return this.getRuleContext(0, PathContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FandParser.RULE_at_path; }
	// @Override
	public enterRule(listener: FandParserListener): void {
		if (listener.enterAt_path) {
			listener.enterAt_path(this);
		}
	}
	// @Override
	public exitRule(listener: FandParserListener): void {
		if (listener.exitAt_path) {
			listener.exitAt_path(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FandParserVisitor<Result>): Result {
		if (visitor.visitAt_path) {
			return visitor.visitAt_path(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Through_pathContext extends ParserRuleContext {
	public THROUGH(): TerminalNode { return this.getToken(FandParser.THROUGH, 0); }
	public path(): PathContext {
		return this.getRuleContext(0, PathContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FandParser.RULE_through_path; }
	// @Override
	public enterRule(listener: FandParserListener): void {
		if (listener.enterThrough_path) {
			listener.enterThrough_path(this);
		}
	}
	// @Override
	public exitRule(listener: FandParserListener): void {
		if (listener.exitThrough_path) {
			listener.exitThrough_path(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FandParserVisitor<Result>): Result {
		if (visitor.visitThrough_path) {
			return visitor.visitThrough_path(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Is_monsterContext extends ParserRuleContext {
	public _monster!: Token;
	public IS(): TerminalNode { return this.getToken(FandParser.IS, 0); }
	public ID(): TerminalNode { return this.getToken(FandParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FandParser.RULE_is_monster; }
	// @Override
	public enterRule(listener: FandParserListener): void {
		if (listener.enterIs_monster) {
			listener.enterIs_monster(this);
		}
	}
	// @Override
	public exitRule(listener: FandParserListener): void {
		if (listener.exitIs_monster) {
			listener.exitIs_monster(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FandParserVisitor<Result>): Result {
		if (visitor.visitIs_monster) {
			return visitor.visitIs_monster(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Register_declarationContext extends ParserRuleContext {
	public _register!: Token;
	public REGISTER(): TerminalNode { return this.getToken(FandParser.REGISTER, 0); }
	public register_name(): Register_nameContext {
		return this.getRuleContext(0, Register_nameContext);
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(FandParser.AS, 0); }
	public REGISTER_IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(FandParser.REGISTER_IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FandParser.RULE_register_declaration; }
	// @Override
	public enterRule(listener: FandParserListener): void {
		if (listener.enterRegister_declaration) {
			listener.enterRegister_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: FandParserListener): void {
		if (listener.exitRegister_declaration) {
			listener.exitRegister_declaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FandParserVisitor<Result>): Result {
		if (visitor.visitRegister_declaration) {
			return visitor.visitRegister_declaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Thk_aliasContext extends ParserRuleContext {
	public _file!: PathContext;
	public _meta!: Hex_number_no_prefixContext;
	public thk_name(): Thk_nameContext {
		return this.getRuleContext(0, Thk_nameContext);
	}
	public EQUALS(): TerminalNode { return this.getToken(FandParser.EQUALS, 0); }
	public path(): PathContext {
		return this.getRuleContext(0, PathContext);
	}
	public META_OP(): TerminalNode | undefined { return this.tryGetToken(FandParser.META_OP, 0); }
	public hex_number_no_prefix(): Hex_number_no_prefixContext | undefined {
		return this.tryGetRuleContext(0, Hex_number_no_prefixContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FandParser.RULE_thk_alias; }
	// @Override
	public enterRule(listener: FandParserListener): void {
		if (listener.enterThk_alias) {
			listener.enterThk_alias(this);
		}
	}
	// @Override
	public exitRule(listener: FandParserListener): void {
		if (listener.exitThk_alias) {
			listener.exitThk_alias(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FandParserVisitor<Result>): Result {
		if (visitor.visitThk_alias) {
			return visitor.visitThk_alias(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Has_entriesContext extends ParserRuleContext {
	public _amount!: Token;
	public HAS(): TerminalNode { return this.getToken(FandParser.HAS, 0); }
	public NUMBER(): TerminalNode { return this.getToken(FandParser.NUMBER, 0); }
	public ENTRIES(): TerminalNode | undefined { return this.tryGetToken(FandParser.ENTRIES, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FandParser.RULE_has_entries; }
	// @Override
	public enterRule(listener: FandParserListener): void {
		if (listener.enterHas_entries) {
			listener.enterHas_entries(this);
		}
	}
	// @Override
	public exitRule(listener: FandParserListener): void {
		if (listener.exitHas_entries) {
			listener.exitHas_entries(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FandParserVisitor<Result>): Result {
		if (visitor.visitHas_entries) {
			return visitor.visitHas_entries(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PathContext extends ParserRuleContext {
	public PATH_CHARS(): TerminalNode { return this.getToken(FandParser.PATH_CHARS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FandParser.RULE_path; }
	// @Override
	public enterRule(listener: FandParserListener): void {
		if (listener.enterPath) {
			listener.enterPath(this);
		}
	}
	// @Override
	public exitRule(listener: FandParserListener): void {
		if (listener.exitPath) {
			listener.exitPath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FandParserVisitor<Result>): Result {
		if (visitor.visitPath) {
			return visitor.visitPath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Empty_lineContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FandParser.RULE_empty_line; }
	// @Override
	public enterRule(listener: FandParserListener): void {
		if (listener.enterEmpty_line) {
			listener.enterEmpty_line(this);
		}
	}
	// @Override
	public exitRule(listener: FandParserListener): void {
		if (listener.exitEmpty_line) {
			listener.exitEmpty_line(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FandParserVisitor<Result>): Result {
		if (visitor.visitEmpty_line) {
			return visitor.visitEmpty_line(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Fand_lineContext extends ParserRuleContext {
	public LINESKIP(): TerminalNode { return this.getToken(FandParser.LINESKIP, 0); }
	public at_path(): At_pathContext | undefined {
		return this.tryGetRuleContext(0, At_pathContext);
	}
	public through_path(): Through_pathContext | undefined {
		return this.tryGetRuleContext(0, Through_pathContext);
	}
	public is_monster(): Is_monsterContext | undefined {
		return this.tryGetRuleContext(0, Is_monsterContext);
	}
	public register_declaration(): Register_declarationContext | undefined {
		return this.tryGetRuleContext(0, Register_declarationContext);
	}
	public thk_alias(): Thk_aliasContext | undefined {
		return this.tryGetRuleContext(0, Thk_aliasContext);
	}
	public has_entries(): Has_entriesContext | undefined {
		return this.tryGetRuleContext(0, Has_entriesContext);
	}
	public empty_line(): Empty_lineContext | undefined {
		return this.tryGetRuleContext(0, Empty_lineContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FandParser.RULE_fand_line; }
	// @Override
	public enterRule(listener: FandParserListener): void {
		if (listener.enterFand_line) {
			listener.enterFand_line(this);
		}
	}
	// @Override
	public exitRule(listener: FandParserListener): void {
		if (listener.exitFand_line) {
			listener.exitFand_line(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FandParserVisitor<Result>): Result {
		if (visitor.visitFand_line) {
			return visitor.visitFand_line(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProjectContext extends ParserRuleContext {
	public fand_line(): Fand_lineContext[];
	public fand_line(i: number): Fand_lineContext;
	public fand_line(i?: number): Fand_lineContext | Fand_lineContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Fand_lineContext);
		} else {
			return this.getRuleContext(i, Fand_lineContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FandParser.RULE_project; }
	// @Override
	public enterRule(listener: FandParserListener): void {
		if (listener.enterProject) {
			listener.enterProject(this);
		}
	}
	// @Override
	public exitRule(listener: FandParserListener): void {
		if (listener.exitProject) {
			listener.exitProject(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FandParserVisitor<Result>): Result {
		if (visitor.visitProject) {
			return visitor.visitProject(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


