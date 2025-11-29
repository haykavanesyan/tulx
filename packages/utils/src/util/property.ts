/**
 * Creates a function that returns the value at path of a given object.
 *
 * @param path - The path of the property to get.
 * @returns Returns the new function.
 *
 * @example
 * ```ts
 * const objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 * map(objects, property('a.b')); // [2, 1]
 * ```
 */
export function property<T extends Record<string, unknown>>(
  path: string | readonly (string | number)[]
): (object: T) => unknown {
  return function (object: T): unknown {
    const pathArray = Array.isArray(path) ? path : parsePath(String(path));
    let current: unknown = object;

    for (const key of pathArray) {
      if (current === null || current === undefined || typeof current !== 'object') {
        return undefined;
      }
      current = (current as Record<string, unknown>)[String(key)];
    }

    return current;
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

