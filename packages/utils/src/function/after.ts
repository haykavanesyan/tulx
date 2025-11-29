/**
 * The opposite of before; this method creates a function that invokes func once it's called n or more times.
 *
 * @param n - The number of calls before func is invoked.
 * @param func - The function to restrict.
 * @returns Returns the new restricted function.
 *
 * @example
 * ```ts
 * const saves = ['profile', 'settings'];
 * const done = after(saves.length, () => console.log('done saving!'));
 * saves.forEach((type) => done());
 * // Logs 'done saving!' after the two async saves have completed.
 * ```
 */
export function after<T extends (...args: unknown[]) => unknown>(
  n: number,
  func: T
): (...args: Parameters<T>) => ReturnType<T> | undefined {
  if (n < 1) {
    return func as (...args: Parameters<T>) => ReturnType<T> | undefined;
  }

  let count = 0;
  let result: ReturnType<T> | undefined;

  return function (this: unknown, ...args: Parameters<T>): ReturnType<T> | undefined {
    count++;
    if (count >= n) {
      result = func.apply(this, args) as ReturnType<T>;
    }
    return result;
  };
}

