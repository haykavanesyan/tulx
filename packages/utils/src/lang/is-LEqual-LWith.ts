/**
 * This method is like isEqual except that it accepts customizer which is invoked to compare values.
 *
 * @param value - The value to compare.
 * @param other - The other value to compare.
 * @param customizer - The function to customize value comparisons.
 * @returns Returns true if the values are equivalent, else false.
 *
 * @example
 * ```ts
 * function isGreeting(value: unknown) {
 *   return /^h(?:i|ello)$/.test(String(value));
 * }
 * function customizer(objValue: unknown, othValue: unknown) {
 *   if (isGreeting(objValue) && isGreeting(othValue)) {
 *     return true;
 *   }
 * }
 * const array = ['hello', 'goodbye'];
 * const other = ['hi', 'goodbye'];
 * isEqualWith(array, other, customizer); // true
 * ```
 */
export function isEqualWith(
  value: unknown,
  other: unknown,
  customizer?: (
    objValue: unknown,
    othValue: unknown,
    indexOrKey?: number | string,
    object?: unknown,
    source?: unknown,
    stack?: unknown
  ) => boolean | undefined
): boolean {
  if (customizer) {
    const result = customizer(value, other);
    if (result !== undefined) {
      return result;
    }
  }

  return isEqual(value, other);
}

function isEqual(value: unknown, other: unknown): boolean {
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
