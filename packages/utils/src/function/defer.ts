/**
 * Defers invoking the func until the current call stack has cleared.
 *
 * @param func - The function to defer.
 * @param args - The arguments to invoke func with.
 * @returns Returns the timer id.
 *
 * @example
 * ```ts
 * defer((text: string) => console.log(text), 'deferred'); // Logs 'deferred' after one millisecond.
 * ```
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function defer<T extends (...args: any[]) => any>(
  func: T,
  ...args: Parameters<T>
): ReturnType<typeof setTimeout> {
  return setTimeout(() => func(...args), 1);
}
