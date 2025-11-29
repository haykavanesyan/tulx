/**
 * Creates an array of elements split into groups the length of size.
 * If array can't be split evenly, the final chunk will be the remaining elements.
 *
 * @param array - The array to process.
 * @param size - The length of each chunk.
 * @returns The new array of chunks.
 *
 * @example
 * ```ts
 * chunk(['a', 'b', 'c', 'd'], 2); // [['a', 'b'], ['c', 'd']]
 * chunk(['a', 'b', 'c', 'd'], 3); // [['a', 'b', 'c'], ['d']]
 * ```
 */
export function chunk<T>(array: readonly T[], size: number): T[][] {
  if (size <= 0) {
    return [];
  }

  const result: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

