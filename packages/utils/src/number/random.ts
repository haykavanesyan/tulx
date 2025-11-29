/**
 * Produces a random number between the inclusive lower and upper bounds.
 * If only one argument is provided, a number between 0 and the given number is returned.
 * If floating is true, or either lower or upper are floats, a floating-point number is returned instead of an integer.
 *
 * @param lower - The lower bound.
 * @param upper - The upper bound.
 * @param floating - Whether to return a floating-point number.
 * @returns A random number.
 *
 * @example
 * ```ts
 * random(0, 5); // an integer between 0 and 5
 * random(5); // an integer between 0 and 5
 * random(5, true); // a floating-point number between 0 and 5
 * random(1.2, 5.2); // a floating-point number between 1.2 and 5.2
 * ```
 */
export function random(
  lower?: number,
  upper?: number,
  floating?: boolean
): number {
  if (lower === undefined && upper === undefined) {
    return Math.random();
  }

  if (upper === undefined) {
    upper = lower ?? 0;
    lower = 0;
  }

  const lowerValue = lower ?? 0;
  const upperValue = upper ?? 0;

  const isFloating =
    floating || !Number.isInteger(lowerValue) || !Number.isInteger(upperValue);

  if (isFloating) {
    return Math.random() * (upperValue - lowerValue) + lowerValue;
  }

  return Math.floor(Math.random() * (upperValue - lowerValue + 1)) + lowerValue;
}
