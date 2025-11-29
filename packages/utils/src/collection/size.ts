/**
 * Gets the size of collection by returning its length for array-like values or the number of own enumerable string keyed properties for objects.
 *
 * @param collection - The collection to inspect.
 * @returns Returns the collection size.
 *
 * @example
 * ```ts
 * size([1, 2, 3]); // 3
 * size({ 'a': 1, 'b': 2 }); // 2
 * size('pebbles'); // 7
 * ```
 */
export function size(
  collection: readonly unknown[] | Record<string, unknown> | string
): number {
  if (typeof collection === 'string' || Array.isArray(collection)) {
    return collection.length;
  }

  let count = 0;
  for (const key in collection) {
    if (Object.prototype.hasOwnProperty.call(collection, key)) {
      count++;
    }
  }
  return count;
}
