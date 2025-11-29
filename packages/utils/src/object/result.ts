/**
 * This method is like get except that if the resolved value is a function it's invoked with the this binding of its parent object and its result is returned.
 *
 * @param object - The object to query.
 * @param path - The path of the property to resolve.
 * @param defaultValue - The value returned for resolved undefined values.
 * @returns Returns the resolved value.
 *
 * @example
 * ```ts
 * const object = { 'a': [{ 'b': { 'c1': 3, 'c2': () => 4 } }] };
 * result(object, 'a[0].b.c1'); // 3
 * result(object, 'a[0].b.c2'); // 4
 * result(object, 'a[0].b.c3', 'default'); // 'default'
 * ```
 */
export function result<T = unknown>(
  object: Record<string, unknown>,
  path: string | readonly (string | number)[],
  defaultValue?: T
): T | undefined {
  const pathArray = Array.isArray(path) ? path : parsePath(String(path));
  let current: unknown = object;

  for (const key of pathArray) {
    if (
      current === null ||
      current === undefined ||
      typeof current !== 'object'
    ) {
      return defaultValue;
    }
    current = (current as Record<string, unknown>)[String(key)];
  }

  if (current === undefined) {
    return defaultValue;
  }

  if (typeof current === 'function') {
    return (current as () => T)();
  }

  return current as T;
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
