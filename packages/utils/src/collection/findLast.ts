/**
 * This method is like find except that it iterates over elements of collection from right to left.
 *
 * @param collection - The collection to inspect.
 * @param predicate - The function invoked per iteration.
 * @param fromIndex - The index to search from.
 * @returns Returns the matched element, else undefined.
 *
 * @example
 * ```ts
 * findLast([1, 2, 3, 4], (n) => n % 2 === 1); // 3
 * ```
 */
export function findLast<T>(
  collection: readonly T[] | Record<string, T>,
  predicate: (value: T, index: number | string, collection: readonly T[] | Record<string, T>) => boolean,
  fromIndex?: number
): T | undefined {
  if (Array.isArray(collection)) {
    const startIndex = fromIndex === undefined
      ? collection.length - 1
      : fromIndex < 0
        ? Math.max(collection.length + fromIndex, -1)
        : Math.min(fromIndex, collection.length - 1);

    for (let i = startIndex; i >= 0; i--) {
      if (predicate(collection[i], i, collection)) {
        return collection[i];
      }
    }
  } else {
    const record = collection as Record<string, T>;
    const keys = Object.keys(record);
    const startIndex = fromIndex === undefined
      ? keys.length - 1
      : fromIndex < 0
        ? Math.max(keys.length + fromIndex, -1)
        : Math.min(fromIndex, keys.length - 1);

    for (let i = startIndex; i >= 0; i--) {
      const key = keys[i];
      if (predicate(record[key], key, record)) {
        return record[key];
      }
    }
  }

  return undefined;
}

