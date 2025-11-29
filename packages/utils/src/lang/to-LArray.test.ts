import { describe, it, expect } from 'vitest';

import { toArray } from './to-LArray';

describe('toArray', () => {
  it('should return empty array for null and undefined', () => {
    expect(toArray(null)).toEqual([]);
    expect(toArray(undefined)).toEqual([]);
  });

  it('should return copy of array', () => {
    const arr = [1, 2, 3];
    const result = toArray(arr);
    expect(result).toEqual([1, 2, 3]);
    expect(result).not.toBe(arr);
  });

  it('should convert string to array of characters', () => {
    expect(toArray('abc')).toEqual(['a', 'b', 'c']);
  });

  it('should convert object to array of values', () => {
    expect(toArray({ a: 1, b: 2 })).toEqual([1, 2]);
  });

  it('should return empty array for primitives', () => {
    expect(toArray(1)).toEqual([]);
    expect(toArray(true)).toEqual([]);
  });
});
