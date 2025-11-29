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
  return array.filter(
    (item): item is NonNullable<T> =>
      item !== false &&
      item !== null &&
      item !== 0 &&
      item !== '' &&
      item !== undefined &&
      !Number.isNaN(item)
  );
}

