## Description

**This extension adds syntax highlighting for the [Leviathon language](https://github.com/AsteriskAmpersand/Leviathon).**
![](https://raw.githubusercontent.com/AsteriskAmpersand/Leviathon/main/Leviathon.fw.png)

## Features
- Syntax Highlighting for .nack files
- Syntax Highlighting for .fand files
- Code completion for .nack files
- Error checking for .nack and .fand files
- Go to definition

## Requirements
none

## Changelog

### v0.0.3
- Bugfixes:
  - Register operations not highlighted
  - imports incorrectly highlighted
- Added support for .fand files (project files)

### v0.0.4
- Update for `chance` -> `random` keyword and all associated keywords.
- Better whitespace independence
  
### v1.0.0
- Initial release of the language server
  - Code completion
  - Error checking
  - Go to definition
- Improved syntax highlighting for `.nack` and `.fand` files.

### v1.0.1
- Couple fixes for .fand files

### v1.1.0
- Various crash fixes
- Improved autocomplete
- Dependency bundling (results in faster install and smaller extension size)
