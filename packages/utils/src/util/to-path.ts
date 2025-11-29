/**
 * Converts value to a property path array.
 *
 * @param value - The value to convert.
 * @returns Returns the new property path array.
 *
 * @example
 * ```ts
 * toPath('a.b.c'); // ['a', 'b', 'c']
 * toPath('a[0].b.c'); // ['a', '0', 'b', 'c']
 * ```
 */
export function toPath(
  value: string | readonly (string | number)[]
): (string | number)[] {
  if (Array.isArray(value)) {
    return [...value];
  }

  const keys: (string | number)[] = [];
  let current = '';
  let inBrackets = false;

  for (let i = 0; i < value.length; i++) {
    const char = value[i];
    if (char === '[') {
      if (current) {
        keys.push(current);
        current = '';
      }
      inBrackets = true;
    } else if (char === ']') {
      if (current) {
        keys.push(current);
        current = '';
      }
      inBrackets = false;
    } else if (char === '.' && !inBrackets) {
      if (current) {
        keys.push(current);
        current = '';
      }
    } else {
      current += char;
    }
  }

  if (current) {
    keys.push(current);
  }

  return keys;
}
