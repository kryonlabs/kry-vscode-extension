# KRY Language Support for Visual Studio Code

A comprehensive Visual Studio Code extension providing language support for KRY (Kryon UI Language) files with syntax highlighting, embedded script support, intelligent snippets, and more.

## Features

### 🎨 **Syntax Highlighting**
- **Complete KRY Language Support**: Full syntax highlighting for all KRY language constructs
- **UI Elements**: App, Container, Text, Button, Input, Image with proper styling
- **Directives**: @include, @variables, @script with distinct highlighting
- **Style Definitions**: Style blocks with property highlighting and pseudo-selectors
- **Component Definitions**: Define blocks with Properties support
- **Variable Substitution**: $variable highlighting and substitution

### 🔧 **Embedded Script Support**
- **Multi-Language Scripts**: Full syntax highlighting for embedded scripts
  - **Lua**: Complete Lua syntax highlighting in @script "lua" blocks
  - **JavaScript**: Full JavaScript support in @script "javascript" blocks  
  - **Python**: Python syntax highlighting in @script "python" blocks
  - **Wren**: Wren language support in @script "wren" blocks
- **Language Integration**: Seamless integration with existing VSCode language extensions
- **Intelligent Parsing**: Proper scope detection for embedded languages

### ✨ **Smart Snippets**
- **Quick UI Creation**: Instant snippets for all KRY elements
  - `app` - Complete App template
  - `container` - Container with layout options
  - `button` - Interactive button with onClick
  - `text` - Text element with alignment
  - `input` - Input field with validation
  - `image` - Image with sizing
- **Style Snippets**: 
  - `style` - Style definition with common properties
  - `stylehover` - Style with hover states
- **Component Snippets**:
  - `define` - Component definition with Properties
- **Script Snippets**:
  - `luascript` - Lua script block template
  - `jsscript` - JavaScript script template
  - `pyscript` - Python script template
- **Layout Helpers**:
  - `layoutrow` - Row layout container
  - `layoutcol` - Column layout container
  - `flexbox` - Flexbox layout configuration

