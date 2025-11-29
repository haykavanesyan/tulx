/**
 * Checks if value is likely a DOM element.
 *
 * @param value - The value to check.
 * @returns Returns true if value is a DOM element, else false.
 *
 * @example
 * ```ts
 * isElement(document.body); // true
 * isElement('<body>'); // false
 * ```
 */
export function isElement(value: unknown): boolean {
  if (typeof value !== 'object' || value === null) {
    return false;
  }
  const obj = value as { nodeType?: number; nodeName?: unknown };
  return (
    obj.nodeType === 1 &&
    typeof obj.nodeName === 'string'
  );
}

