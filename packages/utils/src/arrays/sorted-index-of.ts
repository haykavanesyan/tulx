/**
 * This method is like indexOf except that it performs a binary search on a sorted array.
 *
 * @param array - The array to inspect.
 * @param value - The value to search for.
 * @returns The index of the matched value, else -1.
 *
 * @example
 * ```ts
 * sortedIndexOf([4, 5, 5, 5, 6], 5); // 1
 * ```
 */
export function sortedIndexOf<T>(array: readonly T[], value: T): number {
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (array[mid] < value) {
      low = mid + 1;
    } else if (array[mid] > value) {
      high = mid - 1;
    } else {
      // Found value, but need to find first occurrence
      let firstIndex = mid;
      while (firstIndex > 0 && array[firstIndex - 1] === value) {
        firstIndex--;
      }
      return firstIndex;
    }
  }

  return -1;
}
