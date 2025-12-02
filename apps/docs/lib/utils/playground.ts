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

/**
 * Extracts code lines from example, removing comments and empty lines
 * Preserves multi-line structures
 */
function extractCodeLines(example: string): string[] {
  const lines = example.split('\n');
  const result: string[] = [];
  let inMultiLine = false;
  let currentBlock = '';

  for (const line of lines) {
    // Remove inline comments
    let cleanLine = line;
    const commentIndex = line.indexOf('//');
    if (commentIndex !== -1) {
      cleanLine = line.substring(0, commentIndex);
    }
    cleanLine = cleanLine.trim();

    if (!cleanLine) {
      continue;
    }

    // Check for multi-line structures (functions, objects, arrays)
    const openBraces = (cleanLine.match(/{/g) || []).length;
    const closeBraces = (cleanLine.match(/}/g) || []).length;
    const openParens = (cleanLine.match(/\(/g) || []).length;
    const closeParens = (cleanLine.match(/\)/g) || []).length;
    const openBrackets = (cleanLine.match(/\[/g) || []).length;
    const closeBrackets = (cleanLine.match(/\]/g) || []).length;

    if (inMultiLine) {
      currentBlock = `${currentBlock}\n${cleanLine}`;
      const totalOpen =
        (currentBlock.match(/{/g) || []).length +
        (currentBlock.match(/\(/g) || []).length +
        (currentBlock.match(/\[/g) || []).length;
      const totalClose =
        (currentBlock.match(/}/g) || []).length +
        (currentBlock.match(/\)/g) || []).length +
        (currentBlock.match(/\]/g) || []).length;

      if (totalOpen <= totalClose) {
        result.push(currentBlock.trim());
        currentBlock = '';
        inMultiLine = false;
      }
    } else {
      const netOpen =
        openBraces +
        openParens +
        openBrackets -
        (closeBraces + closeParens + closeBrackets);

      if (netOpen > 0) {
        inMultiLine = true;
        currentBlock = cleanLine;
      } else {
        result.push(cleanLine);
      }
    }
  }

  if (currentBlock) {
    result.push(currentBlock.trim());
  }

  return result;
}

/**
 * Checks if a line is a variable or function declaration
 * Handles multi-line declarations
 */
function isDeclaration(line: string): boolean {
  const trimmed = line.trim();
  // Check for single-line declarations
  if (
    trimmed.startsWith('const ') ||
    trimmed.startsWith('let ') ||
    trimmed.startsWith('var ') ||
    trimmed.startsWith('function ') ||
    trimmed.startsWith('class ')
  ) {
    return true;
  }
  // Check for multi-line function declarations
  if (trimmed.includes('function ') && trimmed.includes('{')) {
    return true;
  }
  // Check for arrow function assignments (const x = () => ...)
  if (trimmed.match(/^(const|let|var)\s+\w+\s*=/)) {
    return true;
  }
  return false;
}

/**
 * Checks if a line contains a function call
 */
function containsFunctionCall(line: string, functionName: string): boolean {
  // Match function calls like: functionName(...) or obj.functionName(...)
  const regex = new RegExp(`\\b${functionName}\\s*\\(`, 'g');
  return regex.test(line);
}

/**
 * Generates a default example based on function category
 */
function generateDefaultExample(fn: FunctionMetadata): {
  setup: string;
  call: string;
} {
  const { name, category } = fn;

  switch (category) {
    case 'arrays':
      return {
        setup: '',
        call: `${name}([1, 2, 3, 4, 5])`,
      };

    case 'collection':
      return {
        setup: '',
        call: `${name}([1, 2, 3], (item) => item * 2)`,
      };

    case 'string':
      return {
        setup: '',
        call: `${name}('hello world')`,
      };

    case 'object':
      return {
        setup: `const obj = { a: 1, b: 2, c: 3 };`,
        call: `${name}(obj)`,
      };

    case 'number':
      return {
        setup: '',
        call: `${name}(42)`,
      };

    case 'date':
      return {
        setup: '',
        call: `${name}()`,
      };

    case 'function':
      return {
        setup: `const fn = (x: number) => x * 2;`,
        call: `${name}(fn)`,
      };

    case 'lang':
      return {
        setup: '',
        call: `${name}(null)`,
      };

    case 'math':
      return {
        setup: '',
        call: `${name}([1, 2, 3, 4, 5])`,
      };

    case 'util':
      return {
        setup: '',
        call: `${name}()`,
      };

    case 'seq':
      return {
        setup: '',
        call: `${name}([1, 2, 3])`,
      };

    default:
      return {
        setup: '',
        call: `${name}()`,
      };
  }
}

/**
 * Creates example code for playground from function metadata
 */
export function createExampleCode(fn: FunctionMetadata): string {
  const importStatement = `import { ${fn.name} } from '@tulx/utils';`;
  const description = `// ${fn.description}`;

  // If example exists, try to parse it properly
  if (fn.example) {
    const codeLines = extractCodeLines(fn.example);

    if (codeLines.length === 0) {
      // Fallback to default if example is empty
      const defaultExample = generateDefaultExample(fn);
      const parts = [description, importStatement];
      if (defaultExample.setup) {
        parts.push('', defaultExample.setup);
      }
      parts.push(
        '',
        `const result = ${defaultExample.call};`,
        'console.log(result);'
      );
      return parts.join('\n');
    }

    // Find all declarations (const, let, var, function, class)
    const declarations: string[] = [];
    const functionCalls: string[] = [];

    for (const line of codeLines) {
      if (isDeclaration(line)) {
        declarations.push(line);
      } else if (containsFunctionCall(line, fn.name)) {
        // Extract the function call, removing any assignment
        let call = line;
        // Remove variable assignment if present
        const assignMatch = call.match(
          /^\s*(?:const|let|var)\s+\w+\s*=\s*(.+);?$/
        );
        if (assignMatch) {
          call = assignMatch[1];
        }
        // Remove trailing semicolon
        call = call.replace(/;?\s*$/, '');
        functionCalls.push(call);
      }
    }

    // If we found function calls, use them
    if (functionCalls.length > 0) {
      const parts = [description, importStatement];

      // Add declarations if any
      if (declarations.length > 0) {
        parts.push('', ...declarations);
      }

      // Use the first function call (or all if multiple)
      const mainCall = functionCalls[0];
      parts.push('', `const result = ${mainCall};`, 'console.log(result);');

      return parts.join('\n');
    }

    // If no function calls found but we have code, try to use the last meaningful line
    const lastLine = codeLines[codeLines.length - 1];
    if (lastLine && !isDeclaration(lastLine)) {
      const parts = [description, importStatement];

      // Add all declarations
      const allDeclarations = codeLines.filter((line) => isDeclaration(line));
      if (allDeclarations.length > 0) {
        parts.push('', ...allDeclarations);
      }

      // Try to extract a call from the last line
      let call = lastLine;
      const assignMatch = call.match(
        /^\s*(?:const|let|var)\s+\w+\s*=\s*(.+);?$/
      );
      if (assignMatch) {
        call = assignMatch[1];
      }
      call = call.replace(/;?\s*$/, '');

      parts.push('', `const result = ${call};`, 'console.log(result);');
      return parts.join('\n');
    }
  }

  // Fallback: generate default example
  const defaultExample = generateDefaultExample(fn);
  const parts = [description, importStatement];
  if (defaultExample.setup) {
    parts.push('', defaultExample.setup);
  }
  parts.push(
    '',
    `const result = ${defaultExample.call};`,
    'console.log(result);'
  );
  return parts.join('\n');
}
