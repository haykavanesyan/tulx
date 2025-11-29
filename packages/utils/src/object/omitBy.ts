/**
 * Creates an object composed of the own and inherited enumerable string keyed properties of object that predicate doesn't return truthy for.
 *
 * @param object - The source object.
 * @param predicate - The function invoked per property.
 * @returns Returns the new object.
 *
 * @example
 * ```ts
 * const object = { 'a': 1, 'b': '2', 'c': 3 };
 * omitBy(object, (value) => typeof value === 'number'); // { 'b': '2' }
 * ```
 */
export function omitBy<T extends Record<string, unknown>>(
  object: T,
  predicate: (value: unknown, key: string) => boolean
): Partial<T> {
  const result: Partial<T> = {};

  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key) && !predicate(object[key], key)) {
      result[key] = object[key];
    }
  }

  return result;
}

