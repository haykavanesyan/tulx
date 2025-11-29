/**
 * This method is like isArrayLike except that it also checks if value is an object.
 *
 * @param value - The value to check.
 * @returns Returns true if value is an array-like object, else false.
 *
 * @example
 * ```ts
 * isArrayLikeObject([1, 2, 3]); // true
 * isArrayLikeObject(document.body.children); // true
 * isArrayLikeObject('abc'); // false
 * isArrayLikeObject(() => {}); // false
 * ```
 */
export function isArrayLikeObject(value: unknown): value is ArrayLike<unknown> & object {
  return (
    typeof value === 'object' &&
    value !== null &&
    !Array.isArray(value) &&
    typeof (value as { length?: unknown }).length === 'number' &&
    (value as { length: number }).length >= 0 &&
    (value as { length: number }).length % 1 === 0 &&
    (value as { length: number }).length <= Number.MAX_SAFE_INTEGER
  );
}

