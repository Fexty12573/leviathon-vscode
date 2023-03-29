parser grammar FandParser;

options { tokenVocab=FandLexer; }

identifier: id=ID;
register_name: name=identifier;
thk_name: name=identifier;

hex_number_no_prefix: (ID | HEX_NUMBER | NUMBER);
at_path: AT path;
through_path: THROUGH path;
is_monster: IS monster=ID;
register_declaration: REGISTER register_name (AS register=REGISTER_IDENTIFIER)?;
thk_alias: thk_name EQUALS file=path (META_OP meta=hex_number_no_prefix)?;
has_entries: HAS amount=NUMBER ENTRIES?;
path: PATH_CHARS;
empty_line: ;

fand_line: (at_path | through_path | is_monster | register_declaration | thk_alias | has_entries | empty_line) LINESKIP;

project: fand_line*;

