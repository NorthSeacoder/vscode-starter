Project Path: vscode-starter

Source Tree:

```
vscode-starter
├── pnpm-lock.yaml
├── LICENSE.md
├── res
│   ├── icon.png
│   └── icon.svg
├── test
│   └── index.test.ts
├── webview
│   ├── package.json
│   ├── tsconfig.json
│   ├── vite.config.ts
│   └── src
│       ├── main.ts
│       └── App.svelte
├── README.md
├── package.json
├── tsup.config.ts
├── tsconfig.json
├── eslint.config.mjs
├── pnpm-workspace.yaml
└── src
    ├── panel.ts
    ├── utils.ts
    ├── index.ts
    └── config.ts

```

`/Users/yqg/personal/vscode/vscode-starter/LICENSE.md`:

```md
DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE WITH NO FUCKING LIABILITY
Version 2.1, February 2025

Copyright (C) 2025 NorthSeacoder <https://github.com/NorthSeacoder>

Everyone is permitted to copy and distribute verbatim or modified copies of this license document, and changing it is allowed as long as the name is changed.

DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE WITH NO FUCKING LIABILITY
TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

0. You just DO WHAT THE FUCK YOU WANT TO.
1. If shit hits the fan, don’t come crying to me—I’m not fucking liable for whatever mess you make.
```

`/Users/yqg/personal/vscode/vscode-starter/res/icon.svg`:

```svg
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.6667 1.66667H24V7H8V9.66667H5.33333V20.3333H8V23H10.6667V28.3333H21.3333V25.6667H26.6667V23H21.3333V20.3333H26.6667V17.6667H21.3333V15H10.6667V20.3333H8V9.66667H24V7H26.6667V1.66667ZM18.6667 25.6667H13.3333V17.6667H18.6667V25.6667Z" fill="#888888"/>
</svg>

```

`/Users/yqg/personal/vscode/vscode-starter/test/index.test.ts`:

```ts
import { describe, expect, it } from 'vitest'

describe('should', () => {
  it('exported', () => {
    expect(1).toEqual(1)
  })
})

```

`/Users/yqg/personal/vscode/vscode-starter/webview/package.json`:

```json
{
  "name": "view",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build": "vite build"
  },
  "type": "module",
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "svelte": "^5.22.6"
  },
  "devDependencies": {
    "@sveltejs/vite-plugin-svelte": "^5.0.3",
    "terser": "^5.39.0",
    "vite": "^6.2.1"
  }
}

```

`/Users/yqg/personal/vscode/vscode-starter/webview/tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "es2017",
    "lib": ["esnext", "DOM"],
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "strict": true,
    "strictNullChecks": true,
    "esModuleInterop": true,
    "skipDefaultLibCheck": true,
    "skipLibCheck": true
  }
}
```

`/Users/yqg/personal/vscode/vscode-starter/webview/vite.config.ts`:

```ts
import {defineConfig} from 'vite';
import {svelte} from '@sveltejs/vite-plugin-svelte';
import path from 'path';

export default defineConfig({
    plugins: [svelte()],
    build: {
        lib: {
            name: 'view',
            entry: path.resolve(__dirname, 'src/main.ts'), // 明确指定入口
            fileName: () => 'index.js', // 输出文件名
            formats: ['iife']
        },
        outDir: 'dist',
        // minify: 'esbuild', // 使用 esbuild 压缩
        rollupOptions: {
            // 确保不依赖外部 HTML 文件
            input: path.resolve(__dirname, 'src/main.ts'),
            output: {
                entryFileNames: 'index.js',
                assetFileNames: 'index.css'
            }
        }
    },
    esbuild: {
        tsconfigRaw: require('./tsconfig.json')
    }
});

```

`/Users/yqg/personal/vscode/vscode-starter/webview/src/main.ts`:

```ts
import { mount } from 'svelte';
import App from './App.svelte';

const app = mount(App, { target: document.getElementById("app")! });

export default app;
```

`/Users/yqg/personal/vscode/vscode-starter/webview/src/App.svelte`:

