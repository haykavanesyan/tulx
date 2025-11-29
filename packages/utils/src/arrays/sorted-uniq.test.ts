import { describe, it, expect } from 'vitest';
import { sortedUniq } from './sorted-uniq';

describe('sortedUniq', () => {
  it('should remove duplicates from sorted array', () => {
    expect(sortedUniq([1, 1, 2])).toEqual([1, 2]);
  });

  it('should handle empty array', () => {
    expect(sortedUniq([])).toEqual([]);
  });

  it('should handle array with no duplicates', () => {
    expect(sortedUniq([1, 2, 3])).toEqual([1, 2, 3]);
  });

  it('should handle multiple duplicates', () => {
    expect(sortedUniq([1, 1, 1, 2, 2, 3])).toEqual([1, 2, 3]);
  });

  it('should work with strings', () => {
    expect(sortedUniq(['a', 'a', 'b'])).toEqual(['a', 'b']);
  });
});
