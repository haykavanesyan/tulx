/**
 * Computes number rounded up to precision.
 *
 * @param number - The number to round up.
 * @param precision - The precision to round up to.
 * @returns Returns the rounded up number.
 *
 * @example
 * ```ts
 * ceil(4.006); // 5
 * ceil(6.004, 2); // 6.01
 * ceil(6040, -2); // 6100
 * ```
 */
export function ceil(number: number, precision: number = 0): number {
  const factor = Math.pow(10, precision);
  return Math.ceil(number * factor) / factor;
}
