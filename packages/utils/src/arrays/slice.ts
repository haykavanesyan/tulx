/**
 * Creates a slice of array from start up to, but not including, end.
 *
 * @param array - The array to slice.
 * @param start - The start position.
 * @param end - The end position.
 * @returns The slice of array.
 *
 * @example
 * ```ts
 * const array = [1, 2, 3, 4];
 * slice(array, 2); // [3, 4]
 * slice(array, 2, 4); // [3, 4]
 * ```
 */
export function slice<T>(array: readonly T[], start?: number, end?: number): T[] {
  return array.slice(start, end);
}

