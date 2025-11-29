/**
 * Checks if value is classified as a Symbol primitive or object.
 *
 * @param value - The value to check.
 * @returns Returns true if value is a symbol, else false.
 *
 * @example
 * ```ts
 * isSymbol(Symbol.iterator); // true
 * isSymbol('abc'); // false
 * ```
 */
export function isSymbol(value: unknown): value is symbol {
  return (
    typeof value === 'symbol' ||
    (typeof value === 'object' &&
      value !== null &&
      Object.prototype.toString.call(value) === '[object Symbol]')
  );
}
