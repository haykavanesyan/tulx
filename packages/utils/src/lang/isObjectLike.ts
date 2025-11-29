/**
 * Checks if value is object-like.
 *
 * @param value - The value to check.
 * @returns Returns true if value is object-like, else false.
 *
 * @example
 * ```ts
 * isObjectLike({}); // true
 * isObjectLike([1, 2, 3]); // true
 * isObjectLike(() => {}); // false
 * isObjectLike(null); // false
 * ```
 */
export function isObjectLike(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === 'object';
}

