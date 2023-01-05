lexer grammar FandLexer;

AT: 'at' -> pushMode(PATHMODE);
AS: 'as';
THROUGH: 'through' -> pushMode(PATHMODE);
IS: 'is';
REGISTER: 'Register';
HAS: 'has';
ENTRIES: 'entries';
REGISTER_IDENTIFIER: '$'[A-V];
META_OP: '@';
EQUALS: '=' -> pushMode(PATHMODE);
ANY_NON_WHITESPACE: ~[ \t\r\n];

ID: [a-zA-Z_][a-zA-Z'_0-9]*;
NUMBER: [0-9]+;
HEX_NUMBER: [0-9a-fA-F]+;


LINESKIP: ('\n'|'\r\n');
WS: [ \t] -> channel(HIDDEN);

mode PATHMODE;

PATH_CHARS: ~[@\r\n]+ -> popMode;
