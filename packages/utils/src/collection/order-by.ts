/**
 * This method is like sortBy except that it allows specifying the sort orders of the iteratees to sort by.
 *
 * @param collection - The collection to iterate over.
 * @param iteratees - The iteratees to sort by.
 * @param orders - The sort orders of iteratees.
 * @returns Returns the new sorted array.
 *
 * @example
 * ```ts
 * const users = [
 *   { 'user': 'fred', 'age': 48 },
 *   { 'user': 'barney', 'age': 34 },
 *   { 'user': 'fred', 'age': 40 },
 *   { 'user': 'barney', 'age': 36 }
 * ];
 * orderBy(users, ['user', 'age'], ['asc', 'desc']); // sorted by user, then by age descending
 * ```
 */
export function orderBy<T>(
  collection: readonly T[] | Record<string, T>,
  iteratees: readonly (((value: T) => unknown) | string)[],
  orders: readonly ('asc' | 'desc')[] = []
): T[] {
  const items = Array.isArray(collection)
    ? [...collection]
    : Object.values(collection);

  return items.sort((a, b) => {
    for (let i = 0; i < iteratees.length; i++) {
      const iteratee = iteratees[i];
      const getValue =
        typeof iteratee === 'string'
          ? (item: T) => (item as Record<string, unknown>)[iteratee]
          : iteratee;

      const aValue = getValue(a) as number | string;
      const bValue = getValue(b) as number | string;
      const order = orders[i] || 'asc';

      if (aValue < bValue) {
        return order === 'asc' ? -1 : 1;
      }
      if (aValue > bValue) {
        return order === 'asc' ? 1 : -1;
      }
    }
    return 0;
  });
}
