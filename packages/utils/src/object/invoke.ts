/**
 * Invokes the method at path of object.
 *
 * @param object - The object to query.
 * @param path - The path of the method to invoke.
 * @param args - The arguments to invoke the method with.
 * @returns Returns the result of the invoked method.
 *
 * @example
 * ```ts
 * const object = { 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] };
 * invoke(object, 'a[0].b.c.slice', 1, 3); // [2, 3]
 * ```
 */
export function invoke(
  object: Record<string, unknown>,
  path: string | readonly (string | number)[],
  ...args: readonly unknown[]
): unknown {
  const pathArray = Array.isArray(path) ? path : parsePath(String(path));
  const methodName = pathArray.pop();
  if (!methodName) {
    return undefined;
  }

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

  if (
    current &&
    typeof (current as Record<string, unknown>)[String(methodName)] ===
      'function'
  ) {
    const method = (current as Record<string, unknown>)[String(methodName)] as (
      ...args: unknown[]
    ) => unknown;
    return method.apply(current, [...args]);
  }

  return undefined;
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
