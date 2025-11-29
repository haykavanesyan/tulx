/**
 * Clamps a number between a lower and upper bound.
 *
 * @param number - The number to clamp.
 * @param lower - The lower bound.
 * @param upper - The upper bound.
 * @returns The clamped number.
 *
 * @example
 * ```ts
 * clamp(-10, -5, 5); // -5
 * clamp(10, -5, 5); // 5
 * clamp(3, -5, 5); // 3
 * ```
 */
export function clamp(number: number, lower: number, upper: number): number {
  if (number < lower) {
    return lower;
  }
  if (number > upper) {
    return upper;
  }
  return number;
}

