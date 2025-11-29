/**
 * Creates an array of unique values that is the symmetric difference of the given arrays.
 *
 * @param arrays - The arrays to inspect.
 * @returns The new array of filtered values.
 *
 * @example
 * ```ts
 * xor([2, 1], [2, 3]); // [1, 3]
 * ```
 */
export function xor<T>(...arrays: readonly T[][]): T[] {
  const countMap = new Map<T, number>();

  for (const array of arrays) {
    const seenInArray = new Set<T>();
    for (const value of array) {
      if (!seenInArray.has(value)) {
        seenInArray.add(value);
        countMap.set(value, (countMap.get(value) || 0) + 1);
      }
    }
  }

  const result: T[] = [];
  for (const [value, count] of countMap.entries()) {
    if (count === 1) {
      result.push(value);
    }
  }

  return result;
}

