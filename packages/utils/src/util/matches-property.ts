/**
 * Creates a function that performs a partial deep comparison between the value at path of a given object and srcValue.
 *
 * @param path - The path of the property to get.
 * @param srcValue - The value to match.
 * @returns Returns the new spec function.
 *
 * @example
 * ```ts
 * const objects = [
 *   { 'a': 1, 'b': 2, 'c': 3 },
 *   { 'a': 4, 'b': 5, 'c': 6 }
 * ];
 * find(objects, matchesProperty('a', 4)); // { 'a': 4, 'b': 5, 'c': 6 }
 * ```
 */
export function matchesProperty<T extends Record<string, unknown>>(
  path: string | readonly (string | number)[],
  srcValue: unknown
): (object: T) => boolean {
  return function (object: T): boolean {
    const pathArray = Array.isArray(path) ? path : parsePath(String(path));
    let current: unknown = object;

    for (const key of pathArray) {
      if (
        current === null ||
        current === undefined ||
        typeof current !== 'object'
      ) {
        return false;
      }
      current = (current as Record<string, unknown>)[String(key)];
    }

    return current === srcValue;
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
