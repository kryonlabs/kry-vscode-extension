# Changelog

All notable changes to the KRY Language Support extension will be documented in this file.

## [1.0.0] - 2025-07-06

### Added
- **Initial Release** 🎉
- Complete syntax highlighting for KRY language constructs
- Embedded script support for Lua, JavaScript, Python, and Wren
- 25+ intelligent code snippets for rapid development
- Custom KRY Dark theme optimized for KRY development
- Auto-completion and IntelliSense for KRY syntax
- Bracket matching and auto-indentation
- Support for @include, @variables, and @script directives
- Component definition highlighting with Properties blocks
- Style definition with pseudo-selector support (:hover, :active, etc.)
- Variable substitution highlighting ($variable syntax)
- Language configuration with proper commenting and folding
- File icons for .kry files in explorer
- Command palette integration
- Configurable extension settings

### Language Features
- **Elements**: App, Container, Text, Button, Input, Image
- **Directives**: @include, @variables, @script
- **Components**: Define blocks with Properties
- **Styling**: CSS-like styles with pseudo-selectors
- **Scripts**: Multi-language embedded scripting
- **Variables**: Substitution with $variable syntax
- **Layout**: Flexbox layout system support

### Embedded Script Languages
- **Lua**: Full syntax highlighting via lua language extension
- **JavaScript**: Complete JavaScript support
- **Python**: Python syntax highlighting integration
- **Wren**: Wren language support

### Snippets Categories
- **Elements**: Quick creation of UI elements
- **Layouts**: Row, column, flexbox layouts
- **Styles**: Style definitions with hover states
- **Components**: Reusable component definitions
- **Scripts**: Script blocks for all supported languages
- **Templates**: Complete app templates
- **Utilities**: Colors, DOM access, event handlers

### Theme Features
- **Dark Theme**: Purpose-built for KRY development
- **Syntax Colors**: Distinct highlighting for each construct
- **High Contrast**: Optimized readability
- **Embedded Support**: Proper colors for embedded languages

### Configuration Options
- Enable/disable embedded script highlighting
- Default script language selection
- Auto-indentation preferences
- Format on save settings

## [Unreleased]

### Planned Features
- Language server for advanced IntelliSense
- Real-time KRY compilation and preview
- Component library integration
- Advanced debugging support
- Live reload during development
- Property validation and suggestions
- Auto-formatting improvements
- More color themes (light theme variants)
- Extension API for third-party integrations

### Possible Enhancements
- Hover documentation for properties
- Go-to-definition for components and styles
- Find all references functionality
- Refactoring support (rename symbols)
- Error squiggles with diagnostic information
- Tree view for component structure
- Integrated terminal for kryon-compiler commands
- Git integration for .kry files
- Performance optimizations for large files

---

**Legend:**
- 🎉 Major feature
- ✨ Enhancement
- 🐛 Bug fix
- 📚 Documentation
- ⚡ Performance
- 🔧 Configuration