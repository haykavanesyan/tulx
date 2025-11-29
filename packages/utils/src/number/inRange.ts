/**
 * Checks if a number is between start and up to, but not including, end.
 * If end is not specified, it's set to start with start then 0.
 *
 * @param number - The number to check.
 * @param start - The start of the range.
 * @param end - The end of the range (exclusive).
 * @returns True if number is in range, false otherwise.
 *
 * @example
 * ```ts
 * inRange(3, 2, 4); // true
 * inRange(4, 8); // true
 * inRange(4, 2); // false
 * inRange(2, 2); // false
 * inRange(1.2, 2); // true
 * inRange(5.2, 4); // false
 * ```
 */
export function inRange(
  number: number,
  start: number,
  end?: number
): boolean {
  if (end === undefined) {
    end = start;
    start = 0;
  }
  if (start > end) {
    [start, end] = [end, start];
  }
  return number >= start && number < end;
}

