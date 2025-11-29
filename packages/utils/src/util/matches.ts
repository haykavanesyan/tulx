/**
 * Creates a function that performs a partial deep comparison between a given object and source.
 *
 * @param source - The object of property values to match.
 * @returns Returns the new spec function.
 *
 * @example
 * ```ts
 * const objects = [
 *   { 'a': 1, 'b': 2, 'c': 3 },
 *   { 'a': 4, 'b': 5, 'c': 6 }
 * ];
 * filter(objects, matches({ 'a': 4, 'c': 6 })); // [{ 'a': 4, 'b': 5, 'c': 6 }]
 * ```
 */
export function matches<T extends Record<string, unknown>>(
  source: Record<string, unknown>
): (object: T) => boolean {
  return function (object: T): boolean {
    for (const key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        if (object[key] !== source[key]) {
          return false;
        }
      }
    }
    return true;
  };
}
