/**
 * This method is like difference except that it accepts comparator which is invoked to compare elements of array to values.
 *
 * @param array - The array to inspect.
 * @param values - The values to exclude.
 * @param comparator - The comparator invoked per element.
 * @returns The new array of filtered values.
 *
 * @example
 * ```ts
 * const objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
 * differenceWith(objects, [{ 'x': 1, 'y': 2 }], (a, b) => a.x === b.x && a.y === b.y);
 * // [{ 'x': 2, 'y': 1 }]
 * ```
 */
export function differenceWith<T>(
  array: readonly T[],
  values: readonly T[],
  comparator: (arrVal: T, othVal: T) => boolean
): T[] {
  return array.filter((arrItem) =>
    !values.some((valItem) => comparator(arrItem, valItem))
  );
}

