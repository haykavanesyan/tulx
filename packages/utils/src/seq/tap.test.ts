import { describe, it, expect, vi } from 'vitest';

import { tap } from './tap';

describe('tap', () => {
  it('should invoke interceptor with value', () => {
    const interceptor = vi.fn();
    const value = 42;
    tap(value, interceptor);
    expect(interceptor).toHaveBeenCalledWith(value);
    expect(interceptor).toHaveBeenCalledTimes(1);
  });

  it('should return the original value', () => {
    const value = 42;
    const interceptor = vi.fn();
    const result = tap(value, interceptor);
    expect(result).toBe(value);
  });

  it('should work with arrays', () => {
    const array = [1, 2, 3];
    const interceptor = vi.fn((arr) => {
      arr.pop();
    });
    const result = tap(array, interceptor);
    expect(interceptor).toHaveBeenCalledWith(array);
    expect(result).toBe(array);
    expect(array).toEqual([1, 2]); // Array was mutated by interceptor
  });

  it('should work with objects', () => {
    const obj = { a: 1, b: 2 };
    const interceptor = vi.fn((o) => {
      o.c = 3;
    });
    const result = tap(obj, interceptor);
    expect(result).toBe(obj);
    expect(obj).toEqual({ a: 1, b: 2, c: 3 });
  });

  it('should work with primitive values', () => {
    const value = 'hello';
    const interceptor = vi.fn();
    const result = tap(value, interceptor);
    expect(result).toBe(value);
    expect(interceptor).toHaveBeenCalledWith(value);
  });

  it('should work with null', () => {
    const interceptor = vi.fn();
    const result = tap(null, interceptor);
    expect(result).toBeNull();
    expect(interceptor).toHaveBeenCalledWith(null);
  });

  it('should work with undefined', () => {
    const interceptor = vi.fn();
    const result = tap(undefined, interceptor);
    expect(result).toBeUndefined();
    expect(interceptor).toHaveBeenCalledWith(undefined);
  });

  it('should allow interceptor to mutate value', () => {
    const array = [1, 2, 3];
    const interceptor = (arr: number[]) => {
      arr.push(4);
    };
    const result = tap(array, interceptor);
    expect(result).toBe(array);
    expect(array).toEqual([1, 2, 3, 4]);
  });

  it('should work with empty arrays', () => {
    const array: unknown[] = [];
    const interceptor = vi.fn();
    const result = tap(array, interceptor);
    expect(result).toBe(array);
    expect(interceptor).toHaveBeenCalledWith(array);
  });

  it('should work with nested objects', () => {
    const obj = { a: { b: { c: 1 } } };
    const interceptor = vi.fn();
    const result = tap(obj, interceptor);
    expect(result).toBe(obj);
    expect(interceptor).toHaveBeenCalledWith(obj);
  });

  it('should return value even if interceptor throws', () => {
    const value = 42;
    const interceptor = vi.fn(() => {
      throw new Error('test error');
    });
    expect(() => tap(value, interceptor)).toThrow('test error');
  });

  it('should work with functions', () => {
    const fn = () => 42;
    const interceptor = vi.fn();
    const result = tap(fn, interceptor);
    expect(result).toBe(fn);
    expect(interceptor).toHaveBeenCalledWith(fn);
  });
});
