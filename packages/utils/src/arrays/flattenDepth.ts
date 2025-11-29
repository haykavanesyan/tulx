/**
 * Recursively flatten array up to depth times.
 *
 * @param array - The array to flatten.
 * @param depth - The maximum recursion depth.
 * @returns The new flattened array.
 *
 * @example
 * ```ts
 * const array = [1, [2, [3, [4]], 5]];
 * flattenDepth(array, 1); // [1, 2, [3, [4]], 5]
 * flattenDepth(array, 2); // [1, 2, 3, [4], 5]
 * ```
 */
export function flattenDepth<T>(
  array: readonly unknown[],
  depth: number = 1
): T[] {
  if (depth <= 0) {
    return array as T[];
  }

  const result: unknown[] = [];
  for (const item of array) {
    if (Array.isArray(item) && depth > 0) {
      result.push(...flattenDepth(item, depth - 1));
    } else {
      result.push(item);
    }
  }
  return result as T[];
}

