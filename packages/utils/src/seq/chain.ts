/**
 * Creates a lodash wrapper instance that wraps value with explicit method chain sequences enabled.
 *
 * @param value - The value to wrap.
 * @returns Returns the new lodash wrapper instance.
 *
 * @example
 * ```ts
 * const users = [
 *   { 'user': 'barney', 'age': 36 },
 *   { 'user': 'fred', 'age': 40 }
 * ];
 * const youngest = chain(users)
 *   .sortBy('age')
 *   .map((o) => o.user + ' is ' + o.age)
 *   .head()
 *   .value();
 * // 'barney is 36'
 * ```
 */
export type ChainWrapper<T> = {
  value(): T;
};

export function chain<T>(value: T): ChainWrapper<T> {
  return {
    value(): T {
      return value;
    },
  };
}
