/**
 * Creates an array with all falsy values removed.
 * The values false, null, 0, "", undefined, and NaN are falsy.
 *
 * @param array - The array to compact.
 * @returns The new array of filtered values.
 *
 * @example
 * ```ts
 * compact([0, 1, false, 2, '', 3]); // [1, 2, 3]
 * ```
 */
export function compact<T>(array: readonly T[]): Array<NonNullable<T>> {
  const result: Array<NonNullable<T>> = [];
  const len = array.length;
  for (let i = 0; i < len; i++) {
    const item = array[i];
    // Optimized order: most common cases first
    if (item === null || item === undefined || item === false) {
      continue;
    }
    if (item === 0 || item === '') {
      continue;
    }
    if (Number.isNaN(item)) {
      continue;
    }
    result.push(item as NonNullable<T>);
  }
  return result;
}
