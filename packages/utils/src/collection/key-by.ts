/**
 * Creates an object composed of keys generated from the results of running each element of collection thru iteratee.
 * The corresponding value of each key is the last element responsible for generating the key.
 *
 * @param collection - The collection to iterate over.
 * @param iteratee - The iteratee to transform keys.
 * @returns Returns the composed aggregate object.
 *
 * @example
 * ```ts
 * const array = [
 *   { 'dir': 'left', 'code': 97 },
 *   { 'dir': 'right', 'code': 100 }
 * ];
 * keyBy(array, (o) => String.fromCharCode(o.code)); // { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
 * keyBy(array, 'dir'); // { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
 * ```
 */
export function keyBy<T>(
  collection: readonly T[] | Record<string, T>,
  iteratee: ((value: T) => string | number) | string
): Record<string, T> {
  const getValue =
    typeof iteratee === 'string'
      ? (item: T) => String((item as Record<string, unknown>)[iteratee])
      : (item: T) => String(iteratee(item));

  const result: Record<string, T> = {};
  const items = Array.isArray(collection)
    ? collection
    : Object.values(collection);

  for (const item of items) {
    const key = getValue(item);
    result[key] = item;
  }

  return result;
}
