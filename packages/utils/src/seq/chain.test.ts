import { describe, it, expect } from 'vitest';
import { chain } from './chain';

describe('chain', () => {
  it('should return an object with value method', () => {
    const wrapper = chain(42);
    expect(wrapper).toBeDefined();
    expect(typeof wrapper.value).toBe('function');
  });

  it('should return the original value when value() is called', () => {
    const value = 42;
    const wrapper = chain(value);
    expect(wrapper.value()).toBe(value);
  });

  it('should work with primitive numbers', () => {
    const value = 123;
    expect(chain(value).value()).toBe(123);
  });

  it('should work with primitive strings', () => {
    const value = 'hello';
    expect(chain(value).value()).toBe('hello');
  });

  it('should work with primitive booleans', () => {
    expect(chain(true).value()).toBe(true);
    expect(chain(false).value()).toBe(false);
  });

  it('should work with null', () => {
    expect(chain(null).value()).toBeNull();
  });

  it('should work with undefined', () => {
    expect(chain(undefined).value()).toBeUndefined();
  });

  it('should work with arrays', () => {
    const value = [1, 2, 3];
    const result = chain(value).value();
    expect(result).toEqual([1, 2, 3]);
    expect(result).toBe(value); // Should return the same reference
  });

  it('should work with objects', () => {
    const value = { a: 1, b: 2 };
    const result = chain(value).value();
    expect(result).toEqual({ a: 1, b: 2 });
    expect(result).toBe(value); // Should return the same reference
  });

  it('should work with nested objects', () => {
    const value = { a: { b: { c: 42 } } };
    const result = chain(value).value();
    expect(result).toEqual({ a: { b: { c: 42 } } });
    expect(result).toBe(value);
  });

  it('should work with functions', () => {
    const fn = () => 42;
    const result = chain(fn).value();
    expect(result).toBe(fn);
  });

  it('should work with empty arrays', () => {
    const value: unknown[] = [];
    expect(chain(value).value()).toEqual([]);
  });

  it('should work with empty objects', () => {
    const value = {};
    expect(chain(value).value()).toEqual({});
  });

  it('should preserve value reference', () => {
    const value = { test: 'value' };
    const wrapper = chain(value);
    expect(wrapper.value()).toBe(value);
    expect(wrapper.value()).toBe(wrapper.value());
  });

  it('should work with complex nested structures', () => {
    const value = {
      users: [
        { name: 'Alice', age: 30 },
        { name: 'Bob', age: 25 },
      ],
      metadata: {
        count: 2,
        timestamp: Date.now(),
      },
    };
    const result = chain(value).value();
    expect(result).toEqual(value);
    expect(result).toBe(value);
  });
});
