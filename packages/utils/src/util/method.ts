/**
 * Creates a function that invokes the method at path of a given object.
 *
 * @param path - The path of the method to invoke.
 * @param args - The arguments to invoke the method with.
 * @returns Returns the new invoker function.
 *
 * @example
 * ```ts
 * const objects = [
 *   { 'a': { 'b': () => 2 } },
 *   { 'a': { 'b': () => 1 } }
 * ];
 * map(objects, method('a.b')); // [2, 1]
 * ```
 */
export function method(
  path: string | readonly (string | number)[],
  ...args: readonly unknown[]
): (object: Record<string, unknown>) => unknown {
  return function (object: Record<string, unknown>): unknown {
    const pathArray = Array.isArray(path) ? path : parsePath(String(path));
    let current: unknown = object;

    for (const key of pathArray) {
      if (current === null || current === undefined || typeof current !== 'object') {
        return undefined;
      }
      current = (current as Record<string, unknown>)[String(key)];
    }

    if (typeof current === 'function') {
      return (current as (...args: unknown[]) => unknown).apply(object, [...args]);
    }

    return undefined;
  };
}

function parsePath(path: string): string[] {
  const keys: string[] = [];
  let current = '';
  let inBrackets = false;

  for (let i = 0; i < path.length; i++) {
    const char = path[i];
    if (char === '[') {
      if (current) {
        keys.push(current);
        current = '';
      }
      inBrackets = true;
    } else if (char === ']') {
      if (current) {
        keys.push(current);
        current = '';
      }
      inBrackets = false;
    } else if (char === '.' && !inBrackets) {
      if (current) {
        keys.push(current);
        current = '';
      }
    } else {
      current += char;
    }
  }

  if (current) {
    keys.push(current);
  }

  return keys;
}

