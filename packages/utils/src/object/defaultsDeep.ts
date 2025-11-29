/**
 * This method is like defaults except that it recursively assigns default properties.
 *
 * @param object - The destination object.
 * @param sources - The source objects.
 * @returns Returns object.
 *
 * @example
 * ```ts
 * defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } }); // { 'a': { 'b': 2, 'c': 3 } }
 * ```
 */
export function defaultsDeep<T extends Record<string, unknown>>(
  object: T,
  ...sources: readonly Record<string, unknown>[]
): T {
  const result = object as Record<string, unknown>;
  for (const source of sources) {
    for (const key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        const sourceValue = source[key];
        const objectValue = result[key];

        if (objectValue === undefined) {
          result[key] = sourceValue;
        } else if (
          typeof objectValue === 'object' &&
          objectValue !== null &&
          !Array.isArray(objectValue) &&
          typeof sourceValue === 'object' &&
          sourceValue !== null &&
          !Array.isArray(sourceValue)
        ) {
          defaultsDeep(objectValue as Record<string, unknown>, sourceValue as Record<string, unknown>);
        }
      }
    }
  }
  return object;
}

