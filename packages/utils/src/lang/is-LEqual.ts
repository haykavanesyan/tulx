/**
 * Performs a deep comparison between two values to determine if they are equivalent.
 *
 * @param value - The value to compare.
 * @param other - The other value to compare.
 * @returns Returns true if the values are equivalent, else false.
 *
 * @example
 * ```ts
 * const object = { 'a': 1 };
 * const other = { 'a': 1 };
 * isEqual(object, other); // true
 * object === other; // false
 * ```
 */
export function isEqual(value: unknown, other: unknown): boolean {
  if (value === other) {
    return true;
  }

  if (
    value === null ||
    other === null ||
    value === undefined ||
    other === undefined
  ) {
    return false;
  }

  if (typeof value !== typeof other) {
    return false;
  }

  if (typeof value !== 'object') {
    return false;
  }

  if (Array.isArray(value) !== Array.isArray(other)) {
    return false;
  }

  if (Array.isArray(value) && Array.isArray(other)) {
    if (value.length !== other.length) {
      return false;
    }
    for (let i = 0; i < value.length; i++) {
      if (!isEqual(value[i], other[i])) {
        return false;
      }
    }
    return true;
  }

  const valueKeys = Object.keys(value);
  const otherKeys = Object.keys(other as Record<string, unknown>);

  if (valueKeys.length !== otherKeys.length) {
    return false;
  }

  for (const key of valueKeys) {
    if (!otherKeys.includes(key)) {
      return false;
    }
    if (
      !isEqual(
        (value as Record<string, unknown>)[key],
        (other as Record<string, unknown>)[key]
      )
    ) {
      return false;
    }
  }

  return true;
}
