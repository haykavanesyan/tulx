/**
 * This method is like sum except that it accepts iteratee which is invoked for each element in array to generate the value to be summed.
 *
 * @param array - The array to iterate over.
 * @param iteratee - The iteratee invoked per element.
 * @returns Returns the sum.
 *
 * @example
 * ```ts
 * const objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
 * sumBy(objects, (o) => o.n); // 20
 * ```
 */
export function sumBy<T>(
  array: readonly T[],
  iteratee: ((value: T) => number) | string
): number {
  const getValue =
    typeof iteratee === 'string'
      ? (item: T) => (item as Record<string, number>)[iteratee]
      : iteratee;

  return array.reduce((acc, val) => acc + getValue(val), 0);
}
