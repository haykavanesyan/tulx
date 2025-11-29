import { describe, it, expect } from 'vitest';
import { last } from './last';

describe('last', () => {
  it('should return last element of array', () => {
    expect(last([1, 2, 3])).toBe(3);
  });

  it('should return undefined for empty array', () => {
    expect(last([])).toBeUndefined();
  });

  it('should work with single element array', () => {
    expect(last([42])).toBe(42);
  });

  it('should work with strings', () => {
    expect(last(['a', 'b', 'c'])).toBe('c');
  });

  it('should work with objects', () => {
    const obj = { a: 1 };
    expect(last([{ b: 2 }, obj])).toBe(obj);
  });

  it('should work with mixed types', () => {
    expect(last([1, 2, null])).toBeNull();
  });

  it('should preserve reference', () => {
    const obj = { test: 'value' };
    const arr = [obj];
    expect(last(arr)).toBe(obj);
  });
});
