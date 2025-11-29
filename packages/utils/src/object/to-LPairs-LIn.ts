/**
 * Creates an array of own and inherited enumerable string keyed-value pairs for object.
 * This is an alias for entriesIn.
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
 * toPairsIn(new Foo()); // [['a', 1], ['b', 2], ['c', 3]]
 * ```
 */
export function toPairsIn<T>(object: Record<string, T>): Array<[string, T]> {
  const result: Array<[string, T]> = [];
  for (const key in object) {
    result.push([key, object[key]]);
  }
  return result;
}
