/**
 * Creates a function that negates the result of the predicate func.
 *
 * @param predicate - The predicate to negate.
 * @returns Returns the new negated function.
 *
 * @example
 * ```ts
 * const isEven = (n: number) => n % 2 === 0;
 * filter([1, 2, 3, 4, 5, 6], negate(isEven)); // [1, 3, 5]
 * ```
 */
export function negate<T extends (...args: unknown[]) => boolean>(
  predicate: T
): (...args: Parameters<T>) => boolean {
  return function (this: unknown, ...args: Parameters<T>): boolean {
    return !predicate.apply(this, args);
  };
}
