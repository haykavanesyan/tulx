/**
 * Gets the timestamp of the number of milliseconds that have elapsed since the Unix epoch.
 *
 * @returns The timestamp in milliseconds.
 *
 * @example
 * ```ts
 * const timestamp = now(); // e.g., 1699123456789
 * ```
 */
export function now(): number {
  return Date.now();
}
