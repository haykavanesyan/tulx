/**
 * Gets the index at which the first occurrence of value is found in array.
 *
 * @param array - The array to inspect.
 * @param value - The value to search for.
 * @param fromIndex - The index to search from.
 * @returns The index of the matched value, else -1.
 *
 * @example
 * ```ts
 * indexOf([1, 2, 1, 2], 2); // 1
 * indexOf([1, 2, 1, 2], 2, 2); // 3
 * ```
 */
export function indexOf<T>(
  array: readonly T[],
  value: T,
  fromIndex: number = 0
): number {
  const startIndex =
    fromIndex < 0 ? Math.max(array.length + fromIndex, 0) : fromIndex;
  for (let i = startIndex; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}
