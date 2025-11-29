/**
 * This method is like sortedIndex except that it accepts iteratee which is invoked for value and each element
 * of array to compute their sort ranking.
 *
 * @param array - The sorted array to inspect.
 * @param value - The value to evaluate.
 * @param iteratee - The iteratee invoked per element.
 * @returns The index at which value should be inserted into array.
 *
 * @example
 * ```ts
 * const objects = [{ 'x': 4 }, { 'x': 5 }];
 * sortedIndexBy(objects, { 'x': 4 }, (o) => o.x); // 0
 * ```
 */
export function sortedIndexBy<T>(
  array: readonly T[],
  value: T,
  iteratee: (value: T) => unknown
): number {
  const valueKey = iteratee(value);
  let low = 0;
  let high = array.length;

  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    const midKey = iteratee(array[mid]);
    if (
      String(midKey) < String(valueKey) ||
      (typeof midKey === 'number' &&
        typeof valueKey === 'number' &&
        midKey < valueKey)
    ) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }

  return low;
}
