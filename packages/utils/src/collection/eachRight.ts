/**
 * This method is like each except that it iterates over elements of collection from right to left.
 *
 * @param collection - The collection to iterate over.
 * @param iteratee - The function invoked per iteration.
 * @returns Returns collection.
 *
 * @example
 * ```ts
 * eachRight([1, 2], (value) => console.log(value)); // Logs `2` then `1`
 * ```
 */
export function eachRight<T>(
  collection: readonly T[] | Record<string, T>,
  iteratee: (value: T, index: number | string, collection: readonly T[] | Record<string, T>) => void
): readonly T[] | Record<string, T> {
  if (Array.isArray(collection)) {
    for (let i = collection.length - 1; i >= 0; i--) {
      iteratee(collection[i], i, collection);
    }
  } else {
    const record = collection as Record<string, T>;
    const keys = Object.keys(record).reverse();
    for (const key of keys) {
      iteratee(record[key], key, record);
    }
  }
  return collection;
}

