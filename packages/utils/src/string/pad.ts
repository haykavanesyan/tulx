/**
 * Pads string on the left and right sides if it's shorter than length.
 * Padding characters are truncated if they can't be evenly divided by length.
 *
 * @param string - The string to pad.
 * @param length - The padding length.
 * @param chars - The string used as padding.
 * @returns Returns the padded string.
 *
 * @example
 * ```ts
 * pad('abc', 8); // '  abc   '
 * pad('abc', 8, '_-'); // '_-abc_-_'
 * pad('abc', 3); // 'abc'
 * ```
 */
export function pad(
  string: string,
  length: number,
  chars: string = ' '
): string {
  const strLength = string.length;
  if (strLength >= length) {
    return string;
  }

  const padLength = length - strLength;
  const leftPad = Math.floor(padLength / 2);
  const rightPad = padLength - leftPad;

  const leftChars = chars
    .repeat(Math.ceil(leftPad / chars.length))
    .slice(0, leftPad);
  const rightChars = chars
    .repeat(Math.ceil(rightPad / chars.length))
    .slice(0, rightPad);

  return leftChars + string + rightChars;
}
