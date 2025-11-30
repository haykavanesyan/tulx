/**
 * Creates a function that accepts arguments of func and either invokes func returning its result, or returns a function that accepts the remaining arguments.
 *
 * @param func - The function to curry.
 * @param arity - The arity of func.
 * @returns Returns the new curried function.
 *
 * @example
 * ```ts
 * const abc = (a: string, b: string, c: string) => [a, b, c];
 * const curried = curry(abc);
 * curried('a')('b')('c'); // ['a', 'b', 'c']
 * curried('a', 'b')('c'); // ['a', 'b', 'c']
 * ```
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function curry<T extends (...args: any[]) => any>(
  func: T,
  arity: number = func.length
): (...args: unknown[]) => unknown {
  return function curried(this: unknown, ...args: unknown[]): unknown {
    if (args.length >= arity) {
      return func.apply(this, args);
    }
    return (...nextArgs: unknown[]) =>
      curried.apply(this, [...args, ...nextArgs]);
  };
}
