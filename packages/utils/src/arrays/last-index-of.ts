/**
 * This method is like indexOf except that it iterates over elements of array from right to left.
 *
 * @param array - The array to inspect.
 * @param value - The value to search for.
 * @param fromIndex - The index to search from.
 * @returns The index of the matched value, else -1.
 *
 * @example
 * ```ts
 * lastIndexOf([1, 2, 1, 2], 2); // 3
 * lastIndexOf([1, 2, 1, 2], 2, 2); // 1
 * ```
 */
export function lastIndexOf<T>(
  array: readonly T[],
  value: T,
  fromIndex?: number
): number {
  const startIndex =
    fromIndex === undefined
      ? array.length - 1
      : fromIndex < 0
        ? Math.max(array.length + fromIndex, -1)
        : Math.min(fromIndex, array.length - 1);

  for (let i = startIndex; i >= 0; i--) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}
