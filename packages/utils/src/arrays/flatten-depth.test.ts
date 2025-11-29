import { describe, it, expect } from 'vitest';

import { flattenDepth } from './flatten-depth';

describe('flattenDepth', () => {
  it('should flatten array to specified depth', () => {
    const array = [1, [2, [3, [4]], 5]];
    expect(flattenDepth(array, 1)).toEqual([1, 2, [3, [4]], 5]);
    expect(flattenDepth(array, 2)).toEqual([1, 2, 3, [4], 5]);
  });

  it('should handle depth 0', () => {
    expect(flattenDepth([1, [2, [3]]], 0)).toEqual([1, [2, [3]]]);
  });

  it('should handle negative depth', () => {
    expect(flattenDepth([1, [2, [3]]], -1)).toEqual([1, [2, [3]]]);
  });

  it('should handle empty arrays', () => {
    expect(flattenDepth([], 2)).toEqual([]);
  });

  it('should default to depth 1', () => {
    expect(flattenDepth([1, [2, [3]]])).toEqual([1, 2, [3]]);
  });

  it('should handle depth larger than nesting', () => {
    expect(flattenDepth([1, [2]], 10)).toEqual([1, 2]);
  });

  it('should work with mixed types', () => {
    expect(flattenDepth([1, ['a', [true]]], 2)).toEqual([1, 'a', true]);
  });
});
