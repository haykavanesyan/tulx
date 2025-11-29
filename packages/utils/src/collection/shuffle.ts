/**
 * Creates an array of shuffled values, using a version of the Fisher-Yates shuffle.
 *
 * @param collection - The collection to shuffle.
 * @returns Returns the new shuffled array.
 *
 * @example
 * ```ts
 * shuffle([1, 2, 3, 4]); // [4, 1, 3, 2] (random)
 * ```
 */
export function shuffle<T>(collection: readonly T[] | Record<string, T>): T[] {
  const items = Array.isArray(collection)
    ? [...collection]
    : Object.values(collection);
  const result = [...items];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}
