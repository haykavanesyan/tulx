import { describe, it, expect, vi } from 'vitest';

import { memoize } from './memoize';

describe('memoize', () => {
  it('should memoize function results', () => {
    const object = { a: 1, b: 2 };
    const other = { c: 3, d: 4 };
    const values = memoize((obj: Record<string, number>) => Object.values(obj));
    expect(values(object)).toEqual([1, 2]);
    expect(values(other)).toEqual([3, 4]);
  });

  it('should return cached result for same arguments', () => {
    const func = vi.fn((x: number) => x * 2);
    const memoized = memoize(func);
    expect(memoized(5)).toBe(10);
    expect(memoized(5)).toBe(10);
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should use custom resolver', () => {
    const func = vi.fn((obj: { id: number }) => obj.id);
    const resolver = (obj: { id: number }) => String(obj.id);
    const memoized = memoize(func, resolver);
    const obj1 = { id: 1 };
    const obj2 = { id: 1 };
    expect(memoized(obj1)).toBe(1);
    expect(memoized(obj2)).toBe(1); // Should use cache
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should expose cache', () => {
    const memoized = memoize((x: number) => x * 2);
    memoized(5);
    // For single primitive argument, key is optimized to String(arg) instead of JSON.stringify([arg])
    expect(memoized.cache.has('5')).toBe(true);
  });

  it('should handle different arguments', () => {
    const memoized = memoize((x: number) => x * 2);
    expect(memoized(5)).toBe(10);
    expect(memoized(10)).toBe(20);
  });
});
