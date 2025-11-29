/**
 * Iterates over own enumerable string keyed properties of an object and invokes iteratee for each property.
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
 * forOwn(new Foo(), (value, key) => console.log(key)); // Logs 'a' then 'b'
 * ```
 */
export function forOwn<T extends Record<string, unknown>>(
  object: T,
  iteratee: (value: unknown, key: string, object: T) => void
): T {
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      iteratee(object[key], key, object);
    }
  }
  return object;
}
