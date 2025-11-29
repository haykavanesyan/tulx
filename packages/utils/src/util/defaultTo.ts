/**
 * Checks value to determine whether a default value should be returned in its place.
 *
 * @param value - The value to check.
 * @param defaultValue - The default value.
 * @returns Returns the resolved value.
 *
 * @example
 * ```ts
 * defaultTo(1, 10); // 1
 * defaultTo(undefined, 10); // 10
 * ```
 */
export function defaultTo<T>(value: T | null | undefined, defaultValue: T): T {
  return value === null || value === undefined ? defaultValue : value;
}

