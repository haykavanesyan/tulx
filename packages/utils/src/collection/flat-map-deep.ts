/**
 * This method is like flatMap except that it recursively flattens the mapped results.
 *
 * @param collection - The collection to iterate over.
 * @param iteratee - The function invoked per iteration.
 * @returns Returns the new flattened array.
 *
 * @example
 * ```ts
 * function duplicate(n: number) {
 *   return [[[n, n]]];
 * }
 * flatMapDeep([1, 2], duplicate); // [1, 1, 2, 2]
 * ```
 */
export function flatMapDeep<T, TResult>(
  collection: readonly T[] | Record<string, T>,
  iteratee: (
    value: T,
    index: number | string,
    collection: readonly T[] | Record<string, T>
  ) => TResult | readonly TResult[]
): TResult[] {
  const result: unknown[] = [];

  function flattenRecursive(arr: readonly unknown[]): void {
    for (const item of arr) {
      if (Array.isArray(item)) {
        flattenRecursive(item);
      } else {
        result.push(item);
      }
    }
  }

  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      const mapped = iteratee(collection[i], i, collection);
      if (Array.isArray(mapped)) {
        flattenRecursive(mapped);
      } else {
        result.push(mapped);
      }
    }
  } else {
    const record = collection as Record<string, T>;
    for (const key in record) {
      if (Object.prototype.hasOwnProperty.call(record, key)) {
        const mapped = iteratee(record[key], key, record);
        if (Array.isArray(mapped)) {
          flattenRecursive(mapped);
        } else {
          result.push(mapped);
        }
      }
    }
  }

  return result as TResult[];
}
