/**
 * Checks if value is a safe integer.
 *
 * @param value - The value to check.
 * @returns Returns true if value is a safe integer, else false.
 *
 * @example
 * ```ts
 * isSafeInteger(3); // true
 * isSafeInteger(Number.MIN_VALUE); // false
 * isSafeInteger(Infinity); // false
 * isSafeInteger('3'); // false
 * ```
 */
export function isSafeInteger(value: unknown): value is number {
  return typeof value === 'number' && Number.isSafeInteger(value);
}

