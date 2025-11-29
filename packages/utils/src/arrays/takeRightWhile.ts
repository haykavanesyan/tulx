/**
 * Creates a slice of array with elements taken from the end.
 * Elements are taken until predicate returns falsey.
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
 * takeRightWhile(users, (o) => !o.active);
 * // [{ 'user': 'fred', 'active': false }, { 'user': 'pebbles', 'active': false }]
 * ```
 */
export function takeRightWhile<T>(
  array: readonly T[],
  predicate: (value: T, index: number, array: readonly T[]) => boolean
): T[] {
  let startIndex = array.length;
  for (let i = array.length - 1; i >= 0; i--) {
    if (!predicate(array[i], i, array)) {
      startIndex = i + 1;
      break;
    }
  }
  return array.slice(startIndex);
}

