/**
 * Creates a slice of array with n elements taken from the end.
 *
 * @param array - The array to query.
 * @param n - The number of elements to take.
 * @returns The slice of array.
 *
 * @example
 * ```ts
 * takeRight([1, 2, 3]); // [3]
 * takeRight([1, 2, 3], 2); // [2, 3]
 * takeRight([1, 2, 3], 5); // [1, 2, 3]
 * takeRight([1, 2, 3], 0); // []
 * ```
 */
export function takeRight<T>(array: readonly T[], n: number = 1): T[] {
  const length = array.length;
  return array.slice(Math.max(0, length - n));
}

