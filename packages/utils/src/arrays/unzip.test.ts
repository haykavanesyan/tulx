import { describe, it, expect } from 'vitest';

import { unzip } from './unzip';

describe('unzip', () => {
  it('should regroup zipped arrays', () => {
    const zipped = [
      ['a', 1, true],
      ['b', 2, false],
    ];
    expect(unzip(zipped)).toEqual([
      ['a', 'b'],
      [1, 2],
      [true, false],
    ]);
  });

  it('should handle empty array', () => {
    expect(unzip([])).toEqual([]);
  });

  it('should handle arrays of different lengths', () => {
    const zipped = [['a', 1], ['b']];
    expect(unzip(zipped)).toEqual([
      ['a', 'b'],
      [1, undefined],
    ]);
  });

  it('should work with single element arrays', () => {
    expect(unzip([['a']])).toEqual([['a']]);
  });
});
