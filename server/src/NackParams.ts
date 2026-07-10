import { TextDocument } from "vscode-languageserver-textdocument";
import { FandFile } from "./FandFile";
import { LanguageServer } from "./LanguageServer";
import { LeviathonValidator } from "./LeviationValidator";
import { NackFile } from "./NackFile";
import * as fs from "fs";

export class NackParams {
    allFiles: NackFile[];
    currentFileIdx: number;
    public fandFile: FandFile | undefined;

    constructor(files: NackFile[], currentFileIdx: number, fandFile: FandFile | undefined) {
        this.allFiles = files;
        this.currentFileIdx = currentFileIdx;
        this.fandFile = fandFile;
    }

    public get currentFile(): NackFile {
        return this.allFiles[this.currentFileIdx];
    }

    public get files(): NackFile[] {
        return this.allFiles;
    }

    public ensureParseTree() {
        const file = this.currentFile;
        if (!file.lastParseState) {
            LanguageServer.logMessage("Parsing file for hover info");
            LeviathonValidator.get().validate(
                TextDocument.create(file.uri.toString(), 'leviathon', 0, fs.readFileSync(file.uri.fsPath).toString())
            );
        }
    }

    public withFandFile<R>(func: (fandFile: FandFile) => R | undefined): R | undefined {
        if (this.fandFile) {
            return func(this.fandFile);
        }

        return undefined;
    }
}
