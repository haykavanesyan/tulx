/**
 * Converts string, as a whole, to lower case.
 *
 * @param string - The string to convert.
 * @returns Returns the lower cased string.
 *
 * @example
 * ```ts
 * toLower('--Foo-Bar--'); // '--foo-bar--'
 * toLower('fooBar'); // 'foobar'
 * toLower('__FOO_BAR__'); // '__foo_bar__'
 * ```
 */
export function toLower(string: string): string {
  return string.toLowerCase();
}

