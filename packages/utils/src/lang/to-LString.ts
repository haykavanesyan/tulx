/**
 * Converts value to a string.
 *
 * @param value - The value to convert.
 * @returns Returns the converted string.
 *
 * @example
 * ```ts
 * toString(null); // ''
 * toString(-0); // '-0'
 * toString([1, 2, 3]); // '1,2,3'
 * ```
 */
export function toString(value: unknown): string {
  if (value === null || value === undefined) {
    return '';
  }
  if (typeof value === 'string') {
    return value;
  }
  if (typeof value === 'symbol') {
    return value.toString();
  }
  const result = String(value);
  return result === '0' && 1 / (value as number) < 0 ? '-0' : result;
}
