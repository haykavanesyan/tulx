/**
 * Replaces matches for pattern in string with replacement.
 *
 * @param string - The string to modify.
 * @param pattern - The pattern to replace.
 * @param replacement - The string replacement.
 * @returns Returns the modified string.
 *
 * @example
 * ```ts
 * replace('Hi Fred', 'Fred', 'Barney'); // 'Hi Barney'
 * ```
 */
export function replace(
  string: string,
  pattern: string | RegExp,
  replacement: string | ((match: string, ...args: unknown[]) => string)
): string {
  return string.replace(pattern, replacement as string);
}
