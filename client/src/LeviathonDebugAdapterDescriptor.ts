import * as vsdbg from '@vscode/debugadapter';
import * as vscode from 'vscode';

export class LeviathonDebugAdapterDescriptorFactory implements vscode.DebugAdapterDescriptorFactory {
    createDebugAdapterDescriptor(session: vscode.DebugSession, executable: vscode.DebugAdapterExecutable | undefined): vscode.ProviderResult<vscode.DebugAdapterDescriptor> {
        vscode.window.showInformationMessage('Attaching to debugger...');
        return new vscode.DebugAdapterServer(5060, '127.0.0.1');
    }

    dispose() {
        // nothing to dispose
    }
}
