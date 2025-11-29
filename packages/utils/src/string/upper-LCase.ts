/**
 * Converts string, as space separated words, to upper case.
 *
 * @param string - The string to convert.
 * @returns Returns the upper cased string.
 *
 * @example
 * ```ts
 * upperCase('--foo-bar--'); // 'FOO BAR'
 * upperCase('fooBar'); // 'FOO BAR'
 * upperCase('__foo_bar__'); // 'FOO BAR'
 * ```
 */
export function upperCase(string: string): string {
  return string
    .replace(/[\s_-]+/g, ' ')
    .replace(/[A-Z]+/g, (match) => ` ${match.toUpperCase()}`)
    .trim()
    .toUpperCase();
}
