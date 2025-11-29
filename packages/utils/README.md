# Utilkit

> A modern, type-safe utility library for JavaScript and TypeScript with zero dependencies.

[![npm version](https://img.shields.io/npm/v/utilkit)](https://www.npmjs.com/package/utilkit)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Why Utilkit?

**Utilkit** is a comprehensive utility library designed for modern JavaScript and TypeScript projects. Unlike other utility libraries, Utilkit is built from the ground up with type safety, performance, and developer experience in mind.

### Key Advantages

- **🚀 Zero Dependencies** - No external dependencies means smaller bundle sizes and faster installs
- **📦 Tree-Shakeable** - Import only what you need with ES modules support
- **🔒 Type-Safe** - Built with TypeScript strict mode for complete type safety
- **✨ Pure Functions** - All functions are pure and side-effect free, making them predictable and testable
- **📚 Well Documented** - Every function includes JSDoc with examples
- **🎯 Modern Build** - Supports both ESM and CommonJS with optimal output
- **🧪 Fully Tested** - Comprehensive test coverage with Vitest
- **🔧 Developer Friendly** - Clean, readable code without unnecessary abstractions

## Installation

```bash
npm install utilkit
# or
pnpm add utilkit
# or
yarn add utilkit
```

## Usage

```typescript
import { chunk, debounce, groupBy } from 'utilkit';

// Arrays
const chunks = chunk([1, 2, 3, 4, 5], 2);
// [[1, 2], [3, 4], [5]]

// Functions
const debounced = debounce(() => {
  console.log('Debounced!');
}, 300);

// Collections
const grouped = groupBy(['one', 'two', 'three'], 'length');
// { 3: ['one', 'two'], 5: ['three'] }
```

## Categories

Utilkit provides 300+ utility functions organized into logical categories:

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

Utilkit is fully tree-shakeable. Import only the functions you need:

```typescript
// ✅ Good - only imports what you need
import { chunk, debounce } from 'utilkit';

// ❌ Avoid - imports entire library
import * as utilkit from 'utilkit';
```

Modern bundlers like Webpack, Rollup, and Vite will automatically remove unused code.

## TypeScript Support

Utilkit is written in TypeScript and provides excellent type inference:

```typescript
import { groupBy } from 'utilkit';

interface User {
  name: string;
  age: number;
}

const users: User[] = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
];

// TypeScript knows the return type
const grouped = groupBy(users, 'age');
// Type: Record<number, User[]>
```

## Comparison with Other Libraries

### vs Lodash

- **Smaller Bundle Size** - Tree-shakeable ES modules mean you only bundle what you use
- **Zero Dependencies** - Lodash has dependencies, Utilkit has none
- **Better TypeScript** - Modern TypeScript with strict mode and better type inference
- **Modern Code** - Clean, readable code without legacy patterns

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

Utilkit follows these core principles:

1. **Pure Functions** - No side effects, predictable behavior
2. **Type Safety First** - Full TypeScript support with strict mode
3. **Performance** - Optimized implementations for common use cases
4. **Simplicity** - Clean, readable code without unnecessary complexity
5. **Developer Experience** - Great documentation and helpful error messages

## Browser Support

Utilkit supports all modern browsers that support ES2015+. For older browsers, use a transpiler like Babel.

## Contributing

Contributions are welcome! Please read our contributing guidelines before submitting a PR.

## License

MIT © [Your Name]

---

For detailed documentation and examples, visit [documentation website](#) (coming soon).

