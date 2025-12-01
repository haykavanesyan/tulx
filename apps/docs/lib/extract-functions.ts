import { readFile } from 'fs/promises';
import { join } from 'path';

import type { FunctionCategory, FunctionMetadata } from './functions';

type JSDocInfo = {
  description: string;
  example?: string;
};

function parseJSDoc(content: string): JSDocInfo {
  const jsdocMatch = content.match(/\/\*\*([\s\S]*?)\*\//);
  if (!jsdocMatch) {
    return { description: '' };
  }

  const jsdoc = jsdocMatch[1];
  const lines = jsdoc
    .split('\n')
    .map((line) => line.trim().replace(/^\* ?/, ''));

  let description = '';
  let example = '';
  let inExample = false;
  let inCodeBlock = false;

  for (const line of lines) {
    if (line.startsWith('@example')) {
      inExample = true;
      continue;
    }

    if (line.startsWith('@')) {
      inExample = false;
      continue;
    }

    if (line.includes('```')) {
      inCodeBlock = !inCodeBlock;
      if (inExample && inCodeBlock) {
        continue;
      }
    }

    if (!inExample && line && !line.startsWith('@')) {
      description += (description ? ' ' : '') + line;
    }

    if (inExample && inCodeBlock && line && !line.includes('```')) {
      example += (example ? '\n' : '') + line;
    }
  }

  // Clean up example - remove ts/js tags and extract first meaningful line
  const cleanedExample = example
    .split('\n')
    .map((l) => l.trim())
    .filter((l) => l && !l.startsWith('```') && !l.match(/^```ts?$/))
    .slice(0, 3)
    .join('\n');

  return {
    description: description.trim(),
    example: cleanedExample || undefined,
  };
}

function extractExportsFromIndex(
  content: string
): Array<{ name: string; path: string }> {
  const exports: Array<{ name: string; path: string }> = [];

  // Match both single and multiple exports: export { name } from './path' or export { name1, name2 } from './path'
  const exportRegex = /export\s+{\s*([^}]+)\s*}\s+from\s+['"]\.\/([^'"]+)['"]/g;

  let match;
  while ((match = exportRegex.exec(content)) !== null) {
    const [, names, path] = match;
    const normalizedPath = path.replace(/\\/g, '/');

    // Split multiple exports: "name1, name2" -> ["name1", "name2"]
    const functionNames = names.split(',').map((n) => n.trim());

    for (const name of functionNames) {
      exports.push({ name, path: normalizedPath });
    }
  }

  return exports;
}

function getCategoryFromPath(path: string): FunctionCategory {
  const categoryMatch = path.match(/^([^/]+)/);
  if (!categoryMatch) {
    return 'util';
  }

  const category = categoryMatch[1] as FunctionCategory;
  const validCategories: FunctionCategory[] = [
    'arrays',
    'collection',
    'string',
    'object',
    'number',
    'date',
    'function',
    'lang',
    'math',
    'util',
    'seq',
  ];

  return validCategories.includes(category) ? category : 'util';
}

function normalizePath(path: string): string {
  return path.replace(/\\/g, '/');
}

export async function extractAllFunctions(): Promise<FunctionMetadata[]> {
  const utilsPath = join(process.cwd(), '..', '..', 'packages', 'utils', 'src');
  const indexPath = join(utilsPath, 'index.ts');

  const indexContent = await readFile(indexPath, 'utf-8');
  const exports = extractExportsFromIndex(indexContent);

  const functions: FunctionMetadata[] = [];

  for (const { name, path } of exports) {
    const filePath = join(utilsPath, `${path}.ts`);
    let description = '';
    let example: string | undefined;

    try {
      const fileContent = await readFile(filePath, 'utf-8');
      const jsdoc = parseJSDoc(fileContent);
      description = jsdoc.description || `${name} function`;
      example = jsdoc.example;
    } catch {
      description = `${name} function`;
    }

    const category = getCategoryFromPath(path);
    const normalizedPath = normalizePath(path);

    functions.push({
      name,
      category,
      description,
      path: normalizedPath,
      example,
    });
  }

  return functions.sort((a, b) => {
    if (a.category !== b.category) {
      return a.category.localeCompare(b.category);
    }
    return a.name.localeCompare(b.name);
  });
}
