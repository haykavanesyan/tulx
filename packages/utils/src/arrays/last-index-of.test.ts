import { describe, it, expect } from 'vitest';
import { lastIndexOf } from './last-index-of';

describe('lastIndexOf', () => {
  it('should find last index of value', () => {
    expect(lastIndexOf([1, 2, 1, 2], 2)).toBe(3);
  });

  it('should start search from fromIndex', () => {
    expect(lastIndexOf([1, 2, 1, 2], 2, 2)).toBe(1);
  });

  it('should return -1 when value not found', () => {
    expect(lastIndexOf([1, 2, 3], 4)).toBe(-1);
  });

  it('should handle empty array', () => {
    expect(lastIndexOf([], 1)).toBe(-1);
  });

  it('should handle negative fromIndex', () => {
    expect(lastIndexOf([1, 2, 3, 2], 2, -2)).toBe(1);
  });

  it('should search from end by default', () => {
    expect(lastIndexOf([1, 2, 1, 2], 2)).toBe(3);
  });

  it('should work with strings', () => {
    expect(lastIndexOf(['a', 'b', 'a'], 'a')).toBe(2);
  });

  it('should use strict equality', () => {
    expect(lastIndexOf([1, 2, 3], '2')).toBe(-1);
    expect(lastIndexOf([1, 2, 3], 2)).toBe(1);
  });
});
