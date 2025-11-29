/**
 * Creates a shallow clone of value.
 *
 * @param value - The value to clone.
 * @returns Returns the cloned value.
 *
 * @example
 * ```ts
 * const objects = [{ 'a': 1 }, { 'b': 2 }];
 * const shallow = clone(objects);
 * console.log(shallow[0] === objects[0]); // true
 * ```
 */
export function clone<T>(value: T): T {
  if (value === null || typeof value !== 'object') {
    return value;
  }

  if (Array.isArray(value)) {
    return [...value] as T;
  }

  return { ...value } as T;
}