```svelte
<script>
</script>

<p class="title">Hello, World!</p>
<style>
  .title {
    color: red;
  }
</style>
```

`/Users/yqg/personal/vscode/vscode-starter/package.json`:

```json
{
  "publisher": "Northseacoder",
  "name": "ext-name",
  "displayName": "ext-name",
  "version": "0.0.0",
  "private": true,
  "packageManager": "pnpm@10.4.1",
  "description": "",
  "author": "Northseacoder",
  "license": "WTFPL",
  "homepage": "https://github.com/Northseacoder/ext-name#readme",
  "repository": {
    "type": "git",
    "url": "https://github.com/Northseacoder/ext-name"
  },
  "bugs": {
    "url": "https://github.com/Northseacoder/ext-name/issues"
  },
  "categories": [
    "Other"
  ],
  "main": "./dist/index.js",
  "icon": "res/icon.png",
  "files": [
    "LICENSE.md",
    "dist/*",
    "res/*",
    "webview/dist/*"
  ],
  "engines": {
    "vscode": "^1.97.0"
  },
  "activationEvents": [
    "onStartupFinished"
  ],
  "contributes": {
    "viewsContainers": {
      "activitybar": [
        {
          "id": "view-explorer",
          "title": "Demo",
          "icon": "res/icon.svg"
        }
      ]
    },
    "views": {
      "view-explorer": [
        {
          "id": "webviewExample",
          "type": "webview",
          "name": "view Demo"
        }
      ]
    },
    "commands": [
      {
        "command": "extension.openWebview",
        "title": "Open Webview Example"
      }
    ],
    "configuration": {
      "type": "object",
      "title": "ext-name",
      "properties": {}
    }
  },
  "scripts": {
    "cz": "git add . && git-cz",
    "clear": "rimraf dist",
    "build": "nr clear && env NODE_ENV=production tsup",
    "build:view":"nr -F view build",
    "dev": "env NODE_ENV=development nr build",
    "prepare": "nr update",
    "update": "vscode-ext-gen --output src/generated/meta.ts",
    "lint": "eslint . --fix",
    "vscode:prepublish": "nr build",
    "publish": "vsce publish --no-dependencies",
    "pack": "vsce package --no-dependencies",
    "test": "vitest",
    "typecheck": "tsc --noEmit",
    "release": "bumpp && nr publish"
  },
  "devDependencies": {
    "@antfu/eslint-config": "^4.2.1",
    "@antfu/ni": "^23.3.1",
    "@types/node": "^22.13.4",
    "@types/vscode": "^1.97.0",
    "@vscode/vsce": "^3.2.2",
    "bumpp": "^10.0.3",
    "commitizen": "^4.3.1",
    "cz-conventional-changelog": "^3.3.0",
    "eslint": "^9.20.1",
    "esno": "^4.8.0",
    "pnpm": "^10.4.1",
    "reactive-vscode": "^0.2.10",
    "rimraf": "^6.0.1",
    "tsup": "^8.3.6",
    "typescript": "^5.7.3",
    "vite": "^6.1.0",
    "vitest": "^3.0.5",
    "vscode-ext-gen": "^1.0.0"
  },
  "pnpm": {
    "onlyBuiltDependencies": [
      "esbuild"
    ]
  },
  "config": {
    "commitizen": {
      "path": "cz-conventional-changelog"
    }
  }
}

```

`/Users/yqg/personal/vscode/vscode-starter/tsup.config.ts`:

```ts
import process from 'node:process'
import { defineConfig } from 'tsup'

const env = process.env.NODE_ENV
export default defineConfig({
  entry: [
    'src/index.ts',
  ],
  sourcemap: env === 'development',
  minify: env === 'production',
  watch: env === 'development',
  format: ['cjs'],
  shims: false,
  dts: false,
  target: 'es2022',
  external: [
    'vscode',
  ],
  noExternal: [],
})

```

