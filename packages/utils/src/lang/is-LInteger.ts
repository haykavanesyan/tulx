/**
 * Checks if value is an integer.
 *
 * @param value - The value to check.
 * @returns Returns true if value is an integer, else false.
 *
 * @example
 * ```ts
 * isInteger(3); // true
 * isInteger(Number.MIN_VALUE); // false
 * isInteger(Infinity); // false
 * isInteger('3'); // false
 * ```
 */
export function isInteger(value: unknown): value is number {
  return typeof value === 'number' && Number.isInteger(value);
}
