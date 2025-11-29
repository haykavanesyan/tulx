/**
 * Creates a function that gets the argument at index n.
 *
 * @param n - The index of the argument to return.
 * @returns Returns the new function.
 *
 * @example
 * ```ts
 * const func = nthArg(1);
 * func('a', 'b', 'c', 'd'); // 'b'
 * ```
 */
export function nthArg(n: number = 0): (...args: unknown[]) => unknown {
  return function (...args: unknown[]): unknown {
    const index = n >= 0 ? n : args.length + n;
    return args[index];
  };
}
