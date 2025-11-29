/**
 * This method is like findIndex except that it iterates over elements of collection from right to left.
 *
 * @param array - The array to inspect.
 * @param predicate - The function invoked per iteration.
 * @param fromIndex - The index to search from.
 * @returns The index of the found element, else -1.
 *
 * @example
 * ```ts
 * const users = [
 *   { 'user': 'barney', 'active': true },
 *   { 'user': 'fred', 'active': false },
 *   { 'user': 'pebbles', 'active': false }
 * ];
 * findLastIndex(users, (o) => o.user === 'pebbles'); // 2
 * findLastIndex(users, (o) => o.active); // 0
 * ```
 */
export function findLastIndex<T>(
  array: readonly T[],
  predicate: (value: T, index: number, array: readonly T[]) => boolean,
  fromIndex?: number
): number {
  const startIndex =
    fromIndex === undefined
      ? array.length - 1
      : fromIndex < 0
        ? Math.max(array.length + fromIndex, -1)
        : Math.min(fromIndex, array.length - 1);

  for (let i = startIndex; i >= 0; i--) {
    if (predicate(array[i], i, array)) {
      return i;
    }
  }
  return -1;
}
