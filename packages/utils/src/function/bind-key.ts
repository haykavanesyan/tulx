/**
 * Creates a function that invokes the method at object[key] with partials prepended to the arguments it receives.
 *
 * @param object - The object to invoke the method on.
 * @param key - The key of the method.
 * @param partials - The arguments to be partially applied.
 * @returns Returns the new bound function.
 *
 * @example
 * ```ts
 * const object = {
 *   'user': 'fred',
 *   'greet': function(greeting: string, punctuation: string) {
 *     return greeting + ' ' + this.user + punctuation;
 *   }
 * };
 * const bound = bindKey(object, 'greet', 'hi');
 * bound('!'); // 'hi fred!'
 * ```
 */
export function bindKey(
  object: Record<string, unknown>,
  key: string,
  ...partials: readonly unknown[]
): (...args: unknown[]) => unknown {
  return function (this: unknown, ...args: unknown[]): unknown {
    const method = object[key];
    if (typeof method !== 'function') {
      throw new TypeError(`Expected a function at key "${key}"`);
    }
    return method.apply(object, [...partials, ...args]);
  };
}
