/**
 * The opposite of filter; this method returns the elements of collection that predicate does not return truthy for.
 *
 * @param collection - The collection to iterate over.
 * @param predicate - The function invoked per iteration.
 * @returns Returns the new filtered array.
 *
 * @example
 * ```ts
 * const users = [
 *   { 'user': 'barney', 'age': 36, 'active': false },
 *   { 'user': 'fred', 'age': 40, 'active': true }
 * ];
 * reject(users, (o) => o.active); // [{ 'user': 'barney', 'age': 36, 'active': false }]
 * ```
 */
export function reject<T>(
  collection: readonly T[] | Record<string, T>,
  predicate: (value: T, index: number | string, collection: readonly T[] | Record<string, T>) => boolean
): T[] {
  const result: T[] = [];

  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (!predicate(collection[i], i, collection)) {
        result.push(collection[i]);
      }
    }
  } else {
    const record = collection as Record<string, T>;
    for (const key in record) {
      if (Object.prototype.hasOwnProperty.call(record, key)) {
        if (!predicate(record[key], key, record)) {
          result.push(record[key]);
        }
      }
    }
  }

  return result;
}

