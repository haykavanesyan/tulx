import type { Linter } from 'eslint';
import base from './base';

/**
 * ESLint configuration for Next.js projects
 * Extends base configuration with Next.js specific rules
 */
const config: Linter.Config = {
  ...base,
  extends: [
    ...(base.extends ?? []),
    'next/core-web-vitals',
    'next/typescript',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  plugins: [...(base.plugins ?? []), 'react', 'react-hooks'],
  rules: {
    ...base.rules,
    // React specific rules
    'react/react-in-jsx-scope': 'off', // Not needed in Next.js
    'react/prop-types': 'off', // Using TypeScript for prop validation
    'react/display-name': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // Next.js specific
    '@next/next/no-html-link-for-pages': 'error',
    '@next/next/no-img-element': 'warn',
  },
  settings: {
    ...base.settings,
    react: {
      version: 'detect',
    },
  },
};

// ESLint requires CommonJS export for config files
// eslint-disable-next-line import/no-default-export
export default config;
module.exports = config;

