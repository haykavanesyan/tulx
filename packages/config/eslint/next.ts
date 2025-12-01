import base from './base';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore - ESLint 8 types are built-in
import type { Linter } from 'eslint';

/**
 * ESLint configuration for Next.js projects
 * Extends base configuration with Next.js specific rules
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const baseConfig = base as any;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const config = {
  ...baseConfig,
  extends: [
    ...(baseConfig.extends?.filter((e: string) => !e.includes('import')) ?? []),
    'next/core-web-vitals',
    'plugin:react/recommended',
    'prettier',
  ],
  plugins: [
    ...(baseConfig.plugins?.filter(
      (p: string) => p !== 'react' && p !== 'react-hooks'
    ) ?? []),
    'react',
  ],
  rules: {
    ...baseConfig.rules,
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
    ...baseConfig.settings,
    react: {
      version: 'detect',
    },
  },
};

// ESLint requires CommonJS export for config files
// eslint-disable-next-line import/no-default-export
export default config as unknown as Linter.Config;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
module.exports = config as any;
