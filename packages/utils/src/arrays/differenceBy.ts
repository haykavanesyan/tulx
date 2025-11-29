/**
 * This method is like difference except that it accepts iteratee which is invoked for each element
 * of array and values to generate the criterion by which they're compared.
 *
 * @param array - The array to inspect.
 * @param values - The values to exclude.
 * @param iteratee - The iteratee invoked per element.
 * @returns The new array of filtered values.
 *
 * @example
 * ```ts
 * differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [1.2]
 * differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x'); // [{ 'x': 2 }]
 * ```
 */
export function differenceBy<T>(
  array: readonly T[],
  values: readonly T[],
  iteratee: ((value: T) => unknown) | string
): T[] {
  const getValue = typeof iteratee === 'string' 
    ? (item: T) => (item as Record<string, unknown>)[iteratee]
    : iteratee;

  const excludeSet = new Set(values.map(getValue));

  return array.filter((item) => !excludeSet.has(getValue(item)));
}

