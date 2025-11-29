/**
 * Checks if value is a finite primitive number.
 *
 * @param value - The value to check.
 * @returns Returns true if value is a finite number, else false.
 *
 * @example
 * ```ts
 * isFinite(3); // true
 * isFinite(Number.MIN_VALUE); // true
 * isFinite(Infinity); // false
 * isFinite('3'); // false
 * ```
 */
export function isFinite(value: unknown): value is number {
  return typeof value === 'number' && Number.isFinite(value);
}
