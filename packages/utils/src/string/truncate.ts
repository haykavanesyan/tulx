/**
 * Truncates string if it's longer than the given maximum string length.
 * The last characters of the truncated string are replaced with the omission string which defaults to "...".
 *
 * @param string - The string to truncate.
 * @param options - The options object.
 * @returns Returns the truncated string.
 *
 * @example
 * ```ts
 * truncate('hi-diddly-ho there, neighborino'); // 'hi-diddly-ho there, neighbo...'
 * truncate('hi-diddly-ho there, neighborino', { 'length': 24, 'separator': ' ' }); // 'hi-diddly-ho there,...'
 * truncate('hi-diddly-ho there, neighborino', { 'length': 24, 'separator': /,? +/ }); // 'hi-diddly-ho there...'
 * truncate('hi-diddly-ho there, neighborino', { 'omission': ' [...]' }); // 'hi-diddly-ho there, neig [...]'
 * ```
 */
export function truncate(
  string: string,
  options?: {
    length?: number;
    omission?: string;
    separator?: string | RegExp;
  }
): string {
  const length = options?.length ?? 30;
  const omission = options?.omission ?? '...';
  const separator = options?.separator;

  if (string.length <= length) {
    return string;
  }

  const omissionLength = omission.length;
  const truncLength = length - omissionLength;

  if (truncLength < 1) {
    return omission.slice(0, length);
  }

  let result = string.slice(0, truncLength);

  if (separator) {
    const escapeRegExpForTruncate = (str: string): string =>
      str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const separatorRegex =
      typeof separator === 'string'
        ? new RegExp(escapeRegExpForTruncate(separator))
        : separator;
    const match = result.match(separatorRegex);
    if (match?.index !== undefined) {
      result = result.slice(0, match.index);
    }
  }

  return result + omission;
}
