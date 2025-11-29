/**
 * Checks if path is a direct or inherited property of object.
 *
 * @param object - The object to query.
 * @param path - The path to check.
 * @returns Returns true if path exists, else false.
 *
 * @example
 * ```ts
 * const object = Object.create({ 'a': Object.create({ 'b': 2 }) });
 * hasIn(object, 'a'); // true
 * hasIn(object, 'a.b'); // true
 * hasIn(object, 'b'); // false
 * ```
 */
export function hasIn(
  object: Record<string, unknown>,
  path: string | readonly (string | number)[]
): boolean {
  const pathArray = Array.isArray(path) ? path : parsePath(String(path));
  let current: unknown = object;

  for (const key of pathArray) {
    if (current === null || current === undefined || typeof current !== 'object') {
      return false;
    }
    const keyStr = String(key);
    if (!(keyStr in (current as Record<string, unknown>))) {
      return false;
    }
    current = (current as Record<string, unknown>)[keyStr];
  }

  return true;
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

