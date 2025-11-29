/**
 * Splits string into an array of its words.
 *
 * @param string - The string to inspect.
 * @param pattern - The pattern to match words.
 * @returns Returns the words of string.
 *
 * @example
 * ```ts
 * words('fred, barney, & pebbles'); // ['fred', 'barney', 'pebbles']
 * words('fred, barney, & pebbles', /[^, ]+/g); // ['fred', 'barney', '&', 'pebbles']
 * ```
 */
export function words(string: string, pattern?: string | RegExp): string[] {
  const defaultPattern = /\p{L}+/gu;
  const regex = pattern || defaultPattern;
  const matches = string.match(regex);
  return matches || [];
}

