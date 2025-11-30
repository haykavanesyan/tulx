/**
 * Creates a function that is restricted to invoking func once.
 *
 * @param func - The function to restrict.
 * @returns Returns the new restricted function.
 *
 * @example
 * ```ts
 * const initialize = once(() => console.log('initialized'));
 * initialize(); // 'initialized'
 * initialize(); // Nothing happens
 * ```
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function once<T extends (...args: any[]) => any>(
  func: T
): (...args: Parameters<T>) => ReturnType<T> {
  let called = false;
  let result: ReturnType<T>;

  return function (this: unknown, ...args: Parameters<T>): ReturnType<T> {
    if (!called) {
      called = true;
      result = func.apply(this, args) as ReturnType<T>;
    }
    return result!;
  };
}
