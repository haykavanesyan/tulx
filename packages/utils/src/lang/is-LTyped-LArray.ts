/**
 * Checks if value is classified as a typed array.
 *
 * @param value - The value to check.
 * @returns Returns true if value is a typed array, else false.
 *
 * @example
 * ```ts
 * isTypedArray(new Uint8Array); // true
 * isTypedArray([]); // false
 * ```
 */
export function isTypedArray(value: unknown): value is TypedArray {
  return (
    value instanceof Int8Array ||
    value instanceof Uint8Array ||
    value instanceof Uint8ClampedArray ||
    value instanceof Int16Array ||
    value instanceof Uint16Array ||
    value instanceof Int32Array ||
    value instanceof Uint32Array ||
    value instanceof Float32Array ||
    value instanceof Float64Array ||
    value instanceof BigInt64Array ||
    value instanceof BigUint64Array
  );
}

type TypedArray =
  | Int8Array
  | Uint8Array
  | Uint8ClampedArray
  | Int16Array
  | Uint16Array
  | Int32Array
  | Uint32Array
  | Float32Array
  | Float64Array
  | BigInt64Array
  | BigUint64Array;
