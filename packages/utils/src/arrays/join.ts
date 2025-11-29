/**
 * Converts all elements in array into a string separated by separator.
 *
 * @param array - The array to convert.
 * @param separator - The element separator.
 * @returns The joined string.
 *
 * @example
 * ```ts
 * join(['a', 'b', 'c'], '~'); // 'a~b~c'
 * ```
 */
export function join(
  array: readonly unknown[],
  separator: string = ','
): string {
  return array.join(separator);
}
