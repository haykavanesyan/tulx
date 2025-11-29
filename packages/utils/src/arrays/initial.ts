/**
 * Gets all but the last element of array.
 *
 * @param array - The array to query.
 * @returns The slice of array.
 *
 * @example
 * ```ts
 * initial([1, 2, 3]); // [1, 2]
 * ```
 */
export function initial<T>(array: readonly T[]): T[] {
  return array.length > 0 ? array.slice(0, -1) : [];
}
