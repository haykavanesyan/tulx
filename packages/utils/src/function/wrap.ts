/**
 * Creates a function that provides value to wrapper as its first argument.
 *
 * @param value - The value to wrap.
 * @param wrapper - The wrapper function.
 * @returns Returns the new function.
 *
 * @example
 * ```ts
 * const p = wrap(escape, (func: typeof escape, text: string) => '<p>' + func(text) + '</p>');
 * p('fred, barney, & pebbles'); // '<p>fred, barney, &amp; pebbles</p>'
 * ```
 */
export function wrap<T, TArgs extends unknown[], TResult>(
  value: T,
  wrapper: (value: T, ...args: TArgs) => TResult
): (...args: TArgs) => TResult {
  return function (this: unknown, ...args: TArgs): TResult {
    return wrapper(value, ...args);
  };
}
