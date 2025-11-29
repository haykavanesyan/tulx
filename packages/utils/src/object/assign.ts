/**
 * Assigns own enumerable string keyed properties of source objects to the destination object.
 *
 * @param object - The destination object.
 * @param sources - The source objects.
 * @returns Returns object.
 *
 * @example
 * ```ts
 * function Foo() {
 *   this.a = 1;
 * }
 * function Bar() {
 *   this.c = 3;
 * }
 * Foo.prototype.b = 2;
 * Bar.prototype.d = 4;
 * assign({ 'a': 0 }, new Foo(), new Bar()); // { 'a': 1, 'c': 3 }
 * ```
 */
export function assign<T extends Record<string, unknown>>(
  object: T,
  ...sources: readonly Record<string, unknown>[]
): T {
  return Object.assign(object, ...sources);
}

