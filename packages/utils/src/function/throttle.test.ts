import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

import { throttle } from './throttle';

describe('throttle', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should throttle function calls', () => {
    const func = vi.fn(() => 'called');
    const throttled = throttle(func, 100);
    throttled();
    expect(func).toHaveBeenCalledTimes(1);
    throttled();
    throttled();
    expect(func).toHaveBeenCalledTimes(1);
    vi.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(2);
  });

  it('should disable leading edge', () => {
    const func = vi.fn(() => 'called');
    const throttled = throttle(func, 100, { leading: false });
    throttled();
    expect(func).not.toHaveBeenCalled();
    vi.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should disable trailing edge', () => {
    const func = vi.fn(() => 'called');
    const throttled = throttle(func, 100, { trailing: false });
    throttled();
    expect(func).toHaveBeenCalledTimes(1);
    throttled();
    vi.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should cancel throttled call', () => {
    const func = vi.fn(() => 'called');
    const throttled = throttle(func, 100);
    throttled();
    throttled.cancel();
    vi.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should pass arguments', () => {
    const func = vi.fn((a: number, b: number) => a + b);
    const throttled = throttle(func, 100);
    throttled(1, 2);
    vi.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledWith(1, 2);
  });
});
