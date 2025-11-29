/**
 * Fills elements of array with value from start up to, but not including, end.
 *
 * @param array - The array to fill.
 * @param value - The value to fill array with.
 * @param start - The start position.
 * @param end - The end position.
 * @returns The filled array.
 *
 * @example
 * ```ts
 * const array = [1, 2, 3];
 * fill(array, 'a'); // ['a', 'a', 'a']
 * fill(Array(3), 2); // [2, 2, 2]
 * fill([4, 6, 8, 10], '*', 1, 3); // [4, '*', '*', 10]
 * ```
 */
export function fill<T>(
  array: T[],
  value: T,
  start: number = 0,
  end?: number
): T[] {
  const length = array.length;
  const endIndex = end === undefined ? length : end;
  const startIndex = start < 0 ? Math.max(length + start, 0) : Math.min(start, length);
  const finalEnd = endIndex < 0 ? Math.max(length + endIndex, 0) : Math.min(endIndex, length);

  for (let i = startIndex; i < finalEnd; i++) {
    array[i] = value;
  }
  return array;
}

