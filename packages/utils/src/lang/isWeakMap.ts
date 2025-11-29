/**
 * Checks if value is classified as a WeakMap object.
 *
 * @param value - The value to check.
 * @returns Returns true if value is a WeakMap, else false.
 *
 * @example
 * ```ts
 * isWeakMap(new WeakMap); // true
 * isWeakMap(new Map); // false
 * ```
 */
export function isWeakMap(value: unknown): value is WeakMap<object, unknown> {
  return value instanceof WeakMap;
}