`/Users/yqg/personal/vscode/vscode-starter/tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "es2017",
    "lib": ["esnext"],
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "strict": true,
    "strictNullChecks": true,
    "esModuleInterop": true,
    "skipDefaultLibCheck": true,
    "skipLibCheck": true,
  },
  "exclude": ["node_modules", "dist","webview"]
}

```

`/Users/yqg/personal/vscode/vscode-starter/eslint.config.mjs`:

```mjs
// @ts-check
import antfu from '@antfu/eslint-config'

export default antfu(
  {
    ignores: [
      // eslint ignore globs here
    ],
  },
  {
    rules: {
      // overrides
    },
  },
)

```

`/Users/yqg/personal/vscode/vscode-starter/pnpm-workspace.yaml`:

```yaml
packages:
  - playground
  - examples/*
  - webview

```

`/Users/yqg/personal/vscode/vscode-starter/src/panel.ts`:

```ts
import * as vscode from 'vscode';
import { Uri, WebviewView, WebviewViewProvider, Webview } from 'vscode';

interface Payload {
  title: string;
  msg: string;
}

function getUri(webview: Webview, extensionUri: Uri, pathList: string[]) {
  return webview.asWebviewUri(vscode.Uri.joinPath(extensionUri, ...pathList));
}

export function getNonce() {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < 32; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

export class SvelteViewProvider implements WebviewViewProvider {
  private view?: WebviewView;
  private readonly extensionUri: Uri;

  constructor(uri: Uri) {
    this.extensionUri = uri;
  }

  public resolveWebviewView(webviewView: WebviewView) {
    this.view = webviewView;
    webviewView.webview.options = {
      enableScripts: true,
      localResourceRoots: [vscode.Uri.joinPath(this.extensionUri, 'webview', 'dist')],
    };
    webviewView.webview.html = this.getWebviewContent(webviewView.webview);
    this.setWebviewMessageListener(webviewView.webview);

    // 确保视图可见时更新内容
    webviewView.onDidChangeVisibility(() => {
      if (webviewView.visible) {
        this.post({ title: 'greeting', msg: '您好，这是从扩展发送的消息！' });
      }
    });
  }

  public post(content: Payload) {
    if (this.view) {
      this.view.webview.postMessage(content);
    }
  }

  public show() {
    if (this.view) {
      this.view.show();
      this.post({ title: 'greeting', msg: '您好，这是从命令发送的消息！' });
    }
  }

  private getWebviewContent(webview: Webview) {
    const scriptUri = getUri(webview, this.extensionUri, ['webview', 'dist', 'index.js']);
    const styleUri = getUri(webview, this.extensionUri, ['webview', 'dist', 'index.css']);
    const nonce = getNonce();

    return /*html*/ `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src ${webview.cspSource} 'unsafe-inline'; script-src 'nonce-${nonce}';">
        <title>Extension Display Name</title>
        <link href="${styleUri}" rel="stylesheet" />
        <script type="module" nonce="${nonce}" src="${scriptUri}"></script>
      </head>
      <body>
        <div id="app"></div>
      </body>
      </html>
    `;
  }

  private setWebviewMessageListener(webview: Webview) {
    webview.onDidReceiveMessage((message: Payload) => {
      const command = message.title;
      const text = message.msg;

      switch (command) {
        case 'hello':
          vscode.window.showInformationMessage(text);
          return;
      }
    });
  }
}
```

`/Users/yqg/personal/vscode/vscode-starter/src/utils.ts`:

```ts
import { getDefaultLoggerPrefix, useLogger } from 'reactive-vscode'
import { displayName } from './generated/meta'

export const logger = useLogger(displayName, {
  getPrefix: getDefaultLoggerPrefix,
})

```

`/Users/yqg/personal/vscode/vscode-starter/src/index.ts`:

```ts
import { defineExtension, useCommand } from 'reactive-vscode';
import * as vscode from 'vscode';
import { SvelteViewProvider } from './panel';

const { activate, deactivate } = defineExtension((context) => {
  const provider = new SvelteViewProvider(context.extensionUri);
  context.subscriptions.push(
    vscode.window.registerWebviewViewProvider('webviewExample', provider)
  );

  useCommand('extension.openWebview', () => {
    provider.show();
  });
});

export { activate, deactivate };
```

