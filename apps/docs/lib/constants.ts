import {
  ArrowRight,
  Box,
  Calculator,
  Calendar,
  Code,
  Code2,
  Hash,
  Languages,
  Layers,
  List,
  Play,
  Type,
  Wrench,
  Zap,
} from 'lucide-react';
import type { ComponentType } from 'react';

import type { FunctionCategory } from './functions';

export const CATEGORY_ICONS: Record<
  FunctionCategory,
  ComponentType<{ className?: string }>
> = {
  arrays: List,
  collection: Layers,
  string: Type,
  object: Box,
  number: Hash,
  date: Calendar,
  function: Code,
  lang: Languages,
  math: Calculator,
  util: Wrench,
  seq: ArrowRight,
};

export const HERO_BADGE_TEXT = '300+ utility functions and counting';

export const HERO_TITLE = 'Your TypeScript Utility Library';

export const HERO_DESCRIPTION =
  'Fast, tested, and tree-shakeable utility functions for modern JavaScript and TypeScript development. Try them in your browser before installing.';

export const INSTALL_COMMAND = 'npm install @tulx/utils';

export const GITHUB_URL = 'https://github.com/haykavanesyan/tulx';

export const FEATURES = [
  {
    icon: Play,
    title: 'Live Playground',
    description:
      'Test functions directly in your browser with our interactive playground',
  },
  {
    icon: Code2,
    title: 'TypeScript Support',
    description: 'Fully typed with TypeScript for better developer experience',
  },
  {
    icon: Zap,
    title: '300+ Functions',
    description:
      'Comprehensive collection of utility functions for arrays, objects, strings, and more',
  },
] as const;

export const NAVIGATION_ITEMS = [
  { href: '/functions', label: 'Functions' },
  { href: '/playground', label: 'Playground' },
  { href: '/docs', label: 'Docs' },
] as const;

export const FOOTER_LINKS = {
  resources: [
    { href: '/functions', label: 'All Functions' },
    { href: '/playground', label: 'Playground' },
  ],
} as const;

export const DEFAULT_PLAYGROUND_CODE = `// Import the function you want to test
import { /* function name */ } from '@tulx/utils';

// Write your code here
const result = /* function call */;
console.log(result);
`;

export const SEARCH_DEBOUNCE_MS = 300;

export const COPY_SUCCESS_TIMEOUT_MS = 2000;
