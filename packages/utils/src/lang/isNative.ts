/**
 * Checks if value is a native function.
 *
 * @param value - The value to check.
 * @returns Returns true if value is a native function, else false.
 *
 * @example
 * ```ts
 * isNative(Array.prototype.push); // true
 * isNative(() => {}); // false
 * ```
 */
export function isNative(value: unknown): boolean {
  return typeof value === 'function' && /^\s*function\s+\w+\s*\(/.test(value.toString());
}

