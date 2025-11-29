/**
 * Checks if value is an empty object, collection, map, or set.
 *
 * @param value - The value to check.
 * @returns Returns true if value is empty, else false.
 *
 * @example
 * ```ts
 * isEmpty(null); // true
 * isEmpty(true); // true
 * isEmpty(1); // true
 * isEmpty([1, 2, 3]); // false
 * isEmpty({ 'a': 1 }); // false
 * isEmpty('abc'); // false
 * isEmpty(new Map([['key', 'value']])); // false
 * isEmpty(new Set([1, 2, 3])); // false
 * ```
 */
export function isEmpty(value: unknown): boolean {
  if (value === null || value === undefined) {
    return true;
  }

  if (Array.isArray(value) || typeof value === 'string') {
    return value.length === 0;
  }

  if (value instanceof Map || value instanceof Set) {
    return value.size === 0;
  }

  if (typeof value === 'object') {
    return Object.keys(value).length === 0;
  }

  return true;
}

