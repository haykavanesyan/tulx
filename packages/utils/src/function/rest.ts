/**
 * Creates a function that invokes func with the this binding of the created function and arguments from start and beyond provided as an array.
 *
 * @param func - The function to apply a rest parameter to.
 * @param start - The start position of the rest parameter.
 * @returns Returns the new function.
 *
 * @example
 * ```ts
 * const say = rest((what: string, names: string[]) => what + ' ' + names.join(', '));
 * say('hello', 'fred', 'barney', 'pebbles'); // 'hello fred, barney, pebbles'
 * ```
 */
export function rest<T extends (...args: unknown[]) => unknown>(
  func: T,
  start: number = func.length - 1
): (...args: unknown[]) => ReturnType<T> {
  return function (this: unknown, ...args: unknown[]): ReturnType<T> {
    const normalArgs = args.slice(0, start);
    const restArgs = args.slice(start);
    return func.apply(this, [...normalArgs, restArgs]) as ReturnType<T>;
  };
}
