/**
 * Converts the characters "&", "<", ">", '"', and "'" in string to their corresponding HTML entities.
 *
 * @param string - The string to escape.
 * @returns Returns the escaped string.
 *
 * @example
 * ```ts
 * escape('fred, barney, & pebbles'); // 'fred, barney, &amp; pebbles'
 * ```
 */
export function escape(string: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  };

  return string.replace(/[&<>"']/g, (char) => map[char]);
}

