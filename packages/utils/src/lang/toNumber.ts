/**
 * Converts value to a number.
 *
 * @param value - The value to convert.
 * @returns Returns the converted number.
 *
 * @example
 * ```ts
 * toNumber(3.2); // 3.2
 * toNumber(Number.MIN_VALUE); // 5e-324
 * toNumber(Infinity); // Infinity
 * toNumber('3.2'); // 3.2
 * ```
 */
export function toNumber(value: unknown): number {
  return Number(value);
}

