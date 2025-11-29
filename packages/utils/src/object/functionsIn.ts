/**
 * Creates an array of function property names from own and inherited enumerable properties of object.
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
 * functionsIn(new Foo()); // ['a', 'b', 'c']
 * ```
 */
export function functionsIn(object: Record<string, unknown>): string[] {
  const result: string[] = [];
  for (const key in object) {
    if (typeof object[key] === 'function') {
      result.push(key);
    }
  }
  return result;
}

