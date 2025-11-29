/**
 * Checks if value is a plain object.
 *
 * @param value - The value to check.
 * @returns Returns true if value is a plain object, else false.
 *
 * @example
 * ```ts
 * function Foo() {
 *   this.a = 1;
 * }
 * isPlainObject(new Foo); // false
 * isPlainObject({ 'x': 0, 'y': 0 }); // true
 * isPlainObject([1, 2, 3]); // false
 * isPlainObject(Object.create(null)); // true
 * ```
 */
export function isPlainObject(
  value: unknown
): value is Record<string, unknown> {
  if (value === null || typeof value !== 'object') {
    return false;
  }

  if (Object.getPrototypeOf(value) === null) {
    return true;
  }

  let proto = value;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(value) === proto;
}
