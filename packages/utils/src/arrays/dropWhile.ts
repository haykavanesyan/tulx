/**
 * Creates a slice of array excluding elements dropped from the beginning.
 * Elements are dropped until predicate returns falsey.
 *
 * @param array - The array to query.
 * @param predicate - The function invoked per iteration.
 * @returns The slice of array.
 *
 * @example
 * ```ts
 * const users = [
 *   { 'user': 'barney', 'active': false },
 *   { 'user': 'fred', 'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 * dropWhile(users, (o) => !o.active);
 * // [{ 'user': 'pebbles', 'active': true }]
 * ```
 */
export function dropWhile<T>(
  array: readonly T[],
  predicate: (value: T, index: number, array: readonly T[]) => boolean
): T[] {
  let startIndex = 0;
  for (let i = 0; i < array.length; i++) {
    if (!predicate(array[i], i, array)) {
      startIndex = i;
      break;
    }
  }
  return array.slice(startIndex);
}

