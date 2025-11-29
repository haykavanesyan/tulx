/**
 * Creates a flattened array of values by running each element in collection thru iteratee and flattening the mapped results.
 *
 * @param collection - The collection to iterate over.
 * @param iteratee - The function invoked per iteration.
 * @returns Returns the new flattened array.
 *
 * @example
 * ```ts
 * function duplicate(n: number) {
 *   return [n, n];
 * }
 * flatMap([1, 2], duplicate); // [1, 1, 2, 2]
 * ```
 */
export function flatMap<T, TResult>(
  collection: readonly T[] | Record<string, T>,
  iteratee: (
    value: T,
    index: number | string,
    collection: readonly T[] | Record<string, T>
  ) => TResult | readonly TResult[]
): TResult[] {
  const result: TResult[] = [];

  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      const mapped = iteratee(collection[i], i, collection);
      if (Array.isArray(mapped)) {
        result.push(...(mapped as TResult[]));
      } else {
        result.push(mapped as TResult);
      }
    }
  } else {
    const record = collection as Record<string, T>;
    for (const key in record) {
      if (Object.prototype.hasOwnProperty.call(record, key)) {
        const mapped = iteratee(record[key], key, record);
        if (Array.isArray(mapped)) {
          result.push(...(mapped as TResult[]));
        } else {
          result.push(mapped as TResult);
        }
      }
    }
  }

  return result;
}
