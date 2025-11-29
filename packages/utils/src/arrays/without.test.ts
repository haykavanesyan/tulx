import { describe, it, expect } from 'vitest';
import { without } from './without';

describe('without', () => {
  it('should exclude specified values from array', () => {
    expect(without([2, 1, 2, 3], 1, 2)).toEqual([3]);
  });

  it('should handle values not in array', () => {
    expect(without([1, 2, 3], 4, 5)).toEqual([1, 2, 3]);
  });

  it('should handle empty array', () => {
    expect(without([], 1, 2)).toEqual([]);
  });

  it('should handle no values to exclude', () => {
    expect(without([1, 2, 3])).toEqual([1, 2, 3]);
  });

  it('should remove all occurrences', () => {
    expect(without([1, 2, 1, 2, 3], 1, 2)).toEqual([3]);
  });

  it('should not mutate original array', () => {
    const array = [1, 2, 3];
    without(array, 1);
    expect(array).toEqual([1, 2, 3]);
  });

  it('should work with strings', () => {
    expect(without(['a', 'b', 'c'], 'b')).toEqual(['a', 'c']);
  });

  it('should use strict equality', () => {
    expect(without([1, 2, 3], '2')).toEqual([1, 2, 3]);
    expect(without([1, 2, 3], 2)).toEqual([1, 3]);
  });
});
