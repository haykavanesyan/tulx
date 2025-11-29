import { describe, it, expect } from 'vitest';
import { flattenDeep } from './flatten-deep';

describe('flattenDeep', () => {
  it('should recursively flatten array', () => {
    expect(flattenDeep([1, [2, [3, [4]], 5]])).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle empty arrays', () => {
    expect(flattenDeep([])).toEqual([]);
  });

  it('should handle arrays with no nested arrays', () => {
    expect(flattenDeep([1, 2, 3])).toEqual([1, 2, 3]);
  });

  it('should handle deeply nested arrays', () => {
    expect(flattenDeep([1, [2, [3, [4, [5]]]]])).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle empty nested arrays', () => {
    expect(flattenDeep([1, [], [2, []]])).toEqual([1, 2]);
  });

  it('should work with mixed types', () => {
    expect(flattenDeep([1, ['a', [true]]])).toEqual([1, 'a', true]);
  });

  it('should preserve non-array values', () => {
    expect(flattenDeep([null, undefined, 0, false])).toEqual([
      null,
      undefined,
      0,
      false,
    ]);
  });
});
