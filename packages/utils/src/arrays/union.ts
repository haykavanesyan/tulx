/**
 * Creates an array of unique values, in order, from all given arrays.
 *
 * @param arrays - The arrays to inspect.
 * @returns The new array of combined values.
 *
 * @example
 * ```ts
 * union([2], [1, 2]); // [2, 1]
 * ```
 */
export function union<T>(...arrays: readonly T[][]): T[] {
  const result: T[] = [];
  const seen = new Set<T>();

  for (const array of arrays) {
    for (const value of array) {
      if (!seen.has(value)) {
        seen.add(value);
        result.push(value);
      }
    }
  }

  return result;
}
