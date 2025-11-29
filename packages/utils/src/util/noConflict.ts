/**
 * Reverts the _ variable to its previous value and returns a reference to the utilify object.
 *
 * @returns Returns the utilify object.
 *
 * @example
 * ```ts
 * const utilify = noConflict();
 * ```
 */
export function noConflict(): typeof globalThis {
  return globalThis;
}

