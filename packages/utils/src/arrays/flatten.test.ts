import { describe, it, expect } from 'vitest';

import { flatten } from './flatten';

describe('flatten', () => {
  it('should flatten array one level deep', () => {
    expect(flatten([1, [2, [3, [4]], 5]])).toEqual([1, 2, [3, [4]], 5]);
  });

  it('should handle empty arrays', () => {
    expect(flatten([])).toEqual([]);
  });

  it('should handle arrays with no nested arrays', () => {
    expect(flatten([1, 2, 3])).toEqual([1, 2, 3]);
  });

  it('should handle multiple nested arrays at same level', () => {
    expect(flatten([1, [2], [3], 4])).toEqual([1, 2, 3, 4]);
  });

  it('should work with mixed types', () => {
    expect(flatten([1, ['a', 'b'], true])).toEqual([1, 'a', 'b', true]);
  });

  it('should not flatten deeper than one level', () => {
    expect(flatten([1, [2, [3]]])).toEqual([1, 2, [3]]);
  });

  it('should handle empty nested arrays', () => {
    expect(flatten([1, [], 2])).toEqual([1, 2]);
  });

  it('should preserve non-array values', () => {
    expect(flatten([null, undefined, 0, false])).toEqual([
      null,
      undefined,
      0,
      false,
    ]);
  });
});
