grammar Leviathon;

program: (importany | LINESKIP)* (node | LINESKIP)* EOF;

importany
	: import_library
	| import_actions
	;

identifier: id=ID;
import_name: name=identifier;
node_name: name=identifier;
action_name: name=identifier;
monster_name: name=identifier;
function_name: name=identifier;
meta_name: name=identifier;
import_alias: name=identifier;
monster_alias: name=identifier;

import_library: IMPORTLIB (import_name | import_path) AS alias=ID LINESKIP;
import_actions: IMPORTACT monster_name AS alias=identifier LINESKIP;


node: node_declaration segment* end_node;

node_declaration: DEF node_names node_thk_id? node_index? LINESKIP;
end_node: (ENDF | ENDDEF | ENDFUNCTION) meta_statement? LINESKIP;

segment
	: if_statement segment* (elif_statement segment*)* (else_statement segment*)? (endif_statement | endw_statement)						# segtype_if
	| random_statement segment* (elser_statement segment*)* (endr_statement | endrw_statement)												# segtype_random
	| nop_statement																															# segtype_nop
	| control_statement																														# segtype_control
	| register_statement																													# segtype_register
	| (SELF DOT function_call | raw_function_call) action_statement? node_call_statement? directive_statement? meta_statement? LINESKIP		# segtype_function
	| action_statement node_call_statement? directive_statement? meta_statement? LINESKIP													# segtype_action
	| node_call_statement directive_statement? meta_statement? LINESKIP																		# segtype_node
	| directive_statement meta_statement? LINESKIP																							# segtype_directive
	;

// Node calls
node_call_statement: (node_call | scoped_node_call | raw_node_call | scoped_raw_node_call);
node_call: CALL_OP node_name;
scoped_node_call: CALL_OP import_alias DOT node_name;
raw_node_call: CALL_OP call=RAW_CALL;
scoped_raw_node_call: CALL_OP import_alias DOT HASH node_id=NUMBER;

// Action calls
action_statement: (action_call | raw_action_call);
action_call: ACTION_OP monster_alias DOT action_name LEFT_PAREN params? RIGHT_PAREN;
raw_action_call: ACTION_OP action=RAW_ACTION LEFT_PAREN params? RIGHT_PAREN;

// Function calls
function_call: name=ID (LEFT_PAREN params? RIGHT_PAREN)? (DOT function_call)*;
raw_function_call: func=RAW_FUNCTION LEFT_PAREN params? RIGHT_PAREN;

directive_statement: DIRECTIVE_OP (RETURN | RESET | REPEAT | CONCLUDE);
meta_statement: META_OP meta_value (COMMA meta_value)*;

node_names: name=node_name (ALIAS_OP node_names)*;
node_thk_id: COLON id=(NUMBER | HEX_NUMBER);
node_index: META_OP idx=(NUMBER | HEX_NUMBER);

meta_value: meta_name COLON (NUMBER | HEX_NUMBER);
import_path: QUOTE path=QUOTED_PATH QUOTE;

params: (value=NUMBER | value=HEX_NUMBER | enum_name=ID (DOT value=ID)?) (COMMA params)*;

if_statement: IF ((SELF DOT func=function_call | raw_func=raw_function_call) | cond=register_condition) action_statement? node_call_statement? directive_statement? meta_statement? LINESKIP;
else_statement: ELSE (SELF DOT func=function_call | raw_func=raw_function_call)? action_statement? node_call_statement? directive_statement? meta_statement? LINESKIP;
elif_statement: ELIF ((SELF DOT func=function_call | raw_func=raw_function_call) | cond=register_condition) action_statement? node_call_statement? directive_statement? meta_statement? LINESKIP;
endif_statement: ENDIF LINESKIP;
endw_statement: ENDW action_statement? node_call_statement? directive_statement? meta_statement? LINESKIP;
random_statement: RANDOM LEFT_PAREN chance=(NUMBER | HEX_NUMBER) RIGHT_PAREN action_statement? node_call_statement? directive_statement? meta_statement? LINESKIP;
elser_statement: (ELSER | ELSERANDOM) LEFT_PAREN chance=(NUMBER | HEX_NUMBER) RIGHT_PAREN action_statement? node_call_statement? directive_statement? meta_statement? LINESKIP;
endr_statement: (ENDR | ENDRANDOM) LINESKIP;
endrw_statement: (ENDRW | ENDRANDOMW) action_statement? node_call_statement? directive_statement? meta_statement? LINESKIP;
nop_statement: USELESS_OP LINESKIP;
control_statement: (RETURN | RESET | REPEAT | CONCLUDE) LINESKIP;
register_statement: LEFT_BRACKET operand=(REGISTER | ID) op=(INCREMENT | RESET_VAL) RIGHT_BRACKET action_statement? node_call_statement? directive_statement? meta_statement? LINESKIP;

register_condition: LEFT_BRACKET operand1=(REGISTER | ID)
	op=( EQ
	| NE
	| GT
	| LT
	| GEQ
	| LEQ
	) operand2=(NUMBER | HEX_NUMBER) RIGHT_BRACKET
	;


//// Keywords
// If/else
IF: 'if';
ELIF: 'elif';
ELSE: 'else';
ENDIF: 'endif';
ENDW: 'endwith';

// Node definition
DEF: 'def';
ENDF: 'endf';
ENDDEF: 'enddef';
ENDFUNCTION: 'endfunction';

// Random
RANDOM: 'random';
ELSER: 'elser';
ELSERANDOM: 'elseRandom';
ENDR: 'endr';
ENDRANDOM: 'endrandom';
ENDRW: 'endrwith';
ENDRANDOMW: 'endrandomwith';

// Directives
RESET: 'reset';
REPEAT: 'repeat';
RETURN: 'return';
CONCLUDE: 'conclude';

IMPORTLIB: 'importlibrary';
IMPORTACT: 'importactions';
AS: 'as';
UNSAFE: 'unsafe';
SELF: 'self';
FUNCTION: 'function';
ACTION: 'action';
CALL: 'call';

// Operators
LEFT_BRACKET: '[';
RIGHT_BRACKET: ']';
LEFT_PAREN: '(';
RIGHT_PAREN: ')';
EQ: '==';
NE: '!=';
GT: '>';
LT: '<';
GEQ: '>=';
LEQ: '<=';
INCREMENT: '++';
RESET_VAL: '|-';
CALL_OP: '>>';
ACTION_OP: '->';
DIRECTIVE_OP: '=>';
USELESS_OP: '*&';
META_OP: '@';
COLON: ':';
COMMA: ',';
DOT: '.';
HASH: '#';
ALIAS_OP: '&';
QUOTE: '"';

REGISTER: '$'[A-T];
ID: [a-zA-Z_][a-zA-Z'_0-9]*;
NUMBER: ('-')?[0-9]+;
HEX_NUMBER: '0'[Xx][0-9a-fA-F]+;
HEX_NO_PREFIX: [0-9a-fA-F]+;
QUOTED_PATH: [^"]+;

RAW_FUNCTION: 'function#'[0-9a-fA-F]+;
RAW_ACTION: 'action#'[0-9]+;
RAW_CALL: 'call#'[0-9]+;
SCOPED_RAW_CALL: '#'[0-9]+;

LINESKIP: (';'|'\n'|'\r\n');
WS: [ \t] -> channel(HIDDEN);
