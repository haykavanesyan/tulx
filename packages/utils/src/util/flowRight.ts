/**
 * This method is like flow except that it creates a function that invokes the given functions from right to left.
 *
 * @param funcs - The functions to invoke.
 * @returns Returns the new composite function.
 *
 * @example
 * ```ts
 * function square(n: number) {
 *   return n * n;
 * }
 * const addSquare = flowRight(square, add);
 * addSquare(1, 2); // 9
 * ```
 */
export function flowRight<TArgs extends unknown[], R>(
  ...funcs: readonly ((...args: unknown[]) => unknown)[]
): (...args: TArgs) => R {
  return function (this: unknown, ...args: TArgs): R {
    let result: unknown = funcs[funcs.length - 1].apply(this, args);
    for (let i = funcs.length - 2; i >= 0; i--) {
      result = funcs[i].call(this, result);
    }
    return result as R;
  };
}

