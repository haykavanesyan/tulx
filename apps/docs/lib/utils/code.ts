import { readFile } from 'fs/promises';
import { join } from 'path';

export async function getFunctionSource(path: string): Promise<string | null> {
  try {
    const utilsPath = join(
      process.cwd(),
      '..',
      '..',
      'packages',
      'utils',
      'src'
    );
    const filePath = join(utilsPath, `${path}.ts`);
    const source = await readFile(filePath, 'utf-8');
    return source;
  } catch {
    return null;
  }
}

export function createImportStatement(functionName: string): string {
  return `import { ${functionName} } from '@tulx/utils';`;
}

export function createExampleCode(
  functionName: string,
  _description: string,
  example?: string
): string {
  if (example) {
    return `import { ${functionName} } from '@tulx/utils';\n\n${example}`;
  }

  return `import { ${functionName} } from '@tulx/utils';\n\nconst result = ${functionName}(/* your arguments */);\nconsole.log(result);`;
}
