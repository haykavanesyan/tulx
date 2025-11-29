/**
 * This method is like xor except that it accepts comparator which is invoked to compare elements of arrays.
 *
 * @param arrays - The arrays to inspect.
 * @param comparator - The comparator invoked per element.
 * @returns The new array of filtered values.
 *
 * @example
 * ```ts
 * const objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
 * const others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
 * xorWith(objects, others, (a, b) => a.x === b.x && a.y === b.y);
 * // [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
 * ```
 */
export function xorWith<T>(...args: readonly unknown[]): T[] {
  if (args.length < 2) {
    return [];
  }

  const comparator = args[args.length - 1] as (arrVal: T, othVal: T) => boolean;
  const arrays = args.slice(0, -1) as readonly T[][];

  const result: T[] = [];
  const seen: T[] = [];

  for (let i = 0; i < arrays.length; i++) {
    for (const value of arrays[i]) {
      let foundInOther = false;
      for (let j = 0; j < arrays.length; j++) {
        if (i !== j && arrays[j].some((item) => comparator(value, item))) {
          foundInOther = true;
          break;
        }
      }

      if (!foundInOther && !seen.some((item) => comparator(value, item))) {
        seen.push(value);
        result.push(value);
      }
    }
  }

  return result;
}
