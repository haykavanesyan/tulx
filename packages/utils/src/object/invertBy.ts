/**
 * This method is like invert except that the inverted object is generated from the results of running each element of object thru iteratee.
 *
 * @param object - The object to invert.
 * @param iteratee - The iteratee invoked per element.
 * @returns Returns the new inverted object.
 *
 * @example
 * ```ts
 * const object = { 'a': 1, 'b': 2, 'c': 1 };
 * invertBy(object); // { '1': ['a', 'c'], '2': ['b'] }
 * invertBy(object, (value) => 'group' + value); // { 'group1': ['a', 'c'], 'group2': ['b'] }
 * ```
 */
export function invertBy<T>(
  object: Record<string, T>,
  iteratee?: (value: T) => string
): Record<string, string[]> {
  const result: Record<string, string[]> = {};
  const getValue = iteratee || ((value: T) => String(value));

  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      const value = getValue(object[key]);
      if (!result[value]) {
        result[value] = [];
      }
      result[value].push(key);
    }
  }

  return result;
}
