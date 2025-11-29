/**
 * Gets the first element of array.
 *
 * @param array - The array to query.
 * @returns The first element of array.
 *
 * @example
 * ```ts
 * head([1, 2, 3]); // 1
 * head([]); // undefined
 * ```
 */
export function head<T>(array: readonly T[]): T | undefined {
  return array.length > 0 ? array[0] : undefined;
}
