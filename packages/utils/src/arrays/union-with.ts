/**
 * This method is like union except that it accepts comparator which is invoked to compare elements of arrays.
 *
 * @param arrays - The arrays to inspect.
 * @param comparator - The comparator invoked per element.
 * @returns The new array of combined values.
 *
 * @example
 * ```ts
 * const objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
 * const others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
 * unionWith(objects, others, (a, b) => a.x === b.x && a.y === b.y);
 * // [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
 * ```
 */
export function unionWith<T>(...args: readonly unknown[]): T[] {
  if (args.length < 2) {
    return [];
  }

  const comparator = args[args.length - 1] as (arrVal: T, othVal: T) => boolean;
  const arrays = args.slice(0, -1) as readonly T[][];

  const result: T[] = [];

  for (const array of arrays) {
    for (const value of array) {
      if (!result.some((item) => comparator(value, item))) {
        result.push(value);
      }
    }
  }

  return result;
}
