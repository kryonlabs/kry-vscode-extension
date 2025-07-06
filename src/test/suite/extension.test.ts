import * as assert from 'assert';
import * as vscode from 'vscode';

suite('Extension Test Suite', () => {
    vscode.window.showInformationMessage('Start all tests.');

    test('Extension should be present', () => {
        assert.ok(vscode.extensions.getExtension('kryonlabs.kry-language-support'));
    });

    test('Should activate extension', async () => {
        const extension = vscode.extensions.getExtension('kryonlabs.kry-language-support');
        if (extension) {
            await extension.activate();
            assert.ok(extension.isActive);
        }
    });

    test('Should register KRY language', () => {
        const languages = vscode.languages.getLanguages();
        return languages.then((langs) => {
            assert.ok(langs.includes('kry'), 'KRY language should be registered');
        });
    });

    test('Should provide commands', async () => {
        const commands = await vscode.commands.getCommands();
        assert.ok(commands.includes('kry.formatDocument'), 'Format document command should be available');
        assert.ok(commands.includes('kry.compileKRB'), 'Compile KRB command should be available');
    });
});