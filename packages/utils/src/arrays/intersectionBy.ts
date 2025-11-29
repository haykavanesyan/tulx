/**
 * This method is like intersection except that it accepts iteratee which is invoked for each element
 * of each arrays to generate the criterion by which they're compared.
 *
 * @param arrays - The arrays to inspect.
 * @param iteratee - The iteratee invoked per element.
 * @returns The new array of intersecting values.
 *
 * @example
 * ```ts
 * intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [2.1]
 * ```
 */
export function intersectionBy<T>(...args: readonly unknown[]): T[] {
  if (args.length < 2) {
    return [];
  }

  const iteratee = args[args.length - 1] as ((value: T) => unknown) | string;
  const arrays = args.slice(0, -1) as readonly T[][];

  if (arrays.length === 0) {
    return [];
  }

  const getValue =
    typeof iteratee === 'string'
      ? (item: T) => (item as Record<string, unknown>)[iteratee]
      : iteratee;

  const firstArray = arrays[0];
  const otherArrays = arrays.slice(1);
  const result: T[] = [];
  const seen = new Set<unknown>();

  for (const value of firstArray) {
    const key = getValue(value);
    if (seen.has(key)) {
      continue;
    }
    seen.add(key);

    if (
      otherArrays.some((arr) => {
        const arrKeys = arr.map((item) => getValue(item));
        return arrKeys.includes(key);
      })
    ) {
      result.push(value);
    }
  }

  return result;
}
