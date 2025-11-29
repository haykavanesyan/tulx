import { describe, it, expect, vi } from 'vitest';

import { before } from './before';

describe('before', () => {
  it('should invoke function before n calls', () => {
    const func = vi.fn(() => 'called');
    const wrapped = before(3, func);
    expect(wrapped()).toBe('called');
    expect(wrapped()).toBe('called');
    expect(wrapped()).toBe('called'); // Last result
    expect(wrapped()).toBe('called'); // Still last result
    expect(func).toHaveBeenCalledTimes(3);
  });

  it('should return undefined when n < 1', () => {
    const func = vi.fn(() => 'called');
    const wrapped = before(0, func);
    expect(wrapped()).toBeUndefined();
    expect(func).not.toHaveBeenCalled();
  });

  it('should pass arguments on each call', () => {
    const func = vi.fn((x: number) => x * 2);
    const wrapped = before(2, func);
    expect(wrapped(5)).toBe(10);
    expect(wrapped(10)).toBe(20);
    expect(wrapped(15)).toBe(20); // Last result
    expect(func).toHaveBeenCalledTimes(2);
  });
});
