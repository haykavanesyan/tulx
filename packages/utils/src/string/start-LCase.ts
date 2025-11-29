/**
 * Converts string to start case.
 *
 * @param string - The string to convert.
 * @returns Returns the start cased string.
 *
 * @example
 * ```ts
 * startCase('--foo-bar--'); // 'Foo Bar'
 * startCase('fooBar'); // 'Foo Bar'
 * startCase('__FOO_BAR__'); // 'FOO BAR'
 * ```
 */
export function startCase(string: string): string {
  return string
    .replace(/[\s_-]+/g, ' ')
    .replace(/[A-Z]+/g, (match) => ` ${match}`)
    .trim()
    .replace(/\s+(\w)/g, (_, char) => ` ${char.toUpperCase()}`)
    .replace(/^(\w)/, (char) => char.toUpperCase());
}
