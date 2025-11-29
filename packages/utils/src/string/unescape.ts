/**
 * The inverse of escape; this method converts the HTML entities &amp;, &lt;, &gt;, &quot;, and &#39; in string to their corresponding characters.
 *
 * @param string - The string to unescape.
 * @returns Returns the unescaped string.
 *
 * @example
 * ```ts
 * unescape('fred, barney, &amp; pebbles'); // 'fred, barney, & pebbles'
 * ```
 */
export function unescape(string: string): string {
  const map: Record<string, string> = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'",
  };

  return string.replace(/&amp;|&lt;|&gt;|&quot;|&#39;/g, (entity) => map[entity] || entity);
}

