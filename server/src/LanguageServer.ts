import { Connection, WorkspaceFolder } from 'vscode-languageserver';

export class LanguageServer {
	public static INSTANCE: LanguageServer;

	private rootFolder: WorkspaceFolder;
	private connection: Connection;

	constructor(rootFolder: WorkspaceFolder, connection: Connection) {
		this.rootFolder = rootFolder;
		this.connection = connection;
	}

	public static get(): LanguageServer {
		return LanguageServer.INSTANCE;
	}

	public get RootFolder(): WorkspaceFolder {
		return this.rootFolder;
	}

	public set RootFolder(rootFolder: WorkspaceFolder) {
		this.rootFolder = rootFolder;
	}

	public get Connection(): Connection {
		return this.connection;
	}

	public set Connection(connection: Connection) {
		this.connection = connection;
	}

	public static logMessage(message: string): void {
		LanguageServer.get().Connection.console.log(message);
	}
}
