/**
 * Performs a partial deep comparison between object and source to determine if object contains equivalent property values.
 *
 * @param object - The object to inspect.
 * @param source - The object of property values to match.
 * @returns Returns true if object is a match, else false.
 *
 * @example
 * ```ts
 * const object = { 'a': 1, 'b': 2 };
 * isMatch(object, { 'b': 2 }); // true
 * isMatch(object, { 'b': 1 }); // false
 * ```
 */
export function isMatch(object: Record<string, unknown>, source: Record<string, unknown>): boolean {
  for (const key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      const objValue = object[key];
      const srcValue = source[key];

      if (typeof srcValue === 'object' && srcValue !== null && !Array.isArray(srcValue)) {
        if (typeof objValue !== 'object' || objValue === null || Array.isArray(objValue)) {
          return false;
        }
        if (!isMatch(objValue as Record<string, unknown>, srcValue as Record<string, unknown>)) {
          return false;
        }
      } else if (objValue !== srcValue) {
        return false;
      }
    }
  }
  return true;
}

