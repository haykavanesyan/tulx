/**
 * Creates an array of elements split into two groups, the first of which contains elements predicate returns truthy for,
 * the second of which contains elements predicate returns falsey for.
 *
 * @param collection - The collection to iterate over.
 * @param predicate - The function invoked per iteration.
 * @returns Returns the array of grouped elements.
 *
 * @example
 * ```ts
 * const users = [
 *   { 'user': 'barney', 'age': 36, 'active': false },
 *   { 'user': 'fred', 'age': 40, 'active': true }
 * ];
 * partition(users, (o) => o.active);
 * // [[{ 'user': 'fred', 'age': 40, 'active': true }], [{ 'user': 'barney', 'age': 36, 'active': false }]]
 * ```
 */
export function partition<T>(
  collection: readonly T[] | Record<string, T>,
  predicate: (
    value: T,
    index: number | string,
    collection: readonly T[] | Record<string, T>
  ) => boolean
): [T[], T[]] {
  const truthy: T[] = [];
  const falsey: T[] = [];

  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i], i, collection)) {
        truthy.push(collection[i]);
      } else {
        falsey.push(collection[i]);
      }
    }
  } else {
    const record = collection as Record<string, T>;
    for (const key in record) {
      if (Object.prototype.hasOwnProperty.call(record, key)) {
        if (predicate(record[key], key, record)) {
          truthy.push(record[key]);
        } else {
          falsey.push(record[key]);
        }
      }
    }
  }

  return [truthy, falsey];
}
