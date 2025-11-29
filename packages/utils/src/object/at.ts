/**
 * Creates an array of values corresponding to paths of object.
 *
 * @param object - The object to iterate over.
 * @param paths - The property paths to pick.
 * @returns Returns the picked values.
 *
 * @example
 * ```ts
 * const object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
 * at(object, ['a[0].b.c', 'a[1]']); // [3, 4]
 * ```
 */
export function at<T = unknown>(
  object: Record<string, unknown>,
  paths: readonly (string | readonly (string | number)[])[]
): (T | undefined)[] {
  return paths.map((path) => {
    const pathArray = Array.isArray(path) ? path : parsePath(String(path));
    let current: unknown = object;

    for (const key of pathArray) {
      if (current === null || current === undefined || typeof current !== 'object') {
        return undefined;
      }
      current = (current as Record<string, unknown>)[String(key)];
    }

    return current as T;
  });
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

