/**
 * Converts value to a finite number.
 *
 * @param value - The value to convert.
 * @returns Returns the converted number.
 *
 * @example
 * ```ts
 * toFinite(3.2); // 3.2
 * toFinite(Number.MIN_VALUE); // 5e-324
 * toFinite(Infinity); // 1.7976931348623157e+308
 * toFinite('3.2'); // 3.2
 * ```
 */
export function toFinite(value: unknown): number {
  const num = Number(value);
  if (!Number.isFinite(num)) {
    return num > 0 ? Number.MAX_VALUE : -Number.MAX_VALUE;
  }
  return num;
}

