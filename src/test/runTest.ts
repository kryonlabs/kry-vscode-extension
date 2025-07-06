import * as path from 'path';
import * as fs from 'fs';

async function main() {
    try {
        console.log('Running simplified extension tests...');
        
        // Test 1: Check package.json exists and is valid
        const packagePath = path.resolve(__dirname, '../../package.json');
        if (!fs.existsSync(packagePath)) {
            throw new Error('package.json not found');
        }
        
        const pkg = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
        if (!pkg.contributes || !pkg.contributes.languages) {
            throw new Error('Extension does not contribute languages');
        }
        console.log('✓ Package.json is valid');
        
        // Test 2: Check syntax files exist
        const syntaxPath = path.resolve(__dirname, '../../syntaxes/kry.tmLanguage.json');
        if (!fs.existsSync(syntaxPath)) {
            throw new Error('Syntax file not found');
        }
        console.log('✓ Syntax files exist');
        
        // Test 3: Check snippets exist
        const snippetsPath = path.resolve(__dirname, '../../snippets/kry-snippets.json');
        if (!fs.existsSync(snippetsPath)) {
            throw new Error('Snippets file not found');
        }
        console.log('✓ Snippets exist');
        
        // Test 4: Check compiled extension exists
        const extensionPath = path.resolve(__dirname, '../extension.js');
        if (!fs.existsSync(extensionPath)) {
            throw new Error('Compiled extension not found');
        }
        console.log('✓ Extension compiled successfully');
        
        console.log('All tests passed!');
    } catch (err) {
        console.error('Tests failed:', err);
        process.exit(1);
    }
}

main();