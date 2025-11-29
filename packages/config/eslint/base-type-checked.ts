import base from './base';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore - ESLint 8 types are built-in
import type { Linter } from 'eslint';

/**
 * Base ESLint configuration with type-checking rules
 * Use this when you have a tsconfig.json and want stricter type checking
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const baseConfig = base as any;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const config = {
  ...baseConfig,
  parserOptions: {
    ...baseConfig.parserOptions,
    project: true,
  },
  extends: [
    ...(baseConfig.extends ?? []),
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  rules: {
    ...base.rules,
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-misused-promises': 'error',
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    '@typescript-eslint/prefer-reduce-type-parameter': 'error',
    '@typescript-eslint/prefer-return-this-type': 'error',
  },
};

// ESLint requires CommonJS export for config files
// eslint-disable-next-line import/no-default-export
export default config as unknown as Linter.Config;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
module.exports = config as any;
