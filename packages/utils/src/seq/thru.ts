/**
 * This method is like tap except that it returns the result of interceptor.
 *
 * @param value - The value to provide to interceptor.
 * @param interceptor - The function to invoke.
 * @returns Returns the result of interceptor.
 *
 * @example
 * ```ts
 * thru([1, 2, 3], (array) => array.reverse()); // [3, 2, 1]
 * ```
 */
export function thru<T, R>(value: T, interceptor: (value: T) => R): R {
  return interceptor(value);
}

