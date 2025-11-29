/**
 * Creates a function that iterates over pairs and invokes the corresponding function of the first predicate to return truthy.
 *
 * @param pairs - The predicate-function pairs.
 * @returns Returns the new composite function.
 *
 * @example
 * ```ts
 * const func = cond([
 *   [matches({ 'user': 'barney' }), () => 'A'],
 *   [matches({ 'age': 36 }), () => 'B'],
 *   [stubTrue, () => 'C']
 * ]);
 * func({ 'user': 'barney', 'active': false }); // 'A'
 * func({ 'user': 'fred', 'age': 36 }); // 'B'
 * func({ 'user': 'pebbles', 'age': 1 }); // 'C'
 * ```
 */
export function cond<T, R>(
  pairs: readonly [(value: T) => boolean, (value: T) => R][]
): (value: T) => R | undefined {
  return function (value: T): R | undefined {
    for (const [predicate, func] of pairs) {
      if (predicate(value)) {
        return func(value);
      }
    }
    return undefined;
  };
}
