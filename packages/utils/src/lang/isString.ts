/**
 * Checks if value is classified as a String primitive or object.
 *
 * @param value - The value to check.
 * @returns Returns true if value is a string, else false.
 *
 * @example
 * ```ts
 * isString('abc'); // true
 * isString(1); // false
 * ```
 */
export function isString(value: unknown): value is string {
  return typeof value === 'string' || value instanceof String;
}

