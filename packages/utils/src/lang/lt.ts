/**
 * Checks if value is less than other.
 *
 * @param value - The value to compare.
 * @param other - The other value to compare.
 * @returns Returns true if value is less than other, else false.
 *
 * @example
 * ```ts
 * lt(1, 3); // true
 * lt(3, 3); // false
 * lt(3, 1); // false
 * ```
 */
export function lt(value: number | string, other: number | string): boolean {
  return value < other;
}
