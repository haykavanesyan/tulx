/**
 * Converts string to snake case.
 *
 * @param string - The string to convert.
 * @returns Returns the snake cased string.
 *
 * @example
 * ```ts
 * snakeCase('Foo Bar'); // 'foo_bar'
 * snakeCase('fooBar'); // 'foo_bar'
 * snakeCase('--FOO-BAR--'); // 'foo_bar'
 * ```
 */
export function snakeCase(string: string): string {
  return string
    .replace(/[\s_-]+/g, ' ')
    .replace(/[A-Z]+/g, (match) => ` ${match.toLowerCase()}`)
    .trim()
    .replace(/\s+/g, '_')
    .toLowerCase();
}
