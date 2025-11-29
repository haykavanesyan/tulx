/**
 * Checks if predicate returns truthy for any element of collection.
 *
 * @param collection - The collection to iterate over.
 * @param predicate - The function invoked per iteration.
 * @returns Returns true if any element passes the predicate check, else false.
 *
 * @example
 * ```ts
 * some([null, 0, 'yes', false], Boolean); // true
 * some([null, 0, false], Boolean); // false
 * ```
 */
export function some<T>(
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
      if (predicate(collection[i], i, collection)) {
        return true;
      }
    }
  } else {
    const record = collection as Record<string, T>;
    for (const key in record) {
      if (Object.prototype.hasOwnProperty.call(record, key)) {
        if (predicate(record[key], key, record)) {
          return true;
        }
      }
    }
  }

  return false;
}
