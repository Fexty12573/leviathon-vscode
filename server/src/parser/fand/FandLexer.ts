// Generated from ./server/grammar/fand/Fand.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class FandLexer extends Lexer {
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
	public static readonly DOT = 11;
	public static readonly ID = 12;
	public static readonly NUMBER = 13;
	public static readonly HEX_NUMBER = 14;
	public static readonly LINESKIP = 15;
	public static readonly WS = 16;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"AT", "AS", "THROUGH", "IS", "REGISTER", "HAS", "ENTRIES", "REGISTER_IDENTIFIER", 
		"META_OP", "EQUALS", "DOT", "ID", "NUMBER", "HEX_NUMBER", "LINESKIP", 
		"WS",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'at'", "'as'", "'through'", "'is'", "'Register'", "'has'", 
		"'entries'", undefined, "'@'", "'='", "'.'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "AT", "AS", "THROUGH", "IS", "REGISTER", "HAS", "ENTRIES", 
		"REGISTER_IDENTIFIER", "META_OP", "EQUALS", "DOT", "ID", "NUMBER", "HEX_NUMBER", 
		"LINESKIP", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(FandLexer._LITERAL_NAMES, FandLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return FandLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(FandLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "Fand.g4"; }

	// @Override
	public get ruleNames(): string[] { return FandLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return FandLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return FandLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return FandLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x12l\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x03\x02\x03\x02" +
		"\x03\x02\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03" +
		"\t\x03\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03\r\x03\r\x07\rU\n\r\f\r\x0E" +
		"\rX\v\r\x03\x0E\x06\x0E[\n\x0E\r\x0E\x0E\x0E\\\x03\x0F\x06\x0F`\n\x0F" +
		"\r\x0F\x0E\x0Fa\x03\x10\x03\x10\x03\x10\x05\x10g\n\x10\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x02\x02\x02\x12\x03\x02\x03\x05\x02\x04\x07\x02\x05\t" +
		"\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17" +
		"\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11!\x02\x12\x03\x02" +
		"\b\x03\x02CX\x05\x02C\\aac|\x07\x02))2;C\\aac|\x03\x022;\x05\x022;CHc" +
		"h\x04\x02\v\v\"\"\x02o\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02" +
		"\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02" +
		"\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02" +
		"\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02" +
		"\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02" +
		"\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02\x03#\x03\x02\x02\x02\x05&\x03" +
		"\x02\x02\x02\x07)\x03\x02\x02\x02\t1\x03\x02\x02\x02\v4\x03\x02\x02\x02" +
		"\r=\x03\x02\x02\x02\x0FA\x03\x02\x02\x02\x11I\x03\x02\x02\x02\x13L\x03" +
		"\x02\x02\x02\x15N\x03\x02\x02\x02\x17P\x03\x02\x02\x02\x19R\x03\x02\x02" +
		"\x02\x1BZ\x03\x02\x02\x02\x1D_\x03\x02\x02\x02\x1Ff\x03\x02\x02\x02!h" +
		"\x03\x02\x02\x02#$\x07c\x02\x02$%\x07v\x02\x02%\x04\x03\x02\x02\x02&\'" +
		"\x07c\x02\x02\'(\x07u\x02\x02(\x06\x03\x02\x02\x02)*\x07v\x02\x02*+\x07" +
		"j\x02\x02+,\x07t\x02\x02,-\x07q\x02\x02-.\x07w\x02\x02./\x07i\x02\x02" +
		"/0\x07j\x02\x020\b\x03\x02\x02\x0212\x07k\x02\x0223\x07u\x02\x023\n\x03" +
		"\x02\x02\x0245\x07T\x02\x0256\x07g\x02\x0267\x07i\x02\x0278\x07k\x02\x02" +
		"89\x07u\x02\x029:\x07v\x02\x02:;\x07g\x02\x02;<\x07t\x02\x02<\f\x03\x02" +
		"\x02\x02=>\x07j\x02\x02>?\x07c\x02\x02?@\x07u\x02\x02@\x0E\x03\x02\x02" +
		"\x02AB\x07g\x02\x02BC\x07p\x02\x02CD\x07v\x02\x02DE\x07t\x02\x02EF\x07" +
		"k\x02\x02FG\x07g\x02\x02GH\x07u\x02\x02H\x10\x03\x02\x02\x02IJ\x07&\x02" +
		"\x02JK\t\x02\x02\x02K\x12\x03\x02\x02\x02LM\x07B\x02\x02M\x14\x03\x02" +
		"\x02\x02NO\x07?\x02\x02O\x16\x03\x02\x02\x02PQ\x070\x02\x02Q\x18\x03\x02" +
		"\x02\x02RV\t\x03\x02\x02SU\t\x04\x02\x02TS\x03\x02\x02\x02UX\x03\x02\x02" +
		"\x02VT\x03\x02\x02\x02VW\x03\x02\x02\x02W\x1A\x03\x02\x02\x02XV\x03\x02" +
		"\x02\x02Y[\t\x05\x02\x02ZY\x03\x02\x02\x02[\\\x03\x02\x02\x02\\Z\x03\x02" +
		"\x02\x02\\]\x03\x02\x02\x02]\x1C\x03\x02\x02\x02^`\t\x06\x02\x02_^\x03" +
		"\x02\x02\x02`a\x03\x02\x02\x02a_\x03\x02\x02\x02ab\x03\x02\x02\x02b\x1E" +
		"\x03\x02\x02\x02cg\x07\f\x02\x02de\x07\x0F\x02\x02eg\x07\f\x02\x02fc\x03" +
		"\x02\x02\x02fd\x03\x02\x02\x02g \x03\x02\x02\x02hi\t\x07\x02\x02ij\x03" +
		"\x02\x02\x02jk\b\x11\x02\x02k\"\x03\x02\x02\x02\x07\x02V\\af\x03\x02\x03" +
		"\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!FandLexer.__ATN) {
			FandLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(FandLexer._serializedATN));
		}

		return FandLexer.__ATN;
	}

}

