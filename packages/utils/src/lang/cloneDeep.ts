/**
 * This method is like clone except that it recursively clones value.
 *
 * @param value - The value to recursively clone.
 * @returns Returns the deep cloned value.
 *
 * @example
 * ```ts
 * const objects = [{ 'a': 1 }, { 'b': 2 }];
 * const deep = cloneDeep(objects);
 * console.log(deep[0] === objects[0]); // false
 * ```
 */
export function cloneDeep<T>(value: T): T {
  if (value === null || typeof value !== 'object') {
    return value;
  }

  if (Array.isArray(value)) {
    return value.map((item) => cloneDeep(item)) as T;
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
      (cloned as Record<string, unknown>)[key] = cloneDeep((value as Record<string, unknown>)[key]);
    }
  }

  return cloned;
}

