/**
 * Creates a slice of array excluding elements dropped from the end.
 * Elements are dropped until predicate returns falsey.
 *
 * @param array - The array to query.
 * @param predicate - The function invoked per iteration.
 * @returns The slice of array.
 *
 * @example
 * ```ts
 * const users = [
 *   { 'user': 'barney', 'active': true },
 *   { 'user': 'fred', 'active': false },
 *   { 'user': 'pebbles', 'active': false }
 * ];
 * dropRightWhile(users, (o) => !o.active);
 * // [{ 'user': 'barney', 'active': true }]
 * ```
 */
export function dropRightWhile<T>(
  array: readonly T[],
  predicate: (value: T, index: number, array: readonly T[]) => boolean
): T[] {
  let endIndex = 0;
  for (let i = array.length - 1; i >= 0; i--) {
    if (!predicate(array[i], i, array)) {
      endIndex = i + 1;
      break;
    }
  }
  return array.slice(0, endIndex);
}
