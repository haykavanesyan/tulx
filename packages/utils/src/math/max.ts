/**
 * Computes the maximum value of array.
 *
 * @param array - The array to iterate over.
 * @returns Returns the maximum value.
 *
 * @example
 * ```ts
 * max([4, 2, 8, 6]); // 8
 * max([]); // undefined
 * ```
 */
export function max(array: readonly number[]): number | undefined {
  if (array.length === 0) {
    return undefined;
  }
  return Math.max(...array);
}

