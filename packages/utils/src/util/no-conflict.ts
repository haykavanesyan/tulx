/**
 * Reverts the _ variable to its previous value and returns a reference to the tulx object.
 *
 * @returns Returns the tulx object.
 *
 * @example
 * ```ts
 * const tulx = noConflict();
 * ```
 */
export function noConflict(): typeof globalThis {
  return globalThis;
}
