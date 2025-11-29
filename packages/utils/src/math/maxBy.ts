/**
 * This method is like max except that it accepts iteratee which is invoked for each element in array to generate the criterion by which the value is ranked.
 *
 * @param array - The array to iterate over.
 * @param iteratee - The iteratee invoked per element.
 * @returns Returns the maximum value.
 *
 * @example
 * ```ts
 * const objects = [{ 'n': 1 }, { 'n': 2 }];
 * maxBy(objects, (o) => o.n); // { 'n': 2 }
 * ```
 */
export function maxBy<T>(
  array: readonly T[],
  iteratee: ((value: T) => number) | string
): T | undefined {
  if (array.length === 0) {
    return undefined;
  }

  const getValue = typeof iteratee === 'string'
    ? (item: T) => (item as Record<string, number>)[iteratee]
    : iteratee;

  let maxValue = array[0];
  let maxNum = getValue(maxValue);

  for (let i = 1; i < array.length; i++) {
    const num = getValue(array[i]);
    if (num > maxNum) {
      maxNum = num;
      maxValue = array[i];
    }
  }

  return maxValue;
}

