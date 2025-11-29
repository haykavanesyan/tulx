/**
 * Creates an object composed of the picked object properties.
 *
 * @param object - The source object.
 * @param paths - The property paths to pick.
 * @returns Returns the new object.
 *
 * @example
 * ```ts
 * const object = { 'a': 1, 'b': '2', 'c': 3 };
 * pick(object, ['a', 'c']); // { 'a': 1, 'c': 3 }
 * ```
 */
export function pick<T extends Record<string, unknown>>(
  object: T,
  paths: readonly (string | readonly (string | number)[])[]
): Partial<T> {
  const pathSet = new Set(paths.map((path) => (Array.isArray(path) ? path.join('.') : String(path))));
  const result: Partial<T> = {};

  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key) && pathSet.has(key)) {
      result[key] = object[key];
    }
  }

  return result;
}

