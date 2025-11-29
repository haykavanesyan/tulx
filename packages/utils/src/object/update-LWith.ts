/**
 * This method is like update except that it accepts customizer which is invoked to produce the objects of path.
 *
 * @param object - The object to modify.
 * @param path - The path of the property to set.
 * @param updater - The function to produce the updated value.
 * @param customizer - The function to customize assigned values.
 * @returns Returns object.
 *
 * @example
 * ```ts
 * const object = {};
 * updateWith(object, '[0][1]', () => 'a', Object); // { '0': { '1': 'a' } }
 * ```
 */
export function updateWith<T extends Record<string, unknown>>(
  object: T,
  path: string | readonly (string | number)[],
  updater: (value: unknown) => unknown,
  customizer?: (
    nsValue: unknown,
    key: string,
    nsObject: Record<string, unknown>
  ) => unknown
): T {
  const pathArray = Array.isArray(path)
    ? path.map(String)
    : parsePath(String(path));
  let current: unknown = object;

  for (let i = 0; i < pathArray.length - 1; i++) {
    const key = pathArray[i];
    if (
      current === null ||
      current === undefined ||
      typeof current !== 'object'
    ) {
      return object;
    }
    const currentObj = current as Record<string, unknown>;
    if (
      !(key in currentObj) ||
      typeof currentObj[key] !== 'object' ||
      currentObj[key] === null
    ) {
      const newValue = customizer ? customizer(undefined, key, currentObj) : {};
      currentObj[key] = newValue === undefined ? {} : newValue;
    }
    current = currentObj[key];
  }

  const lastKey = pathArray[pathArray.length - 1];
  const currentObj = current as Record<string, unknown>;
  const currentValue = currentObj[lastKey];
  currentObj[lastKey] = updater(currentValue);

  return object;
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
