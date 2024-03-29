import { CharStreams } from 'antlr4ts';
import { CommonTokenStream } from 'antlr4ts';
import { LeviathonLexer } from './parser/LeviathonLexer';
import { LeviathonParser } from './parser/LeviathonParser';
import { LeviathonVisitorImpl } from './LeviathonVisitorImpl';
import { validateFandFile } from './FandValidator';
import { LeviathonUtility, CompletionType } from './LeviathonUtility';

import { LanguageServer } from './LanguageServer';

import {
	createConnection,
	TextDocuments,
	Diagnostic,
	DiagnosticSeverity,
	ProposedFeatures,
	InitializeParams,
	DidChangeConfigurationNotification,
	CompletionItem,
	CompletionItemKind,
	TextDocumentPositionParams,
	TextDocumentSyncKind,
	InitializeResult,
	HoverParams,
	Hover,
	Location,
	MarkupKind,
	ReferenceParams,
	CompletionParams,
	RenameParams,
	WorkspaceEdit
} from 'vscode-languageserver/node';

import { TextDocument } from 'vscode-languageserver-textdocument';
import { LeviathonValidator } from './LeviationValidator';
import { NackFile } from './NackFile';

const connection = createConnection(ProposedFeatures.all);
const documents: TextDocuments<TextDocument> = new TextDocuments<TextDocument>(TextDocument);

let hasConfigurationCapability = false;
let hasWorkspaceFolderCapability = false;
let hasDiagnosticRelatedInformationCapability = false;

connection.onInitialize((params: InitializeParams) => {
	const capabilities = params.capabilities;
	const folders = params.workspaceFolders ?? [];

	hasConfigurationCapability = !!(
		capabilities.workspace && !!capabilities.workspace.configuration
	);
	hasWorkspaceFolderCapability = !!(
		capabilities.workspace && !!capabilities.workspace.workspaceFolders
	);
	hasDiagnosticRelatedInformationCapability = !!(
		capabilities.textDocument &&
		capabilities.textDocument.publishDiagnostics &&
		capabilities.textDocument.publishDiagnostics.relatedInformation
	);

	const result: InitializeResult = {
		capabilities: {
			textDocumentSync: {
				openClose: true,
				change: TextDocumentSyncKind.Incremental,
				willSave: false,
				willSaveWaitUntil: false,
				save: false
			},
			completionProvider: {
				resolveProvider: true,
				triggerCharacters: [">", "."]
			},
			hoverProvider: true,
			// declarationProvider: true,
			definitionProvider: true,
			referencesProvider: true,
			renameProvider: true
		}
	};
	if (hasWorkspaceFolderCapability) {
		result.capabilities.workspace = {
			workspaceFolders: {
				supported: true
			}
		};
	}

	LanguageServer.INSTANCE = new LanguageServer(folders[0], connection);
	LeviathonValidator.INSTANCE = new LeviathonValidator();
	LeviathonUtility.INSTANCE = new LeviathonUtility();

	return result;
});

connection.onInitialized(() => {
	if (hasConfigurationCapability) {
		connection.client.register(DidChangeConfigurationNotification.type, undefined);
	}
	if (hasWorkspaceFolderCapability) {
		connection.workspace.onDidChangeWorkspaceFolders(_event => {
			connection.console.log('Workspace folder change event received.');
		});
	}
});

interface Settings {
	maxNumberOfProblems: number;
}

const defaultSettings: Settings = { maxNumberOfProblems: 1000 };
const documentSettings: Map<string, Thenable<Settings>> = new Map();

function getDocumentSettings(resource: string): Thenable<Settings> {
	if (!hasConfigurationCapability) {
		return Promise.resolve(defaultSettings);
	}
	let result = documentSettings.get(resource);
	if (!result) {
		result = connection.workspace.getConfiguration({
			scopeUri: resource,
			section: 'leviathonserver'
		});
		documentSettings.set(resource, result);
	}
	return result;
}

documents.onDidOpen(e => {
	LanguageServer.logMessage('onDidOpen: ' + e.document.uri);
	validateTextDocument(e.document);
});

