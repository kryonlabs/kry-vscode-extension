import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    console.log('KRY Language Support extension is now active!');

    // Register commands
    const formatDocumentCommand = vscode.commands.registerCommand('kry.formatDocument', () => {
        vscode.window.showInformationMessage('KRY document formatting is not yet implemented');
    });

    const compileKRBCommand = vscode.commands.registerCommand('kry.compileKRB', () => {
        const activeEditor = vscode.window.activeTextEditor;
        if (!activeEditor) {
            vscode.window.showErrorMessage('No active KRY file to compile');
            return;
        }

        if (!activeEditor.document.fileName.endsWith('.kry')) {
            vscode.window.showErrorMessage('Current file is not a KRY file');
            return;
        }

        // TODO: Implement actual compilation
        vscode.window.showInformationMessage('KRY compilation is not yet implemented. Install kryon-compiler and configure the path in settings.');
    });

    // Register language configuration
    const krySelector: vscode.DocumentSelector = { scheme: 'file', language: 'kry' };

    // Register hover provider for KRY elements
    const hoverProvider = vscode.languages.registerHoverProvider(krySelector, {
        provideHover(document, position, token) {
            const range = document.getWordRangeAtPosition(position);
            if (!range) {
                return;
            }

            const word = document.getText(range);
            const hoverInfo = getKRYElementInfo(word);
            
            if (hoverInfo) {
                return new vscode.Hover(hoverInfo);
            }
        }
    });

    // Register completion provider for KRY elements
    const completionProvider = vscode.languages.registerCompletionItemProvider(krySelector, {
        provideCompletionItems(document, position, token, context) {
            const completions: vscode.CompletionItem[] = [];

            // Basic KRY elements
            const elements = ['App', 'Container', 'Text', 'Button', 'Input', 'Image'];
            elements.forEach(element => {
                const completion = new vscode.CompletionItem(element, vscode.CompletionItemKind.Class);
                completion.detail = `KRY ${element} element`;
                completion.documentation = new vscode.MarkdownString(`Create a ${element} element`);
                completions.push(completion);
            });

            // KRY properties
            const properties = ['id', 'text', 'style', 'layout', 'width', 'height', 'onClick', 'onSubmit'];
            properties.forEach(prop => {
                const completion = new vscode.CompletionItem(prop, vscode.CompletionItemKind.Property);
                completion.detail = `KRY property`;
                completion.documentation = new vscode.MarkdownString(`${prop} property`);
                completions.push(completion);
            });

            return completions;
        }
    });

    // Add to subscriptions
    context.subscriptions.push(
        formatDocumentCommand,
        compileKRBCommand,
        hoverProvider,
        completionProvider
    );

    // Show welcome message on first activation
    const config = vscode.workspace.getConfiguration('kry');
    const hasShownWelcome = context.globalState.get('hasShownWelcome', false);
    
    if (!hasShownWelcome) {
        vscode.window.showInformationMessage(
            'Welcome to KRY Language Support! Create a .kry file to get started.',
            'Open Documentation',
            'Don\'t show again'
        ).then((selection) => {
            if (selection === 'Open Documentation') {
                vscode.env.openExternal(vscode.Uri.parse('https://docs.kryonlabs.com'));
            } else if (selection === 'Don\'t show again') {
                context.globalState.update('hasShownWelcome', true);
            }
        });
    }
}

export function deactivate() {
    console.log('KRY Language Support extension is now deactivated');
}

function getKRYElementInfo(word: string): vscode.MarkdownString | undefined {
    const elementInfo: { [key: string]: string } = {
        'App': 'Root application container with window properties',
        'Container': 'Layout container with flexbox support',
        'Text': 'Text display element with styling options',
        'Button': 'Interactive button with click handlers',
        'Input': 'Text input field with validation',
        'Image': 'Image display with sizing options',
        'Define': 'Component definition with reusable properties',
        'Properties': 'Component properties block',
        'style': 'Style definition block',
        '@variables': 'Variables declaration block',
        '@script': 'Embedded script block',
        '@include': 'Include directive for external files'
    };

    if (elementInfo[word]) {
        return new vscode.MarkdownString(`**${word}**\n\n${elementInfo[word]}`);
    }

    return undefined;
}