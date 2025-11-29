/**
 * This method is like extend except that it accepts customizer which is invoked to produce the assigned values.
 *
 * @param object - The destination object.
 * @param sources - The source objects.
 * @param customizer - The function to customize assigned values.
 * @returns Returns object.
 *
 * @example
 * ```ts
 * function customizer(objValue: unknown, srcValue: unknown) {
 *   return objValue === undefined ? srcValue : objValue;
 * }
 * extendWith({ 'a': 1 }, { 'b': 2 }, customizer); // { 'a': 1, 'b': 2 }
 * ```
 */
export function extendWith<T extends Record<string, unknown>>(
  object: T,
  sources: readonly Record<string, unknown>[],
  customizer: (objValue: unknown, srcValue: unknown, key: string, object: T, source: Record<string, unknown>) => unknown
): T {
  const result = object as Record<string, unknown>;
  for (const source of sources) {
    for (const key in source) {
      const objValue = result[key];
      const srcValue = source[key];
      result[key] = customizer(objValue, srcValue, key, object, source);
    }
  }
  return object;
}

