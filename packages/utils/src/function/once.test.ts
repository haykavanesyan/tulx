import { describe, it, expect, vi } from 'vitest';
import { once } from './once';

describe('once', () => {
  it('should invoke function only once', () => {
    const func = vi.fn(() => 'called');
    const initialize = once(func);
    expect(initialize()).toBe('called');
    expect(initialize()).toBe('called');
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should return same result on subsequent calls', () => {
    let count = 0;
    const func = () => ++count;
    const wrapped = once(func);
    expect(wrapped()).toBe(1);
    expect(wrapped()).toBe(1);
    expect(wrapped()).toBe(1);
  });

  it('should pass arguments on first call', () => {
    const func = vi.fn((a: number, b: number) => a + b);
    const wrapped = once(func);
    expect(wrapped(1, 2)).toBe(3);
    expect(wrapped(3, 4)).toBe(3); // Still returns first result
    expect(func).toHaveBeenCalledTimes(1);
    expect(func).toHaveBeenCalledWith(1, 2);
  });

  it('should preserve this context', () => {
    const obj = {
      value: 42,
      getValue: once(function (this: typeof obj) {
        return this.value;
      }),
    };
    expect(obj.getValue()).toBe(42);
  });
});
