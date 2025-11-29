/**
 * Binds methods of an object to the object itself, overwriting the existing method.
 *
 * @param object - The object to bind and assign the bound methods to.
 * @param methodNames - The object keys of methods to bind.
 * @returns Returns object.
 *
 * @example
 * ```ts
 * const view = {
 *   'label': 'docs',
 *   'onClick': function() {
 *     console.log('clicked ' + this.label);
 *   }
 * };
 * bindAll(view, ['onClick']);
 * ```
 */
export function bindAll<T extends Record<string, unknown>>(
  object: T,
  methodNames: readonly (keyof T)[]
): T {
  for (const methodName of methodNames) {
    const method = object[methodName];
    if (typeof method === 'function') {
      object[methodName] = method.bind(object) as T[keyof T];
    }
  }
  return object;
}
