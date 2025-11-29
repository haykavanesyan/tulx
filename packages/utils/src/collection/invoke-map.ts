/**
 * Invokes the method at path of each element in collection, returning an array of the results of each invoked method.
 *
 * @param collection - The collection to iterate over.
 * @param path - The path of the method to invoke or the function invoked per iteration.
 * @param args - The arguments to invoke each method with.
 * @returns Returns the array of results.
 *
 * @example
 * ```ts
 * invokeMap([[5, 1, 7], [3, 2, 1]], 'sort'); // [[1, 5, 7], [1, 2, 3]]
 * invokeMap([123, 456], String.prototype.split, ['']); // [['1', '2', '3'], ['4', '5', '6']]
 * ```
 */
export function invokeMap<T, TResult>(
  collection: readonly T[] | Record<string, T>,
  path: string | ((value: T) => unknown),
  ...args: readonly unknown[]
): TResult[] {
  const result: TResult[] = [];
  const items = Array.isArray(collection)
    ? collection
    : Object.values(collection);

  for (const item of items) {
    let method: unknown;
    if (typeof path === 'string') {
      const pathParts = path.split('.');
      let current: unknown = item;
      for (const part of pathParts) {
        if (current && typeof current === 'object' && part in current) {
          current = (current as Record<string, unknown>)[part];
        } else {
          current = undefined;
          break;
        }
      }
      method = current;
    } else {
      method = path(item);
    }

    if (typeof method === 'function') {
      result.push(method.apply(item, args) as TResult);
    } else {
      result.push(undefined as unknown as TResult);
    }
  }

  return result;
}
