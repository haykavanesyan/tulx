/**
 * This method is like intersection except that it accepts comparator which is invoked to compare elements of arrays.
 *
 * @param arrays - The arrays to inspect.
 * @param comparator - The comparator invoked per element.
 * @returns The new array of intersecting values.
 *
 * @example
 * ```ts
 * const objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
 * const others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
 * intersectionWith(objects, others, (a, b) => a.x === b.x && a.y === b.y);
 * // [{ 'x': 1, 'y': 2 }]
 * ```
 */
export function intersectionWith<T>(
  ...args: readonly unknown[]
): T[] {
  if (args.length < 2) {
    return [];
  }

  const comparator = args[args.length - 1] as (arrVal: T, othVal: T) => boolean;
  const arrays = args.slice(0, -1) as readonly T[][];

  if (arrays.length === 0) {
    return [];
  }

  const firstArray = arrays[0];
  const otherArrays = arrays.slice(1);
  const result: T[] = [];

  for (const value of firstArray) {
    if (otherArrays.some((arr) => arr.some((item) => comparator(value, item)))) {
      if (!result.some((item) => comparator(value, item))) {
        result.push(value);
      }
    }
  }

  return result;
}

