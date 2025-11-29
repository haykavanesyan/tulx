/**
 * Iterates over elements of collection, returning an array of all elements predicate returns truthy for.
 *
 * @param collection - The collection to iterate over.
 * @param predicate - The function invoked per iteration.
 * @returns Returns the new filtered array.
 *
 * @example
 * ```ts
 * const users = [
 *   { 'user': 'barney', 'active': true },
 *   { 'user': 'fred', 'active': false }
 * ];
 * filter(users, (o) => !o.active); // [{ 'user': 'fred', 'active': false }]
 * ```
 */
export function filter<T>(
  collection: readonly T[] | Record<string, T>,
  predicate: (
    value: T,
    index: number | string,
    collection: readonly T[] | Record<string, T>
  ) => boolean
): T[] {
  const result: T[] = [];

  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i], i, collection)) {
        result.push(collection[i]);
      }
    }
  } else {
    const record = collection as Record<string, T>;
    for (const key in record) {
      if (Object.prototype.hasOwnProperty.call(record, key)) {
        if (predicate(record[key], key, record)) {
          result.push(record[key]);
        }
      }
    }
  }

  return result;
}
