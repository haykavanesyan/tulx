import { describe, it, expect } from 'vitest';

import { zip } from './zip';

describe('zip', () => {
  it('should group elements from arrays', () => {
    expect(zip(['a', 'b'], [1, 2], [true, false])).toEqual([
      ['a', 1, true],
      ['b', 2, false],
    ]);
  });

  it('should handle arrays of different lengths', () => {
    expect(zip(['a', 'b'], [1])).toEqual([
      ['a', 1],
      ['b', undefined],
    ]);
  });

  it('should handle empty arrays', () => {
    expect(zip([], [])).toEqual([]);
  });

  it('should handle no arrays', () => {
    expect(zip()).toEqual([]);
  });

  it('should handle single array', () => {
    expect(zip([1, 2])).toEqual([[1], [2]]);
  });

  it('should work with different types', () => {
    expect(zip([1, 2], ['a', 'b'])).toEqual([
      [1, 'a'],
      [2, 'b'],
    ]);
  });
});
