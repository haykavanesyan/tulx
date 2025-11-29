/**
 * This method is like sortedIndex except that it returns the highest index at which value should be inserted into array in order to maintain its sort order.
 *
 * @param array - The sorted array to inspect.
 * @param value - The value to evaluate.
 * @returns The index at which value should be inserted into array.
 *
 * @example
 * ```ts
 * sortedLastIndex([4, 5, 5, 5, 6], 5); // 4
 * ```
 */
export function sortedLastIndex<T>(array: readonly T[], value: T): number {
  let low = 0;
  let high = array.length;

  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    if (array[mid] <= value) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }

  return low;
}
