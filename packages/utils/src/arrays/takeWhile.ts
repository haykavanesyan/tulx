/**
 * Creates a slice of array with elements taken from the beginning.
 * Elements are taken until predicate returns falsey.
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
 * takeWhile(users, (o) => !o.active);
 * // [{ 'user': 'barney', 'active': false }, { 'user': 'fred', 'active': false }]
 * ```
 */
export function takeWhile<T>(
  array: readonly T[],
  predicate: (value: T, index: number, array: readonly T[]) => boolean
): T[] {
  let endIndex = array.length;
  for (let i = 0; i < array.length; i++) {
    if (!predicate(array[i], i, array)) {
      endIndex = i;
      break;
    }
  }
  return array.slice(0, endIndex);
}

