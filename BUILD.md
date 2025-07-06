# Build Guide for KRY VSCode Extension

This guide explains how to build, test, and release the KRY Language Support extension.

## Prerequisites

- **Node.js** 18.x or higher
- **npm** 8.x or higher
- **Git** for version control
- **Visual Studio Code** for development

## Quick Start

```bash
# Clone the repository
git clone https://github.com/kryonlabs/kry-vscode-extension.git
cd kry-vscode-extension

# Install dependencies
npm install

# Compile TypeScript
npm run compile

# Package the extension
npm run package
```

## Development Workflow

### 1. Setup Development Environment

```bash
# Install dependencies
npm install

# Install the VSCE packaging tool globally (optional)
npm install -g vsce
```

### 2. Development Commands

```bash
# Compile TypeScript (watch mode)
npm run watch

# Lint the code
npm run lint

# Fix linting issues
npm run lint:fix

# Run tests
npm test

# Clean build artifacts
npm run clean
```

### 3. Testing the Extension

```bash
# Run in VS Code Extension Development Host
# 1. Open the project in VS Code
# 2. Press F5 to launch Extension Development Host
# 3. Create a .kry file to test syntax highlighting

# Run automated tests
npm test
```

### 4. Building for Release

```bash
# Build and package
npm run build

# This creates: kry-language-support-1.0.0.vsix
```

## GitHub Actions CI/CD

The repository includes automated GitHub Actions workflows:

### Workflow Files

- **`.github/workflows/build-and-release.yml`**: Main CI/CD pipeline

### Triggered Events

- **Push to master/develop**: Builds and tests the extension
- **Pull requests**: Validates code quality and tests
- **Tagged releases** (v*): Creates releases with downloadable .vsix files

### Build Process

1. **Code Quality**: ESLint checks and TypeScript compilation
2. **Testing**: Automated test suite execution
3. **Packaging**: Creates .vsix extension package
4. **Artifacts**: Uploads build artifacts for download

### Release Process

When you create a Git tag starting with 'v' (e.g., `v1.0.0`):

1. **Automatic Release**: GitHub release is created automatically
2. **Asset Upload**: .vsix file is attached to the release
3. **Marketplace Publishing**: Extension is published to VS Code Marketplace
4. **Open VSX**: Extension is also published to Open VSX Registry

## Manual Release Process

### 1. Prepare Release

```bash
# Update version in package.json
npm version patch  # or minor, major

# Update CHANGELOG.md with new version info

# Commit changes
git add .
git commit -m "Release v1.0.1"

# Create and push tag
git tag v1.0.1
git push origin master --tags
```

### 2. GitHub Actions Automation

The workflow will automatically:
- Build the extension
- Run tests
- Create GitHub release
- Upload .vsix file
- Publish to marketplaces (if configured)

### 3. Manual Publication (if needed)

```bash
# Install vsce if not already installed
npm install -g vsce

# Login to Visual Studio Marketplace
vsce login <publisher-name>

# Publish extension
vsce publish

# Or publish specific version
vsce publish --packagePath kry-language-support-1.0.1.vsix
```

## Marketplace Configuration

### Visual Studio Code Marketplace

1. **Publisher Account**: Create account at [marketplace.visualstudio.com](https://marketplace.visualstudio.com/manage)
2. **Access Token**: Generate Personal Access Token
3. **GitHub Secret**: Add `VSCE_PAT` to repository secrets

### Open VSX Registry

1. **Account**: Create account at [open-vsx.org](https://open-vsx.org/)
2. **Access Token**: Generate access token
3. **GitHub Secret**: Add `OVSX_PAT` to repository secrets

## Repository Secrets

Add these secrets to your GitHub repository settings:

```
VSCE_PAT=<Visual Studio Marketplace Personal Access Token>
OVSX_PAT=<Open VSX Registry Personal Access Token>
```

## Build Artifacts

### GitHub Actions Artifacts

- **Build Artifacts**: Available for 30 days after each build
- **Release Assets**: Permanently available on GitHub releases
- **Download Links**: Direct download from release pages

### Local Build Output

```
kry-vscode-extension/
├── out/                    # Compiled TypeScript
├── *.vsix                  # Packaged extension
└── node_modules/           # Dependencies
```

## Testing Locally

### Install Local Build

```bash
# Package the extension
npm run package

# Install in VS Code
code --install-extension kry-language-support-1.0.0.vsix

# Or use VS Code UI:
# 1. Open VS Code
# 2. Go to Extensions (Ctrl+Shift+X)
# 3. Click "..." menu
# 4. Select "Install from VSIX..."
# 5. Choose the .vsix file
```

### Uninstall for Testing

```bash
# Uninstall via command line
code --uninstall-extension kryonlabs.kry-language-support

# Or use VS Code Extensions panel
```

## Troubleshooting

### Build Issues

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear build output
npm run clean

# Rebuild everything
npm run build
```

### Extension Issues

```bash
# Check VS Code developer tools
# In Extension Development Host: Ctrl+Shift+I

# View extension logs
# VS Code Output panel > "Log (Extension Host)"
```

### GitHub Actions Issues

- Check workflow logs in GitHub Actions tab
- Verify secrets are properly configured
- Ensure package.json version is updated before tagging

## Performance Notes

- **Large Files**: Extension handles large .kry files efficiently
- **Embedded Scripts**: Performance depends on underlying language extensions
- **Memory Usage**: Minimal impact on VS Code memory usage

## Contributing

See [README.md](README.md) for contribution guidelines and development setup instructions.