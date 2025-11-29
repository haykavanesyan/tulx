/**
 * Creates a function that invokes func with the array of arguments provided to the created function.
 *
 * @param func - The function to spread arguments over.
 * @param start - The start position of the spread.
 * @returns Returns the new function.
 *
 * @example
 * ```ts
 * const say = spread((who: string, what: string) => who + ' says ' + what);
 * say(['fred', 'hello']); // 'fred says hello'
 * ```
 */
export function spread<T extends (...args: unknown[]) => unknown>(
  func: T,
  start: number = 0
): (args: readonly unknown[]) => ReturnType<T> {
  return function (this: unknown, args: readonly unknown[]): ReturnType<T> {
    return func.apply(this, args.slice(start)) as ReturnType<T>;
  };
}

