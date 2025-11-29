/**
 * Splits string by separator.
 *
 * @param string - The string to split.
 * @param separator - The separator pattern to split by.
 * @param limit - The length to truncate results to.
 * @returns Returns the string segments.
 *
 * @example
 * ```ts
 * split('a-b-c', '-', 2); // ['a', 'b']
 * ```
 */
export function split(string: string, separator?: string | RegExp, limit?: number): string[] {
  if (limit === undefined) {
    return string.split(separator as string | RegExp);
  }
  return string.split(separator as string | RegExp, limit);
}

