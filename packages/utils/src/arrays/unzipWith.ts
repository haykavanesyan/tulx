/**
 * This method is like unzip except that it accepts iteratee to specify how regrouped values should be combined.
 *
 * @param array - The array of grouped elements to process.
 * @param iteratee - The function to combine regrouped values.
 * @returns The new array of regrouped elements.
 *
 * @example
 * ```ts
 * const zipped = zip([1, 2], [10, 20], [100, 200]);
 * unzipWith(zipped, (...args) => args.reduce((a, b) => a + b, 0));
 * // [111, 222]
 * ```
 */
export function unzipWith<T, TResult>(
  array: readonly T[][],
  iteratee: (...values: T[]) => TResult
): TResult[] {
  if (array.length === 0) {
    return [];
  }

  const maxLength = Math.max(...array.map((arr) => arr.length));
  const result: TResult[] = [];

  for (let i = 0; i < maxLength; i++) {
    const values = array.map((arr) => arr[i]);
    result.push(iteratee(...values));
  }

  return result;
}

