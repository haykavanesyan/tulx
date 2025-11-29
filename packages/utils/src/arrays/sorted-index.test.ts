import { describe, it, expect } from 'vitest';
import { sortedIndex } from './sorted-index';

describe('sortedIndex', () => {
  it('should find insertion index for sorted array', () => {
    expect(sortedIndex([30, 50], 40)).toBe(1);
  });

  it('should return 0 for value less than all', () => {
    expect(sortedIndex([10, 20, 30], 5)).toBe(0);
  });

  it('should return length for value greater than all', () => {
    expect(sortedIndex([10, 20, 30], 40)).toBe(3);
  });

  it('should handle empty array', () => {
    expect(sortedIndex([], 10)).toBe(0);
  });

  it('should handle duplicate values', () => {
    expect(sortedIndex([10, 20, 20, 30], 20)).toBe(1);
  });

  it('should work with strings', () => {
    expect(sortedIndex(['a', 'c'], 'b')).toBe(1);
  });
});
