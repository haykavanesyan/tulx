/**
 * This method is like zip except that it accepts an array of grouped elements and creates an array
 * regrouping the elements to their pre-zip configuration.
 *
 * @param array - The array of grouped elements to process.
 * @returns The new array of regrouped elements.
 *
 * @example
 * ```ts
 * const zipped = zip(['a', 'b'], [1, 2], [true, false]);
 * unzip(zipped); // [['a', 'b'], [1, 2], [true, false]]
 * ```
 */
export function unzip<T>(array: readonly T[][]): T[][] {
  if (array.length === 0) {
    return [];
  }

  const maxLength = Math.max(...array.map((arr) => arr.length));
  const result: T[][] = [];

  for (let i = 0; i < maxLength; i++) {
    result[i] = [];
    for (const arr of array) {
      result[i].push(arr[i]);
    }
  }

  return result;
}

