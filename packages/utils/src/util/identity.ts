/**
 * This method returns the first argument it receives.
 *
 * @param value - Any value.
 * @returns Returns value.
 *
 * @example
 * ```ts
 * const object = { 'a': 1 };
 * identity(object) === object; // true
 * ```
 */
export function identity<T>(value: T): T {
  return value;
}

