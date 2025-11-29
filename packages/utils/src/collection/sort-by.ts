/**
 * Creates an array of elements, sorted in ascending order by the results of running each element in a collection thru each iteratee.
 *
 * @param collection - The collection to iterate over.
 * @param iteratees - The iteratees to sort by.
 * @returns Returns the new sorted array.
 *
 * @example
 * ```ts
 * const users = [
 *   { 'user': 'fred', 'age': 48 },
 *   { 'user': 'barney', 'age': 36 },
 *   { 'user': 'fred', 'age': 40 },
 *   { 'user': 'barney', 'age': 34 }
 * ];
 * sortBy(users, ['user', 'age']); // sorted by user, then by age
 * ```
 */
export function sortBy<T>(
  collection: readonly T[] | Record<string, T>,
  iteratees: readonly (((value: T) => unknown) | string)[]
): T[] {
  const items = Array.isArray(collection)
    ? [...collection]
    : Object.values(collection);

  return items.sort((a, b) => {
    for (const iteratee of iteratees) {
      const getValue =
        typeof iteratee === 'string'
          ? (item: T) => (item as Record<string, unknown>)[iteratee]
          : iteratee;

      const aValue = getValue(a) as number | string;
      const bValue = getValue(b) as number | string;

      if (aValue < bValue) {
        return -1;
      }
      if (aValue > bValue) {
        return 1;
      }
    }
    return 0;
  });
}
