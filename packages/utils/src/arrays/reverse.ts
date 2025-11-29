/**
 * Reverses array so that the first element becomes the last, the second element becomes the second to last, and so on.
 *
 * @param array - The array to modify.
 * @returns The reversed array.
 *
 * @example
 * ```ts
 * const array = [1, 2, 3];
 * reverse(array); // [3, 2, 1]
 * console.log(array); // [3, 2, 1]
 * ```
 */
export function reverse<T>(array: T[]): T[] {
  return array.reverse();
}

