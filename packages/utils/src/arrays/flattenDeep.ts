/**
 * Recursively flattens array.
 *
 * @param array - The array to flatten.
 * @returns The new flattened array.
 *
 * @example
 * ```ts
 * flattenDeep([1, [2, [3, [4]], 5]]); // [1, 2, 3, 4, 5]
 * ```
 */
export function flattenDeep<T>(array: readonly unknown[]): T[] {
  const result: T[] = [];
  
  function flattenRecursive(arr: readonly unknown[]): void {
    for (const item of arr) {
      if (Array.isArray(item)) {
        flattenRecursive(item);
      } else {
        result.push(item as T);
      }
    }
  }
  
  flattenRecursive(array);
  return result;
}

