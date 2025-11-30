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
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
}
