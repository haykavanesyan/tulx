/**
 * This method is like forIn except that it iterates over properties of object in the opposite order.
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
 * forInRight(new Foo(), (value, key) => console.log(key)); // Logs 'c', 'b', then 'a'
 * ```
 */
export function forInRight<T extends Record<string, unknown>>(
  object: T,
  iteratee: (value: unknown, key: string, object: T) => void
): T {
  const keys: string[] = [];
  for (const key in object) {
    keys.push(key);
  }
  for (let i = keys.length - 1; i >= 0; i--) {
    const key = keys[i];
    iteratee(object[key], key, object);
  }
  return object;
}

