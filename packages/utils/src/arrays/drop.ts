/**
 * Creates a slice of array with n elements dropped from the beginning.
 *
 * @param array - The array to query.
 * @param n - The number of elements to drop.
 * @returns The slice of array.
 *
 * @example
 * ```ts
 * drop([1, 2, 3]); // [2, 3]
 * drop([1, 2, 3], 2); // [3]
 * drop([1, 2, 3], 5); // []
 * drop([1, 2, 3], 0); // [1, 2, 3]
 * ```
 */
export function drop<T>(array: readonly T[], n: number = 1): T[] {
  return array.slice(n);
}

