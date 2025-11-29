/**
 * Converts value to a plain object flattening inherited enumerable string keyed properties of value to own properties of the plain object.
 *
 * @param value - The value to convert.
 * @returns Returns the converted plain object.
 *
 * @example
 * ```ts
 * function Foo() {
 *   this.b = 2;
 * }
 * Foo.prototype.c = 3;
 * toPlainObject(new Foo); // { 'b': 2, 'c': 3 }
 * ```
 */
export function toPlainObject(value: unknown): Record<string, unknown> {
  const result: Record<string, unknown> = {};
  if (value === null || value === undefined) {
    return result;
  }

  for (const key in value as Record<string, unknown>) {
    result[key] = (value as Record<string, unknown>)[key];
  }

  return result;
}
