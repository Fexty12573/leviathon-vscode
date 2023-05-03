import * as Net from 'net';
import * as vscode from 'vscode';


Net.connect(5060, "localhost", () => {
    vscode.window.showInformationMessage("Debugger connected");
});
