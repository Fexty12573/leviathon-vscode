/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

import * as cp from 'child_process';
import { Console } from 'console';
import * as net from 'net';
import * as path from 'path';
import { cpuUsage } from 'process';
import { workspace, ExtensionContext, ExtensionMode } from 'vscode';

import {
	Executable,
	LanguageClient,
	LanguageClientOptions,
	ServerOptions,
	StreamInfo,
	TransportKind
} from 'vscode-languageclient/node';

let client: LanguageClient;

export function activate(context: ExtensionContext) {
	const serverPath = context.asAbsolutePath(path.join('server', 'out', 'server.js'));
	console.log(serverPath);

	const inDev = context.extensionMode === ExtensionMode.Development;

	const serverOptions: ServerOptions = {
		module: serverPath,
		transport: TransportKind.ipc,
		options: inDev ? { execArgv: ['--nolazy', '--inspect=6009'] } : undefined
	};

	// Options to control the language client
	const clientOptions: LanguageClientOptions = {
		documentSelector: [{ scheme: 'file', language: 'leviathon' }, { scheme: 'file', language: 'thkl' }, { scheme: 'file', language: 'fexty' }],
		synchronize: {
			fileEvents: workspace.createFileSystemWatcher('**/**')
		}
	};
	
	// Create the language client and start the client.
	client = new LanguageClient(
		'LeviathonServer',
		'Leviathon Server',
		serverOptions,
		clientOptions
	);

	
	// Start the client. This will also launch the server
	client.start();
}

export function deactivate(): Thenable<void> | undefined {
	if (!client) {
		return undefined;
	}
	return client.stop();
}
