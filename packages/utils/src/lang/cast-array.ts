/**
 * Casts value as an array if it's not one.
 *
 * @param value - The value to inspect.
 * @returns Returns the cast array.
 *
 * @example
 * ```ts
 * castArray(1); // [1]
 * castArray({ 'a': 1 }); // [{ 'a': 1 }]
 * castArray('abc'); // ['abc']
 * castArray(null); // [null]
 * castArray(undefined); // [undefined]
 * castArray(); // []
 * ```
 */
export function castArray<T>(value?: T): T[] {
  if (arguments.length === 0) {
    return [];
  }
  return Array.isArray(value) ? value : [value as T];
}
