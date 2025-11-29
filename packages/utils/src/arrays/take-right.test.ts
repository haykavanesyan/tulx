import { describe, it, expect } from 'vitest';

import { takeRight } from './take-right';

describe('takeRight', () => {
  it('should take one element from end by default', () => {
    expect(takeRight([1, 2, 3])).toEqual([3]);
  });

  it('should take specified number of elements from end', () => {
    expect(takeRight([1, 2, 3], 2)).toEqual([2, 3]);
  });

  it('should return all elements when n exceeds length', () => {
    expect(takeRight([1, 2, 3], 5)).toEqual([1, 2, 3]);
  });

  it('should return empty array when n is 0', () => {
    expect(takeRight([1, 2, 3], 0)).toEqual([]);
  });

  it('should handle empty array', () => {
    expect(takeRight([], 1)).toEqual([]);
  });

  it('should not mutate original array', () => {
    const array = [1, 2, 3];
    takeRight(array, 2);
    expect(array).toEqual([1, 2, 3]);
  });

  it('should work with strings', () => {
    expect(takeRight(['a', 'b', 'c'], 2)).toEqual(['b', 'c']);
  });

  it('should work with objects', () => {
    const arr = [{ a: 1 }, { b: 2 }, { c: 3 }];
    const result = takeRight(arr, 2);
    expect(result).toEqual([{ b: 2 }, { c: 3 }]);
  });
});
