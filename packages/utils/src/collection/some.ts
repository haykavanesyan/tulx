/**
 * Checks if predicate returns truthy for any element of collection.
 *
 * @param collection - The collection to iterate over.
 * @param predicate - The function invoked per iteration.
 * @returns Returns true if any element passes the predicate check, else false.
 *
 * @example
 * ```ts
 * some([null, 0, 'yes', false], Boolean); // true
 * some([null, 0, false], Boolean); // false
 * ```
 */
const defaultPredicate = <T>(value: T): boolean => Boolean(value);

export function some<T>(
  collection: readonly T[] | Record<string, T>,
  predicate?: (
    value: T,
    index: number | string,
    collection: readonly T[] | Record<string, T>
  ) => boolean
): boolean {
  const pred = predicate ?? defaultPredicate;

  if (Array.isArray(collection)) {
    const len = collection.length;
    // Optimize: if predicate is default, use simpler check
    if (pred === defaultPredicate) {
      for (let i = 0; i < len; i++) {
        if (collection[i]) {
          return true;
        }
      }
    } else {
      for (let i = 0; i < len; i++) {
        if (pred(collection[i], i, collection)) {
          return true;
        }
      }
    }
  } else {
    const record = collection as Record<string, T>;
    for (const key in record) {
      if (Object.prototype.hasOwnProperty.call(record, key)) {
        if (pred(record[key], key, record)) {
          return true;
        }
      }
    }
  }

  return false;
}
