/**
 * Invokes func after wait milliseconds.
 *
 * @param func - The function to delay.
 * @param wait - The number of milliseconds to delay invocation.
 * @param args - The arguments to invoke func with.
 * @returns Returns the timer id.
 *
 * @example
 * ```ts
 * delay((text: string) => console.log(text), 1000, 'later'); // Logs 'later' after one second.
 * ```
 */
export function delay<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number,
  ...args: Parameters<T>
): ReturnType<typeof setTimeout> {
  return setTimeout(() => func(...args), wait);
}
