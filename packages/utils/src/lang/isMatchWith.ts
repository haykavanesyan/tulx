/**
 * This method is like isMatch except that it accepts customizer which is invoked to compare values.
 *
 * @param object - The object to inspect.
 * @param source - The object of property values to match.
 * @param customizer - The function to customize value comparisons.
 * @returns Returns true if object is a match, else false.
 *
 * @example
 * ```ts
 * function isGreeting(value: unknown) {
 *   return /^h(?:i|ello)$/.test(String(value));
 * }
 * function customizer(objValue: unknown, srcValue: unknown) {
 *   if (isGreeting(objValue) && isGreeting(srcValue)) {
 *     return true;
 *   }
 * }
 * const object = { 'greeting': 'hello' };
 * const source = { 'greeting': 'hi' };
 * isMatchWith(object, source, customizer); // true
 * ```
 */
export function isMatchWith(
  object: Record<string, unknown>,
  source: Record<string, unknown>,
  customizer?: (objValue: unknown, srcValue: unknown, indexOrKey?: number | string, object?: Record<string, unknown>, source?: Record<string, unknown>) => boolean | undefined
): boolean {
  for (const key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      const objValue = object[key];
      const srcValue = source[key];

      if (customizer) {
        const result = customizer(objValue, srcValue, key, object, source);
        if (result !== undefined) {
          if (!result) {
            return false;
          }
          continue;
        }
      }

      if (typeof srcValue === 'object' && srcValue !== null && !Array.isArray(srcValue)) {
        if (typeof objValue !== 'object' || objValue === null || Array.isArray(objValue)) {
          return false;
        }
        if (!isMatchWith(objValue as Record<string, unknown>, srcValue as Record<string, unknown>, customizer)) {
          return false;
        }
      } else if (objValue !== srcValue) {
        return false;
      }
    }
  }
  return true;
}

