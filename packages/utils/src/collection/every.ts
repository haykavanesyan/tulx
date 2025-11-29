/**
 * Checks if predicate returns truthy for all elements of collection.
 *
 * @param collection - The collection to iterate over.
 * @param predicate - The function invoked per iteration.
 * @returns Returns true if all elements pass the predicate check, else false.
 *
 * @example
 * ```ts
 * every([true, 1, null, 'yes'], Boolean); // false
 * every([true, 1], Boolean); // true
 * ```
 */
export function every<T>(
  collection: readonly T[] | Record<string, T>,
  predicate?: (
    value: T,
    index: number | string,
    collection: readonly T[] | Record<string, T>
  ) => boolean
): boolean {
  if (!predicate) {
    predicate = (value) => Boolean(value);
  }

  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (!predicate(collection[i], i, collection)) {
        return false;
      }
    }
  } else {
    const record = collection as Record<string, T>;
    for (const key in record) {
      if (Object.prototype.hasOwnProperty.call(record, key)) {
        if (!predicate(record[key], key, record)) {
          return false;
        }
      }
    }
  }

  return true;
}
