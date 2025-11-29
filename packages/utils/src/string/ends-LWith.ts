/**
 * Checks if string ends with the given target string.
 *
 * @param string - The string to inspect.
 * @param target - The string to search for.
 * @param position - The position to search up to.
 * @returns Returns true if string ends with target, else false.
 *
 * @example
 * ```ts
 * endsWith('abc', 'c'); // true
 * endsWith('abc', 'b'); // false
 * endsWith('abc', 'b', 2); // true
 * ```
 */
export function endsWith(
  string: string,
  target: string,
  position?: number
): boolean {
  const { length } = string;
  const end = position === undefined ? length : position;
  const pos = end > length ? length : end;
  return string.substring(pos - target.length, pos) === target;
}
