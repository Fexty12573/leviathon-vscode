
grammar Fexty;

file: USE_HEX? (LINESKIP | f_extension LINESKIP)* EOF;

f_extension
	: fexty_rule LINESKIP
	| fexty_inline_rule LINESKIP
	;


fexty_rule
	: id=CONSTANT LEFT_BRACE LINESKIP
	(fexty_rule_predefined_function_name LINESKIP)?
	(fexty_rule_parameter_clause LINESKIP)*
	(fexty_rule_otherwise_clause LINESKIP)?
	;


fexty_inline_rule: id=CONSTANT COLON inline_function;
inline_function: name=ID LEFT_PAREN (arg=PARAMETER (COMMA arg=PARAMETER)?)? RIGHT_PAREN (DOT inline_function)*;

fexty_rule_body: (RIGHT_ARROW);

fexty_rule_predefined_function_name: RIGHT_ARROW fexty_rule_function_declarator LINESKIP;
fexty_rule_function_declarator: name=ID (LEFT_PAREN param_data=ANYTHING* RIGHT_PAREN DOT fexty_rule_function_declarator*)?;
fexty_rule_parameter_clause: (PARAMETER_1 | PARAMETER_2) EQ CONSTANT (COMMA (PARAMETER_1 | PARAMETER_2) EQ CONSTANT)? COLON fexty_rule_function_declarator;
fexty_rule_otherwise_clause: OTHERWISE COLON (fexty_rule_function_declarator | PASS);

// Operators
LEFT_BRACE: '{';
RIGHT_BRACE: '}';
LEFT_PAREN: '(';
RIGHT_PAREN: ')';
COLON: ':';
DOT: '.';
EQ: '==';

CONSTANT: ([0-9]+|HEX_ID);
HEX_ID: ('0'[Xx])?[a-fA-F0-9]+;
ID: [A-Za-z][A-Za-z0-9]*;
FUNC_ID: [0-9A-Za-z];
PARAMETER: (PARAMETER_1 | PARAMETER_2 | ENUM_PARAMETER);
ENUM_PARAMETER: LEFT_BRACE (ST_ENUM | EM_ENUM) COLON (PARAMETER_1 | PARAMETER_2) RIGHT_BRACE;

// Keywords
END_RANDOM: 'endRandom';
FLOW_CONTROL: 'flowControl';
BRANCH_CONTROL: 'branchingControl';
UNKN1: 'unkn1';
UNKN2: 'unkn2';
ABC: 'functionType';
PARAMETER_1: 'parameter1';
UNKN3: 'unkn3';
UNKN4: 'unkn4';
UNKN5: 'unkn5';
UNKN6: 'unkn6';
PARAMETER_2: 'parameter2';
NODE_ENDING_DATA: 'nodeEndingData';
EXT_REF_THK_ID: 'extRefThkID';
EXT_REF_NODE_ID: 'extRefNodeID';
LOCAL_REF_NODE_ID: 'localRefNodeID';
UNKN7: 'unkn7';
UNKN8: 'unkn8';
UNKN9: 'unkn9';
UNKN10: 'unkn10';
UNKN11: 'unkn11';
ACTION_ID: 'actionID';
ACTION_UNK0: 'actionUnkn0';
ACTION_UNK1: 'actionUnkn1';
ACTION_UNK2: 'actionUnkn2';
UNKN12: 'unkn12';
ACTION_UNK3: 'actionUnkn3';
ACTION_UNK4: 'actionUnkn4';
UNK_EXTRA0: 'unknExtra0';
UNK_EXTRA1: 'unknExtra1';
UNK_EXTRA2: 'unknExtra2';
ST_ENUM: 'st_enum';
EM_ENUM: 'em_enum';
OTHERWISE: 'otherwise';
PASS: 'pass';
OTHERWISE_PASS: OTHERWISE PASS;
RIGHT_ARROW: '>';
COMMA: ',';
ANYTHING: [^)];

USE_HEX: 'Use Hex' LINESKIP;

LINESKIP: ('\r\n'|'\n');
WS: (' '|'\t') -> skip;
