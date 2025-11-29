import { describe, it, expect } from 'vitest';

import { thru } from './thru';

describe('thru', () => {
  it('should invoke interceptor with value and return its result', () => {
    const value = [1, 2, 3];
    const interceptor = (arr: number[]) => arr.reverse();
    const result = thru(value, interceptor);
    expect(result).toEqual([3, 2, 1]);
  });

  it('should return the result of interceptor, not the original value', () => {
    const value = 42;
    const interceptor = (num: number) => num * 2;
    const result = thru(value, interceptor);
    expect(result).toBe(84);
    expect(result).not.toBe(value);
  });

  it('should work with arrays', () => {
    const array = [1, 2, 3];
    const interceptor = (arr: number[]) => arr.map((x) => x * 2);
    const result = thru(array, interceptor);
    expect(result).toEqual([2, 4, 6]);
    expect(array).toEqual([1, 2, 3]); // Original array unchanged
  });

  it('should work with objects', () => {
    const obj = { a: 1, b: 2 };
    const interceptor = (o: typeof obj) => ({ ...o, c: 3 });
    const result = thru(obj, interceptor);
    expect(result).toEqual({ a: 1, b: 2, c: 3 });
    expect(obj).toEqual({ a: 1, b: 2 }); // Original object unchanged
  });

  it('should work with primitive values', () => {
    const value = 'hello';
    const interceptor = (str: string) => str.toUpperCase();
    const result = thru(value, interceptor);
    expect(result).toBe('HELLO');
  });

  it('should work with type transformations', () => {
    const value = 42;
    const interceptor = (num: number) => String(num);
    const result = thru(value, interceptor);
    expect(result).toBe('42');
    expect(typeof result).toBe('string');
  });

  it('should work with null', () => {
    const interceptor = (_val: null) => 'null value';
    const result = thru(null, interceptor);
    expect(result).toBe('null value');
  });

  it('should work with undefined', () => {
    const interceptor = (_val: undefined) => 'undefined value';
    const result = thru(undefined, interceptor);
    expect(result).toBe('undefined value');
  });

  it('should allow returning different types', () => {
    const value = [1, 2, 3];
    const interceptor = (arr: number[]) => arr.length;
    const result = thru(value, interceptor);
    expect(result).toBe(3);
    expect(typeof result).toBe('number');
  });

  it('should work with empty arrays', () => {
    const array: unknown[] = [];
    const interceptor = (arr: unknown[]) => arr.length;
    const result = thru(array, interceptor);
    expect(result).toBe(0);
  });

  it('should work with nested objects', () => {
    const obj = { a: { b: { c: 1 } } };
    const interceptor = (o: typeof obj) => o.a.b.c;
    const result = thru(obj, interceptor);
    expect(result).toBe(1);
  });

  it('should work with functions', () => {
    const fn = () => 42;
    const interceptor = (f: () => number) => f();
    const result = thru(fn, interceptor);
    expect(result).toBe(42);
  });

  it('should work with complex transformations', () => {
    const value = { users: [{ name: 'Alice', age: 30 }] };
    const interceptor = (obj: typeof value) => obj.users.map((u) => u.name);
    const result = thru(value, interceptor);
    expect(result).toEqual(['Alice']);
  });

  it('should allow returning the same value', () => {
    const value = 42;
    const interceptor = (val: number) => val;
    const result = thru(value, interceptor);
    expect(result).toBe(42);
  });
});
