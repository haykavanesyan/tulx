import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { defer } from './defer';

describe('defer', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should defer function invocation', () => {
    const func = vi.fn((text: string) => text);
    defer(func, 'deferred');
    expect(func).not.toHaveBeenCalled();
    vi.advanceTimersByTime(1);
    expect(func).toHaveBeenCalledWith('deferred');
  });

  it('should return timer id', () => {
    const func = vi.fn();
    const timerId = defer(func);
    // In Node.js, setTimeout returns a Timeout object, not a number
    expect(timerId).toBeDefined();
  });

  it('should pass multiple arguments', () => {
    const func = vi.fn((a: number, b: number) => a + b);
    defer(func, 1, 2);
    vi.advanceTimersByTime(1);
    expect(func).toHaveBeenCalledWith(1, 2);
  });
});
