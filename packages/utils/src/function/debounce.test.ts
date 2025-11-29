import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { debounce } from './debounce';

describe('debounce', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should debounce function calls', () => {
    const func = vi.fn(() => 'called');
    const debounced = debounce(func, 100);
    debounced();
    debounced();
    debounced();
    expect(func).not.toHaveBeenCalled();
    vi.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should invoke on leading edge', () => {
    const func = vi.fn(() => 'called');
    const debounced = debounce(func, 100, { leading: true });
    debounced();
    expect(func).toHaveBeenCalledTimes(1);
    debounced();
    vi.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(2);
  });

  it('should respect maxWait', () => {
    const func = vi.fn(() => 'called');
    const debounced = debounce(func, 100, { maxWait: 200 });
    debounced();
    vi.advanceTimersByTime(50);
    debounced();
    vi.advanceTimersByTime(50);
    debounced();
    // maxWait triggers after 200ms from last invoke
    vi.advanceTimersByTime(100);
    // Function should be called due to maxWait
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should cancel debounced call', () => {
    const func = vi.fn(() => 'called');
    const debounced = debounce(func, 100);
    debounced();
    debounced.cancel();
    vi.advanceTimersByTime(100);
    expect(func).not.toHaveBeenCalled();
  });

  it('should pass arguments', () => {
    const func = vi.fn((a: number, b: number) => a + b);
    const debounced = debounce(func, 100);
    debounced(1, 2);
    vi.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledWith(1, 2);
  });
});
