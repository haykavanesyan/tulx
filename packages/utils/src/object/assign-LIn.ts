/**
 * This method is like assign except that it iterates over own and inherited source properties.
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
 * assignIn({ 'a': 0 }, new Foo(), new Bar()); // { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
 * ```
 */
export function assignIn<T extends Record<string, unknown>>(
  object: T,
  ...sources: readonly Record<string, unknown>[]
): T {
  const result = object as Record<string, unknown>;
  for (const source of sources) {
    for (const key in source) {
      result[key] = source[key];
    }
  }
  return object;
}
