import { defineExtension, useCommand } from 'reactive-vscode';
import * as vscode from 'vscode';
import { SvelteViewProvider } from './panel';
import { WEBVIEW_VIEW_ID, COMMAND_OPEN_WEBVIEW } from './constants';

const { activate, deactivate } = defineExtension((context) => {
  const provider = new SvelteViewProvider(context.extensionUri);
  context.subscriptions.push(
    vscode.window.registerWebviewViewProvider(WEBVIEW_VIEW_ID, provider)
  );

  useCommand(COMMAND_OPEN_WEBVIEW, () => {
    provider.show();
  });
});

export { activate, deactivate };