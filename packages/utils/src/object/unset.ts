/**
 * Removes the property at path of object.
 *
 * @param object - The object to modify.
 * @param path - The path of the property to unset.
 * @returns Returns true if the property is deleted, else false.
 *
 * @example
 * ```ts
 * const object = { 'a': [{ 'b': { 'c': 7 } }] };
 * unset(object, 'a[0].b.c'); // true
 * console.log(object); // { 'a': [{ 'b': {} }] }
 * ```
 */
export function unset(
  object: Record<string, unknown>,
  path: string | readonly (string | number)[]
): boolean {
  const pathArray = Array.isArray(path) ? path : parsePath(String(path));
  if (pathArray.length === 0) {
    return false;
  }

  let current: Record<string, unknown> = object;
  for (let i = 0; i < pathArray.length - 1; i++) {
    const key = String(pathArray[i]);
    if (
      !(key in current) ||
      typeof current[key] !== 'object' ||
      current[key] === null
    ) {
      return false;
    }
    current = current[key] as Record<string, unknown>;
  }

  const lastKey = String(pathArray[pathArray.length - 1]);
  if (lastKey in current) {
    delete current[lastKey];
    return true;
  }

  return false;
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
