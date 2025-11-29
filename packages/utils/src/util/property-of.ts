/**
 * The opposite of property; this method creates a function that returns the value at a given path of object.
 *
 * @param object - The object to query.
 * @returns Returns the new function.
 *
 * @example
 * ```ts
 * const array = [0, 1, 2];
 * const object = { 'a': array, 'b': array, 'c': array };
 * map(['a[2]', 'c[0]'], propertyOf(object)); // [2, 0]
 * ```
 */
export function propertyOf(
  object: Record<string, unknown>
): (path: string | readonly (string | number)[]) => unknown {
  return function (path: string | readonly (string | number)[]): unknown {
    const pathArray = Array.isArray(path) ? path : parsePath(String(path));
    let current: unknown = object;

    for (const key of pathArray) {
      if (
        current === null ||
        current === undefined ||
        typeof current !== 'object'
      ) {
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
