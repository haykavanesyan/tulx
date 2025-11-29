/**
 * Reduces collection to a value which is the accumulated result of running each element in collection thru iteratee.
 *
 * @param collection - The collection to iterate over.
 * @param iteratee - The function invoked per iteration.
 * @param accumulator - The initial value.
 * @returns Returns the accumulated value.
 *
 * @example
 * ```ts
 * reduce([1, 2], (sum, n) => sum + n, 0); // 3
 * reduce({ 'a': 1, 'b': 2, 'c': 1 }, (result, value, key) => {
 *   (result[value] || (result[value] = [])).push(key);
 *   return result;
 * }, {}); // { '1': ['a', 'c'], '2': ['b'] }
 * ```
 */
export function reduce<T, TResult>(
  collection: readonly T[] | Record<string, T>,
  iteratee: (accumulator: TResult, value: T, index: number | string, collection: readonly T[] | Record<string, T>) => TResult,
  accumulator: TResult
): TResult {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      accumulator = iteratee(accumulator, collection[i], i, collection);
    }
  } else {
    const record = collection as Record<string, T>;
    for (const key in record) {
      if (Object.prototype.hasOwnProperty.call(record, key)) {
        accumulator = iteratee(accumulator, record[key], key, record);
      }
    }
  }

  return accumulator;
}

