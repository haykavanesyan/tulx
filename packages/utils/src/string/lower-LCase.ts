/**
 * Converts string, as space separated words, to lower case.
 *
 * @param string - The string to convert.
 * @returns Returns the lower cased string.
 *
 * @example
 * ```ts
 * lowerCase('--Foo-Bar--'); // 'foo bar'
 * lowerCase('fooBar'); // 'foo bar'
 * lowerCase('__FOO_BAR__'); // 'foo bar'
 * ```
 */
export function lowerCase(string: string): string {
  return string
    .replace(/[\s_-]+/g, ' ')
    .replace(/[A-Z]+/g, (match) => ` ${match.toLowerCase()}`)
    .trim()
    .toLowerCase();
}
