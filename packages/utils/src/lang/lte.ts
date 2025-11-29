/**
 * Checks if value is less than or equal to other.
 *
 * @param value - The value to compare.
 * @param other - The other value to compare.
 * @returns Returns true if value is less than or equal to other, else false.
 *
 * @example
 * ```ts
 * lte(1, 3); // true
 * lte(3, 3); // true
 * lte(3, 1); // false
 * ```
 */
export function lte(value: number | string, other: number | string): boolean {
  return value <= other;
}
