/**
 * This method invokes interceptor and returns value.
 *
 * @param value - The value to provide to interceptor.
 * @param interceptor - The function to invoke.
 * @returns Returns value.
 *
 * @example
 * ```ts
 * tap([1, 2, 3], (array) => array.pop()); // [1, 2]
 * ```
 */
export function tap<T>(value: T, interceptor: (value: T) => void): T {
  interceptor(value);
  return value;
}
