/**
 * Assigns own enumerable string keyed properties of source objects to the destination object for all destination properties that resolve to undefined.
 *
 * @param object - The destination object.
 * @param sources - The source objects.
 * @returns Returns object.
 *
 * @example
 * ```ts
 * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 }); // { 'a': 1, 'b': 2 }
 * ```
 */
export function defaults<T extends Record<string, unknown>>(
  object: T,
  ...sources: readonly Record<string, unknown>[]
): T {
  const result = object as Record<string, unknown>;
  for (const source of sources) {
    for (const key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key) && result[key] === undefined) {
        result[key] = source[key];
      }
    }
  }
  return object;
}