`/Users/yqg/personal/vscode/vscode-starter/src/config.ts`:

```ts
import { defineConfigObject } from 'reactive-vscode'
import * as Meta from './generated/meta'

export const config = defineConfigObject<Meta.ScopedConfigKeyTypeMap>(
  Meta.scopedConfigs.scope,
  Meta.scopedConfigs.defaults,
)

```Project Path: vscode-starter

Source Tree:

```
vscode-starter
├── pnpm-lock.yaml
├── LICENSE.md
├── res
│   ├── icon.png
│   └── icon.svg
├── test
│   └── index.test.ts
├── webview
│   ├── package.json
│   ├── tsconfig.json
│   ├── vite.config.ts
│   └── src
│       ├── main.ts
│       └── App.svelte
├── README.md
├── package.json
├── tsup.config.ts
├── tsconfig.json
├── eslint.config.mjs
├── pnpm-workspace.yaml
└── src
    ├── panel.ts
    ├── utils.ts
    ├── index.ts
    └── config.ts

```

`/Users/yqg/personal/vscode/vscode-starter/res/icon.svg`:

```svg
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.6667 1.66667H24V7H8V9.66667H5.33333V20.3333H8V23H10.6667V28.3333H21.3333V25.6667H26.6667V23H21.3333V20.3333H26.6667V17.6667H21.3333V15H10.6667V20.3333H8V9.66667H24V7H26.6667V1.66667ZM18.6667 25.6667H13.3333V17.6667H18.6667V25.6667Z" fill="#888888"/>
</svg>

```

`/Users/yqg/personal/vscode/vscode-starter/webview/package.json`:

```json
{
  "name": "view",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build": "vite build"
  },
  "type": "module",
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "svelte": "^5.22.6"
  },
  "devDependencies": {
    "@sveltejs/vite-plugin-svelte": "^5.0.3",
    "terser": "^5.39.0",
    "vite": "^6.2.1"
  }
}

```

`/Users/yqg/personal/vscode/vscode-starter/webview/tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "es2017",
    "lib": ["esnext", "DOM"],
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "strict": true,
    "strictNullChecks": true,
    "esModuleInterop": true,
    "skipDefaultLibCheck": true,
    "skipLibCheck": true
  }
}
```

`/Users/yqg/personal/vscode/vscode-starter/webview/vite.config.ts`:

```ts
import {defineConfig} from 'vite';
import {svelte} from '@sveltejs/vite-plugin-svelte';
import path from 'path';

export default defineConfig({
    plugins: [svelte()],
    build: {
        lib: {
            name: 'view',
            entry: path.resolve(__dirname, 'src/main.ts'), // 明确指定入口
            fileName: () => 'index.js', // 输出文件名
            formats: ['iife']
        },
        outDir: 'dist',
        // minify: 'esbuild', // 使用 esbuild 压缩
        rollupOptions: {
            // 确保不依赖外部 HTML 文件
            input: path.resolve(__dirname, 'src/main.ts'),
            output: {
                entryFileNames: 'index.js',
                assetFileNames: 'index.css'
            }
        }
    },
    esbuild: {
        tsconfigRaw: require('./tsconfig.json')
    }
});

```

`/Users/yqg/personal/vscode/vscode-starter/webview/src/main.ts`:

```ts
import { mount } from 'svelte';
import App from './App.svelte';

const app = mount(App, { target: document.getElementById("app")! });

export default app;
```

`/Users/yqg/personal/vscode/vscode-starter/webview/src/App.svelte`:

```svelte
<script>
</script>

<p class="title">Hello, World!</p>
<style>
  .title {
    color: red;
  }
</style>
```

`/Users/yqg/personal/vscode/vscode-starter/package.json`:

