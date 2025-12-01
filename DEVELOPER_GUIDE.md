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

The project uses [Changesets](https://github.com/changesets/changesets) for version management and [Semantic Versioning](https://semver.org/) (SemVer):

- **MAJOR** (x.0.0) - Incompatible API changes
- **MINOR** (0.x.0) - New functionality with backward compatibility
- **PATCH** (0.0.x) - Bug fixes with backward compatibility

### Creating a Changeset

When you make changes that should be released, create a changeset:

```bash
pnpm changeset
```

This will:

1. Ask which packages should be released
2. Ask what kind of change (major, minor, or patch)
3. Ask for a summary of the changes
4. Create a changeset file in `.changeset/` directory

### Version Update Process

1. **Create changeset** after making changes:

   ```bash
   pnpm changeset
   ```

2. **Update versions** (when ready to release):

   ```bash
   pnpm version
   ```

   This command will:
   - Read all changesets
   - Update package versions
   - Update CHANGELOG.md files
   - Remove used changeset files
   - Update lockfile

3. **Commit the changes**:
   ```bash
   git add .
   git commit -m "chore: release v0.0.X"
   ```

### Versioning Examples

- **PATCH** (0.0.x): Bug fixes, type improvements, documentation fixes, README updates
- **MINOR** (0.x.0): Adding new functions, new utilities, new features
- **MAJOR** (x.0.0): Removing functions, changing function signatures, breaking API changes

## Publishing Packages

### Complete Publishing Workflow

The project uses Changesets for automated version management and publishing. Follow these steps:

#### Step 1: Create Changeset

After making changes, create a changeset:

```bash
pnpm changeset
```

Follow the prompts to select:

- Package(s) to release (`@tulx/utils`)
- Type of change (patch, minor, or major)
- Summary of changes

#### Step 2: Update Versions

When ready to release, update versions:

```bash
pnpm version
```

This will:

- Read all changesets
- Update package versions automatically
- Update CHANGELOG.md files
- Remove used changeset files
- Update lockfile

#### Step 3: Build and Test

Ensure everything is ready:

```bash
pnpm release
```

This runs:

- `pnpm build` - Builds all packages
- `pnpm test:run` - Runs all tests

Or use the full check:

```bash
pnpm check:all
```

#### Step 4: Publish to npm

**Option A: Using helper script (recommended)**

```bash
pnpm publish:utils
```

**Option B: Manual publish**

```bash
cd packages/utils
npm publish --access public
cd ../..
```

**Option C: Full automated workflow**

```bash
pnpm publish:full
```

This runs:

- `pnpm publish:prepare` (version + release)
- `pnpm publish:utils` (publish to npm)

#### Step 5: Verify Publication

```bash
npm view @tulx/utils version
```

#### Step 6: Commit and Push

```bash
git add .
git commit -m "chore: release v0.0.X"
git push
```

### Available Publishing Scripts

- `pnpm changeset` - Create a new changeset
- `pnpm changeset:status` - Check status of changesets
- `pnpm changeset:version` - Update versions from changesets
- `pnpm version` - Update versions and install dependencies
- `pnpm publish:check` - Check if there are pending changesets
- `pnpm publish:prepare` - Update versions, build, and test
- `pnpm publish:utils` - Publish @tulx/utils to npm
- `pnpm publish:full` - Complete workflow: prepare + publish

### Pre-Publishing Checklist

- [ ] All changes have changesets (`pnpm changeset:status`)
- [ ] All tests pass (`pnpm test:run`)
- [ ] Linter has no errors (`pnpm lint`)
- [ ] Types checked (`pnpm type-check`)
- [ ] Project builds successfully (`pnpm build`)
- [ ] Versions updated (`pnpm version`)
- [ ] Changes committed
- [ ] Logged in to npm (`npm whoami`)

### Publishing Pre-release Versions

For beta or alpha releases:

```bash
cd packages/utils
npm publish --access public --tag beta
# or
npm publish --access public --tag alpha
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
   # Create changeset for your changes
   pnpm changeset

   # Ensure all checks pass
   pnpm check:all
   ```

4. **When ready to release**:

   ```bash
   # Update versions from changesets
   pnpm version

   # Build and test
   pnpm release

   # Commit version changes
   git add .
   git commit -m "chore: release v0.0.X"
   ```

5. **Publish package** (see "Publishing Packages" section)

6. **Create a tag** (optional):

   ```bash
   git tag v0.0.2
   git push origin v0.0.2
   ```

7. **Push changes**:
   ```bash
   git push origin main
   ```

## Pre-Publishing Checklist

- [ ] Changeset created for all changes (`pnpm changeset`)
- [ ] All tests pass (`pnpm test:run`)
- [ ] Linter has no errors (`pnpm lint`)
- [ ] Types checked (`pnpm type-check`)
- [ ] Project builds successfully (`pnpm build`)
- [ ] Versions updated (`pnpm version`)
- [ ] Changes committed
- [ ] Logged in to npm (`npm whoami`)

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
