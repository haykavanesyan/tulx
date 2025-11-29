/**
 * Creates an object composed of keys generated from the results of running each element of collection thru iteratee.
 * The order of grouped values is determined by the order they occur in collection.
 *
 * @param collection - The collection to iterate over.
 * @param iteratee - The iteratee to transform keys.
 * @returns Returns the composed aggregate object.
 *
 * @example
 * ```ts
 * groupBy([6.1, 4.2, 6.3], Math.floor); // { '4': [4.2], '6': [6.1, 6.3] }
 * groupBy(['one', 'two', 'three'], 'length'); // { '3': ['one', 'two'], '5': ['three'] }
 * ```
 */
export function groupBy<T>(
  collection: readonly T[] | Record<string, T>,
  iteratee: ((value: T) => string | number) | string
): Record<string, T[]> {
  const getValue = typeof iteratee === 'string'
    ? (item: T) => String((item as Record<string, unknown>)[iteratee])
    : (item: T) => String(iteratee(item));

  const result: Record<string, T[]> = {};
  const items = Array.isArray(collection) ? collection : Object.values(collection);

  for (const item of items) {
    const key = getValue(item);
    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(item);
  }

  return result;
}