documents.onDidClose(e => {
	documentSettings.delete(e.document.uri);
});

documents.onDidChangeContent(change => {
	LanguageServer.logMessage('onDidChangeContent:' + change.document.uri);
	validateTextDocument(change.document);
});

async function validateTextDocument(textDocument: TextDocument): Promise<void> {
	const settings = await getDocumentSettings(textDocument.uri) ?? defaultSettings;
	
	let diags = LeviathonValidator.get().validate(textDocument);

	if (diags.length > settings.maxNumberOfProblems) {
		diags = diags.slice(0, settings.maxNumberOfProblems);
	}

	connection.sendDiagnostics({
		uri: textDocument.uri,
		diagnostics: diags
	});
}

connection.onCompletion((params: CompletionParams): CompletionItem[] => {
	LanguageServer.logMessage('onCompletion');
	
	const validator = LeviathonValidator.get();
	const thkUtil = LeviathonUtility.get();

	if (params.textDocument.uri.endsWith('.fand')) {
		return thkUtil.getFandCompletions(params.position, validator.getFandFile()!);
	}
	
	return thkUtil.getCompletions(
		params, 
		validator.getNackFiles(),
		validator.getIndexOfNackFile(params.textDocument.uri),
		validator.getFandFile()
	);
});

connection.onCompletionResolve((item: CompletionItem): CompletionItem => {
	if (item.data === CompletionType.ActionName) {
		item.insertText = item.label + '()';
	} else if (item.label === 'raw_action') {
		item.insertText = 'action#'
	}

	return item;
});

connection.onDefinition((params: TextDocumentPositionParams): Location[] => {
	LanguageServer.logMessage('onDefinition');
	const validator = LeviathonValidator.get();
	const thkUtil = LeviathonUtility.get();

	if (params.textDocument.uri.endsWith('.fand')) {
		return thkUtil.getFandDefinition(params.position, validator.getFandFile()!);
	}
	
	return thkUtil.getDefinition(
		params.position,
		validator.getNackFiles(),
		validator.getIndexOfNackFile(params.textDocument.uri),
		validator.getFandFile()
	);
});

connection.onRenameRequest((params: RenameParams): WorkspaceEdit | undefined => {
	if (params.textDocument.uri.endsWith('.fand')) {
		return undefined;
	}

	const validator = LeviathonValidator.get();
	const file = validator.getNackFiles()[validator.getIndexOfNackFile(params.textDocument.uri)];

	const node = file.findByPosition(params.position);
	if (node) {
		const edits = node.rename(params.position, params.newName);
		return {
			changes: {
				[params.textDocument.uri]: edits
			}
		}
	}
	
	return undefined;
});

connection.onHover((params: HoverParams): Hover | null => {
	LanguageServer.logMessage('onHover');
	const validator = LeviathonValidator.get();
	const thkUtil = LeviathonUtility.get();

	let info: string | undefined = undefined;
	if (params.textDocument.uri.endsWith('.fand')) {
		info = thkUtil.getFandHoverInfo(params.position, validator.getFandFile()!);
	} else {
		info = thkUtil.getHoverInfo(
			params.position,
			validator.getNackFiles(),
			validator.getIndexOfNackFile(params.textDocument.uri),
			validator.getFandFile()
		);
	}

	if (info) {
		return {
			contents: {
				kind: MarkupKind.Markdown,
				value: info
			}
		};
	} else {
		return null;
	}
});

connection.onReferences((params: ReferenceParams): Location[] => {
	LanguageServer.logMessage('onReferences');
	const validator = LeviathonValidator.get();
	const thkUtil = LeviathonUtility.get();
	if (params.textDocument.uri.endsWith('.fand')) {
		return thkUtil.getFandReferences(params.position, validator.getFandFile()!);
	}

	return thkUtil.getReferences(
		params.position,
		validator.getNackFiles(),
		validator.getIndexOfNackFile(params.textDocument.uri),
		validator.getFandFile(),
		params.context.includeDeclaration
	);
});

documents.listen(connection);
connection.listen();
