/**
 * This method is like zip except that it accepts iteratee to specify how grouped values should be combined.
 *
 * @param arrays - The arrays to process.
 * @param iteratee - The function to combine grouped values.
 * @returns The new array of grouped elements.
 *
 * @example
 * ```ts
 * zipWith([1, 2], [10, 20], [100, 200], (a, b, c) => a + b + c);
 * // [111, 222]
 * ```
 */
export function zipWith<TResult>(
  ...args: readonly unknown[]
): TResult[] {
  if (args.length < 2) {
    return [];
  }

  const iteratee = args[args.length - 1] as (...values: unknown[]) => TResult;
  const arrays = args.slice(0, -1) as readonly unknown[][];

  if (arrays.length === 0) {
    return [];
  }

  const maxLength = Math.max(...arrays.map((arr) => arr.length));
  const result: TResult[] = [];

  for (let i = 0; i < maxLength; i++) {
    const values = arrays.map((arr) => arr[i]);
    result.push(iteratee(...values));
  }

  return result;
}

