/**
 * Adds all own enumerable string keyed function properties of a source object to the destination object.
 *
 * @param object - The destination object.
 * @param source - The object of functions to add.
 * @param options - The options object.
 * @returns Returns object.
 *
 * @example
 * ```ts
 * function vowels(string: string) {
 *   return string.match(/[aeiou]/g);
 * }
 * mixin({}, { 'vowels': vowels });
 * ```
 */
export function mixin<T extends Record<string, unknown>>(
  object: T,
  source: Record<string, unknown>,
  _options?: { chain?: boolean }
): T {
  const result = object as Record<string, unknown>;
  for (const key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key) && typeof source[key] === 'function') {
      result[key] = source[key];
    }
  }
  return object;
}

