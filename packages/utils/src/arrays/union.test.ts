import { describe, it, expect } from 'vitest';

import { union } from './union';

describe('union', () => {
  it('should create array of unique values from all arrays', () => {
    expect(union([2], [1, 2])).toEqual([2, 1]);
  });

  it('should handle multiple arrays', () => {
    expect(union([1, 2], [2, 3], [3, 4])).toEqual([1, 2, 3, 4]);
  });

  it('should remove duplicates', () => {
    expect(union([1, 2, 2], [2, 3])).toEqual([1, 2, 3]);
  });

  it('should handle empty arrays', () => {
    expect(union([], [1, 2])).toEqual([1, 2]);
    expect(union([1, 2], [])).toEqual([1, 2]);
  });

  it('should handle no arrays', () => {
    expect(union()).toEqual([]);
  });

  it('should preserve order from first occurrence', () => {
    expect(union([3, 1], [2, 3])).toEqual([3, 1, 2]);
  });

  it('should work with strings', () => {
    expect(union(['a', 'b'], ['b', 'c'])).toEqual(['a', 'b', 'c']);
  });
});
