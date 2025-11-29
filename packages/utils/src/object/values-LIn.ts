/**
 * Creates an array of the own and inherited enumerable string keyed property values of object.
 *
 * @param object - The object to query.
 * @returns Returns the array of property values.
 *
 * @example
 * ```ts
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 * Foo.prototype.c = 3;
 * valuesIn(new Foo()); // [1, 2, 3]
 * ```
 */
export function valuesIn<T>(object: Record<string, T>): T[] {
  const result: T[] = [];
  for (const key in object) {
    result.push(object[key]);
  }
  return result;
}
