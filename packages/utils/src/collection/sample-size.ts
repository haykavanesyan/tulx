/**
 * Gets n random elements at unique keys from collection up to the size of collection.
 *
 * @param collection - The collection to sample.
 * @param n - The number of elements to sample.
 * @returns Returns the random elements.
 *
 * @example
 * ```ts
 * sampleSize([1, 2, 3], 2); // [3, 1] (random)
 * sampleSize([1, 2, 3], 4); // [1, 2, 3] (random)
 * ```
 */
export function sampleSize<T>(
  collection: readonly T[] | Record<string, T>,
  n: number = 1
): T[] {
  const items = Array.isArray(collection)
    ? [...collection]
    : Object.values(collection);
  const length = items.length;
  const sampleCount = Math.min(n, length);

  if (sampleCount === 0) {
    return [];
  }

  const result: T[] = [];
  const indices = new Set<number>();

  while (indices.size < sampleCount) {
    const randomIndex = Math.floor(Math.random() * length);
    if (!indices.has(randomIndex)) {
      indices.add(randomIndex);
      result.push(items[randomIndex]);
    }
  }

  return result;
}
