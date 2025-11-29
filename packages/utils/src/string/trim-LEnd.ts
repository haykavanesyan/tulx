/**
 * Removes trailing whitespace or specified characters from string.
 *
 * @param string - The string to trim.
 * @param chars - The characters to trim.
 * @returns Returns the trimmed string.
 *
 * @example
 * ```ts
 * trimEnd('  abc  '); // '  abc'
 * trimEnd('-_-abc-_-', '_-'); // '-_-abc'
 * ```
 */
function escapeRegExpForTrimEnd(chars: string): string {
  return chars.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export function trimEnd(string: string, chars?: string): string {
  if (chars === undefined) {
    return string.trimEnd();
  }

  const pattern = `[${escapeRegExpForTrimEnd(chars)}]+`;
  return string.replace(new RegExp(`${pattern}$`, 'g'), '');
}
