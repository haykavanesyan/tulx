import { describe, it, expect } from 'vitest';
import { head } from './head';

describe('head', () => {
  it('should return first element of array', () => {
    expect(head([1, 2, 3])).toBe(1);
  });

  it('should return undefined for empty array', () => {
    expect(head([])).toBeUndefined();
  });

  it('should work with single element array', () => {
    expect(head([42])).toBe(42);
  });

  it('should work with strings', () => {
    expect(head(['a', 'b', 'c'])).toBe('a');
  });

  it('should work with objects', () => {
    const obj = { a: 1 };
    expect(head([obj, { b: 2 }])).toBe(obj);
  });

  it('should work with mixed types', () => {
    expect(head([null, 1, 2])).toBeNull();
  });

  it('should preserve reference', () => {
    const obj = { test: 'value' };
    const arr = [obj];
    expect(head(arr)).toBe(obj);
  });
});
