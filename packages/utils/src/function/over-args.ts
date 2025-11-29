/**
 * Creates a function that invokes func with its arguments transformed.
 *
 * @param func - The function to wrap.
 * @param transforms - The argument transforms.
 * @returns Returns the new function.
 *
 * @example
 * ```ts
 * function doubled(n: number) {
 *   return n * 2;
 * }
 * function square(n: number) {
 *   return n * n;
 * }
 * const func = overArgs((x: number, y: number) => [x, y], [square, doubled]);
 * func(9, 3); // [81, 6]
 * ```
 */
export function overArgs<T extends (...args: unknown[]) => unknown>(
  func: T,
  transforms: readonly ((arg: unknown) => unknown)[]
): (...args: unknown[]) => ReturnType<T> {
  return function (this: unknown, ...args: unknown[]): ReturnType<T> {
    const transformedArgs = args.map((arg, index) => {
      const transform = transforms[index];
      return transform ? transform(arg) : arg;
    });
    return func.apply(this, transformedArgs) as ReturnType<T>;
  };
}
