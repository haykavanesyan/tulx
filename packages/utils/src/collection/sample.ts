/**
 * Gets a random element from collection.
 *
 * @param collection - The collection to sample.
 * @returns Returns the random element.
 *
 * @example
 * ```ts
 * sample([1, 2, 3, 4]); // 2 (random)
 * ```
 */
export function sample<T>(collection: readonly T[] | Record<string, T>): T | undefined {
  const items = Array.isArray(collection) ? collection : Object.values(collection);
  if (items.length === 0) {
    return undefined;
  }
  const randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

