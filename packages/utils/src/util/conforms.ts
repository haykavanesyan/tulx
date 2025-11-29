/**
 * Creates a function that invokes the predicate properties of source with the corresponding property values of a given object.
 *
 * @param source - The object of property predicates to conform to.
 * @returns Returns the new function.
 *
 * @example
 * ```ts
 * const objects = [
 *   { 'a': 2, 'b': 1 },
 *   { 'a': 1, 'b': 2 }
 * ];
 * filter(objects, conforms({ 'b': (n: number) => n > 1 })); // [{ 'a': 1, 'b': 2 }]
 * ```
 */
export function conforms<T extends Record<string, unknown>>(
  source: Record<string, (value: unknown) => boolean>
): (object: T) => boolean {
  return function (object: T): boolean {
    for (const key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        const predicate = source[key];
        const value = object[key];
        if (!predicate(value)) {
          return false;
        }
      }
    }
    return true;
  };
}
