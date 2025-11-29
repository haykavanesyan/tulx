/**
 * Gets the element at index n of array. If n is negative, the nth element from the end is returned.
 *
 * @param array - The array to query.
 * @param n - The index of the element to return.
 * @returns The nth element of array.
 *
 * @example
 * ```ts
 * const array = ['a', 'b', 'c', 'd'];
 * nth(array, 1); // 'b'
 * nth(array, -2); // 'c'
 * ```
 */
export function nth<T>(array: readonly T[], n: number): T | undefined {
  const index = n < 0 ? array.length + n : n;
  return index >= 0 && index < array.length ? array[index] : undefined;
}
