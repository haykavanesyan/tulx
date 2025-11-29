/**
 * Converts string, as a whole, to upper case.
 *
 * @param string - The string to convert.
 * @returns Returns the upper cased string.
 *
 * @example
 * ```ts
 * toUpper('--foo-bar--'); // '--FOO-BAR--'
 * toUpper('fooBar'); // 'FOOBAR'
 * toUpper('__foo_bar__'); // '__FOO_BAR__'
 * ```
 */
export function toUpper(string: string): string {
  return string.toUpperCase();
}

