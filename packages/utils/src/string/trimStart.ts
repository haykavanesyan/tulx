/**
 * Removes leading whitespace or specified characters from string.
 *
 * @param string - The string to trim.
 * @param chars - The characters to trim.
 * @returns Returns the trimmed string.
 *
 * @example
 * ```ts
 * trimStart('  abc  '); // 'abc  '
 * trimStart('-_-abc-_-', '_-'); // 'abc-_-'
 * ```
 */
function escapeRegExpForTrimStart(chars: string): string {
  return chars.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export function trimStart(string: string, chars?: string): string {
  if (chars === undefined) {
    return string.trimStart();
  }

  const pattern = `[${escapeRegExpForTrimStart(chars)}]+`;
  return string.replace(new RegExp(`^${pattern}`, 'g'), '');
}

