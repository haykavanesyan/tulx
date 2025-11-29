/**
 * Checks if value is the language type of Object.
 *
 * @param value - The value to check.
 * @returns Returns true if value is an object, else false.
 *
 * @example
 * ```ts
 * isObject({}); // true
 * isObject([1, 2, 3]); // true
 * isObject(() => {}); // true
 * isObject(null); // false
 * ```
 */
export function isObject(value: unknown): value is object {
  return (
    value !== null && (typeof value === 'object' || typeof value === 'function')
  );
}
