/**
 * Checks if value is classified as a WeakSet object.
 *
 * @param value - The value to check.
 * @returns Returns true if value is a WeakSet, else false.
 *
 * @example
 * ```ts
 * isWeakSet(new WeakSet); // true
 * isWeakSet(new Set); // false
 * ```
 */
export function isWeakSet(value: unknown): value is WeakSet<object> {
  return value instanceof WeakSet;
}
