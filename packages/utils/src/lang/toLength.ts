/**
 * Converts value to an integer suitable for use as the length of an array-like object.
 *
 * @param value - The value to convert.
 * @returns Returns the converted integer.
 *
 * @example
 * ```ts
 * toLength(3.2); // 3
 * toLength(Number.MIN_VALUE); // 0
 * toLength(Infinity); // 4294967295
 * toLength('3.2'); // 3
 * ```
 */
export function toLength(value: unknown): number {
  const num = toInteger(value);
  if (num < 0) {
    return 0;
  }
  return Math.min(num, 4294967295);
}

function toInteger(value: unknown): number {
  const num = Number(value);
  if (!Number.isFinite(num) || num === 0) {
    return 0;
  }
  return Math.trunc(num);
}

