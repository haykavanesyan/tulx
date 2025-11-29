import { describe, it, expect } from 'vitest';
import { sortedIndexOf } from './sorted-index-of';

describe('sortedIndexOf', () => {
  it('should find first index in sorted array', () => {
    expect(sortedIndexOf([4, 5, 5, 5, 6], 5)).toBe(1);
  });

  it('should return -1 when value not found', () => {
    expect(sortedIndexOf([1, 2, 3], 4)).toBe(-1);
  });

  it('should handle empty array', () => {
    expect(sortedIndexOf([], 1)).toBe(-1);
  });

  it('should find first occurrence of duplicate', () => {
    expect(sortedIndexOf([1, 2, 2, 2, 3], 2)).toBe(1);
  });

  it('should work with strings', () => {
    expect(sortedIndexOf(['a', 'b', 'c'], 'b')).toBe(1);
  });
});
