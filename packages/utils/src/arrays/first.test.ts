import { describe, it, expect } from 'vitest';

import { first } from './first';

describe('first', () => {
  it('should return first element of array', () => {
    expect(first([1, 2, 3])).toBe(1);
  });

  it('should return undefined for empty array', () => {
    expect(first([])).toBeUndefined();
  });

  it('should work with single element array', () => {
    expect(first([42])).toBe(42);
  });

  it('should work with strings', () => {
    expect(first(['a', 'b', 'c'])).toBe('a');
  });

  it('should work with objects', () => {
    const obj = { a: 1 };
    expect(first([obj, { b: 2 }])).toBe(obj);
  });

  it('should work with mixed types', () => {
    expect(first([null, 1, 2])).toBeNull();
  });

  it('should preserve reference', () => {
    const obj = { test: 'value' };
    const arr = [obj];
    expect(first(arr)).toBe(obj);
  });
});
