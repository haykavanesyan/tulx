import { describe, it, expect } from 'vitest';
import { sortedLastIndexOf } from './sorted-last-index-of';

describe('sortedLastIndexOf', () => {
  it('should find last index in sorted array', () => {
    expect(sortedLastIndexOf([4, 5, 5, 5, 6], 5)).toBe(3);
  });

  it('should return -1 when value not found', () => {
    expect(sortedLastIndexOf([1, 2, 3], 4)).toBe(-1);
  });

  it('should handle empty array', () => {
    expect(sortedLastIndexOf([], 1)).toBe(-1);
  });

  it('should find last occurrence of duplicate', () => {
    expect(sortedLastIndexOf([1, 2, 2, 2, 3], 2)).toBe(3);
  });

  it('should work with strings', () => {
    expect(sortedLastIndexOf(['a', 'b', 'b', 'c'], 'b')).toBe(2);
  });
});
