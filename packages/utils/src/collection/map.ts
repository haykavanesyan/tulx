/**
 * Creates an array of values by running each element in collection thru iteratee.
 *
 * @param collection - The collection to iterate over.
 * @param iteratee - The function invoked per iteration.
 * @returns Returns the new mapped array.
 *
 * @example
 * ```ts
 * function square(n: number) {
 *   return n * n;
 * }
 * map([4, 8], square); // [16, 64]
 * map({ 'a': 4, 'b': 8 }, square); // [16, 64]
 * ```
 */
export function map<T, TResult>(
  collection: readonly T[] | Record<string, T>,
  iteratee: (value: T, index: number | string, collection: readonly T[] | Record<string, T>) => TResult
): TResult[] {
  const result: TResult[] = [];

  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      result.push(iteratee(collection[i], i, collection));
    }
  } else {
    const record = collection as Record<string, T>;
    for (const key in record) {
      if (Object.prototype.hasOwnProperty.call(record, key)) {
        result.push(iteratee(record[key], key, record));
      }
    }
  }

  return result;
}

