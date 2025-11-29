/**
 * This method is like forOwn except that it iterates over properties of object in the opposite order.
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
 * forOwnRight(new Foo(), (value, key) => console.log(key)); // Logs 'b' then 'a'
 * ```
 */
export function forOwnRight<T extends Record<string, unknown>>(
  object: T,
  iteratee: (value: unknown, key: string, object: T) => void
): T {
  const keys = Object.keys(object);
  for (let i = keys.length - 1; i >= 0; i--) {
    const key = keys[i];
    iteratee(object[key], key, object);
  }
  return object;
}
