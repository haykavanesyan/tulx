# Tulx

> A modern, type-safe utility library for JavaScript and TypeScript with zero dependencies.

[![npm version](https://img.shields.io/npm/v/@tulx/utils)](https://www.npmjs.com/package/@tulx/utils)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Why Tulx?

**Tulx** is a comprehensive utility library designed for modern JavaScript and TypeScript projects. Unlike other utility libraries, Tulx is built from the ground up with type safety, performance, and developer experience in mind.

### Key Advantages

- **🚀 Zero Dependencies** - No external dependencies means smaller bundle sizes and faster installs
- **⚡ High Performance** - Optimized implementations that consistently outperform popular alternatives in comprehensive benchmarks
- **📦 Tree-Shakeable** - Import only what you need with ES modules support
- **🔒 Type-Safe** - Built with TypeScript strict mode for complete type safety
- **✨ Pure Functions** - All functions are pure and side-effect free, making them predictable and testable
- **📚 Well Documented** - Every function includes JSDoc with examples
- **🎯 Modern Build** - Supports both ESM and CommonJS with optimal output
- **🧪 Fully Tested** - Comprehensive test coverage with Vitest
- **🔧 Developer Friendly** - Clean, readable code without unnecessary abstractions

## Installation

```bash
npm install @tulx/utils
# or
pnpm add @tulx/utils
# or
yarn add @tulx/utils
```

## Categories

Tulx provides 300+ utility functions organized into logical categories:

- **Arrays** - Manipulation, transformation, and querying of arrays
- **Collections** - Iteration, filtering, and transformation of collections
- **Objects** - Object manipulation, property access, and merging
- **Strings** - String transformation, formatting, and parsing
- **Functions** - Function composition, debouncing, throttling, and more
- **Numbers** - Number utilities and mathematical operations
- **Math** - Mathematical operations and aggregations
- **Date** - Date utilities
- **Language** - Type checking, type conversion, and equality checks
- **Utilities** - General-purpose helper functions

## Tree-Shaking

Tulx is fully tree-shakeable. Import only the functions you need:

```typescript
// ✅ Good - only imports what you need
import { chunk, debounce } from '@tulx/utils';

// ❌ Avoid - imports entire library
import * as tulx from '@tulx/utils';
```

Modern bundlers like Webpack, Rollup, and Vite will automatically remove unused code.

## TypeScript Support

Tulx is written in TypeScript and provides excellent type inference. All functions are fully typed with TypeScript strict mode, ensuring complete type safety and excellent IDE support.

## Comparison with Other Libraries

### vs Lodash

- **Better Performance** - Benchmarked and optimized to outperform Lodash across multiple categories, especially in object manipulation, function utilities, and language utilities
- **Smaller Bundle Size** - Tree-shakeable ES modules mean you only bundle what you use
- **Zero Dependencies** - Lodash has dependencies, Tulx has none
- **Better TypeScript** - Modern TypeScript with strict mode and better type inference
- **Modern Code** - Clean, readable code without legacy patterns

**Performance:** Extensive benchmarking shows Tulx consistently delivers better performance than Lodash. The library is continuously optimized for modern JavaScript engines, with particular strengths in object operations, function composition, and type checking utilities.

### vs Ramda

- **More Familiar API** - Similar to Lodash, easier migration path
- **Better Performance** - Optimized for common use cases
- **Comprehensive Coverage** - More utility functions out of the box

### vs Native JavaScript

- **Consistent API** - Same interface across all functions
- **Edge Cases Handled** - Properly handles null, undefined, and edge cases
- **Better Type Safety** - TypeScript types for all functions
- **Documentation** - Every function is documented with examples

## Philosophy

Tulx follows these core principles:

1. **Pure Functions** - No side effects, predictable behavior
2. **Type Safety First** - Full TypeScript support with strict mode
3. **Performance First** - Continuously benchmarked and optimized to outperform alternatives
4. **Simplicity** - Clean, readable code without unnecessary complexity
5. **Developer Experience** - Great documentation and helpful error messages

## Performance

Tulx is built with performance in mind. Every function is carefully optimized and benchmarked against popular alternatives. The library consistently shows superior performance across various categories:

- **Object Operations** - Faster object manipulation, merging, and property access
- **Function Utilities** - Optimized debouncing, throttling, memoization, and composition
- **Language Utilities** - Efficient type checking, cloning, and equality comparisons
- **Array Operations** - Fast array transformations and manipulations
- **Collection Methods** - Optimized iteration and transformation functions

All implementations are tested and benchmarked to ensure they meet high performance standards while maintaining code clarity and type safety.

## Browser Support

Tulx supports all modern browsers that support ES2015+. For older browsers, use a transpiler like Babel.

## Contributing

Contributions are welcome! Please read our contributing guidelines before submitting a PR.

## License

This project is licensed under the MIT License.

See the [LICENSE](../../LICENSE) file for the full license text.

MIT © Tulx Contributors

---

For detailed documentation and examples, visit [documentation website](#) (coming soon).
