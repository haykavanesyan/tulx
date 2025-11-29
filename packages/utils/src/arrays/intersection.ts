/**
 * Creates an array of unique values that are included in all given arrays.
 *
 * @param arrays - The arrays to inspect.
 * @returns The new array of intersecting values.
 *
 * @example
 * ```ts
 * intersection([2, 1], [2, 3]); // [2]
 * ```
 */
export function intersection<T>(...arrays: readonly T[][]): T[] {
  if (arrays.length === 0) {
    return [];
  }
  if (arrays.length === 1) {
    return [...arrays[0]];
  }

  const firstArray = arrays[0];
  const otherArrays = arrays.slice(1);
  const result: T[] = [];
  const seen = new Set<T>();

  for (const value of firstArray) {
    if (seen.has(value)) {
      continue;
    }
    seen.add(value);

    if (otherArrays.every((arr) => arr.includes(value))) {
      result.push(value);
    }
  }

  return result;
}

