/**
 * Create a new pristine lodash function using the given context object.
 *
 * @param context - The context object.
 * @returns Returns a new lodash function.
 *
 * @example
 * ```ts
 * const _ = runInContext();
 * ```
 */
export function runInContext(
  context?: Record<string, unknown>
): typeof globalThis {
  return context ? (context as typeof globalThis) : globalThis;
}
