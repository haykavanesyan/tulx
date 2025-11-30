/**
 * Creates a function that invokes func with arguments reversed.
 *
 * @param func - The function to flip arguments for.
 * @returns Returns the new flipped function.
 *
 * @example
 * ```ts
 * const flipped = flip((...args: unknown[]) => args);
 * flipped('a', 'b', 'c', 'd'); // ['d', 'c', 'b', 'a']
 * ```
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function flip<T extends (...args: any[]) => any>(
  func: T
): (...args: Parameters<T>) => ReturnType<T> {
  return function (this: unknown, ...args: Parameters<T>): ReturnType<T> {
    return func.apply(this, args.reverse()) as ReturnType<T>;
  };
}
