/**
 * Creates an object that inherits from the prototype object.
 *
 * @param prototype - The object to inherit from.
 * @param properties - The properties to assign to the object.
 * @returns Returns the new object.
 *
 * @example
 * ```ts
 * function Shape() {
 *   this.x = 0;
 *   this.y = 0;
 * }
 * function Circle() {
 *   Shape.call(this);
 * }
 * Circle.prototype = create(Shape.prototype, {
 *   'constructor': Circle
 * });
 * ```
 */
export function create<T extends Record<string, unknown>>(
  prototype: object | null,
  properties?: PropertyDescriptorMap & ThisType<T>
): T {
  const obj = Object.create(prototype);
  if (properties) {
    Object.defineProperties(obj, properties);
  }
  return obj as T;
}
