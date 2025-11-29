/**
 * Creates an array of grouped elements, the first of which contains the first elements of the given arrays,
 * the second of which contains the second elements of the given arrays, and so on.
 *
 * @param arrays - The arrays to process.
 * @returns The new array of grouped elements.
 *
 * @example
 * ```ts
 * zip(['a', 'b'], [1, 2], [true, false]); // [['a', 1, true], ['b', 2, false]]
 * ```
 */
export function zip<T extends unknown[]>(
  ...arrays: { [K in keyof T]: T[K][] }
): Array<{ [K in keyof T]: T[K] }> {
  if (arrays.length === 0) {
    return [];
  }

  const maxLength = Math.max(...arrays.map((arr) => arr.length));
  const result: Array<{ [K in keyof T]: T[K] }> = [];

  for (let i = 0; i < maxLength; i++) {
    const tuple = arrays.map((arr) => arr[i]) as { [K in keyof T]: T[K] };
    result.push(tuple);
  }

  return result;
}
