/**
 * Checks if value is a Buffer.
 * Note: This method returns false in browser environments.
 *
 * @param value - The value to check.
 * @returns Returns true if value is a Buffer, else false.
 *
 * @example
 * ```ts
 * isBuffer(Buffer.alloc(2)); // true (Node.js)
 * isBuffer(new Uint8Array(2)); // false
 * ```
 */
export function isBuffer(value: unknown): boolean {
  // In browser environments, Buffer is not available
  if (typeof Buffer === 'undefined') {
    return false;
  }
  return Buffer.isBuffer(value);
}

