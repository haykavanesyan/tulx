import { describe, it, expect, vi } from 'vitest';

import { after } from './after';

describe('after', () => {
  it('should invoke function after n calls', () => {
    const func = vi.fn(() => 'done');
    const done = after(2, func);
    expect(done()).toBeUndefined();
    expect(done()).toBe('done');
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should return same result after n calls', () => {
    const func = vi.fn(() => 'result');
    const done = after(2, func);
    done();
    const result = done();
    expect(done()).toBe(result);
    // Function is called on every call after n-th
    expect(func).toHaveBeenCalledTimes(2);
  });

  it('should handle n < 1', () => {
    const func = vi.fn(() => 'called');
    const wrapped = after(0, func);
    expect(wrapped()).toBe('called');
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should pass arguments on invocation', () => {
    const func = vi.fn((a: number, b: number) => a + b);
    const done = after(2, func);
    done(1, 2);
    expect(done(3, 4)).toBe(7);
    expect(func).toHaveBeenCalledWith(3, 4);
  });
});
