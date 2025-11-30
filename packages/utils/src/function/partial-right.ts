/**
 * This method is like partial except that partials are appended to the arguments it receives.
 *
 * @param func - The function to partially apply arguments to.
 * @param partials - The arguments to be partially applied.
 * @returns Returns the new partially applied function.
 *
 * @example
 * ```ts
 * function greet(greeting: string, name: string) {
 *   return greeting + ' ' + name;
 * }
 * const greetFred = partialRight(greet, 'fred');
 * greetFred('hi'); // 'hi fred'
 * ```
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function partialRight<T extends (...args: any[]) => any>(
  func: T,
  ...partials: readonly unknown[]
): (...args: unknown[]) => ReturnType<T> {
  return function (this: unknown, ...args: unknown[]): ReturnType<T> {
    return func.apply(this, [...args, ...partials]) as ReturnType<T>;
  };
}
