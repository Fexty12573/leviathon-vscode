
grammar Fexty;

file: USE_HEX? (LINESKIP | f_extension LINESKIP)* EOF;

f_extension
	: fexty_rule LINESKIP?
	| fexty_inline_rule LINESKIP
	;

identifier: id=ID;

fexty_rule: id=CONSTANT LEFT_BRACE fexty_rule_body* RIGHT_BRACE LINESKIP;
fexty_rule_body: (main_function_component | parameter_clause | otherwise_clause) LINESKIP;

function_component: name=identifier (LEFT_PAREN function_params? RIGHT_PAREN)? (DOT function_component)*;

// Allows '(rank.MR)' for example, i.e. function name is optional
function_finalizer: (name=identifier)? (LEFT_PAREN function_params? RIGHT_PAREN)? (DOT function_finalizer)*;

// Example: >quest_id().isRank
main_function_component: RIGHT_ARROW function_component;

// Example: B4: targetEnemy().is_stunned()
fexty_inline_rule: id=CONSTANT COLON function_component;

// Example: parameter1 == 0: quest_id.geq(parameter2)
parameter_clause: defined_parameter EQ CONSTANT (COMMA defined_parameter EQ CONSTANT)? COLON function_finalizer;
otherwise_clause: OTHERWISE COLON (function_finalizer | PASS);

function_params: arg1=parameter (COMMA arg2=parameter)*;

// Binds a parameter to an enum. Example: {em_enum:parameter1}
binding_parameter: LEFT_BRACE enum_name=identifier COLON param=PARAMETER12 RIGHT_BRACE;
// Specifies a custom enum value. Example: rank.MR
enum_parameter: identifier DOT identifier;
// Specifies one of the two predefined parameters. Example: parameter1
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
ID: [A-Za-z][A-Za-z0-9]*;

LINESKIP: ('\r\n'|'\n');
WS: (' '|'\t') -> skip;
