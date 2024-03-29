// Generated from ./server/grammar/Leviathon.g4 by ANTLR 4.9.0-SNAPSHOT


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


export class LeviathonLexer extends Lexer {
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

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"IF", "ELIF", "ELSE", "ENDIF", "ENDW", "DEF", "ENDF", "ENDDEF", "ENDFUNCTION", 
		"RANDOM", "ELSER", "ELSERANDOM", "ENDR", "ENDRANDOM", "ENDRW", "ENDRANDOMW", 
		"RESET", "REPEAT", "RETURN", "CONCLUDE", "IMPORTLIB", "IMPORTACT", "AS", 
		"UNSAFE", "SELF", "FUNCTION", "ACTION", "CALL", "LEFT_BRACKET", "RIGHT_BRACKET", 
		"LEFT_PAREN", "RIGHT_PAREN", "EQ", "NE", "GT", "LT", "GEQ", "LEQ", "INCREMENT", 
		"RESET_VAL", "CALL_OP", "ACTION_OP", "DIRECTIVE_OP", "USELESS_OP", "META_OP", 
		"COLON", "COMMA", "DOT", "HASH", "ALIAS_OP", "QUOTE", "REGISTER", "ID", 
		"NUMBER", "HEX_NUMBER", "HEX_NO_PREFIX", "QUOTED_PATH", "RAW_FUNCTION", 
		"RAW_ACTION", "RAW_CALL", "SCOPED_RAW_CALL", "LINESKIP", "WS",
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
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(LeviathonLexer._LITERAL_NAMES, LeviathonLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return LeviathonLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(LeviathonLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "Leviathon.g4"; }

	// @Override
	public get ruleNames(): string[] { return LeviathonLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return LeviathonLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return LeviathonLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return LeviathonLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02A\u01E4\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
		"\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t" +
		"\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04" +
		"+\t+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13" +
		"\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15" +
		"\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16" +
		"\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x17" +
		"\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17" +
		"\x03\x17\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19" +
		"\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A" +
		"\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B" +
		"\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1D" +
		"\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03 " +
		"\x03 \x03!\x03!\x03\"\x03\"\x03\"\x03#\x03#\x03#\x03$\x03$\x03%\x03%\x03" +
		"&\x03&\x03&\x03\'\x03\'\x03\'\x03(\x03(\x03(\x03)\x03)\x03)\x03*\x03*" +
		"\x03*\x03+\x03+\x03+\x03,\x03,\x03,\x03-\x03-\x03-\x03.\x03.\x03/\x03" +
		"/\x030\x030\x031\x031\x032\x032\x033\x033\x034\x034\x035\x035\x035\x03" +
		"6\x036\x076\u0191\n6\f6\x0E6\u0194\v6\x037\x057\u0197\n7\x037\x067\u019A" +
		"\n7\r7\x0E7\u019B\x038\x038\x038\x068\u01A1\n8\r8\x0E8\u01A2\x039\x06" +
		"9\u01A6\n9\r9\x0E9\u01A7\x03:\x06:\u01AB\n:\r:\x0E:\u01AC\x03;\x03;\x03" +
		";\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x06;\u01BA\n;\r;\x0E;\u01BB" +
		"\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x06<\u01C7\n<\r<\x0E<\u01C8" +
		"\x03=\x03=\x03=\x03=\x03=\x03=\x03=\x06=\u01D2\n=\r=\x0E=\u01D3\x03>\x03" +
		">\x06>\u01D8\n>\r>\x0E>\u01D9\x03?\x03?\x03?\x05?\u01DF\n?\x03@\x03@\x03" +
		"@\x03@\x02\x02\x02A\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02" +
		"\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19\x02" +
		"\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11!\x02\x12#\x02\x13%\x02\x14\'" +
		"\x02\x15)\x02\x16+\x02\x17-\x02\x18/\x02\x191\x02\x1A3\x02\x1B5\x02\x1C" +
		"7\x02\x1D9\x02\x1E;\x02\x1F=\x02 ?\x02!A\x02\"C\x02#E\x02$G\x02%I\x02" +
		"&K\x02\'M\x02(O\x02)Q\x02*S\x02+U\x02,W\x02-Y\x02.[\x02/]\x020_\x021a" +
		"\x022c\x023e\x024g\x025i\x026k\x027m\x028o\x029q\x02:s\x02;u\x02<w\x02" +
		"=y\x02>{\x02?}\x02@\x7F\x02A\x03\x02\v\x03\x02CV\x05\x02C\\aac|\x07\x02" +
		"))2;C\\aac|\x03\x022;\x04\x02ZZzz\x05\x022;CHch\x04\x02$$``\x04\x02\f" +
		"\f==\x04\x02\v\v\"\"\x02\u01EE\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02" +
		"\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02" +
		"\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02" +
		"\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02" +
		"\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02" +
		"\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02\x02#\x03\x02\x02\x02" +
		"\x02%\x03\x02\x02\x02\x02\'\x03\x02\x02\x02\x02)\x03\x02\x02\x02\x02+" +
		"\x03\x02\x02\x02\x02-\x03\x02\x02\x02\x02/\x03\x02\x02\x02\x021\x03\x02" +
		"\x02\x02\x023\x03\x02\x02\x02\x025\x03\x02\x02\x02\x027\x03\x02\x02\x02" +
		"\x029\x03\x02\x02\x02\x02;\x03\x02\x02\x02\x02=\x03\x02\x02\x02\x02?\x03" +
		"\x02\x02\x02\x02A\x03\x02\x02\x02\x02C\x03\x02\x02\x02\x02E\x03\x02\x02" +
		"\x02\x02G\x03\x02\x02\x02\x02I\x03\x02\x02\x02\x02K\x03\x02\x02\x02\x02" +
		"M\x03\x02\x02\x02\x02O\x03\x02\x02\x02\x02Q\x03\x02\x02\x02\x02S\x03\x02" +
		"\x02\x02\x02U\x03\x02\x02\x02\x02W\x03\x02\x02\x02\x02Y\x03\x02\x02\x02" +
		"\x02[\x03\x02\x02\x02\x02]\x03\x02\x02\x02\x02_\x03\x02\x02\x02\x02a\x03" +
		"\x02\x02\x02\x02c\x03\x02\x02\x02\x02e\x03\x02\x02\x02\x02g\x03\x02\x02" +
		"\x02\x02i\x03\x02\x02\x02\x02k\x03\x02\x02\x02\x02m\x03\x02\x02\x02\x02" +
		"o\x03\x02\x02\x02\x02q\x03\x02\x02\x02\x02s\x03\x02\x02\x02\x02u\x03\x02" +
		"\x02\x02\x02w\x03\x02\x02\x02\x02y\x03\x02\x02\x02\x02{\x03\x02\x02\x02" +
		"\x02}\x03\x02\x02\x02\x02\x7F\x03\x02\x02\x02\x03\x81\x03\x02\x02\x02" +
		"\x05\x84\x03\x02\x02\x02\x07\x89\x03\x02\x02\x02\t\x8E\x03\x02\x02\x02" +
		"\v\x94\x03\x02\x02\x02\r\x9C\x03\x02\x02\x02\x0F\xA0\x03\x02\x02\x02\x11" +
		"\xA5\x03\x02\x02\x02\x13\xAC\x03\x02\x02\x02\x15\xB8\x03\x02\x02\x02\x17" +
		"\xBF\x03\x02\x02\x02\x19\xC5\x03\x02\x02\x02\x1B\xD0\x03\x02\x02\x02\x1D" +
		"\xD5\x03\x02\x02\x02\x1F\xDF\x03\x02\x02\x02!\xE8\x03\x02\x02\x02#\xF6" +
		"\x03\x02\x02\x02%\xFC\x03\x02\x02\x02\'\u0103\x03\x02\x02\x02)\u010A\x03" +
		"\x02\x02\x02+\u0113\x03\x02\x02\x02-\u0121\x03\x02\x02\x02/\u012F\x03" +
		"\x02\x02\x021\u0132\x03\x02\x02\x023\u0139\x03\x02\x02\x025\u013E\x03" +
		"\x02\x02\x027\u0147\x03\x02\x02\x029\u014E\x03\x02\x02\x02;\u0153\x03" +
		"\x02\x02\x02=\u0155\x03\x02\x02\x02?\u0157\x03\x02\x02\x02A\u0159\x03" +
		"\x02\x02\x02C\u015B\x03\x02\x02\x02E\u015E\x03\x02\x02\x02G\u0161\x03" +
		"\x02\x02\x02I\u0163\x03\x02\x02\x02K\u0165\x03\x02\x02\x02M\u0168\x03" +
		"\x02\x02\x02O\u016B\x03\x02\x02\x02Q\u016E\x03\x02\x02\x02S\u0171\x03" +
		"\x02\x02\x02U\u0174\x03\x02\x02\x02W\u0177\x03\x02\x02\x02Y\u017A\x03" +
		"\x02\x02\x02[\u017D\x03\x02\x02\x02]\u017F\x03\x02\x02\x02_\u0181\x03" +
		"\x02\x02\x02a\u0183\x03\x02\x02\x02c\u0185\x03\x02\x02\x02e\u0187\x03" +
		"\x02\x02\x02g\u0189\x03\x02\x02\x02i\u018B\x03\x02\x02\x02k\u018E\x03" +
		"\x02\x02\x02m\u0196\x03\x02\x02\x02o\u019D\x03\x02\x02\x02q\u01A5\x03" +
		"\x02\x02\x02s\u01AA\x03\x02\x02\x02u\u01AE\x03\x02\x02\x02w\u01BD\x03" +
		"\x02\x02\x02y\u01CA\x03\x02\x02\x02{\u01D5\x03\x02\x02\x02}\u01DE\x03" +
		"\x02\x02\x02\x7F\u01E0\x03\x02\x02\x02\x81\x82\x07k\x02\x02\x82\x83\x07" +
		"h\x02\x02\x83\x04\x03\x02\x02\x02\x84\x85\x07g\x02\x02\x85\x86\x07n\x02" +
		"\x02\x86\x87\x07k\x02\x02\x87\x88\x07h\x02\x02\x88\x06\x03\x02\x02\x02" +
		"\x89\x8A\x07g\x02\x02\x8A\x8B\x07n\x02\x02\x8B\x8C\x07u\x02\x02\x8C\x8D" +
		"\x07g\x02\x02\x8D\b\x03\x02\x02\x02\x8E\x8F\x07g\x02\x02\x8F\x90\x07p" +
		"\x02\x02\x90\x91\x07f\x02\x02\x91\x92\x07k\x02\x02\x92\x93\x07h\x02\x02" +
		"\x93\n\x03\x02\x02\x02\x94\x95\x07g\x02\x02\x95\x96\x07p\x02\x02\x96\x97" +
		"\x07f\x02\x02\x97\x98\x07y\x02\x02\x98\x99\x07k\x02\x02\x99\x9A\x07v\x02" +
		"\x02\x9A\x9B\x07j\x02\x02\x9B\f\x03\x02\x02\x02\x9C\x9D\x07f\x02\x02\x9D" +
		"\x9E\x07g\x02\x02\x9E\x9F\x07h\x02\x02\x9F\x0E\x03\x02\x02\x02\xA0\xA1" +
		"\x07g\x02\x02\xA1\xA2\x07p\x02\x02\xA2\xA3\x07f\x02\x02\xA3\xA4\x07h\x02" +
		"\x02\xA4\x10\x03\x02\x02\x02\xA5\xA6\x07g\x02\x02\xA6\xA7\x07p\x02\x02" +
		"\xA7\xA8\x07f\x02\x02\xA8\xA9\x07f\x02\x02\xA9\xAA\x07g\x02\x02\xAA\xAB" +
		"\x07h\x02\x02\xAB\x12\x03\x02\x02\x02\xAC\xAD\x07g\x02\x02\xAD\xAE\x07" +
		"p\x02\x02\xAE\xAF\x07f\x02\x02\xAF\xB0\x07h\x02\x02\xB0\xB1\x07w\x02\x02" +
		"\xB1\xB2\x07p\x02\x02\xB2\xB3\x07e\x02\x02\xB3\xB4\x07v\x02\x02\xB4\xB5" +
		"\x07k\x02\x02\xB5\xB6\x07q\x02\x02\xB6\xB7\x07p\x02\x02\xB7\x14\x03\x02" +
		"\x02\x02\xB8\xB9\x07t\x02\x02\xB9\xBA\x07c\x02\x02\xBA\xBB\x07p\x02\x02" +
		"\xBB\xBC\x07f\x02\x02\xBC\xBD\x07q\x02\x02\xBD\xBE\x07o\x02\x02\xBE\x16" +
		"\x03\x02\x02\x02\xBF\xC0\x07g\x02\x02\xC0\xC1\x07n\x02\x02\xC1\xC2\x07" +
		"u\x02\x02\xC2\xC3\x07g\x02\x02\xC3\xC4\x07t\x02\x02\xC4\x18\x03\x02\x02" +
		"\x02\xC5\xC6\x07g\x02\x02\xC6\xC7\x07n\x02\x02\xC7\xC8\x07u\x02\x02\xC8" +
		"\xC9\x07g\x02\x02\xC9\xCA\x07T\x02\x02\xCA\xCB\x07c\x02\x02\xCB\xCC\x07" +
		"p\x02\x02\xCC\xCD\x07f\x02\x02\xCD\xCE\x07q\x02\x02\xCE\xCF\x07o\x02\x02" +
		"\xCF\x1A\x03\x02\x02\x02\xD0\xD1\x07g\x02\x02\xD1\xD2\x07p\x02\x02\xD2" +
		"\xD3\x07f\x02\x02\xD3\xD4\x07t\x02\x02\xD4\x1C\x03\x02\x02\x02\xD5\xD6" +
		"\x07g\x02\x02\xD6\xD7\x07p\x02\x02\xD7\xD8\x07f\x02\x02\xD8\xD9\x07t\x02" +
		"\x02\xD9\xDA\x07c\x02\x02\xDA\xDB\x07p\x02\x02\xDB\xDC\x07f\x02\x02\xDC" +
		"\xDD\x07q\x02\x02\xDD\xDE\x07o\x02\x02\xDE\x1E\x03\x02\x02\x02\xDF\xE0" +
		"\x07g\x02\x02\xE0\xE1\x07p\x02\x02\xE1\xE2\x07f\x02\x02\xE2\xE3\x07t\x02" +
		"\x02\xE3\xE4\x07y\x02\x02\xE4\xE5\x07k\x02\x02\xE5\xE6\x07v\x02\x02\xE6" +
		"\xE7\x07j\x02\x02\xE7 \x03\x02\x02\x02\xE8\xE9\x07g\x02\x02\xE9\xEA\x07" +
		"p\x02\x02\xEA\xEB\x07f\x02\x02\xEB\xEC\x07t\x02\x02\xEC\xED\x07c\x02\x02" +
		"\xED\xEE\x07p\x02\x02\xEE\xEF\x07f\x02\x02\xEF\xF0\x07q\x02\x02\xF0\xF1" +
		"\x07o\x02\x02\xF1\xF2\x07y\x02\x02\xF2\xF3\x07k\x02\x02\xF3\xF4\x07v\x02" +
		"\x02\xF4\xF5\x07j\x02\x02\xF5\"\x03\x02\x02\x02\xF6\xF7\x07t\x02\x02\xF7" +
		"\xF8\x07g\x02\x02\xF8\xF9\x07u\x02\x02\xF9\xFA\x07g\x02\x02\xFA\xFB\x07" +
		"v\x02\x02\xFB$\x03\x02\x02\x02\xFC\xFD\x07t\x02\x02\xFD\xFE\x07g\x02\x02" +
		"\xFE\xFF\x07r\x02\x02\xFF\u0100\x07g\x02\x02\u0100\u0101\x07c\x02\x02" +
		"\u0101\u0102\x07v\x02\x02\u0102&\x03\x02\x02\x02\u0103\u0104\x07t\x02" +
		"\x02\u0104\u0105\x07g\x02\x02\u0105\u0106\x07v\x02\x02\u0106\u0107\x07" +
		"w\x02\x02\u0107\u0108\x07t\x02\x02\u0108\u0109\x07p\x02\x02\u0109(\x03" +
		"\x02\x02\x02\u010A\u010B\x07e\x02\x02\u010B\u010C\x07q\x02\x02\u010C\u010D" +
		"\x07p\x02\x02\u010D\u010E\x07e\x02\x02\u010E\u010F\x07n\x02\x02\u010F" +
		"\u0110\x07w\x02\x02\u0110\u0111\x07f\x02\x02\u0111\u0112\x07g\x02\x02" +
		"\u0112*\x03\x02\x02\x02\u0113\u0114\x07k\x02\x02\u0114\u0115\x07o\x02" +
		"\x02\u0115\u0116\x07r\x02\x02\u0116\u0117\x07q\x02\x02\u0117\u0118\x07" +
		"t\x02\x02\u0118\u0119\x07v\x02\x02\u0119\u011A\x07n\x02\x02\u011A\u011B" +
		"\x07k\x02\x02\u011B\u011C\x07d\x02\x02\u011C\u011D\x07t\x02\x02\u011D" +
		"\u011E\x07c\x02\x02\u011E\u011F\x07t\x02\x02\u011F\u0120\x07{\x02\x02" +
		"\u0120,\x03\x02\x02\x02\u0121\u0122\x07k\x02\x02\u0122\u0123\x07o\x02" +
		"\x02\u0123\u0124\x07r\x02\x02\u0124\u0125\x07q\x02\x02\u0125\u0126\x07" +
		"t\x02\x02\u0126\u0127\x07v\x02\x02\u0127\u0128\x07c\x02\x02\u0128\u0129" +
		"\x07e\x02\x02\u0129\u012A\x07v\x02\x02\u012A\u012B\x07k\x02\x02\u012B" +
		"\u012C\x07q\x02\x02\u012C\u012D\x07p\x02\x02\u012D\u012E\x07u\x02\x02" +
		"\u012E.\x03\x02\x02\x02\u012F\u0130\x07c\x02\x02\u0130\u0131\x07u\x02" +
		"\x02\u01310\x03\x02\x02\x02\u0132\u0133\x07w\x02\x02\u0133\u0134\x07p" +
		"\x02\x02\u0134\u0135\x07u\x02\x02\u0135\u0136\x07c\x02\x02\u0136\u0137" +
		"\x07h\x02\x02\u0137\u0138\x07g\x02\x02\u01382\x03\x02\x02\x02\u0139\u013A" +
		"\x07u\x02\x02\u013A\u013B\x07g\x02\x02\u013B\u013C\x07n\x02\x02\u013C" +
		"\u013D\x07h\x02\x02\u013D4\x03\x02\x02\x02\u013E\u013F\x07h\x02\x02\u013F" +
		"\u0140\x07w\x02\x02\u0140\u0141\x07p\x02\x02\u0141\u0142\x07e\x02\x02" +
		"\u0142\u0143\x07v\x02\x02\u0143\u0144\x07k\x02\x02\u0144\u0145\x07q\x02" +
		"\x02\u0145\u0146\x07p\x02\x02\u01466\x03\x02\x02\x02\u0147\u0148\x07c" +
		"\x02\x02\u0148\u0149\x07e\x02\x02\u0149\u014A\x07v\x02\x02\u014A\u014B" +
		"\x07k\x02\x02\u014B\u014C\x07q\x02\x02\u014C\u014D\x07p\x02\x02\u014D" +
		"8\x03\x02\x02\x02\u014E\u014F\x07e\x02\x02\u014F\u0150\x07c\x02\x02\u0150" +
		"\u0151\x07n\x02\x02\u0151\u0152\x07n\x02\x02\u0152:\x03\x02\x02\x02\u0153" +
		"\u0154\x07]\x02\x02\u0154<\x03\x02\x02\x02\u0155\u0156\x07_\x02\x02\u0156" +
		">\x03\x02\x02\x02\u0157\u0158\x07*\x02\x02\u0158@\x03\x02\x02\x02\u0159" +
		"\u015A\x07+\x02\x02\u015AB\x03\x02\x02\x02\u015B\u015C\x07?\x02\x02\u015C" +
		"\u015D\x07?\x02\x02\u015DD\x03\x02\x02\x02\u015E\u015F\x07#\x02\x02\u015F" +
		"\u0160\x07?\x02\x02\u0160F\x03\x02\x02\x02\u0161\u0162\x07@\x02\x02\u0162" +
		"H\x03\x02\x02\x02\u0163\u0164\x07>\x02\x02\u0164J\x03\x02\x02\x02\u0165" +
		"\u0166\x07@\x02\x02\u0166\u0167\x07?\x02\x02\u0167L\x03\x02\x02\x02\u0168" +
		"\u0169\x07>\x02\x02\u0169\u016A\x07?\x02\x02\u016AN\x03\x02\x02\x02\u016B" +
		"\u016C\x07-\x02\x02\u016C\u016D\x07-\x02\x02\u016DP\x03\x02\x02\x02\u016E" +
		"\u016F\x07~\x02\x02\u016F\u0170\x07/\x02\x02\u0170R\x03\x02\x02\x02\u0171" +
		"\u0172\x07@\x02\x02\u0172\u0173\x07@\x02\x02\u0173T\x03\x02\x02\x02\u0174" +
		"\u0175\x07/\x02\x02\u0175\u0176\x07@\x02\x02\u0176V\x03\x02\x02\x02\u0177" +
		"\u0178\x07?\x02\x02\u0178\u0179\x07@\x02\x02\u0179X\x03\x02\x02\x02\u017A" +
		"\u017B\x07,\x02\x02\u017B\u017C\x07(\x02\x02\u017CZ\x03\x02\x02\x02\u017D" +
		"\u017E\x07B\x02\x02\u017E\\\x03\x02\x02\x02\u017F\u0180\x07<\x02\x02\u0180" +
		"^\x03\x02\x02\x02\u0181\u0182\x07.\x02\x02\u0182`\x03\x02\x02\x02\u0183" +
		"\u0184\x070\x02\x02\u0184b\x03\x02\x02\x02\u0185\u0186\x07%\x02\x02\u0186" +
		"d\x03\x02\x02\x02\u0187\u0188\x07(\x02\x02\u0188f\x03\x02\x02\x02\u0189" +
		"\u018A\x07$\x02\x02\u018Ah\x03\x02\x02\x02\u018B\u018C\x07&\x02\x02\u018C" +
		"\u018D\t\x02\x02\x02\u018Dj\x03\x02\x02\x02\u018E\u0192\t\x03\x02\x02" +
		"\u018F\u0191\t\x04\x02\x02\u0190\u018F\x03\x02\x02\x02\u0191\u0194\x03" +
		"\x02\x02\x02\u0192\u0190\x03\x02\x02\x02\u0192\u0193\x03\x02\x02\x02\u0193" +
		"l\x03\x02\x02\x02\u0194\u0192\x03\x02\x02\x02\u0195\u0197\x07/\x02\x02" +
		"\u0196\u0195\x03\x02\x02\x02\u0196\u0197\x03\x02\x02\x02\u0197\u0199\x03" +
		"\x02\x02\x02\u0198\u019A\t\x05\x02\x02\u0199\u0198\x03\x02\x02\x02\u019A" +
		"\u019B\x03\x02\x02\x02\u019B\u0199\x03\x02\x02\x02\u019B\u019C\x03\x02" +
		"\x02\x02\u019Cn\x03\x02\x02\x02\u019D\u019E\x072\x02\x02\u019E\u01A0\t" +
		"\x06\x02\x02\u019F\u01A1\t\x07\x02\x02\u01A0\u019F\x03\x02\x02\x02\u01A1" +
		"\u01A2\x03\x02\x02\x02\u01A2\u01A0\x03\x02\x02\x02\u01A2\u01A3\x03\x02" +
		"\x02\x02\u01A3p\x03\x02\x02\x02\u01A4\u01A6\t\x07\x02\x02\u01A5\u01A4" +
		"\x03\x02\x02\x02\u01A6\u01A7\x03\x02\x02\x02\u01A7\u01A5\x03\x02\x02\x02" +
		"\u01A7\u01A8\x03\x02\x02\x02\u01A8r\x03\x02\x02\x02\u01A9\u01AB\t\b\x02" +
		"\x02\u01AA\u01A9\x03\x02\x02\x02\u01AB\u01AC\x03\x02\x02\x02\u01AC\u01AA" +
		"\x03\x02\x02\x02\u01AC\u01AD\x03\x02\x02\x02\u01ADt\x03\x02\x02\x02\u01AE" +
		"\u01AF\x07h\x02\x02\u01AF\u01B0\x07w\x02\x02\u01B0\u01B1\x07p\x02\x02" +
		"\u01B1\u01B2\x07e\x02\x02\u01B2\u01B3\x07v\x02\x02\u01B3\u01B4\x07k\x02" +
		"\x02\u01B4\u01B5\x07q\x02\x02\u01B5\u01B6\x07p\x02\x02\u01B6\u01B7\x07" +
		"%\x02\x02\u01B7\u01B9\x03\x02\x02\x02\u01B8\u01BA\t\x07\x02\x02\u01B9" +
		"\u01B8\x03\x02\x02\x02\u01BA\u01BB\x03\x02\x02\x02\u01BB\u01B9\x03\x02" +
		"\x02\x02\u01BB\u01BC\x03\x02\x02\x02\u01BCv\x03\x02\x02\x02\u01BD\u01BE" +
		"\x07c\x02\x02\u01BE\u01BF\x07e\x02\x02\u01BF\u01C0\x07v\x02\x02\u01C0" +
		"\u01C1\x07k\x02\x02\u01C1\u01C2\x07q\x02\x02\u01C2\u01C3\x07p\x02\x02" +
		"\u01C3\u01C4\x07%\x02\x02\u01C4\u01C6\x03\x02\x02\x02\u01C5\u01C7\t\x05" +
		"\x02\x02\u01C6\u01C5\x03\x02\x02\x02\u01C7\u01C8\x03\x02\x02\x02\u01C8" +
		"\u01C6\x03\x02\x02\x02\u01C8\u01C9\x03\x02\x02\x02\u01C9x\x03\x02\x02" +
		"\x02\u01CA\u01CB\x07e\x02\x02\u01CB\u01CC\x07c\x02\x02\u01CC\u01CD\x07" +
		"n\x02\x02\u01CD\u01CE\x07n\x02\x02\u01CE\u01CF\x07%\x02\x02\u01CF\u01D1" +
		"\x03\x02\x02\x02\u01D0\u01D2\t\x05\x02\x02\u01D1\u01D0\x03\x02\x02\x02" +
		"\u01D2\u01D3\x03\x02\x02\x02\u01D3\u01D1\x03\x02\x02\x02\u01D3\u01D4\x03" +
		"\x02\x02\x02\u01D4z\x03\x02\x02\x02\u01D5\u01D7\x07%\x02\x02\u01D6\u01D8" +
		"\t\x05\x02\x02\u01D7\u01D6\x03\x02\x02\x02\u01D8\u01D9\x03\x02\x02\x02" +
		"\u01D9\u01D7\x03\x02\x02\x02\u01D9\u01DA\x03\x02\x02\x02\u01DA|\x03\x02" +
		"\x02\x02\u01DB\u01DF\t\t\x02\x02\u01DC\u01DD\x07\x0F\x02\x02\u01DD\u01DF" +
		"\x07\f\x02\x02\u01DE\u01DB\x03\x02\x02\x02\u01DE\u01DC\x03\x02\x02\x02" +
		"\u01DF~\x03\x02\x02\x02\u01E0\u01E1\t\n\x02\x02\u01E1\u01E2\x03\x02\x02" +
		"\x02\u01E2\u01E3\b@\x02\x02\u01E3\x80\x03\x02\x02\x02\x0E\x02\u0192\u0196" +
		"\u019B\u01A2\u01A7\u01AC\u01BB\u01C8\u01D3\u01D9\u01DE\x03\x02\x03\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!LeviathonLexer.__ATN) {
			LeviathonLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(LeviathonLexer._serializedATN));
		}

		return LeviathonLexer.__ATN;
	}

}

