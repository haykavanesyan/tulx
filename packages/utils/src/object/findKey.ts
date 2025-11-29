/**
 * This method is like find except that it returns the key of the first element predicate returns truthy for instead of the element itself.
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
 * findKey(users, (o) => o.age < 40); // 'barney'
 * ```
 */
export function findKey<T>(
  object: Record<string, T>,
  predicate: (value: T, key: string, object: Record<string, T>) => boolean
): string | undefined {
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      if (predicate(object[key], key, object)) {
        return key;
      }
    }
  }
  return undefined;
}

