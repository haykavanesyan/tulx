/**
 * Checks if value is greater than or equal to other.
 *
 * @param value - The value to compare.
 * @param other - The other value to compare.
 * @returns Returns true if value is greater than or equal to other, else false.
 *
 * @example
 * ```ts
 * gte(3, 1); // true
 * gte(3, 3); // true
 * gte(1, 3); // false
 * ```
 */
export function gte(value: number | string, other: number | string): boolean {
  return value >= other;
}
