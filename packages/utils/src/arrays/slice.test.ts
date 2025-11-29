import { describe, it, expect } from 'vitest';
import { slice } from './slice';

describe('slice', () => {
  it('should slice array from start', () => {
    const array = [1, 2, 3, 4];
    expect(slice(array, 2)).toEqual([3, 4]);
  });

  it('should slice array from start to end', () => {
    const array = [1, 2, 3, 4];
    expect(slice(array, 2, 4)).toEqual([3, 4]);
  });

  it('should handle negative start', () => {
    expect(slice([1, 2, 3, 4], -2)).toEqual([3, 4]);
  });

  it('should handle negative end', () => {
    expect(slice([1, 2, 3, 4], 1, -1)).toEqual([2, 3]);
  });

  it('should handle empty array', () => {
    expect(slice([], 0, 1)).toEqual([]);
  });

  it('should not mutate original array', () => {
    const array = [1, 2, 3];
    slice(array, 1);
    expect(array).toEqual([1, 2, 3]);
  });

  it('should return empty array when start >= end', () => {
    expect(slice([1, 2, 3], 2, 2)).toEqual([]);
    expect(slice([1, 2, 3], 3, 2)).toEqual([]);
  });

  it('should work with objects', () => {
    const obj = { a: 1 };
    const array = [{ b: 2 }, obj, { c: 3 }];
    const result = slice(array, 1, 2);
    expect(result[0]).toBe(obj);
  });
});
