/**
 * This method is like findKey except that it iterates over elements of a collection in the opposite order.
 *
 * @param object - The object to inspect.
 * @param predicate - The function invoked per iteration.
 * @returns Returns the key of the matched element, else undefined.
 *
 * @example
 * ```ts
 * const users = {
 *   'barney': { 'age': 36, 'active': true },
 *   'fred': { 'age': 40, 'active': false },
 *   'pebbles': { 'age': 1, 'active': true }
 * };
 * findLastKey(users, (o) => o.age < 40); // 'pebbles'
 * ```
 */
export function findLastKey<T>(
  object: Record<string, T>,
  predicate: (value: T, key: string, object: Record<string, T>) => boolean
): string | undefined {
  const keys = Object.keys(object);
  for (let i = keys.length - 1; i >= 0; i--) {
    const key = keys[i];
    if (predicate(object[key], key, object)) {
      return key;
    }
  }
  return undefined;
}
