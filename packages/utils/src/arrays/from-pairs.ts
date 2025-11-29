/**
 * Returns an object composed from key-value pairs.
 *
 * @param pairs - The key-value pairs.
 * @returns The new object.
 *
 * @example
 * ```ts
 * fromPairs([['a', 1], ['b', 2]]); // { 'a': 1, 'b': 2 }
 * ```
 */
export function fromPairs<T>(
  pairs: readonly [string | number, T][]
): Record<string, T> {
  const result: Record<string, T> = {};
  for (const [key, value] of pairs) {
    result[String(key)] = value;
  }
  return result;
}
