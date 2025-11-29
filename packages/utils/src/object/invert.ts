/**
 * Creates an object composed of the inverted keys and values of object.
 *
 * @param object - The object to invert.
 * @returns Returns the new inverted object.
 *
 * @example
 * ```ts
 * const object = { 'a': 1, 'b': 2, 'c': 1 };
 * invert(object); // { '1': 'c', '2': 'b' }
 * ```
 */
export function invert(object: Record<string, string | number>): Record<string, string> {
  const result: Record<string, string> = {};
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      const value = String(object[key]);
      result[value] = key;
    }
  }
  return result;
}

