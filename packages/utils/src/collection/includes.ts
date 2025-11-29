/**
 * Checks if value is in collection.
 *
 * @param collection - The collection to inspect.
 * @param value - The value to search for.
 * @param fromIndex - The index to search from.
 * @returns Returns true if value is found, else false.
 *
 * @example
 * ```ts
 * includes([1, 2, 3], 1); // true
 * includes([1, 2, 3], 1, 2); // false
 * includes({ 'a': 1, 'b': 2 }, 1); // true
 * includes('abcd', 'bc'); // true
 * ```
 */
export function includes(
  collection: readonly unknown[] | Record<string, unknown> | string,
  value: unknown,
  fromIndex: number = 0
): boolean {
  if (typeof collection === 'string') {
    return collection.includes(String(value), fromIndex);
  }

  if (Array.isArray(collection)) {
    const startIndex = fromIndex < 0 ? Math.max(collection.length + fromIndex, 0) : fromIndex;
    for (let i = startIndex; i < collection.length; i++) {
      if (collection[i] === value) {
        return true;
      }
    }
    return false;
  }

  const record = collection as Record<string, unknown>;
  for (const key in record) {
    if (Object.prototype.hasOwnProperty.call(record, key)) {
      if (record[key] === value) {
        return true;
      }
    }
  }

  return false;
}

