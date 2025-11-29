/**
 * Iterates over elements of collection and invokes iteratee for each element.
 * The iteratee is invoked with three arguments: (value, index|key, collection).
 *
 * @param collection - The collection to iterate over.
 * @param iteratee - The function invoked per iteration.
 * @returns Returns collection.
 *
 * @example
 * ```ts
 * each([1, 2], (value) => console.log(value)); // Logs `1` then `2`
 * each({ 'a': 1, 'b': 2 }, (value, key) => console.log(key)); // Logs 'a' then 'b'
 * ```
 */
export function each<T>(
  collection: readonly T[] | Record<string, T>,
  iteratee: (
    value: T,
    index: number | string,
    collection: readonly T[] | Record<string, T>
  ) => void
): readonly T[] | Record<string, T> {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      iteratee(collection[i], i, collection);
    }
  } else {
    const record = collection as Record<string, T>;
    for (const key in record) {
      if (Object.prototype.hasOwnProperty.call(record, key)) {
        iteratee(record[key], key, record);
      }
    }
  }
  return collection;
}
