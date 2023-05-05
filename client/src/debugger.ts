import * as Net from 'net';
import * as vscode from 'vscode';

import * as debug from '@vscode/debugadapter';

export function initializeDebugger(context: vscode.ExtensionContext) {
    // const provider = new LeviathonDebugAdapterDescriptorFactory();
    // context.subscriptions.push(vscode.debug.registerDebugAdapterDescriptorFactory('leviathon', provider));
    // context.subscriptions.push(provider);
    console.log('debugger initialized');
    vscode.window.showInformationMessage('debugger initialized');
}

// vscode.window.showInformationMessage('Attaching to debugger...');

// const client = Net.createConnection(5060, "127.0.0.1", () => {
//     vscode.window.showInformationMessage('connected to server!');
//     console.log('connected to server!');
// });

// client.on('data', (data) => {
//     vscode.window.showInformationMessage(data.toString());
//     console.log(data.toString());
// });

// client.write('hello from client');

