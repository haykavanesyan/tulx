/**
 * Converts string to kebab case.
 *
 * @param string - The string to convert.
 * @returns Returns the kebab cased string.
 *
 * @example
 * ```ts
 * kebabCase('Foo Bar'); // 'foo-bar'
 * kebabCase('fooBar'); // 'foo-bar'
 * kebabCase('__FOO_BAR__'); // 'foo-bar'
 * ```
 */
export function kebabCase(string: string): string {
  return string
    .replace(/[\s_-]+/g, ' ')
    .replace(/[A-Z]+/g, (match) => ` ${match.toLowerCase()}`)
    .trim()
    .replace(/\s+/g, '-')
    .toLowerCase();
}
