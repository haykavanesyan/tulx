/**
 * This method is like merge except that it accepts customizer which is invoked to produce the merged values of the destination and source properties.
 *
 * @param object - The destination object.
 * @param sources - The source objects.
 * @param customizer - The function to customize assigned values.
 * @returns Returns object.
 *
 * @example
 * ```ts
 * function customizer(objValue: unknown, srcValue: unknown) {
 *   if (Array.isArray(objValue)) {
 *     return objValue.concat(srcValue);
 *   }
 * }
 * const object = { 'a': [1], 'b': [2] };
 * const other = { 'a': [3], 'b': [4] };
 * mergeWith(object, other, customizer); // { 'a': [1, 3], 'b': [2, 4] }
 * ```
 */
export function mergeWith<T extends Record<string, unknown>>(
  object: T,
  sources: readonly Record<string, unknown>[],
  customizer: (objValue: unknown, srcValue: unknown, key: string, object: T, source: Record<string, unknown>) => unknown
): T {
  const result = object as Record<string, unknown>;
  for (const source of sources) {
    for (const key in source) {
      const sourceValue = source[key];
      const objectValue = result[key];
      const customized = customizer(objectValue, sourceValue, key, object, source);

      if (customized !== undefined) {
        result[key] = customized;
      } else if (
        typeof objectValue === 'object' &&
        objectValue !== null &&
        !Array.isArray(objectValue) &&
        typeof sourceValue === 'object' &&
        sourceValue !== null &&
        !Array.isArray(sourceValue)
      ) {
        mergeWith(objectValue as T, [sourceValue as Record<string, unknown>], customizer);
      } else {
        result[key] = sourceValue;
      }
    }
  }
  return object;
}

