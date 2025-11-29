/**
 * Creates an array of the own enumerable property names of object.
 *
 * @param object - The object to query.
 * @returns Returns the array of property names.
 *
 * @example
 * ```ts
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 * Foo.prototype.c = 3;
 * keys(new Foo()); // ['a', 'b']
 * ```
 */
export function keys(object: Record<string, unknown>): string[] {
  return Object.keys(object);
}
