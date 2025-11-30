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
  if (array.length === 0) {
    return [];
  }
  const result: T[] = [];
  const seen = new Set<T>();
  const len = array.length;

  for (let i = 0; i < len; i++) {
    const value = array[i];
    if (!seen.has(value)) {
      seen.add(value);
      result.push(value);
    }
  }

  return result;
}
