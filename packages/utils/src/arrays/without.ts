/**
 * Creates an array excluding all given values.
 *
 * @param array - The array to filter.
 * @param values - The values to exclude.
 * @returns The new array of filtered values.
 *
 * @example
 * ```ts
 * without([2, 1, 2, 3], 1, 2); // [3]
 * ```
 */
export function without<T>(array: readonly T[], ...values: readonly T[]): T[] {
  const valueSet = new Set(values);
  return array.filter((item) => !valueSet.has(item));
}

