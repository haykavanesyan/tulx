/**
 * Creates an array of the own enumerable string keyed property values of object.
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
 * values(new Foo()); // [1, 2]
 * ```
 */
export function values<T>(object: Record<string, T>): T[] {
  return Object.values(object);
}

