/**
 * This method is like pullAll except that it accepts comparator which is invoked to compare elements of array to values.
 *
 * @param array - The array to modify.
 * @param values - The values to remove.
 * @param comparator - The comparator invoked per element.
 * @returns The modified array.
 *
 * @example
 * ```ts
 * const array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
 * pullAllWith(array, [{ 'x': 3, 'y': 4 }], (a, b) => a.x === b.x && a.y === b.y);
 * // [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
 * ```
 */
export function pullAllWith<T>(
  array: T[],
  values: readonly T[],
  comparator: (arrVal: T, othVal: T) => boolean
): T[] {
  let writeIndex = 0;
  for (let i = 0; i < array.length; i++) {
    if (!values.some((val) => comparator(array[i], val))) {
      array[writeIndex] = array[i];
      writeIndex++;
    }
  }
  array.length = writeIndex;
  return array;
}
