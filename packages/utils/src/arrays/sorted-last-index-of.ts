/**
 * This method is like lastIndexOf except that it performs a binary search on a sorted array.
 *
 * @param array - The array to inspect.
 * @param value - The value to search for.
 * @returns The index of the matched value, else -1.
 *
 * @example
 * ```ts
 * sortedLastIndexOf([4, 5, 5, 5, 6], 5); // 3
 * ```
 */
export function sortedLastIndexOf<T>(array: readonly T[], value: T): number {
  let low = 0;
  let high = array.length - 1;
  let lastIndex = -1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (array[mid] < value) {
      low = mid + 1;
    } else if (array[mid] > value) {
      high = mid - 1;
    } else {
      lastIndex = mid;
      low = mid + 1; // Continue searching right
    }
  }

  return lastIndex;
}
