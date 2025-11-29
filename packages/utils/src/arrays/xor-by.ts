/**
 * This method is like xor except that it accepts iteratee which is invoked for each element
 * of each arrays to generate the criterion by which they're compared.
 *
 * @param arrays - The arrays to inspect.
 * @param iteratee - The iteratee invoked per element.
 * @returns The new array of filtered values.
 *
 * @example
 * ```ts
 * xorBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [1.2, 3.4]
 * ```
 */
export function xorBy<T>(...args: readonly unknown[]): T[] {
  if (args.length < 2) {
    return [];
  }

  const iteratee = args[args.length - 1] as ((value: T) => unknown) | string;
  const arrays = args.slice(0, -1) as readonly T[][];

  const getValue =
    typeof iteratee === 'string'
      ? (item: T) => (item as Record<string, unknown>)[iteratee]
      : iteratee;

  const countMap = new Map<unknown, { value: T; count: number }>();

  for (const array of arrays) {
    const seenInArray = new Set<unknown>();
    for (const value of array) {
      const key = getValue(value);
      if (!seenInArray.has(key)) {
        seenInArray.add(key);
        const existing = countMap.get(key);
        if (existing) {
          existing.count++;
        } else {
          countMap.set(key, { value, count: 1 });
        }
      }
    }
  }

  const result: T[] = [];
  for (const entry of countMap.values()) {
    if (entry.count === 1) {
      result.push(entry.value);
    }
  }

  return result;
}
