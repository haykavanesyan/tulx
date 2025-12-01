import type { FunctionMetadata } from '../functions';

export function transformImports(code: string): string {
  let transformed = code;

  // Transform named imports: import { name } from '@tulx/utils'
  transformed = transformed.replace(
    /import\s+{([^}]+)}\s+from\s+['"]@tulx\/utils['"];?/g,
    (_match, imports) => {
      const importList = imports
        .split(',')
        .map((imp: string) => imp.trim())
        .filter(Boolean);

      return importList
        .map((imp: string) => {
          const trimmed = imp.trim();
          const asMatch = trimmed.match(/^(\w+)\s+as\s+(\w+)$/);
          if (asMatch) {
            const [, originalName, alias] = asMatch;
            return `const ${alias} = tulxUtils.${originalName};`;
          }
          return `const ${trimmed} = tulxUtils.${trimmed};`;
        })
        .join('\n');
    }
  );

  // Transform namespace imports: import * as name from '@tulx/utils'
  transformed = transformed.replace(
    /import\s+\*\s+as\s+(\w+)\s+from\s+['"]@tulx\/utils['"];?/g,
    'const $1 = tulxUtils;'
  );

  return transformed;
}

export function createSandboxCode(transformedCode: string): string {
  return `
    (function() {
      ${transformedCode}
    })();
  `;
}

export function formatConsoleOutput(args: unknown[]): string {
  return args
    .map((arg) => {
      if (typeof arg === 'object' && arg !== null) {
        try {
          return JSON.stringify(arg, null, 2);
        } catch {
          return String(arg);
        }
      }
      return String(arg);
    })
    .join(' ');
}

export function createExampleCode(fn: FunctionMetadata): string {
  if (fn.example) {
    const exampleLines = fn.example.split('\n').map((line) => line.trim());
    const exampleCall =
      exampleLines.find((line) => line && !line.startsWith('//')) || '';
    const cleanCall = exampleCall.split('//')[0].trim();

    return `// ${fn.description}\nimport { ${fn.name} } from '@tulx/utils';\n\nconst result = ${cleanCall};\nconsole.log(result);`;
  }

  return `// Example usage of ${fn.name}\nimport { ${fn.name} } from '@tulx/utils';\n\nconst result = ${fn.name}(/* your arguments */);\nconsole.log(result);`;
}
