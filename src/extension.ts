'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as path from 'path';

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
    let newWin = vscode.commands.registerCommand('extension.openNewWinHere', openCommand(true));
    let reopen = vscode.commands.registerCommand('extension.reopenHere', openCommand(false));
    context.subscriptions.push(newWin);
    context.subscriptions.push(reopen);

    context.subscriptions.push(cmd1);
    context.subscriptions.push(cmd2);
}

function openCommand(newWin) {
    return function (e) {
        try {
            var files = [],
                file = e ? e.path :
                    (vscode.window.activeTextEditor && vscode.window.activeTextEditor.document.fileName);
            if (!file) {
                vscode.window.showErrorMessage("No file selected, and there is no active document.");
                return;
            }
            file = path.resolve(file);
            files.push(file);
            while (file !== "/" && files.length <= 10) {
                file = path.dirname(file);
                files.push(file);
            }
            vscode.window.showQuickPick(
                files
                , { placeHolder: "" }).then(item => {
                    if (!item) return;
                    vscode.commands.executeCommand("vscode.openFolder", vscode.Uri.parse(item), newWin);
                }, err => {
                    console.error(err);
                });
        } catch (ex) {
            console.error(ex);
        }
    }
}
// this method is called when your extension is deactivated
export function deactivate() {

}