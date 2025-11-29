import { describe, it, expect } from 'vitest';
import { sortedLastIndex } from './sorted-last-index';

describe('sortedLastIndex', () => {
  it('should find last insertion index', () => {
    expect(sortedLastIndex([4, 5, 5, 5, 6], 5)).toBe(4);
  });

  it('should return 0 for value less than all', () => {
    expect(sortedLastIndex([10, 20, 30], 5)).toBe(0);
  });

  it('should return length for value greater than all', () => {
    expect(sortedLastIndex([10, 20, 30], 40)).toBe(3);
  });

  it('should handle empty array', () => {
    expect(sortedLastIndex([], 10)).toBe(0);
  });

  it('should work with strings', () => {
    expect(sortedLastIndex(['a', 'b', 'b'], 'b')).toBe(3);
  });
});
