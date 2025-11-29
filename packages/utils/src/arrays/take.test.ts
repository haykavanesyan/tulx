import { describe, it, expect } from 'vitest';

import { take } from './take';

describe('take', () => {
  it('should take one element by default', () => {
    expect(take([1, 2, 3])).toEqual([1]);
  });

  it('should take specified number of elements', () => {
    expect(take([1, 2, 3], 2)).toEqual([1, 2]);
  });

  it('should return all elements when n exceeds length', () => {
    expect(take([1, 2, 3], 5)).toEqual([1, 2, 3]);
  });

  it('should return empty array when n is 0', () => {
    expect(take([1, 2, 3], 0)).toEqual([]);
  });

  it('should handle empty array', () => {
    expect(take([], 1)).toEqual([]);
  });

  it('should not mutate original array', () => {
    const array = [1, 2, 3];
    take(array, 2);
    expect(array).toEqual([1, 2, 3]);
  });

  it('should work with strings', () => {
    expect(take(['a', 'b', 'c'], 2)).toEqual(['a', 'b']);
  });

  it('should work with objects', () => {
    const arr = [{ a: 1 }, { b: 2 }, { c: 3 }];
    const result = take(arr, 2);
    expect(result).toEqual([{ a: 1 }, { b: 2 }]);
  });
});
