/**
 * This method is like curry except that arguments are applied to func in the manner of partialRight instead of partial.
 *
 * @param func - The function to curry.
 * @param arity - The arity of func.
 * @returns Returns the new curried function.
 *
 * @example
 * ```ts
 * const abc = (a: string, b: string, c: string) => [a, b, c];
 * const curried = curryRight(abc);
 * curried('c')('b')('a'); // ['a', 'b', 'c']
 * curried('c', 'b')('a'); // ['a', 'b', 'c']
 * ```
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function curryRight<T extends (...args: any[]) => any>(
  func: T,
  arity: number = func.length
): (...args: unknown[]) => unknown {
  return function curried(this: unknown, ...args: unknown[]): unknown {
    if (args.length >= arity) {
      return func.apply(this, args);
    }
    return (...nextArgs: unknown[]) =>
      curried.apply(this, [...nextArgs, ...args]);
  };
}
