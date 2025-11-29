/**
 * Creates an array of numbers (positive and/or negative) progressing from start up to, but not including, end.
 *
 * @param start - The start of the range.
 * @param end - The end of the range.
 * @param step - The value to increment or decrement by.
 * @returns Returns the range of numbers.
 *
 * @example
 * ```ts
 * range(4); // [0, 1, 2, 3]
 * range(-4); // [0, -1, -2, -3]
 * range(1, 5); // [1, 2, 3, 4]
 * range(0, 20, 5); // [0, 5, 10, 15]
 * range(0, -4, -1); // [0, -1, -2, -3]
 * range(1, 4, 0); // [1, 1, 1]
 * range(0); // []
 * ```
 */
export function range(start: number, end?: number, step?: number): number[] {
  if (end === undefined) {
    end = start;
    start = 0;
  }

  if (step === undefined) {
    step = start < end ? 1 : -1;
  }

  if (step === 0) {
    return Array(Math.abs(end - start)).fill(start);
  }

  const result: number[] = [];
  let current = start;

  if (step > 0) {
    while (current < end) {
      result.push(current);
      current += step;
    }
  } else {
    while (current > end) {
      result.push(current);
      current += step;
    }
  }

  return result;
}
