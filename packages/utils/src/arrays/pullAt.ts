/**
 * Removes elements from array corresponding to indexes and returns an array of removed elements.
 *
 * @param array - The array to modify.
 * @param indexes - The indexes of elements to remove.
 * @returns The new array of removed elements.
 *
 * @example
 * ```ts
 * const array = ['a', 'b', 'c', 'd'];
 * const pulled = pullAt(array, [1, 3]); // ['b', 'd']
 * console.log(array); // ['a', 'c']
 * ```
 */
export function pullAt<T>(array: T[], indexes: readonly number[]): T[] {
  const sortedIndexes = [...indexes].sort((a, b) => b - a);
  const removed: T[] = [];

  for (const index of sortedIndexes) {
    if (index >= 0 && index < array.length) {
      removed.unshift(array[index]);
      array.splice(index, 1);
    }
  }

  return removed;
}

