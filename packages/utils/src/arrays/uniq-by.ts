/**
 * This method is like uniq except that it accepts iteratee which is invoked for each element
 * in array to generate the criterion by which uniqueness is computed.
 *
 * @param array - The array to inspect.
 * @param iteratee - The iteratee invoked per element.
 * @returns The new duplicate free array.
 *
 * @example
 * ```ts
 * uniqBy([2.1, 1.2, 2.3], Math.floor); // [2.1, 1.2]
 * ```
 */
export function uniqBy<T>(
  array: readonly T[],
  iteratee: ((value: T) => unknown) | string
): T[] {
  const getValue =
    typeof iteratee === 'string'
      ? (item: T) => (item as Record<string, unknown>)[iteratee]
      : iteratee;

  const result: T[] = [];
  const seen = new Set<unknown>();

  for (const value of array) {
    const key = getValue(value);
    if (!seen.has(key)) {
      seen.add(key);
      result.push(value);
    }
  }

  return result;
}
