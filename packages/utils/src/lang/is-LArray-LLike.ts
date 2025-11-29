/**
 * Checks if value is array-like.
 *
 * @param value - The value to check.
 * @returns Returns true if value is array-like, else false.
 *
 * @example
 * ```ts
 * isArrayLike([1, 2, 3]); // true
 * isArrayLike(document.body.children); // true
 * isArrayLike('abc'); // true
 * isArrayLike(() => {}); // false
 * ```
 */
export function isArrayLike(value: unknown): value is ArrayLike<unknown> {
  return (
    value !== null &&
    typeof value !== 'function' &&
    typeof (value as { length?: unknown }).length === 'number' &&
    (value as { length: number }).length >= 0 &&
    (value as { length: number }).length % 1 === 0 &&
    (value as { length: number }).length <= Number.MAX_SAFE_INTEGER
  );
}
