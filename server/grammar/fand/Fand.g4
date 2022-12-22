grammar Fand;

hex_number_no_prefix: (ID | HEX_NUMBER | NUMBER);
at_path: AT realpath=path LINESKIP;
through_path: THROUGH path LINESKIP;
is_monster: IS monster=ID LINESKIP;
register_declaration: REGISTER name=ID (AS register_name=REGISTER_IDENTIFIER)? LINESKIP;
thk_alias: alias=ID EQUALS file=path (META_OP meta=hex_number_no_prefix)? LINESKIP;
has_entries: HAS amount=NUMBER ENTRIES? LINESKIP;
path: ~(META_OP | LINESKIP)+;

fand_line: (at_path | through_path | is_monster | register_declaration | thk_alias | has_entries | LINESKIP);

project: fand_line*;

AT: 'at';
AS: 'as';
THROUGH: 'through';
IS: 'is';
REGISTER: 'Register';
HAS: 'has';
ENTRIES: 'entries';
REGISTER_IDENTIFIER: '$'[A-V];
META_OP: '@';
EQUALS: '=';
DOT: '.';

ID: [a-zA-Z_][a-zA-Z'_0-9]*;
NUMBER: [0-9]+;
HEX_NUMBER: [0-9a-fA-F]+;

LINESKIP: ('\n'|'\r\n');
WS: [ \t] -> channel(HIDDEN);
