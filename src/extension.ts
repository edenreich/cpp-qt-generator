import * as vscode from 'vscode';
import { Handlers } from './handlers';


export function activate(context: vscode.ExtensionContext) {

	context.subscriptions.push(vscode.commands.registerCommand('extension.createQtWidgetsApplication', Handlers.createQtWidgetsApplication));
	context.subscriptions.push(vscode.commands.registerCommand('extension.createQtConsoleApplication', Handlers.createQtConsoleApplication));
	context.subscriptions.push(vscode.commands.registerCommand('extension.createQtQuickApplication', Handlers.createQtQuickApplication));
}

export function deactivate() {
	// cleanup
}
