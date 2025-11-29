/**
 * This method is like reduce except that it iterates over elements of collection from right to left.
 *
 * @param collection - The collection to iterate over.
 * @param iteratee - The function invoked per iteration.
 * @param accumulator - The initial value.
 * @returns Returns the accumulated value.
 *
 * @example
 * ```ts
 * const array = [[0, 1], [2, 3], [4, 5]];
 * reduceRight(array, (flattened, other) => flattened.concat(other), []); // [4, 5, 2, 3, 0, 1]
 * ```
 */
export function reduceRight<T, TResult>(
  collection: readonly T[] | Record<string, T>,
  iteratee: (accumulator: TResult, value: T, index: number | string, collection: readonly T[] | Record<string, T>) => TResult,
  accumulator: TResult
): TResult {
  if (Array.isArray(collection)) {
    for (let i = collection.length - 1; i >= 0; i--) {
      accumulator = iteratee(accumulator, collection[i], i, collection);
    }
  } else {
    const record = collection as Record<string, T>;
    const keys = Object.keys(record).reverse();
    for (const key of keys) {
      accumulator = iteratee(accumulator, record[key], key, record);
    }
  }

  return accumulator;
}

