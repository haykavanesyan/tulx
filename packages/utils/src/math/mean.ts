/**
 * Computes the mean of the values in array.
 *
 * @param array - The array to iterate over.
 * @returns Returns the mean.
 *
 * @example
 * ```ts
 * mean([4, 2, 8, 6]); // 5
 * ```
 */
export function mean(array: readonly number[]): number {
  if (array.length === 0) {
    return NaN;
  }
  const sum = array.reduce((acc, val) => acc + val, 0);
  return sum / array.length;
}
