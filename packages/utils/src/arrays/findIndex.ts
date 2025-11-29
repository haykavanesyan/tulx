/**
 * Returns the index of the first element predicate returns truthy for instead of the element itself.
 *
 * @param array - The array to inspect.
 * @param predicate - The function invoked per iteration.
 * @param fromIndex - The index to search from.
 * @returns The index of the found element, else -1.
 *
 * @example
 * ```ts
 * const users = [
 *   { 'user': 'barney', 'active': false },
 *   { 'user': 'fred', 'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 * findIndex(users, (o) => o.user === 'barney'); // 0
 * findIndex(users, (o) => o.active); // 2
 * ```
 */
export function findIndex<T>(
  array: readonly T[],
  predicate: (value: T, index: number, array: readonly T[]) => boolean,
  fromIndex: number = 0
): number {
  const startIndex = fromIndex < 0 ? Math.max(array.length + fromIndex, 0) : fromIndex;
  for (let i = startIndex; i < array.length; i++) {
    if (predicate(array[i], i, array)) {
      return i;
    }
  }
  return -1;
}

