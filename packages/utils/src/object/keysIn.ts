/**
 * Creates an array of the own and inherited enumerable property names of object.
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
 * keysIn(new Foo()); // ['a', 'b', 'c']
 * ```
 */
export function keysIn(object: Record<string, unknown>): string[] {
  const result: string[] = [];
  for (const key in object) {
    result.push(key);
  }
  return result;
}

