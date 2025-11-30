/**
 * Creates a debounced function that delays invoking func until after wait milliseconds have elapsed since the last time the debounced function was invoked.
 *
 * @param func - The function to debounce.
 * @param wait - The number of milliseconds to delay.
 * @param options - The options object.
 * @returns Returns the new debounced function.
 *
 * @example
 * ```ts
 * const debounced = debounce(() => console.log('hello'), 1000);
 * debounced(); // Will log 'hello' after 1000ms
 * ```
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait = 0,
  options: {
    leading?: boolean;
    trailing?: boolean;
    maxWait?: number;
  } = {}
) {
  let lastArgs: Parameters<T> | undefined;
  let lastThis: unknown;
  let result: ReturnType<T> | undefined;
  let timerId: ReturnType<typeof setTimeout> | undefined;
  let lastCallTime: number | undefined;
  let lastInvokeTime = 0;

  const leading = options.leading ?? false;
  const trailing = options.trailing !== false;
  const maxWait = options.maxWait;

  function invokeFunc(time: number): ReturnType<T> | undefined {
    lastInvokeTime = time;
    const args = lastArgs;
    const thisArg = lastThis;
    if (args === undefined) {
      return undefined;
    }
    lastArgs = undefined;
    lastThis = undefined;
    result = func.apply(thisArg, args) as ReturnType<T>;
    return result;
  }

  function shouldInvoke(time: number) {
    const sinceLastCall = time - (lastCallTime ?? 0);
    const sinceLastInvoke = time - lastInvokeTime;

    return (
      lastCallTime === undefined ||
      sinceLastCall >= wait ||
      sinceLastCall < 0 ||
      (maxWait !== undefined && sinceLastInvoke >= maxWait)
    );
  }

  function startTimer(callback: () => void, ms: number) {
    return setTimeout(callback, ms);
  }

  function timerExpired() {
    const time = Date.now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    timerId = startTimer(timerExpired, wait - (time - lastCallTime!));
  }

  function leadingEdge(time: number) {
    lastInvokeTime = time;
    if (leading) invokeFunc(time);
    timerId = startTimer(timerExpired, wait);
  }

  function trailingEdge(time: number): ReturnType<T> | undefined {
    timerId = undefined;
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = undefined;
    lastThis = undefined;
    return undefined;
  }

  function debounced(
    this: unknown,
    ...args: Parameters<T>
  ): ReturnType<T> | undefined {
    const time = Date.now();
    const isInvoking = shouldInvoke(time);

    lastArgs = args;
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        leadingEdge(time);
      } else if (maxWait !== undefined) {
        timerId = startTimer(timerExpired, wait);
      }
    }

    if (timerId === undefined) {
      timerId = startTimer(timerExpired, wait);
    }

    return result;
  }

  debounced.cancel = (): void => {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastCallTime = undefined;
    lastArgs = undefined;
    lastThis = undefined;
    timerId = undefined;
  };

  return debounced;
}