### 🎯 **Intelligent Language Features**
- **Auto-Completion**: Context-aware completions for KRY syntax
- **Bracket Matching**: Automatic bracket and brace matching
- **Auto-Indentation**: Smart indentation for nested elements
- **Comment Support**: Line (#) and block (/* */) comments
- **Folding**: Code folding for elements, styles, and script blocks

### 🌙 **Custom Theme**
- **KRY Dark Theme**: Purpose-built dark theme optimized for KRY development
- **Syntax-Aware Colors**: Distinct colors for different KRY constructs
- **Embedded Script Highlighting**: Proper syntax colors for embedded languages
- **High Contrast**: Improved readability for long coding sessions

### ⚙️ **Configuration Options**
- **Embedded Script Control**: Enable/disable embedded script highlighting
- **Default Script Language**: Set preferred script language for new blocks
- **Auto-Indentation**: Customize indentation behavior
- **Format on Save**: Automatic formatting options

## Installation

### From VS Code Marketplace
1. Open Visual Studio Code
2. Go to Extensions (Ctrl+Shift+X)
3. Search for "KRY Language Support"
4. Click Install

### Manual Installation
1. Download the `.vsix` file from releases
2. Open VS Code
3. Run `Extensions: Install from VSIX...` command
4. Select the downloaded file

## Usage

### Basic Usage
1. Create a new file with `.kry` extension
2. Start typing - syntax highlighting and IntelliSense will activate automatically
3. Use snippets for rapid development (type snippet prefix + Tab)

### Quick Start with Snippets
```kry
# Type 'apptemplate' and press Tab for a complete app structure
@variables {
    primary_color: "#0066CCFF"
    background_color: "#191919FF" 
    text_color: "#FFFFFFFF"
}

App {
    window_title: "My Kryon App"
    
    Container {
        layout: column center
        
        Text {
            text: "Hello, Kryon!"
        }
        
        Button {
            text: "Click Me"
            onClick: "button_clicked"
        }
    }
}

@script "lua" {
    function button_clicked()
        print("Button was clicked!")
    end
}
```

### Embedded Scripts
The extension automatically detects and highlights embedded scripts:

```kry
# Lua script with full syntax highlighting
@script "lua" {
    function handle_click()
        local element = getElementById("my_button")
        element:setText("Clicked!")
    end
}

# JavaScript with full IntelliSense
@script "javascript" {
    function handleClick() {
        const element = getElementById("my_button");
        element.setText("Clicked!");
    }
}

# Python with proper syntax highlighting  
@script "python" {
    def handle_click():
        element = get_element_by_id("my_button")
        element.set_text("Clicked!")
}
```

### Component Development
```kry
# Define reusable components
Define CustomButton {
    Properties {
        label: String = "Button"
        primary: Boolean = false
    }
    
    Button {
        text: $label
        style: $primary ? "primary_button" : "secondary_button"
    }
}

# Use the component
CustomButton {
    label: "Save"
    primary: true
}
```

## Snippet Reference

| Prefix | Description | Expands To |
|--------|-------------|------------|
| `app` | App element | Complete App structure |
| `container` | Container element | Container with layout |
| `text` | Text element | Text with alignment |
| `button` | Button element | Button with onClick |
| `input` | Input element | Input with validation |
| `image` | Image element | Image with sizing |
| `style` | Style definition | Style block with properties |
| `define` | Component definition | Component with Properties |
| `variables` | Variables block | @variables block |
| `luascript` | Lua script | @script "lua" block |
| `jsscript` | JavaScript script | @script "javascript" block |
| `pyscript` | Python script | @script "python" block |
| `layoutrow` | Row layout | Row container |
| `layoutcol` | Column layout | Column container |
| `apptemplate` | Full app template | Complete app structure |

## Configuration

Access extension settings via `File > Preferences > Settings` and search for "KRY":

```json
{
    "kry.enableEmbeddedScriptHighlighting": true,
    "kry.defaultScriptLanguage": "lua",
    "kry.autoIndent": true
}
```

## Commands

- **Format KRY Document**: `Ctrl+Shift+F` - Format the current KRY file
- **Compile to KRB**: `Ctrl+Shift+B` - Compile KRY to KRB binary (requires kryon-compiler)

## KRY Language Overview

KRY (Kryon UI Language) is a declarative language for building cross-platform user interfaces. Key features:

### Elements
- **App**: Root application container
- **Container**: Layout container with flexbox support
- **Text**: Text display with styling options
- **Button**: Interactive button with click handlers
- **Input**: Text input with validation
- **Image**: Image display with sizing

### Layout System
- **Flexbox**: Modern CSS-like layout system
- **Alignment**: start, center, end, space_between, space_around
- **Direction**: row, column
- **Sizing**: fixed, grow, auto

### Styling
- **CSS-like**: Familiar property names and values
- **Inheritance**: Styles cascade through element hierarchy
- **Pseudo-selectors**: :hover, :active, :checked, :disabled
- **Variables**: Reusable values with $variable syntax

### Components
- **Reusable**: Define once, use anywhere
- **Properties**: Configurable parameters with defaults
- **Composition**: Build complex UIs from simple components

### Scripting
- **Multi-language**: Lua, JavaScript, Python, Wren support
- **DOM API**: getElementById, element methods, event handling
- **Event-driven**: onClick, onSubmit, onInput handlers

## Requirements

- Visual Studio Code 1.74.0 or higher
- For embedded script highlighting:
  - Lua extension (recommended: sumneko.lua)
  - JavaScript/TypeScript support (built-in)
  - Python extension (recommended: ms-python.python)

## Known Issues

- Embedded script IntelliSense requires respective language extensions
- Some complex nested structures may need manual indentation adjustment
- Large files with many embedded scripts may impact performance

## Contributing

Contributions welcome! Please see our [Contributing Guide](CONTRIBUTING.md).

### Development Setup
1. Clone the repository
2. Install dependencies: `npm install`
3. Open in VS Code and press F5 to run extension in development mode
4. Make changes and test in the Extension Development Host

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for release history.

## License

0BSD License - see [LICENSE](LICENSE) file for details.

## Support

- **Issues**: [GitHub Issues](https://github.com/kryonlabs/kry-vscode-extension/issues)
- **Documentation**: [KRY Language Docs](https://docs.kryonlabs.com)

---

**Enjoy coding with KRY! 🚀**