'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    //console.log('vscode-opennewinstance is now active');

    // The explorer/context menu contribution receives the URI to the file/folder
    let cmd1 = vscode.commands.registerCommand('extension.openNewInstance', (e: vscode.Uri) => {
        vscode.commands.executeCommand("vscode.openFolder", e, true);
    });

    let cmd2 = vscode.commands.registerCommand('extension.scopeToHere', (e: vscode.Uri) => {
        vscode.commands.executeCommand("vscode.openFolder", e, false);
    });

    context.subscriptions.push(cmd1);
    context.subscriptions.push(cmd2);
}

// this method is called when your extension is deactivated
export function deactivate() {

}