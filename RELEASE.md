# Release Guide

This guide explains how to version and publish the `@tulx/utils` package using Changesets.

## Quick Start

### Making Changes

1. Make your code changes
2. Create a changeset:
   ```bash
   pnpm changeset
   ```
3. Commit your changes:
   ```bash
   git add .
   git commit -m "feat: add new utility function"
   ```

### Publishing a Release

1. **Check pending changesets**:
   ```bash
   pnpm publish:check
   ```

2. **Update versions**:
   ```bash
   pnpm version
   ```
   This automatically:
   - Updates package versions based on changesets
   - Updates CHANGELOG.md
   - Removes used changeset files

3. **Build and test**:
   ```bash
   pnpm release
   ```

4. **Publish to npm**:
   ```bash
   pnpm publish:utils
   ```

5. **Commit and push**:
   ```bash
   git add .
   git commit -m "chore: release v0.0.X"
   git push
   ```

## Complete Workflow

For a complete automated workflow:

```bash
pnpm publish:full
```

This runs:
- `pnpm version` - Update versions from changesets
- `pnpm release` - Build and test
- `pnpm publish:utils` - Publish to npm

## Understanding Changesets

### What is a Changeset?

A changeset is a file that describes:
- Which package(s) should be released
- What type of change (patch, minor, or major)
- A summary of the changes

### Creating a Changeset

```bash
pnpm changeset
```

You'll be prompted to:
1. Select packages to release (usually `@tulx/utils`)
2. Choose change type:
   - **patch** - Bug fixes, documentation, type improvements
   - **minor** - New features, new functions
   - **major** - Breaking changes
3. Write a summary of changes

### Changeset File Format

Changesets are stored in `.changeset/` directory as markdown files:

```markdown
---
"@tulx/utils": patch
---

Update README with TypeScript badge and documentation link
```

## Version Types

### Patch (0.0.x)

Use for:
- Bug fixes
- Type improvements
- Documentation updates
- README changes
- Performance improvements (non-breaking)

Example:
```bash
pnpm changeset
# Select: patch
# Summary: Fix type issue in chunk function
```

### Minor (0.x.0)

Use for:
- Adding new functions
- Adding new features
- New utility categories
- Backward-compatible API additions

Example:
```bash
pnpm changeset
# Select: minor
# Summary: Add new array manipulation functions
```

### Major (x.0.0)

Use for:
- Removing functions
- Changing function signatures
- Breaking API changes
- Removing features

Example:
```bash
pnpm changeset
# Select: major
# Summary: Remove deprecated functions, update API
```

## Available Scripts

### Changeset Management

- `pnpm changeset` - Create a new changeset
- `pnpm changeset:status` - Check status of pending changesets
- `pnpm changeset:version` - Update versions from changesets
- `pnpm publish:check` - Alias for `changeset:status`

### Version Management

- `pnpm version` - Update versions and install dependencies
  - Runs `changeset:version`
  - Updates lockfile

### Publishing

- `pnpm publish:utils` - Publish @tulx/utils to npm
- `pnpm publish:prepare` - Prepare for publishing (version + release)
- `pnpm publish:full` - Complete workflow (prepare + publish)

### Testing & Building

- `pnpm release` - Build and run tests
- `pnpm build` - Build all packages
- `pnpm test:run` - Run all tests once

## Step-by-Step Example

### Example: Adding a New Function

1. **Create the function**:
   ```bash
   # Create files
   touch packages/utils/src/arrays/my-function.ts
   touch packages/utils/src/arrays/my-function.test.ts
   ```

2. **Implement and test**:
   - Write the function
   - Write tests
   - Run `pnpm test:run` to verify

3. **Export the function**:
   - Add export to `packages/utils/src/index.ts`

4. **Create changeset**:
   ```bash
   pnpm changeset
   # Select: @tulx/utils
   # Type: minor
   # Summary: Add myFunction utility for arrays
   ```

5. **Commit changes**:
   ```bash
   git add .
   git commit -m "feat(arrays): add myFunction utility"
   ```

6. **When ready to release**:
   ```bash
   # Update versions
   pnpm version
   
   # Build and test
   pnpm release
   
   # Publish
   pnpm publish:utils
   
   # Commit and push
   git add .
   git commit -m "chore: release v0.1.0"
   git push
   ```

## Troubleshooting

### No Changesets Found

If you see "no changesets were found":
- Make sure you created a changeset with `pnpm changeset`
- Check `.changeset/` directory for changeset files

### Version Already Exists

If npm says the version already exists:
- Check current version: `npm view @tulx/utils version`
- Make sure you ran `pnpm version` to update the version
- Verify `packages/utils/package.json` has the new version

### Build Fails Before Publish

The `prepublishOnly` script automatically runs build and tests before publishing. If it fails:
- Fix build errors
- Fix test failures
- Then try publishing again

### Not Logged In to npm

```bash
npm login
# Enter your npm credentials
```

Verify login:
```bash
npm whoami
```

## Best Practices

1. **Create changesets immediately** after making changes
2. **Use descriptive summaries** in changesets
3. **Test before publishing** - always run `pnpm release`
4. **Commit changesets** with your code changes
5. **Review CHANGELOG.md** after running `pnpm version`
6. **Tag releases** in git (optional but recommended):
   ```bash
   git tag v0.0.5
   git push origin v0.0.5
   ```

## Configuration

Changesets configuration is in `.changeset/config.json`:

```json
{
  "changelog": "@changesets/cli/changelog",
  "commit": false,
  "access": "public",
  "baseBranch": "main",
  "updateInternalDependencies": "patch",
  "ignore": ["@tulx/docs"]
}
```

- `access: "public"` - Packages are published as public
- `commit: false` - Don't auto-commit changeset files
- `ignore` - Packages that shouldn't be versioned

## See Also

- [DEVELOPER_GUIDE.md](./DEVELOPER_GUIDE.md) - Full development guide
- [Changesets Documentation](https://github.com/changesets/changesets) - Official Changesets docs

