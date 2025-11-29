/**
 * An alternative to reduce; this method transforms object to a new accumulator object which is the result of running each of its own enumerable string keyed properties thru iteratee.
 *
 * @param object - The object to iterate over.
 * @param iteratee - The function invoked per iteration.
 * @param accumulator - The custom accumulator value.
 * @returns Returns the accumulated value.
 *
 * @example
 * ```ts
 * transform([2, 3, 4], (result, n) => {
 *   result.push(n *= n);
 *   return n % 2 === 0;
 * }, []); // [4, 9]
 * transform({ 'a': 1, 'b': 2, 'c': 1 }, (result, value, key) => {
 *   (result[value] || (result[value] = [])).push(key);
 * }, {}); // { '1': ['a', 'c'], '2': ['b'] }
 * ```
 */
export function transform<T, TResult>(
  object: Record<string, T> | readonly T[],
  iteratee: (accumulator: TResult, value: T, key: string | number, object: Record<string, T> | readonly T[]) => TResult | false,
  accumulator: TResult
): TResult {
  if (Array.isArray(object)) {
    for (let i = 0; i < object.length; i++) {
      const result = iteratee(accumulator, object[i], i, object);
      if (result === false) {
        break;
      }
      accumulator = result;
    }
  } else {
    const record = object as Record<string, T>;
    for (const key in record) {
      if (Object.prototype.hasOwnProperty.call(record, key)) {
        const result = iteratee(accumulator, record[key], key, record);
        if (result === false) {
          break;
        }
        accumulator = result;
      }
    }
  }
  return accumulator;
}

