/**
 * Removes all given values from array.
 *
 * @param array - The array to modify.
 * @param values - The values to remove.
 * @returns The modified array.
 *
 * @example
 * ```ts
 * const array = ['a', 'b', 'c', 'a', 'b', 'c'];
 * pull(array, 'a', 'c'); // ['b', 'b']
 * ```
 */
export function pull<T>(array: T[], ...values: readonly T[]): T[] {
  const valueSet = new Set(values);
  let writeIndex = 0;
  for (let i = 0; i < array.length; i++) {
    if (!valueSet.has(array[i])) {
      array[writeIndex] = array[i];
      writeIndex++;
    }
  }
  array.length = writeIndex;
  return array;
}
