/**
 * Creates an array of array values not included in the other given arrays.
 * The order and references of result values are determined by the first array.
 *
 * @param array - The array to inspect.
 * @param values - The values to exclude.
 * @returns The new array of filtered values.
 *
 * @example
 * ```ts
 * difference([2, 1], [2, 3]); // [1]
 * ```
 */
export function difference<T>(array: readonly T[], ...values: readonly T[][]): T[] {
  const excludeSet = new Set<T>();
  for (const valueArray of values) {
    for (const value of valueArray) {
      excludeSet.add(value);
    }
  }

  return array.filter((item) => !excludeSet.has(item));
}

