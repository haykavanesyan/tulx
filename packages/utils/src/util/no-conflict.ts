/**
 * Reverts the _ variable to its previous value and returns a reference to the utilkit object.
 *
 * @returns Returns the utilkit object.
 *
 * @example
 * ```ts
 * const utilkit = noConflict();
 * ```
 */
export function noConflict(): typeof globalThis {
  return globalThis;
}
