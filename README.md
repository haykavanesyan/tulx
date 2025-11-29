<div align="center">

# 🛠️ Utilkit

**A modern, type-safe utility library for JavaScript and TypeScript**

[![npm version](https://img.shields.io/npm/v/utilkit)](https://www.npmjs.com/package/utilkit)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3+-blue.svg)](https://www.typescriptlang.org/)

*Zero dependencies • Tree-shakeable • Fully typed • Well documented*

</div>

---

## 📖 About

**Utilkit** is a comprehensive utility library designed for modern JavaScript and TypeScript projects. With 300+ utility functions, it provides everything you need for working with arrays, objects, strings, functions, and more.

### ✨ Why Utilkit?

- 🚀 **Zero Dependencies** - No external dependencies means smaller bundle sizes and faster installs
- 📦 **Tree-Shakeable** - Import only what you need with ES modules support
- 🔒 **Type-Safe** - Built with TypeScript strict mode for complete type safety
- ✨ **Pure Functions** - All functions are pure and side-effect free
- 📚 **Well Documented** - Every function includes JSDoc with examples
- 🎯 **Modern Build** - Supports both ESM and CommonJS
- 🔧 **Developer Friendly** - Clean, readable code without unnecessary abstractions

## 📦 Installation

```bash
npm install utilkit
# or
pnpm add utilkit
# or
yarn add utilkit
```

## 📚 Categories

Utilkit provides utility functions organized into logical categories:

### Arrays
Manipulation, transformation, and querying of arrays.

### Collections
Iteration, filtering, and transformation of collections.

### Objects
Object manipulation, property access, and merging.

### Strings
String transformation, formatting, and parsing.

### Functions
Function composition, debouncing, throttling, and more.

### Numbers & Math
Mathematical operations and aggregations.

### Language Utilities
Type checking, type conversion, and equality checks.

## 🌳 Tree-Shaking

Utilkit is fully tree-shakeable. Import only the functions you need:

```typescript
// ✅ Good - only imports what you need
import { chunk, debounce } from 'utilkit';

// ❌ Avoid - imports entire library
import * as utilkit from 'utilkit';
```

Modern bundlers like Webpack, Rollup, and Vite will automatically remove unused code.

## 🔒 TypeScript Support

Utilkit is written in TypeScript and provides excellent type inference. All functions are fully typed with TypeScript strict mode, ensuring complete type safety and excellent IDE support.

## 📊 Comparison

### vs Lodash

| Feature | Utilkit | Lodash |
|---------|---------|--------|
| Bundle Size | Smaller (tree-shakeable) | Larger |
| Dependencies | Zero | Has dependencies |
| TypeScript | Modern, strict mode | Good, but legacy patterns |
| Code Style | Clean, modern | Some legacy patterns |

### vs Ramda

| Feature | Utilkit | Ramda |
|---------|---------|-------|
| API Style | Familiar (Lodash-like) | Functional, curried by default |
| Performance | Optimized | Good |
| Coverage | 300+ functions | Comprehensive |
| Learning Curve | Easy | Steeper |

### vs Native JavaScript

| Feature | Utilkit | Native JS |
|---------|---------|-----------|
| Consistency | Same API across functions | Varies |
| Edge Cases | Handled properly | May need manual handling |
| Type Safety | Full TypeScript support | Limited |
| Documentation | Every function documented | MDN docs |

## 🌐 Browser Support

Utilkit supports all modern browsers that support ES2015+. For older browsers, use a transpiler like Babel.

## 📖 Documentation

For detailed documentation, examples, and interactive playground, visit our [documentation website](#) (coming soon).

## 📄 License

MIT © Utilkit Contributors

---

<div align="center">

**Made with ❤️ by the Utilkit team**

[Documentation](#) • [npm Package](https://www.npmjs.com/package/utilkit) • [GitHub](https://github.com/your-username/utilify)

</div>
