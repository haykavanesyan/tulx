/**
 * This method is like uniq except that it accepts comparator which is invoked to compare elements of array.
 *
 * @param array - The array to inspect.
 * @param comparator - The comparator invoked per element.
 * @returns The new duplicate free array.
 *
 * @example
 * ```ts
 * const objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
 * uniqWith(objects, (a, b) => a.x === b.x && a.y === b.y);
 * // [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
 * ```
 */
export function uniqWith<T>(
  array: readonly T[],
  comparator: (arrVal: T, othVal: T) => boolean
): T[] {
  const result: T[] = [];

  for (const value of array) {
    if (!result.some((item) => comparator(value, item))) {
      result.push(value);
    }
  }

  return result;
}

