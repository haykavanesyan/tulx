# Developer Guide

This document contains instructions for developers working on the Utilify project, including the development process, versioning, and package publishing.

## Table of Contents

- [Project Structure](#project-structure)
- [Environment Setup](#environment-setup)
- [Development Process](#development-process)
- [Versioning](#versioning)
- [Publishing Packages](#publishing-packages)
- [Testing](#testing)
- [Code Style](#code-style)
- [Git Workflow](#git-workflow)

## Project Structure

The project uses a monorepo structure:

```
Utilify/
├── apps/
│   └── docs/              # Next.js documentation site
├── packages/
│   ├── config/            # Shared configurations (ESLint, TypeScript)
│   └── utils/             # Main utility library
├── package.json           # Root package.json
└── pnpm-workspace.yaml    # pnpm workspace configuration
```

### Packages

- **@tulx/utils** - Main utility library (published to npm)
- **@tulx/config** - Internal configurations (not published)
- **apps/docs** - Documentation site (not published)

## Environment Setup

### Requirements

- Node.js >= 18.0.0
- pnpm >= 9.0.0

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd Utilify

# Install dependencies
pnpm install
```

## Development Process

### Creating a New Utility

1. **Determine the category** of the utility:
   - `arrays/` - functions for working with arrays
   - `strings/` - functions for working with strings
   - `objects/` - functions for working with objects
   - `numbers/` - functions for working with numbers
   - `function/` - higher-order functions
   - `math/` - mathematical functions
   - `date/` - functions for working with dates
   - `util/` - helper utilities
   - `lang/` - type checking functions
   - `collection/` - functions for collections
   - `seq/` - functions for sequences

2. **Create files**:

   ```bash
   # Example: creating chunk function
   touch packages/utils/src/arrays/chunk.ts
   touch packages/utils/src/arrays/chunk.test.ts
   ```

3. **Implement the function**:
   - Function must be pure (pure function)
   - Full TypeScript typing
   - JSDoc comments with description, parameters, return value, and examples
   - Follow rules from `.cursor/rules/`

4. **Write tests**:
   - Minimum 90% code coverage
   - Test edge cases (null, undefined, empty arrays, etc.)
   - Use Vitest

5. **Export the function**:
   - Add export to `packages/utils/src/index.ts`
   - Follow category structure

### Example Function Creation

````typescript
// packages/utils/src/arrays/chunk.ts
/**
 * Creates an array of elements split into groups the length of size.
 *
 * @param array - The array to process.
 * @param size - The length of each chunk.
 * @returns Returns the new array of chunks.
 *
 * @example
 * ```ts
 * chunk(['a', 'b', 'c', 'd'], 2); // [['a', 'b'], ['c', 'd']]
 * chunk(['a', 'b', 'c', 'd'], 3); // [['a', 'b', 'c'], ['d']]
 * ```
 */
export function chunk<T>(array: readonly T[], size: number = 1): T[][] {
  if (size < 1) {
    return [];
  }
  const result: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}
````

```typescript
// packages/utils/src/arrays/chunk.test.ts
import { describe, it, expect } from 'vitest';
import { chunk } from './chunk';

describe('chunk', () => {
  it('should split array into chunks of specified size', () => {
    expect(chunk(['a', 'b', 'c', 'd'], 2)).toEqual([
      ['a', 'b'],
      ['c', 'd'],
    ]);
  });

  it('should handle remainder elements', () => {
    expect(chunk(['a', 'b', 'c', 'd'], 3)).toEqual([['a', 'b', 'c'], ['d']]);
  });

  it('should return empty array for size < 1', () => {
    expect(chunk([1, 2, 3], 0)).toEqual([]);
    expect(chunk([1, 2, 3], -1)).toEqual([]);
  });

  it('should handle empty array', () => {
    expect(chunk([], 2)).toEqual([]);
  });
});
```

### Local Development

```bash
# Run tests in watch mode
pnpm test

# Run linter
pnpm lint

# Fix linter errors automatically
pnpm lint:fix

# Check types
pnpm type-check

# Build project
pnpm build

# Run all checks
pnpm check:all
```

## Versioning

The project uses [Semantic Versioning](https://semver.org/) (SemVer):

- **MAJOR** (x.0.0) - Incompatible API changes
- **MINOR** (0.x.0) - New functionality with backward compatibility
- **PATCH** (0.0.x) - Bug fixes with backward compatibility

### Version Update Process

1. **Determine the type of change**:
   - **PATCH** (0.0.x): Bug fixes, type improvements, documentation fixes
   - **MINOR** (0.x.0): Adding new functions, new utilities
   - **MAJOR** (x.0.0): Removing functions, changing signatures of existing functions

2. **Update version in package.json**:

   ```bash
   # Open packages/utils/package.json
   # Change the "version" field
   ```

3. **Create CHANGELOG entry** (optional):
   - Document changes in CHANGELOG.md or README.md

### Versioning Examples

- **0.0.1 → 0.0.2**: Type fixes in functions (PATCH)
- **0.0.2 → 0.1.0**: Adding new function category (MINOR)
- **0.1.0 → 1.0.0**: Removing deprecated functions (MAJOR)

## Publishing Packages

### Pre-Publishing Preparation

1. **Ensure all tests pass**:

   ```bash
   pnpm test:run
   ```

2. **Check linter**:

   ```bash
   pnpm lint
   ```

3. **Check types**:

   ```bash
   pnpm type-check
   ```

4. **Build project**:

   ```bash
   pnpm build
   ```

5. **Verify version is updated**:
   ```bash
   cat packages/utils/package.json | grep version
   ```

### Publishing to npm

1. **Login to npm** (if not already logged in):

   ```bash
   npm login
   ```

2. **Navigate to package directory**:

   ```bash
   cd packages/utils
   ```

3. **Publish package**:

   ```bash
   npm publish
   ```

   Or with a tag (for pre-release versions):

   ```bash
   npm publish --tag beta
   npm publish --tag alpha
   ```

4. **Verify publication**:
   ```bash
   npm view @tulx/utils version
   ```

### Publishing Automation

For automation, you can use a script:

```bash
# From project root
cd packages/utils && npm publish && cd ../..
```

Or add a script to root package.json:

```json
{
  "scripts": {
    "publish:utils": "cd packages/utils && npm publish && cd ../.."
  }
}
```

## Testing

### Running Tests

```bash
# All tests in watch mode
pnpm test

# All tests once
pnpm test:run

# Specific test file
pnpm test -- chunk.test.ts

# With coverage
pnpm test:coverage

# UI mode
pnpm test:ui
```

### Test Requirements

- **Coverage**: Minimum 90%
- **Edge cases**: Must test:
  - `null` and `undefined`
  - Empty arrays/objects
  - Boundary values
  - Invalid input data

- **Test names**: Use descriptive names:
  ```typescript
  it('should return empty array when size is less than 1', () => {
    // ...
  });
  ```

## Code Style

### TypeScript

- Strict mode (`strict: true`) always enabled
- Avoid `any`, use `unknown` for unsafe input data
- All functions must be fully typed
- Use JSDoc for all public functions

### Functions

- Pure functions (pure functions) wherever possible
- One function = one responsibility
- Maximum 30-50 lines per function
- Named exports (not default exports)

### Imports

- In Next.js: absolute imports (`@/components/...`)
- In utilities: relative imports
- Group imports: external → internal

### Errors

- Throw real Error objects
- Provide helpful error messages

## Git Workflow

### Commit Structure

Use [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Commit Types

- `feat`: New feature or utility
- `fix`: Bug fix
- `docs`: Documentation changes
- `refactor`: Code refactoring
- `test`: Adding or changing tests
- `chore`: Build, configuration changes, etc.
- `style`: Formatting changes (don't affect code)
- `perf`: Performance improvements

### Commit Examples

```bash
# New function
git commit -m "feat(arrays): add chunk function"

# Bug fix
git commit -m "fix(function): correct type constraints for function utilities"

# Version update and publish
git commit -m "chore(utils): bump version to 0.0.2 and publish"

# Type fix
git commit -m "fix(function): replace unknown[] with any[] in type constraints"
```

### Git Workflow Process

1. **Create a branch** (if working in a team):

   ```bash
   git checkout -b feat/new-utility
   ```

2. **Make changes** and commit:

   ```bash
   git add .
   git commit -m "feat(arrays): add new utility function"
   ```

3. **Before publishing**:

   ```bash
   # Ensure all checks pass
   pnpm check:all

   # Update version
   # Commit version changes
   git add packages/utils/package.json
   git commit -m "chore(utils): bump version to 0.0.2"
   ```

4. **Publish package** (see "Publishing Packages" section)

5. **Create a tag** (optional):

   ```bash
   git tag v0.0.2
   git push origin v0.0.2
   ```

6. **Push changes**:
   ```bash
   git push origin main
   ```

## Pre-Publishing Checklist

- [ ] All tests pass (`pnpm test:run`)
- [ ] Linter has no errors (`pnpm lint`)
- [ ] Types checked (`pnpm type-check`)
- [ ] Project builds successfully (`pnpm build`)
- [ ] Version updated in `package.json`
- [ ] Changes committed
- [ ] CHANGELOG updated (if used)
- [ ] README is up to date (if there were API changes)

## Useful Commands

```bash
# Full project check
pnpm check:all

# Fix everything automatically
pnpm fix:all

# Clean all build artifacts
pnpm clean

# Format code
pnpm format

# Check formatting
pnpm format:check

# Build all packages
pnpm build

# Run documentation locally
cd apps/docs && pnpm dev
```

## Troubleshooting

### Type Errors

If type errors occur when working with functions:

1. Check that you're using the correct types
2. For higher-order functions, `any[]` may be required instead of `unknown[]`
3. Use `// eslint-disable-next-line @typescript-eslint/no-explicit-any` with a comment explaining the necessity

### Build Errors

```bash
# Clean and rebuild
pnpm clean
pnpm build
```

### Dependency Issues

```bash
# Reinstall dependencies
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

## Contact and Support

For questions and suggestions, create issues in the project repository.

---

**Last updated**: 2024
