/**
 * Converts string to an integer of the specified radix.
 *
 * @param string - The string to convert.
 * @param radix - The radix to interpret value by.
 * @returns Returns the converted integer.
 *
 * @example
 * ```ts
 * parseInt('08'); // 8
 * parseInt('10', 2); // 2
 * ```
 */
export function parseInt(string: string, radix: number = 10): number {
  return Number.parseInt(string, radix);
}

