/**
 * Creates an object composed of keys generated from the results of running each element of collection thru iteratee.
 * The corresponding value of each key is the number of times the key was returned by iteratee.
 *
 * @param collection - The collection to iterate over.
 * @param iteratee - The iteratee to transform keys.
 * @returns The composed aggregate object.
 *
 * @example
 * ```ts
 * countBy([6.1, 4.2, 6.3], Math.floor); // { '4': 1, '6': 2 }
 * countBy(['one', 'two', 'three'], 'length'); // { '3': 2, '5': 1 }
 * ```
 */
export function countBy<T>(
  collection: readonly T[] | Record<string, T>,
  iteratee: ((value: T) => string | number) | string
): Record<string, number> {
  const getValue =
    typeof iteratee === 'string'
      ? (item: T) => String((item as Record<string, unknown>)[iteratee])
      : (item: T) => String(iteratee(item));

  const result: Record<string, number> = {};
  const items = Array.isArray(collection)
    ? collection
    : Object.values(collection);

  for (const item of items) {
    const key = getValue(item);
    result[key] = (result[key] || 0) + 1;
  }

  return result;
}
