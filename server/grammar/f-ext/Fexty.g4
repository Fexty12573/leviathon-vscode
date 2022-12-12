
grammar Fexty;

file: USE_HEX? (LINESKIP | f_extension LINESKIP)* EOF;

f_extension
	: fexty_rule LINESKIP
	| fexty_inline_rule LINESKIP
	;


fexty_rule: id=CONSTANT LEFT_BRACE fexty_rule_body* RIGHT_BRACE LINESKIP;
fexty_rule_body: (chained_function | parameter_clause | otherwise_clause) LINESKIP;

fexty_inline_rule: id=CONSTANT COLON chained_inline_function;
chained_inline_function: name=ID LEFT_PAREN function_params? RIGHT_PAREN (DOT chained_inline_function)*;
chained_function: RIGHT_ARROW name=ID (LEFT_PAREN function_params? RIGHT_PAREN (DOT chained_function)*)?;

fexty_rule_function_declarator: (name=ID)? (LEFT_PAREN function_params? RIGHT_PAREN)? (DOT fexty_rule_function_declarator)*;
parameter_clause: defined_parameter EQ CONSTANT (COMMA defined_parameter EQ CONSTANT)? COLON fexty_rule_function_declarator;
otherwise_clause: OTHERWISE COLON (fexty_rule_function_declarator | PASS);

function_params: arg=parameter (COMMA parameter)*;

binding_parameter: LEFT_BRACE ID COLON PARAMETER12 RIGHT_BRACE;
enum_parameter: ID DOT ID;
defined_parameter: (PARAMETER_1 | PARAMETER_2);

parameter
	: defined_parameter 
	| binding_parameter 
	| enum_parameter
	;

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
PARAMETER12: (PARAMETER_1 | PARAMETER_2);

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

USE_HEX: 'Use Hex' LINESKIP;

LINESKIP: ('\r\n'|'\n');
WS: (' '|'\t') -> skip;