/**
 * Converts value to a safe integer.
 *
 * @param value - The value to convert.
 * @returns Returns the converted integer.
 *
 * @example
 * ```ts
 * toSafeInteger(3.2); // 3
 * toSafeInteger(Number.MIN_VALUE); // 0
 * toSafeInteger(Infinity); // 9007199254740991
 * toSafeInteger('3.2'); // 3
 * ```
 */
export function toSafeInteger(value: unknown): number {
  const num = Number(value);
  if (!Number.isFinite(num)) {
    return num > 0 ? Number.MAX_SAFE_INTEGER : Number.MIN_SAFE_INTEGER;
  }
  return Math.trunc(Math.max(Math.min(num, Number.MAX_SAFE_INTEGER), Number.MIN_SAFE_INTEGER));
}

