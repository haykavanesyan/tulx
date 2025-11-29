/**
 * Creates a function that invokes func with the this binding of thisArg and partials prepended to the arguments it receives.
 *
 * @param func - The function to bind.
 * @param thisArg - The this binding of func.
 * @param partials - The arguments to be partially applied.
 * @returns Returns the new bound function.
 *
 * @example
 * ```ts
 * const greet = function(greeting: string, punctuation: string) {
 *   return greeting + ' ' + this.user + punctuation;
 * };
 * const object = { 'user': 'fred' };
 * const bound = bind(greet, object, 'hi');
 * bound('!'); // 'hi fred!'
 * ```
 */
export function bind<T extends (...args: unknown[]) => unknown>(
  func: T,
  thisArg: unknown,
  ...partials: readonly unknown[]
): (...args: unknown[]) => ReturnType<T> {
  return function (this: unknown, ...args: unknown[]): ReturnType<T> {
    return func.apply(thisArg, [...partials, ...args]) as ReturnType<T>;
  };
}
