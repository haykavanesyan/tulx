/**
 * Creates a throttled function that only invokes func at most once per every wait milliseconds.
 *
 * @param func - The function to throttle.
 * @param wait - The number of milliseconds to throttle invocations to.
 * @param options - The options object.
 * @returns Returns the new throttled function.
 *
 * @example
 * ```ts
 * const throttled = throttle(() => console.log('hello'), 1000);
 * throttled(); // Will log 'hello' immediately
 * throttled(); // Ignored
 * ```
 */
export function throttle<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number = 0,
  options?: {
    leading?: boolean;
    trailing?: boolean;
  }
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout> | undefined;
  let lastInvokeTime = 0;
  const leading = options?.leading !== false;
  const trailing = options?.trailing !== false;

  function invokeFunc(this: unknown, args: Parameters<T>, time: number): void {
    lastInvokeTime = time;
    func.apply(this, args);
  }

  function leadingEdge(this: unknown, time: number, args: Parameters<T>): void {
    if (leading) {
      invokeFunc.apply(this, [args, time]);
    }
    lastInvokeTime = time;
  }

  function remainingWait(time: number): number {
    const timeSinceLastInvoke = time - lastInvokeTime;
    return wait - timeSinceLastInvoke;
  }

  function shouldInvoke(time: number): boolean {
    return lastInvokeTime === 0 || time - lastInvokeTime >= wait;
  }

  function timerExpired(this: unknown, args: Parameters<T>): void {
    const time = Date.now();
    if (trailing && shouldInvoke(time)) {
      invokeFunc.apply(this, [args, time]);
    }
    timeoutId = undefined;
  }

  function cancel(): void {
    if (timeoutId !== undefined) {
      clearTimeout(timeoutId);
    }
    lastInvokeTime = 0;
    timeoutId = undefined;
  }

  function throttled(this: unknown, ...args: Parameters<T>): void {
    const time = Date.now();

    if (shouldInvoke(time)) {
      if (timeoutId === undefined) {
        leadingEdge.apply(this, [time, args]);
      }
      timeoutId = setTimeout(() => timerExpired.apply(this, [args]), wait);
    } else if (timeoutId === undefined && trailing) {
      timeoutId = setTimeout(
        () => timerExpired.apply(this, [args]),
        remainingWait(time)
      );
    }
  }

  throttled.cancel = cancel;
  return throttled;
}
