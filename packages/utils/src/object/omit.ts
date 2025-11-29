/**
 * Creates an object composed of the own and inherited enumerable property paths of object that are not omitted.
 *
 * @param object - The source object.
 * @param paths - The property paths to omit.
 * @returns Returns the new object.
 *
 * @example
 * ```ts
 * const object = { 'a': 1, 'b': '2', 'c': 3 };
 * omit(object, ['a', 'c']); // { 'b': '2' }
 * ```
 */
export function omit<T extends Record<string, unknown>>(
  object: T,
  paths: readonly (string | readonly (string | number)[])[]
): Partial<T> {
  const pathSet = new Set(paths.map((path) => (Array.isArray(path) ? path.join('.') : String(path))));
  const result: Partial<T> = {};

  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key) && !pathSet.has(key)) {
      result[key] = object[key];
    }
  }

  return result;
}

