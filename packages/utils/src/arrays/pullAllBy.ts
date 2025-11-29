/**
 * This method is like pullAll except that it accepts iteratee which is invoked for each element
 * of array and values to generate the criterion by which they're compared.
 *
 * @param array - The array to modify.
 * @param values - The values to remove.
 * @param iteratee - The iteratee invoked per element.
 * @returns The modified array.
 *
 * @example
 * ```ts
 * const array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
 * pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
 * // [{ 'x': 2 }]
 * ```
 */
export function pullAllBy<T>(
  array: T[],
  values: readonly T[],
  iteratee: ((value: T) => unknown) | string
): T[] {
  const getValue = typeof iteratee === 'string'
    ? (item: T) => (item as Record<string, unknown>)[iteratee]
    : iteratee;

  const valueKeys = new Set(values.map(getValue));
  let writeIndex = 0;
  for (let i = 0; i < array.length; i++) {
    if (!valueKeys.has(getValue(array[i]))) {
      array[writeIndex] = array[i];
      writeIndex++;
    }
  }
  array.length = writeIndex;
  return array;
}

