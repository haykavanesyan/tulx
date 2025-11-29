/**
 * Creates a function that accepts up to one argument, ignoring any additional arguments.
 *
 * @param func - The function to cap arguments for.
 * @returns Returns the new capped function.
 *
 * @example
 * ```ts
 * map(['6', '8', '10'], unary(parseInt)); // [6, 8, 10]
 * ```
 */
export function unary<T extends (...args: unknown[]) => unknown>(
  func: T
): (arg: unknown) => ReturnType<T> {
  return function (this: unknown, arg: unknown): ReturnType<T> {
    return func.call(this, arg) as ReturnType<T>;
  };
}
