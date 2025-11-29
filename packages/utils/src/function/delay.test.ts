import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { delay } from './delay';

describe('delay', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should delay function invocation', () => {
    const func = vi.fn((text: string) => text);
    delay(func, 1000, 'later');
    expect(func).not.toHaveBeenCalled();
    vi.advanceTimersByTime(1000);
    expect(func).toHaveBeenCalledWith('later');
  });

  it('should return timer id', () => {
    const func = vi.fn();
    const timerId = delay(func, 1000);
    // In Node.js, setTimeout returns a Timeout object, not a number
    expect(timerId).toBeDefined();
  });

  it('should pass multiple arguments', () => {
    const func = vi.fn((a: number, b: number) => a + b);
    delay(func, 500, 1, 2);
    vi.advanceTimersByTime(500);
    expect(func).toHaveBeenCalledWith(1, 2);
  });
});
