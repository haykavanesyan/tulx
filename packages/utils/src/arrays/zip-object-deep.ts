/**
 * This method is like zipObject except that it supports property paths.
 *
 * @param props - The property identifiers.
 * @param values - The property values.
 * @returns The new object.
 *
 * @example
 * ```ts
 * zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);
 * // { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
 * ```
 */
export function zipObjectDeep<T>(
  props: readonly string[],
  values: readonly T[]
): Record<string, unknown> {
  const result: Record<string, unknown> = {};
  const minLength = Math.min(props.length, values.length);

  for (let i = 0; i < minLength; i++) {
    const path = props[i];
    const value = values[i];
    set(result, path, value);
  }

  return result;
}

function set(obj: Record<string, unknown>, path: string, value: unknown): void {
  const keys = parsePath(path);
  let current: Record<string, unknown> = obj;

  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];
    if (
      !(key in current) ||
      typeof current[key] !== 'object' ||
      current[key] === null
    ) {
      current[key] = {};
    }
    current = current[key] as Record<string, unknown>;
  }

  current[keys[keys.length - 1]] = value;
}

function parsePath(path: string): string[] {
  const keys: string[] = [];
  let current = '';
  let inBrackets = false;

  for (let i = 0; i < path.length; i++) {
    const char = path[i];
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
