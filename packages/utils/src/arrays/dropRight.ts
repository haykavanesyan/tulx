/**
 * Creates a slice of array with n elements dropped from the end.
 *
 * @param array - The array to query.
 * @param n - The number of elements to drop.
 * @returns The slice of array.
 *
 * @example
 * ```ts
 * dropRight([1, 2, 3]); // [1, 2]
 * dropRight([1, 2, 3], 2); // [1]
 * dropRight([1, 2, 3], 5); // []
 * dropRight([1, 2, 3], 0); // [1, 2, 3]
 * ```
 */
export function dropRight<T>(array: readonly T[], n: number = 1): T[] {
  const length = array.length;
  return array.slice(0, length - n);
}

