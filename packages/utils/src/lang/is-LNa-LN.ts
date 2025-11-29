/**
 * Checks if value is NaN.
 *
 * @param value - The value to check.
 * @returns Returns true if value is NaN, else false.
 *
 * @example
 * ```ts
 * isNaN(NaN); // true
 * isNaN(new Number(NaN)); // true
 * isNaN(undefined); // true
 * isNaN(null); // false
 * ```
 */
export function isNaN(value: unknown): boolean {
  return (
    Number.isNaN(value) ||
    (typeof value === 'number' && Number.isNaN(Number(value)))
  );
}