```json
{
  "publisher": "Northseacoder",
  "name": "ext-name",
  "displayName": "ext-name",
  "version": "0.0.0",
  "private": true,
  "packageManager": "pnpm@10.4.1",
  "description": "",
  "author": "Northseacoder",
  "license": "WTFPL",
  "homepage": "https://github.com/Northseacoder/ext-name#readme",
  "repository": {
    "type": "git",
    "url": "https://github.com/Northseacoder/ext-name"
  },
  "bugs": {
    "url": "https://github.com/Northseacoder/ext-name/issues"
  },
  "categories": [
    "Other"
  ],
  "main": "./dist/index.js",
  "icon": "res/icon.png",
  "files": [
    "LICENSE.md",
    "dist/*",
    "res/*",
    "webview/dist/*"
  ],
  "engines": {
    "vscode": "^1.97.0"
  },
  "activationEvents": [
    "onStartupFinished"
  ],
  "contributes": {
    "viewsContainers": {
      "activitybar": [
        {
          "id": "view-explorer",
          "title": "Demo",
          "icon": "res/icon.svg"
        }
      ]
    },
    "views": {
      "view-explorer": [
        {
          "id": "webviewExample",
          "type": "webview",
          "name": "view Demo"
        }
      ]
    },
    "commands": [
      {
        "command": "extension.openWebview",
        "title": "Open Webview Example"
      }
    ],
    "configuration": {
      "type": "object",
      "title": "ext-name",
      "properties": {}
    }
  },
  "scripts": {
    "cz": "git add . && git-cz",
    "clear": "rimraf dist",
    "build": "nr clear && env NODE_ENV=production tsup",
    "build:view":"nr -F view build",
    "dev": "env NODE_ENV=development nr build",
    "prepare": "nr update",
    "update": "vscode-ext-gen --output src/generated/meta.ts",
    "lint": "eslint . --fix",
    "vscode:prepublish": "nr build",
    "publish": "vsce publish --no-dependencies",
    "pack": "vsce package --no-dependencies",
    "test": "vitest",
    "typecheck": "tsc --noEmit",
    "release": "bumpp && nr publish"
  },
  "devDependencies": {
    "@antfu/eslint-config": "^4.2.1",
    "@antfu/ni": "^23.3.1",
    "@types/node": "^22.13.4",
    "@types/vscode": "^1.97.0",
    "@vscode/vsce": "^3.2.2",
    "bumpp": "^10.0.3",
    "commitizen": "^4.3.1",
    "cz-conventional-changelog": "^3.3.0",
    "eslint": "^9.20.1",
    "esno": "^4.8.0",
    "pnpm": "^10.4.1",
    "reactive-vscode": "^0.2.10",
    "rimraf": "^6.0.1",
    "tsup": "^8.3.6",
    "typescript": "^5.7.3",
    "vite": "^6.1.0",
    "vitest": "^3.0.5",
    "vscode-ext-gen": "^1.0.0"
  },
  "pnpm": {
    "onlyBuiltDependencies": [
      "esbuild"
    ]
  },
  "config": {
    "commitizen": {
      "path": "cz-conventional-changelog"
    }
  }
}

```

`/Users/yqg/personal/vscode/vscode-starter/tsup.config.ts`:

```ts
import process from 'node:process'
import { defineConfig } from 'tsup'

const env = process.env.NODE_ENV
export default defineConfig({
  entry: [
    'src/index.ts',
  ],
  sourcemap: env === 'development',
  minify: env === 'production',
  watch: env === 'development',
  format: ['cjs'],
  shims: false,
  dts: false,
  target: 'es2022',
  external: [
    'vscode',
  ],
  noExternal: [],
})

```

`/Users/yqg/personal/vscode/vscode-starter/tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "es2017",
    "lib": ["esnext"],
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "strict": true,
    "strictNullChecks": true,
    "esModuleInterop": true,
    "skipDefaultLibCheck": true,
    "skipLibCheck": true,
  },
  "exclude": ["node_modules", "dist","webview"]
}

```

`/Users/yqg/personal/vscode/vscode-starter/eslint.config.mjs`:

```mjs
// @ts-check
import antfu from '@antfu/eslint-config'

export default antfu(
  {
    ignores: [
      // eslint ignore globs here
    ],
  },
  {
    rules: {
      // overrides
    },
  },
)

```

