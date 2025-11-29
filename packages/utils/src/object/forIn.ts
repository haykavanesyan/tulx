/**
 * Iterates over own and inherited enumerable string keyed properties of an object and invokes iteratee for each property.
 *
 * @param object - The object to iterate over.
 * @param iteratee - The function invoked per iteration.
 * @returns Returns object.
 *
 * @example
 * ```ts
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 * Foo.prototype.c = 3;
 * forIn(new Foo(), (value, key) => console.log(key)); // Logs 'a', 'b', then 'c'
 * ```
 */
export function forIn<T extends Record<string, unknown>>(
  object: T,
  iteratee: (value: unknown, key: string, object: T) => void
): T {
  for (const key in object) {
    iteratee(object[key], key, object);
  }
  return object;
}

