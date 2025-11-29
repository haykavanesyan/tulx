/**
 * This method is like uniqBy except that it's designed and optimized for sorted arrays.
 *
 * @param array - The sorted array to inspect.
 * @param iteratee - The iteratee invoked per element.
 * @returns The new duplicate free array.
 *
 * @example
 * ```ts
 * sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor); // [1.1, 2.3]
 * ```
 */
export function sortedUniqBy<T>(
  array: readonly T[],
  iteratee: (value: T) => unknown
): T[] {
  if (array.length === 0) {
    return [];
  }

  const result: T[] = [array[0]];
  let lastKey = iteratee(array[0]);

  for (let i = 1; i < array.length; i++) {
    const currentKey = iteratee(array[i]);
    if (currentKey !== lastKey) {
      result.push(array[i]);
      lastKey = currentKey;
    }
  }

  return result;
}

