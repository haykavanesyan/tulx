/**
 * Checks if value is classified as a Function object.
 *
 * @param value - The value to check.
 * @returns Returns true if value is a function, else false.
 *
 * @example
 * ```ts
 * isFunction(() => {}); // true
 * isFunction(/abc/); // false
 * ```
 */
export function isFunction(value: unknown): value is (...args: unknown[]) => unknown {
  return typeof value === 'function';
}

