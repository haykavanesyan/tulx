/**
 * Sets the value at path of object.
 *
 * @param object - The object to modify.
 * @param path - The path of the property to set.
 * @param value - The value to set.
 * @returns Returns object.
 *
 * @example
 * ```ts
 * const object = { 'a': [{ 'b': { 'c': 3 } }] };
 * set(object, 'a[0].b.c', 4);
 * console.log(object.a[0].b.c); // 4
 * ```
 */
export function set<T extends Record<string, unknown>>(
  object: T,
  path: string | readonly (string | number)[],
  value: unknown
): T {
  const pathArray = Array.isArray(path)
    ? path.map(String)
    : parsePath(String(path));
  let current: Record<string, unknown> = object;

  for (let i = 0; i < pathArray.length - 1; i++) {
    const key = pathArray[i];
    if (
      !(key in current) ||
      typeof current[key] !== 'object' ||
      current[key] === null
    ) {
      current[key] = {};
    }
    current = current[key] as Record<string, unknown>;
  }

  current[pathArray[pathArray.length - 1]] = value;
  return object;
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
