/**
 * This method is like cloneDeep except that it accepts customizer which is invoked to produce the cloned value.
 *
 * @param value - The value to recursively clone.
 * @param customizer - The function to customize cloning.
 * @returns Returns the deep cloned value.
 *
 * @example
 * ```ts
 * function customizer(value: unknown) {
 *   if (typeof value === 'string') {
 *     return value.toUpperCase();
 *   }
 * }
 * const cloned = cloneDeepWith({ 'a': 'hello' }, customizer);
 * // { 'a': 'HELLO' }
 * ```
 */
export function cloneDeepWith<T>(
  value: T,
  customizer?: (value: unknown) => unknown
): T {
  if (customizer) {
    const result = customizer(value);
    if (result !== undefined) {
      return result as T;
    }
  }

  if (value === null || typeof value !== 'object') {
    return value;
  }

  if (Array.isArray(value)) {
    return value.map((item) => cloneDeepWith(item, customizer)) as T;
  }

  if (value instanceof Date) {
    return new Date(value.getTime()) as T;
  }

  if (value instanceof RegExp) {
    return new RegExp(value.source, value.flags) as T;
  }

  const cloned = {} as T;
  for (const key in value) {
    if (Object.prototype.hasOwnProperty.call(value, key)) {
      (cloned as Record<string, unknown>)[key] = cloneDeepWith(
        (value as Record<string, unknown>)[key],
        customizer
      );
    }
  }

  return cloned;
}
