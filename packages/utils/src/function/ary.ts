/**
 * Creates a function that invokes func, with up to n arguments, ignoring any additional arguments.
 *
 * @param func - The function to cap arguments for.
 * @param n - The arity cap.
 * @returns Returns the new capped function.
 *
 * @example
 * ```ts
 * map(['6', '8', '10'], ary(parseInt, 1)); // [6, 8, 10]
 * ```
 */
export function ary<T extends (...args: unknown[]) => unknown>(
  func: T,
  n: number
): (...args: Parameters<T>) => ReturnType<T> {
  return function (this: unknown, ...args: Parameters<T>): ReturnType<T> {
    return func.apply(this, args.slice(0, n)) as ReturnType<T>;
  };
}
