/**
 * Creates a function that invokes func with partials prepended to the arguments it receives.
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
 * const sayHelloTo = partial(greet, 'hello');
 * sayHelloTo('fred'); // 'hello fred'
 * ```
 */
export function partial<T extends (...args: unknown[]) => unknown>(
  func: T,
  ...partials: readonly unknown[]
): (...args: unknown[]) => ReturnType<T> {
  return function (this: unknown, ...args: unknown[]): ReturnType<T> {
    return func.apply(this, [...partials, ...args]) as ReturnType<T>;
  };
}
