/**
 * The opposite of method; this method creates a function that invokes the method at a given path of object.
 *
 * @param object - The object to query.
 * @param args - The arguments to invoke the method with.
 * @returns Returns the new invoker function.
 *
 * @example
 * ```ts
 * const array = [
 *   { 'a': { 'b': () => 2 } },
 *   { 'a': { 'b': () => 1 } }
 * ];
 * map(array, methodOf({ 'a': { 'b': () => 3 } })); // [3, 3]
 * ```
 */
export function methodOf(
  object: Record<string, unknown>,
  ...args: readonly unknown[]
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

    if (typeof current === 'function') {
      return (current as (...args: unknown[]) => unknown).apply(object, [
        ...args,
      ]);
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
