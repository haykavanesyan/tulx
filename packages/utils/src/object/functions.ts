/**
 * Creates an array of function property names from own enumerable properties of object.
 *
 * @param object - The object to inspect.
 * @returns Returns the function names.
 *
 * @example
 * ```ts
 * function Foo() {
 *   this.a = () => 'a';
 *   this.b = () => 'b';
 * }
 * Foo.prototype.c = () => 'c';
 * functions(new Foo()); // ['a', 'b']
 * ```
 */
export function functions(object: Record<string, unknown>): string[] {
  const result: string[] = [];
  for (const key in object) {
    if (
      Object.prototype.hasOwnProperty.call(object, key) &&
      typeof object[key] === 'function'
    ) {
      result.push(key);
    }
  }
  return result;
}
