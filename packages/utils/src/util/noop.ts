/**
 * A no-operation function that returns undefined regardless of the arguments it receives.
 *
 * @returns Returns undefined.
 *
 * @example
 * ```ts
 * const object = { 'user': 'fred' };
 * noop(object) === undefined; // true
 * ```
 */
export function noop(): undefined {
  return undefined;
}
