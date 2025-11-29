import { describe, it, expect } from 'vitest';
import { intersection } from './intersection';

describe('intersection', () => {
  it('should return common values from arrays', () => {
    expect(intersection([2, 1], [2, 3])).toEqual([2]);
  });

  it('should handle multiple arrays', () => {
    expect(intersection([1, 2, 3], [2, 3, 4], [3, 4, 5])).toEqual([3]);
  });

  it('should return empty array when no common values', () => {
    expect(intersection([1, 2], [3, 4])).toEqual([]);
  });

  it('should handle empty arrays', () => {
    expect(intersection([], [1, 2])).toEqual([]);
    expect(intersection([1, 2], [])).toEqual([]);
  });

  it('should handle single array', () => {
    expect(intersection([1, 2, 3])).toEqual([1, 2, 3]);
  });

  it('should handle no arrays', () => {
    expect(intersection()).toEqual([]);
  });

  it('should remove duplicates', () => {
    expect(intersection([1, 2, 2, 3], [2, 3])).toEqual([2, 3]);
  });

  it('should work with strings', () => {
    expect(intersection(['a', 'b'], ['b', 'c'])).toEqual(['b']);
  });

  it('should preserve order from first array', () => {
    expect(intersection([3, 1, 2], [2, 1])).toEqual([1, 2]);
  });
});
