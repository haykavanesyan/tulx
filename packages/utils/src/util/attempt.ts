/**
 * Attempts to invoke func, returning either the result or the caught error object.
 *
 * @param func - The function to attempt.
 * @param args - The arguments to invoke func with.
 * @returns Returns the func result or error object.
 *
 * @example
 * ```ts
 * const elements = attempt((selector: string) => document.querySelectorAll(selector), '>_>');
 * if (isError(elements)) {
 *   elements = [];
 * }
 * ```
 */
export function attempt<T extends (...args: unknown[]) => unknown>(
  func: T,
  ...args: Parameters<T>
): ReturnType<T> | Error {
  try {
    return func(...args) as ReturnType<T>;
  } catch (error) {
    return error instanceof Error ? error : new Error(String(error));
  }
}
