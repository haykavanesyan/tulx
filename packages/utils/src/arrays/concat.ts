/**
 * Creates a new array concatenating array with any additional arrays and/or values.
 *
 * @param array - The array to concatenate.
 * @param values - The values and/or arrays to concatenate.
 * @returns The new concatenated array.
 *
 * @example
 * ```ts
 * const array = [1];
 * concat(array, 2, [3], [[4]]); // [1, 2, 3, [4]]
 * ```
 */
export function concat<T>(array: readonly T[], ...values: unknown[]): T[] {
  const result: T[] = [...array];

  for (const value of values) {
    if (Array.isArray(value)) {
      result.push(...(value as T[]));
    } else {
      result.push(value as T);
    }
  }

  return result;
}

