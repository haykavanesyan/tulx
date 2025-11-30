/**
 * Creates a function that memoizes the result of func.
 *
 * @param func - The function to have its output memoized.
 * @param resolver - The function to resolve the cache key.
 * @returns Returns the new memoized function.
 *
 * @example
 * ```ts
 * const object = { 'a': 1, 'b': 2 };
 * const other = { 'c': 3, 'd': 4 };
 * const values = memoize((obj: Record<string, number>) => Object.values(obj));
 * values(object); // [1, 2]
 * values(other); // [3, 4]
 * ```
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function memoize<T extends (...args: any[]) => any>(
  func: T,
  resolver?: (...args: Parameters<T>) => string
): T & { cache: Map<string, ReturnType<T>> } {
  const cache = new Map<string, ReturnType<T>>();
  const getKey = resolver ?? ((...args: Parameters<T>) => JSON.stringify(args));

  const memoized = function (
    this: unknown,
    ...args: Parameters<T>
  ): ReturnType<T> {
    const key = getKey(...args);
    if (cache.has(key)) {
      return cache.get(key)!;
    }
    const result = func.apply(this, args) as ReturnType<T>;
    cache.set(key, result);
    return result;
  } as T & { cache: Map<string, ReturnType<T>> };

  memoized.cache = cache;
  return memoized;
}
