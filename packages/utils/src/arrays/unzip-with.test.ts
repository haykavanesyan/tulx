import { describe, it, expect } from 'vitest';

import { unzipWith } from './unzip-with';

describe('unzipWith', () => {
  it('should regroup and combine values with iteratee', () => {
    const zipped = [
      [1, 10, 100],
      [2, 20, 200],
    ];
    // unzipWith takes values vertically: [1,2], [10,20], [100,200]
    const result = unzipWith(zipped, (...args) =>
      args.reduce((a, b) => (a ?? 0) + (b ?? 0), 0)
    );
    expect(result).toEqual([3, 30, 300]);
  });

  it('should handle empty array', () => {
    expect(unzipWith([], (...args) => args)).toEqual([]);
  });

  it('should handle arrays of different lengths', () => {
    const zipped = [[1, 10], [2]];
    const result = unzipWith(zipped, (...args) =>
      args.reduce((a, b) => (a ?? 0) + (b ?? 0), 0)
    );
    expect(result).toEqual([3, 10]);
  });
});
