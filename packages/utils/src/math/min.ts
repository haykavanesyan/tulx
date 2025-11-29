/**
 * Computes the minimum value of array.
 *
 * @param array - The array to iterate over.
 * @returns Returns the minimum value.
 *
 * @example
 * ```ts
 * min([4, 2, 8, 6]); // 2
 * min([]); // undefined
 * ```
 */
export function min(array: readonly number[]): number | undefined {
  if (array.length === 0) {
    return undefined;
  }
  return Math.min(...array);
}

