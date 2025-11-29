/**
 * Recursively merges own and inherited enumerable string keyed properties of source objects into the destination object.
 *
 * @param object - The destination object.
 * @param sources - The source objects.
 * @returns Returns object.
 *
 * @example
 * ```ts
 * const object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 * const other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 * merge(object, other); // { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 * ```
 */
export function merge<T extends Record<string, unknown>>(
  object: T,
  ...sources: readonly Record<string, unknown>[]
): T {
  const result = object as Record<string, unknown>;
  for (const source of sources) {
    for (const key in source) {
      const sourceValue = source[key];
      const objectValue = result[key];

      if (
        typeof objectValue === 'object' &&
        objectValue !== null &&
        !Array.isArray(objectValue) &&
        typeof sourceValue === 'object' &&
        sourceValue !== null &&
        !Array.isArray(sourceValue)
      ) {
        merge(
          objectValue as Record<string, unknown>,
          sourceValue as Record<string, unknown>
        );
      } else {
        result[key] = sourceValue;
      }
    }
  }
  return object;
}
