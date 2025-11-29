/**
 * Gets the last element of array.
 *
 * @param array - The array to query.
 * @returns The last element of array.
 *
 * @example
 * ```ts
 * last([1, 2, 3]); // 3
 * ```
 */
export function last<T>(array: readonly T[]): T | undefined {
  return array.length > 0 ? array[array.length - 1] : undefined;
}
