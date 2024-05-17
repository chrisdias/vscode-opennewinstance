'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    const regex = /Visual Studio Code/;
    if (!regex.test(vscode.env.appName)) {
        vscode.window.showErrorMessage("This extension can only be used with Visual Studio Code. Using it in any other product could cause unexpected behavior, performance, or security issues.", { modal: true });
        return;
    }

    // The explorer/context menu contribution receives the URI to the file/folder
    const cmd1 = vscode.commands.registerCommand('extension.openNewInstance', (e: vscode.Uri) => {
        vscode.commands.executeCommand("vscode.openFolder", e, true);
    });

    const cmd2 = vscode.commands.registerCommand('extension.scopeToHere', (e: vscode.Uri) => {
        vscode.commands.executeCommand("vscode.openFolder", e, false);
    });

    context.subscriptions.push(cmd1);
    context.subscriptions.push(cmd2);
}

// this method is called when your extension is deactivated
export function deactivate() {}