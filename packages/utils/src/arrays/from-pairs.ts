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
  const len = pairs.length;
  for (let i = 0; i < len; i++) {
    const pair = pairs[i];
    const key = pair[0];
    // Optimize: avoid String() call for string keys
    if (typeof key === 'string') {
      result[key] = pair[1];
    } else {
      result[String(key)] = pair[1];
    }
  }
  return result;
}
