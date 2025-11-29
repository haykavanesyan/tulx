/**
 * Gets all but the first element of array.
 *
 * @param array - The array to query.
 * @returns The slice of array.
 *
 * @example
 * ```ts
 * tail([1, 2, 3]); // [2, 3]
 * ```
 */
export function tail<T>(array: readonly T[]): T[] {
  return array.length > 0 ? array.slice(1) : [];
}
