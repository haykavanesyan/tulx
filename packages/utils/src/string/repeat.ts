/**
 * Repeats the given string n times.
 *
 * @param string - The string to repeat.
 * @param n - The number of times to repeat the string.
 * @returns Returns the repeated string.
 *
 * @example
 * ```ts
 * repeat('*', 3); // '***'
 * repeat('abc', 2); // 'abcabc'
 * repeat('abc', 0); // ''
 * ```
 */
export function repeat(string: string, n: number = 1): string {
  if (n <= 0) {
    return '';
  }
  return string.repeat(n);
}
