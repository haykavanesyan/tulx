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
  const getValue: (item: T) => string =
    typeof iteratee === 'string'
      ? (item: T) => {
          const val = (item as Record<string, unknown>)[iteratee];
          return val == null ? '' : String(val);
        }
      : (item: T) => {
          const val = iteratee(item);
          return val == null ? '' : String(val);
        };

  const result: Record<string, T[]> = {};

  if (Array.isArray(collection)) {
    const len = collection.length;
    for (let i = 0; i < len; i++) {
      const item = collection[i];
      const key = getValue(item);
      const group = result[key];
      if (group) {
        group.push(item);
      } else {
        result[key] = [item];
      }
    }
  } else {
    const items = Object.values(collection);
    const len = items.length;
    for (let i = 0; i < len; i++) {
      const item = items[i];
      const key = getValue(item);
      const group = result[key];
      if (group) {
        group.push(item);
      } else {
        result[key] = [item];
      }
    }
  }

  return result;
}
