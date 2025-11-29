/**
 * This method is like fromPairs except that it accepts two arrays, one of property identifiers
 * and one of corresponding values.
 *
 * @param props - The property identifiers.
 * @param values - The property values.
 * @returns The new object.
 *
 * @example
 * ```ts
 * zipObject(['a', 'b'], [1, 2]); // { 'a': 1, 'b': 2 }
 * ```
 */
export function zipObject<T>(
  props: readonly (string | number)[],
  values: readonly T[]
): Record<string, T> {
  const result: Record<string, T> = {};
  const minLength = Math.min(props.length, values.length);

  for (let i = 0; i < minLength; i++) {
    result[String(props[i])] = values[i];
  }

  return result;
}
