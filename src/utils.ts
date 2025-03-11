import { getDefaultLoggerPrefix, useLogger } from 'reactive-vscode'
import { displayName } from './generated/meta'

export const logger = useLogger(displayName, {
  getPrefix: getDefaultLoggerPrefix,
})

import { Webview, Uri } from 'vscode';
import * as crypto from 'crypto';

export function getUri(webview: Webview, extensionUri: Uri, pathList: string[]) {
  return webview.asWebviewUri(Uri.joinPath(extensionUri, ...pathList));
}

export function getNonce() {
  return crypto.randomUUID().replace(/-/g, '');  // 使用加密安全的随机数
}