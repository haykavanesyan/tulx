/**
 * Converts value to an integer.
 *
 * @param value - The value to convert.
 * @returns Returns the converted integer.
 *
 * @example
 * ```ts
 * toInteger(3.2); // 3
 * toInteger(Number.MIN_VALUE); // 0
 * toInteger(Infinity); // 1.7976931348623157e+308
 * toInteger('3.2'); // 3
 * ```
 */
export function toInteger(value: unknown): number {
  const num = Number(value);
  if (!Number.isFinite(num) || num === 0) {
    return 0;
  }
  return Math.trunc(num);
}

