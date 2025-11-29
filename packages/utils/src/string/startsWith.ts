/**
 * Checks if string starts with the given target string.
 *
 * @param string - The string to inspect.
 * @param target - The string to search for.
 * @param position - The position to search from.
 * @returns Returns true if string starts with target, else false.
 *
 * @example
 * ```ts
 * startsWith('abc', 'a'); // true
 * startsWith('abc', 'b'); // false
 * startsWith('abc', 'b', 1); // true
 * ```
 */
export function startsWith(string: string, target: string, position: number = 0): boolean {
  const { length } = string;
  const pos = position < 0 ? 0 : position > length ? length : position;
  return string.substring(pos, pos + target.length) === target;
}

