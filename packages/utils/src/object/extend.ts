/**
 * Assigns own enumerable string keyed properties of source objects to the destination object.
 * This is an alias for assignIn.
 *
 * @param object - The destination object.
 * @param sources - The source objects.
 * @returns Returns object.
 *
 * @example
 * ```ts
 * extend({ 'a': 1 }, { 'b': 2 }); // { 'a': 1, 'b': 2 }
 * ```
 */
export function extend<T extends Record<string, unknown>>(
  object: T,
  ...sources: readonly Record<string, unknown>[]
): T {
  const result = object as Record<string, unknown>;
  for (const source of sources) {
    for (const key in source) {
      result[key] = source[key];
    }
  }
  return object;
}

