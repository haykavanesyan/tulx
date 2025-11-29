/**
 * Pads string on the left side if it's shorter than length.
 * Padding characters are truncated if they exceed length.
 *
 * @param string - The string to pad.
 * @param length - The padding length.
 * @param chars - The string used as padding.
 * @returns Returns the padded string.
 *
 * @example
 * ```ts
 * padStart('abc', 6); // '   abc'
 * padStart('abc', 6, '_-'); // '_-_abc'
 * padStart('abc', 3); // 'abc'
 * ```
 */
export function padStart(
  string: string,
  length: number,
  chars: string = ' '
): string {
  const strLength = string.length;
  if (strLength >= length) {
    return string;
  }

  const padLength = length - strLength;
  const padChars = chars
    .repeat(Math.ceil(padLength / chars.length))
    .slice(0, padLength);

  return padChars + string;
}
