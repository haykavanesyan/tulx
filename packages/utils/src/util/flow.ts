/**
 * Creates a function that returns the result of invoking the given functions with the this binding of the created function.
 *
 * @param funcs - The functions to invoke.
 * @returns Returns the new composite function.
 *
 * @example
 * ```ts
 * function square(n: number) {
 *   return n * n;
 * }
 * const addSquare = flow(add, square);
 * addSquare(1, 2); // 9
 * ```
 */
export function flow<TArgs extends unknown[], A>(
  f1: (...args: TArgs) => A
): (...args: TArgs) => A;

export function flow<TArgs extends unknown[], A, B>(
  f1: (...args: TArgs) => A,
  f2: (a: A) => B
): (...args: TArgs) => B;

export function flow<TArgs extends unknown[], A, B, C>(
  f1: (...args: TArgs) => A,
  f2: (a: A) => B,
  f3: (b: B) => C
): (...args: TArgs) => C;

export function flow<TArgs extends unknown[], A, B, C, D>(
  f1: (...args: TArgs) => A,
  f2: (a: A) => B,
  f3: (b: B) => C,
  f4: (c: C) => D
): (...args: TArgs) => D;

export function flow<TArgs extends unknown[], A, B, C, D, E>(
  f1: (...args: TArgs) => A,
  f2: (a: A) => B,
  f3: (b: B) => C,
  f4: (c: C) => D,
  f5: (d: D) => E
): (...args: TArgs) => E;

export function flow<TArgs extends unknown[]>(
  ...funcs: readonly ((...args: unknown[]) => unknown)[]
): (...args: TArgs) => unknown {
  return function (this: unknown, ...args: TArgs): unknown {
    let result: unknown = funcs[0].apply(this, args);
    for (let i = 1; i < funcs.length; i++) {
      result = funcs[i].call(this, result);
    }
    return result;
  };
}
