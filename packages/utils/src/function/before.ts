/**
 * Creates a function that invokes func, with the this binding and arguments of the created function, while it's called less than n times.
 *
 * @param n - The number of calls at which func is no longer invoked.
 * @param func - The function to restrict.
 * @returns Returns the new restricted function.
 *
 * @example
 * ```ts
 * jQuery(element).on('click', before(5, addContactToList));
 * // Allows adding up to 4 contacts to the list.
 * ```
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function before<T extends (...args: any[]) => any>(
  n: number,
  func: T
): (...args: Parameters<T>) => ReturnType<T> | undefined {
  if (n < 1) {
    return () => undefined;
  }

  let count = 0;
  let result: ReturnType<T>;

  return function (
    this: unknown,
    ...args: Parameters<T>
  ): ReturnType<T> | undefined {
    if (count < n) {
      count++;
      result = func.apply(this, args) as ReturnType<T>;
      return result;
    }
    return result;
  };
}
