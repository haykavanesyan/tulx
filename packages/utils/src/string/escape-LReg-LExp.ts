/**
 * Escapes the RegExp special characters "^", "$", "\", ".", "*", "+", "?", "(", ")", "[", "]", "{", "}", and "|" in string.
 *
 * @param string - The string to escape.
 * @returns Returns the escaped string.
 *
 * @example
 * ```ts
 * escapeRegExp('[lodash](https://lodash.com/)'); // '\\[lodash\\]\\(https://lodash\\.com/\\)'
 * ```
 */
export function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
