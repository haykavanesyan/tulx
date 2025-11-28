/**
 * Base ESLint configuration with type-checking rules
 * Use this when you have a tsconfig.json and want stricter type checking
 */

const base = require('./base');

module.exports = {
  ...base,
  parserOptions: {
    ...base.parserOptions,
    project: true,
  },
  extends: [
    ...base.extends,
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

