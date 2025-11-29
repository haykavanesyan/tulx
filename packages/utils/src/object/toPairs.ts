/**
 * Creates an array of own enumerable string keyed-value pairs for object.
 * This is an alias for entries.
 *
 * @param object - The object to query.
 * @returns Returns the key-value pairs.
 *
 * @example
 * ```ts
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 * Foo.prototype.c = 3;
 * toPairs(new Foo()); // [['a', 1], ['b', 2]]
 * ```
 */
export function toPairs<T>(object: Record<string, T>): Array<[string, T]> {
  return Object.entries(object);
}

