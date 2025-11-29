/**
 * Computes the sum of the values in array.
 *
 * @param array - The array to iterate over.
 * @returns Returns the sum.
 *
 * @example
 * ```ts
 * sum([4, 2, 8, 6]); // 20
 * ```
 */
export function sum(array: readonly number[]): number {
  return array.reduce((acc, val) => acc + val, 0);
}

