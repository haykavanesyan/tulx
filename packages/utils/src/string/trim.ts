/**
 * Removes leading and trailing whitespace or specified characters from string.
 *
 * @param string - The string to trim.
 * @param chars - The characters to trim.
 * @returns Returns the trimmed string.
 *
 * @example
 * ```ts
 * trim('  abc  '); // 'abc'
 * trim('-_-abc-_-', '_-'); // 'abc'
 * ```
 */
function escapeRegExpForTrim(chars: string): string {
  return chars.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export function trim(string: string, chars?: string): string {
  if (chars === undefined) {
    return string.trim();
  }

  const pattern = `[${escapeRegExpForTrim(chars)}]+`;
  return string.replace(new RegExp(`^${pattern}|${pattern}$`, 'g'), '');
}
