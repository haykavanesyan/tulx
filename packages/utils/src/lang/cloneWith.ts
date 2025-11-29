/**
 * This method is like clone except that it accepts customizer which is invoked to produce the cloned value.
 *
 * @param value - The value to clone.
 * @param customizer - The function to customize cloning.
 * @returns Returns the cloned value.
 *
 * @example
 * ```ts
 * function customizer(value: unknown) {
 *   if (typeof value === 'string') {
 *     return value.toUpperCase();
 *   }
 * }
 * const cloned = cloneWith({ 'a': 'hello' }, customizer);
 * // { 'a': 'HELLO' }
 * ```
 */
export function cloneWith<T>(
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
    return [...value] as T;
  }

  return { ...value } as T;
}

