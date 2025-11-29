/**
 * Creates a slice of array with n elements taken from the beginning.
 *
 * @param array - The array to query.
 * @param n - The number of elements to take.
 * @returns The slice of array.
 *
 * @example
 * ```ts
 * take([1, 2, 3]); // [1]
 * take([1, 2, 3], 2); // [1, 2]
 * take([1, 2, 3], 5); // [1, 2, 3]
 * take([1, 2, 3], 0); // []
 * ```
 */
export function take<T>(array: readonly T[], n: number = 1): T[] {
  return array.slice(0, n);
}

