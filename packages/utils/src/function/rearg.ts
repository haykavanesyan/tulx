/**
 * Creates a function that invokes func with arguments arranged according to the specified indexes.
 *
 * @param func - The function to rearrange arguments for.
 * @param indexes - The arranged argument indexes.
 * @returns Returns the new function.
 *
 * @example
 * ```ts
 * const rearged = rearg((a: string, b: string, c: string) => [a, b, c], [2, 0, 1]);
 * rearged('b', 'c', 'a'); // ['a', 'b', 'c']
 * ```
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function rearg<T extends (...args: any[]) => any>(
  func: T,
  indexes: readonly number[]
): (...args: unknown[]) => ReturnType<T> {
  return function (this: unknown, ...args: unknown[]): ReturnType<T> {
    const rearrangedArgs = indexes.map((index) => args[index]);
    return func.apply(this, rearrangedArgs) as ReturnType<T>;
  };
}
