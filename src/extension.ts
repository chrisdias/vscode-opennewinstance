'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('vscode-opennewinstance is now active');

    // The explorer/context menu contribution receives the URI to the file/folder
    let disposable = vscode.commands.registerCommand('extension.openNewInstance', (e: vscode.Uri) => {
        // Simply invoke the openFolder command, passing in the URI, and telling VS Code to open a new instance
        vscode.commands.executeCommand("vscode.openFolder", e, true);
    });

    context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {

}