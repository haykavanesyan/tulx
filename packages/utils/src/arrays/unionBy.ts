/**
 * This method is like union except that it accepts iteratee which is invoked for each element
 * of each arrays to generate the criterion by which uniqueness is computed.
 *
 * @param arrays - The arrays to inspect.
 * @param iteratee - The iteratee invoked per element.
 * @returns The new array of combined values.
 *
 * @example
 * ```ts
 * unionBy([2.1], [1.2, 2.3], Math.floor); // [2.1, 1.2]
 * ```
 */
export function unionBy<T>(
  ...args: readonly unknown[]
): T[] {
  if (args.length < 2) {
    return [];
  }

  const iteratee = args[args.length - 1] as ((value: T) => unknown) | string;
  const arrays = args.slice(0, -1) as readonly T[][];

  const getValue = typeof iteratee === 'string'
    ? (item: T) => (item as Record<string, unknown>)[iteratee]
    : iteratee;

  const result: T[] = [];
  const seen = new Set<unknown>();

  for (const array of arrays) {
    for (const value of array) {
      const key = getValue(value);
      if (!seen.has(key)) {
        seen.add(key);
        result.push(value);
      }
    }
  }

  return result;
}

