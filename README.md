<div align="center">

# 🛠️ Tulx

**A modern, type-safe utility library for JavaScript and TypeScript**

[![npm version](https://img.shields.io/npm/v/@tulx/utils)](https://www.npmjs.com/package/@tulx/utils)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3+-blue.svg)](https://www.typescriptlang.org/)

_Zero dependencies • High performance • Tree-shakeable • Fully typed • Well documented_

</div>

---

## 📖 About

**Tulx** is a comprehensive utility library designed for modern JavaScript and TypeScript projects. With 300+ utility functions, it provides everything you need for working with arrays, objects, strings, functions, and more.

### ✨ Why Tulx?

- 🚀 **Zero Dependencies** - No external dependencies means smaller bundle sizes and faster installs
- ⚡ **High Performance** - Optimized implementations that outperform popular alternatives in benchmarks
- 📦 **Tree-Shakeable** - Import only what you need with ES modules support
- 🔒 **Type-Safe** - Built with TypeScript strict mode for complete type safety
- ✨ **Pure Functions** - All functions are pure and side-effect free
- 📚 **Well Documented** - Every function includes JSDoc with examples
- 🎯 **Modern Build** - Supports both ESM and CommonJS
- 🔧 **Developer Friendly** - Clean, readable code without unnecessary abstractions

## 📦 Installation

```bash
npm install @tulx/utils
# or
pnpm add @tulx/utils
# or
yarn add @tulx/utils
```

## 📚 Categories

Tulx provides utility functions organized into logical categories:

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

Tulx is fully tree-shakeable. Import only the functions you need:

```typescript
// ✅ Good - only imports what you need
import { chunk, debounce } from '@tulx/utils';

// ❌ Avoid - imports entire library
import * as tulx from '@tulx/utils';
```

Modern bundlers like Webpack, Rollup, and Vite will automatically remove unused code.

## 🔒 TypeScript Support

Tulx is written in TypeScript and provides excellent type inference. All functions are fully typed with TypeScript strict mode, ensuring complete type safety and excellent IDE support.

## ⚡ Performance

Tulx is built with performance as a core priority. Every function is carefully optimized and benchmarked against popular alternatives. The library consistently demonstrates superior performance across various categories:

- **Object Operations** - Faster object manipulation, merging, and property access
- **Function Utilities** - Optimized debouncing, throttling, memoization, and composition
- **Language Utilities** - Efficient type checking, cloning, and equality comparisons
- **Array Operations** - Fast array transformations and manipulations
- **Collection Methods** - Optimized iteration and transformation functions

All implementations are continuously tested and benchmarked to ensure they meet high performance standards while maintaining code clarity and type safety.

## 📊 Comparison

### vs Lodash

| Feature      | Tulx                      | Lodash                    |
| ------------ | ------------------------ | ------------------------- |
| Performance  | Faster in most cases     | Well optimized            |
| Bundle Size  | Smaller (tree-shakeable) | Larger                    |
| Dependencies | Zero                     | Has dependencies          |
| TypeScript   | Modern, strict mode      | Good, but legacy patterns |
| Code Style   | Clean, modern            | Some legacy patterns      |

**Performance Note:** Tulx has been benchmarked against Lodash and shows superior performance across many categories, particularly in object manipulation, function utilities, and language utilities. The implementations are optimized for modern JavaScript engines.

### vs Ramda

| Feature        | Tulx                      | Ramda                          |
| -------------- | ---------------------- | ------------------------------ |
| API Style      | Familiar (Lodash-like) | Functional, curried by default |
| Performance    | Optimized              | Good                           |
| Coverage       | 300+ functions         | Comprehensive                  |
| Learning Curve | Easy                   | Steeper                        |

### vs Native JavaScript

| Feature       | Tulx                         | Native JS                |
| ------------- | ------------------------- | ------------------------ |
| Consistency   | Same API across functions | Varies                   |
| Edge Cases    | Handled properly          | May need manual handling |
| Type Safety   | Full TypeScript support   | Limited                  |
| Documentation | Every function documented | MDN docs                 |

## 🌐 Browser Support

Tulx supports all modern browsers that support ES2015+. For older browsers, use a transpiler like Babel.

## 📖 Documentation

For detailed documentation, examples, and interactive playground, visit our [documentation website](#) (coming soon).

## 📄 License

This project is licensed under the MIT License.

See the [LICENSE](LICENSE) file for the full license text.

MIT © Tulx Contributors

---

<div align="center">

**Made with ❤️ by the Tulx team**

[Documentation](#) • [npm Package](https://www.npmjs.com/package/@tulx/utils) • [GitHub](https://github.com/haykavanesyan/tulx)

</div>
