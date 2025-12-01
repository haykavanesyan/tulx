/**
 * Utility functions for working with the utility library metadata
 */

import { cache } from 'react';

import { extractAllFunctions } from './extract-functions';

export type FunctionCategory =
  | 'arrays'
  | 'collection'
  | 'string'
  | 'object'
  | 'number'
  | 'date'
  | 'function'
  | 'lang'
  | 'math'
  | 'util'
  | 'seq';

export type FunctionMetadata = {
  name: string;
  category: FunctionCategory;
  description: string;
  path: string;
  example?: string;
};

export const getFunctions = cache(async (): Promise<FunctionMetadata[]> => {
  try {
    return await extractAllFunctions();
  } catch (error) {
    console.error('Failed to extract functions:', error);
    return [];
  }
});

export async function getFunctionsSync(): Promise<FunctionMetadata[]> {
  return getFunctions();
}

export async function getFunctionsByCategory(
  category: FunctionCategory
): Promise<FunctionMetadata[]> {
  const functions = await getFunctions();
  return functions.filter((fn) => fn.category === category);
}

export async function getFunction(
  name: string
): Promise<FunctionMetadata | undefined> {
  const functions = await getFunctions();
  return functions.find((fn) => fn.name === name);
}

export async function searchFunctions(
  query: string
): Promise<FunctionMetadata[]> {
  const functions = await getFunctions();
  const lowerQuery = query.toLowerCase();
  return functions.filter(
    (fn) =>
      fn.name.toLowerCase().includes(lowerQuery) ||
      fn.description.toLowerCase().includes(lowerQuery)
  );
}

export const categories: {
  id: FunctionCategory;
  name: string;
  description: string;
}[] = [
  { id: 'arrays', name: 'Arrays', description: 'Array manipulation utilities' },
  {
    id: 'collection',
    name: 'Collection',
    description: 'Collection iteration and transformation',
  },
  {
    id: 'string',
    name: 'String',
    description: 'String manipulation utilities',
  },
  {
    id: 'object',
    name: 'Object',
    description: 'Object manipulation utilities',
  },
  { id: 'number', name: 'Number', description: 'Number utilities' },
  { id: 'date', name: 'Date', description: 'Date utilities' },
  { id: 'function', name: 'Function', description: 'Function utilities' },
  { id: 'lang', name: 'Lang', description: 'Type checking and conversion' },
  { id: 'math', name: 'Math', description: 'Mathematical operations' },
  { id: 'util', name: 'Util', description: 'General utilities' },
  { id: 'seq', name: 'Seq', description: 'Sequence utilities' },
];
