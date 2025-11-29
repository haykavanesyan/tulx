import { describe, it, expect } from 'vitest';
import { uniq } from './uniq';

describe('uniq', () => {
  it('should remove duplicates from array', () => {
    expect(uniq([2, 1, 2])).toEqual([2, 1]);
  });

  it('should preserve order of first occurrence', () => {
    expect(uniq([1, 2, 1, 3, 2])).toEqual([1, 2, 3]);
  });

  it('should handle empty array', () => {
    expect(uniq([])).toEqual([]);
  });

  it('should handle array with no duplicates', () => {
    expect(uniq([1, 2, 3])).toEqual([1, 2, 3]);
  });

  it('should work with strings', () => {
    expect(uniq(['a', 'b', 'a', 'c'])).toEqual(['a', 'b', 'c']);
  });

  it('should work with numbers', () => {
    expect(uniq([1, 1, 2, 2, 3])).toEqual([1, 2, 3]);
  });

  it('should use strict equality', () => {
    expect(uniq([1, '1', 2])).toEqual([1, '1', 2]);
  });
});
