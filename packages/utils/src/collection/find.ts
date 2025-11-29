/**
 * Iterates over elements of collection, returning the first element predicate returns truthy for.
 *
 * @param collection - The collection to inspect.
 * @param predicate - The function invoked per iteration.
 * @param fromIndex - The index to search from.
 * @returns Returns the matched element, else undefined.
 *
 * @example
 * ```ts
 * const users = [
 *   { 'user': 'barney', 'age': 36, 'active': true },
 *   { 'user': 'fred', 'age': 40, 'active': false }
 * ];
 * find(users, (o) => o.age < 40); // { 'user': 'barney', 'age': 36, 'active': true }
 * ```
 */
export function find<T>(
  collection: readonly T[] | Record<string, T>,
  predicate: (
    value: T,
    index: number | string,
    collection: readonly T[] | Record<string, T>
  ) => boolean,
  fromIndex: number = 0
): T | undefined {
  if (Array.isArray(collection)) {
    const startIndex =
      fromIndex < 0 ? Math.max(collection.length + fromIndex, 0) : fromIndex;
    for (let i = startIndex; i < collection.length; i++) {
      if (predicate(collection[i], i, collection)) {
        return collection[i];
      }
    }
  } else {
    const record = collection as Record<string, T>;
    const keys = Object.keys(record);
    const startIndex =
      fromIndex < 0 ? Math.max(keys.length + fromIndex, 0) : fromIndex;
    for (let i = startIndex; i < keys.length; i++) {
      const key = keys[i];
      if (predicate(record[key], key, record)) {
        return record[key];
      }
    }
  }

  return undefined;
}
