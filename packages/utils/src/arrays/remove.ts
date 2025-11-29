/**
 * Removes all elements from array that predicate returns truthy for and returns an array of the removed elements.
 *
 * @param array - The array to modify.
 * @param predicate - The function invoked per iteration.
 * @returns The new array of removed elements.
 *
 * @example
 * ```ts
 * const array = [1, 2, 3, 4];
 * const evens = remove(array, (n) => n % 2 === 0);
 * console.log(array); // [1, 3]
 * console.log(evens); // [2, 4]
 * ```
 */
export function remove<T>(
  array: T[],
  predicate: (value: T, index: number, array: readonly T[]) => boolean
): T[] {
  const removed: T[] = [];
  let writeIndex = 0;

  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i], i, array)) {
      removed.push(array[i]);
    } else {
      array[writeIndex] = array[i];
      writeIndex++;
    }
  }

  array.length = writeIndex;
  return removed;
}
