/**
 * Creates a duplicate-free version of an array.
 *
 * @param array - The array to inspect.
 * @returns The new duplicate free array.
 *
 * @example
 * ```ts
 * uniq([2, 1, 2]); // [2, 1]
 * ```
 */
export function uniq<T>(array: readonly T[]): T[] {
  const result: T[] = [];
  const seen = new Set<T>();

  for (const value of array) {
    if (!seen.has(value)) {
      seen.add(value);
      result.push(value);
    }
  }

  return result;
}
