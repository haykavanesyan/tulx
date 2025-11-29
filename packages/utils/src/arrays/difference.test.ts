import { describe, it, expect } from 'vitest';
import { difference } from './difference';

describe('difference', () => {
  it('should return array values not in other arrays', () => {
    expect(difference([2, 1], [2, 3])).toEqual([1]);
  });

  it('should handle multiple exclusion arrays', () => {
    expect(difference([1, 2, 3, 4], [2], [3])).toEqual([1, 4]);
  });

  it('should return empty array when all values are excluded', () => {
    expect(difference([1, 2, 3], [1, 2, 3])).toEqual([]);
  });

  it('should return original array when no values match', () => {
    expect(difference([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3]);
  });

  it('should handle empty arrays', () => {
    expect(difference([1, 2, 3], [])).toEqual([1, 2, 3]);
    expect(difference([], [1, 2, 3])).toEqual([]);
  });

  it('should preserve order from first array', () => {
    expect(difference([3, 1, 2], [2])).toEqual([3, 1]);
  });

  it('should handle duplicates in first array', () => {
    expect(difference([1, 2, 2, 3], [2])).toEqual([1, 3]);
  });

  it('should work with strings', () => {
    expect(difference(['a', 'b', 'c'], ['b'])).toEqual(['a', 'c']);
  });

  it('should work with numbers', () => {
    expect(difference([1, 2, 3, 4, 5], [2, 4])).toEqual([1, 3, 5]);
  });

  it('should handle no exclusion arrays', () => {
    expect(difference([1, 2, 3])).toEqual([1, 2, 3]);
  });
});
