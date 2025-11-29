/**
 * Converts string to camel case.
 *
 * @param string - The string to convert.
 * @returns Returns the camel cased string.
 *
 * @example
 * ```ts
 * camelCase('Foo Bar'); // 'fooBar'
 * camelCase('--foo-bar--'); // 'fooBar'
 * camelCase('__FOO_BAR__'); // 'fooBar'
 * ```
 */
export function camelCase(string: string): string {
  return string
    .replace(/[\s_-]+/g, ' ')
    .replace(/[A-Z]+/g, (match) => ` ${match.toLowerCase()}`)
    .trim()
    .replace(/\s+(\w)/g, (_, char) => char.toUpperCase())
    .replace(/^[A-Z]/, (char) => char.toLowerCase());
}
