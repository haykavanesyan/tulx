/**
 * Checks if value is likely an arguments object.
 *
 * @param value - The value to check.
 * @returns Returns true if value is an arguments object, else false.
 *
 * @example
 * ```ts
 * isArguments(function() { return arguments; }()); // true
 * isArguments([1, 2, 3]); // false
 * ```
 */
export function isArguments(value: unknown): value is IArguments {
  return (
    typeof value === 'object' &&
    value !== null &&
    'callee' in value &&
    typeof (value as { callee: unknown }).callee === 'function'
  );
}

