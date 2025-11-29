/**
 * Creates a function that invokes the predicate at the path of a given object.
 *
 * @param func - The value to convert to a callback.
 * @returns Returns the callback.
 *
 * @example
 * ```ts
 * const users = [
 *   { 'user': 'barney' },
 *   { 'user': 'fred' }
 * ];
 * map(users, iteratee('user')); // ['barney', 'fred']
 * ```
 */
export function iteratee<T>(
  func: ((value: T) => unknown) | string | Record<string, unknown>
): (value: T) => unknown {
  if (typeof func === 'function') {
    return func;
  }
  if (typeof func === 'string') {
    return (value: T) => (value as Record<string, unknown>)[func];
  }
  if (typeof func === 'object' && func !== null) {
    return (value: T) => {
      for (const key in func) {
        if (Object.prototype.hasOwnProperty.call(func, key)) {
          if ((value as Record<string, unknown>)[key] !== func[key]) {
            return false;
          }
        }
      }
      return true;
    };
  }
  return identity;
}

function identity<T>(value: T): T {
  return value;
}