`/Users/yqg/personal/vscode/vscode-starter/pnpm-workspace.yaml`:

```yaml
packages:
  - playground
  - examples/*
  - webview

```

`/Users/yqg/personal/vscode/vscode-starter/src/panel.ts`:

```ts
import * as vscode from 'vscode';
import { Uri, WebviewView, WebviewViewProvider, Webview } from 'vscode';

interface Payload {
  title: string;
  msg: string;
}

function getUri(webview: Webview, extensionUri: Uri, pathList: string[]) {
  return webview.asWebviewUri(vscode.Uri.joinPath(extensionUri, ...pathList));
}

export function getNonce() {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < 32; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

export class SvelteViewProvider implements WebviewViewProvider {
  private view?: WebviewView;
  private readonly extensionUri: Uri;

  constructor(uri: Uri) {
    this.extensionUri = uri;
  }

  public resolveWebviewView(webviewView: WebviewView) {
    this.view = webviewView;
    webviewView.webview.options = {
      enableScripts: true,
      localResourceRoots: [vscode.Uri.joinPath(this.extensionUri, 'webview', 'dist')],
    };
    webviewView.webview.html = this.getWebviewContent(webviewView.webview);
    this.setWebviewMessageListener(webviewView.webview);

    // 确保视图可见时更新内容
    webviewView.onDidChangeVisibility(() => {
      if (webviewView.visible) {
        this.post({ title: 'greeting', msg: '您好，这是从扩展发送的消息！' });
      }
    });
  }

  public post(content: Payload) {
    if (this.view) {
      this.view.webview.postMessage(content);
    }
  }

  public show() {
    if (this.view) {
      this.view.show();
      this.post({ title: 'greeting', msg: '您好，这是从命令发送的消息！' });
    }
  }

  private getWebviewContent(webview: Webview) {
    const scriptUri = getUri(webview, this.extensionUri, ['webview', 'dist', 'index.js']);
    const styleUri = getUri(webview, this.extensionUri, ['webview', 'dist', 'index.css']);
    const nonce = getNonce();

    return /*html*/ `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src ${webview.cspSource} 'unsafe-inline'; script-src 'nonce-${nonce}';">
        <title>Extension Display Name</title>
        <link href="${styleUri}" rel="stylesheet" />
        <script type="module" nonce="${nonce}" src="${scriptUri}"></script>
      </head>
      <body>
        <div id="app"></div>
      </body>
      </html>
    `;
  }

  private setWebviewMessageListener(webview: Webview) {
    webview.onDidReceiveMessage((message: Payload) => {
      const command = message.title;
      const text = message.msg;

      switch (command) {
        case 'hello':
          vscode.window.showInformationMessage(text);
          return;
      }
    });
  }
}
```

`/Users/yqg/personal/vscode/vscode-starter/src/utils.ts`:

```ts
import { getDefaultLoggerPrefix, useLogger } from 'reactive-vscode'
import { displayName } from './generated/meta'

export const logger = useLogger(displayName, {
  getPrefix: getDefaultLoggerPrefix,
})

```

`/Users/yqg/personal/vscode/vscode-starter/src/index.ts`:

```ts
import { defineExtension, useCommand } from 'reactive-vscode';
import * as vscode from 'vscode';
import { SvelteViewProvider } from './panel';

const { activate, deactivate } = defineExtension((context) => {
  const provider = new SvelteViewProvider(context.extensionUri);
  context.subscriptions.push(
    vscode.window.registerWebviewViewProvider('webviewExample', provider)
  );

  useCommand('extension.openWebview', () => {
    provider.show();
  });
});

export { activate, deactivate };
```

`/Users/yqg/personal/vscode/vscode-starter/src/config.ts`:

```ts
import { defineConfigObject } from 'reactive-vscode'
import * as Meta from './generated/meta'

export const config = defineConfigObject<Meta.ScopedConfigKeyTypeMap>(
  Meta.scopedConfigs.scope,
  Meta.scopedConfigs.defaults,
)

```