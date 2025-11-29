/**
 * This method is like min except that it accepts iteratee which is invoked for each element in array to generate the criterion by which the value is ranked.
 *
 * @param array - The array to iterate over.
 * @param iteratee - The iteratee invoked per element.
 * @returns Returns the minimum value.
 *
 * @example
 * ```ts
 * const objects = [{ 'n': 1 }, { 'n': 2 }];
 * minBy(objects, (o) => o.n); // { 'n': 1 }
 * ```
 */
export function minBy<T>(
  array: readonly T[],
  iteratee: ((value: T) => number) | string
): T | undefined {
  if (array.length === 0) {
    return undefined;
  }

  const getValue =
    typeof iteratee === 'string'
      ? (item: T) => (item as Record<string, number>)[iteratee]
      : iteratee;

  let minValue = array[0];
  let minNum = getValue(minValue);

  for (let i = 1; i < array.length; i++) {
    const num = getValue(array[i]);
    if (num < minNum) {
      minNum = num;
      minValue = array[i];
    }
  }

  return minValue;
}
