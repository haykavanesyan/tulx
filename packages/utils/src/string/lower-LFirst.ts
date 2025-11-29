/**
 * Converts the first character of string to lower case.
 *
 * @param string - The string to convert.
 * @returns Returns the converted string.
 *
 * @example
 * ```ts
 * lowerFirst('Fred'); // 'fred'
 * lowerFirst('FRED'); // 'fRED'
 * ```
 */
export function lowerFirst(string: string): string {
  if (string.length === 0) {
    return string;
  }
  return string.charAt(0).toLowerCase() + string.slice(1);
}
