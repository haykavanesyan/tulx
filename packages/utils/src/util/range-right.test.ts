import { describe, it, expect } from 'vitest';

import { rangeRight } from './range-right';

describe('rangeRight', () => {
  it('should create range in descending order', () => {
    expect(rangeRight(4)).toEqual([3, 2, 1, 0]);
    expect(rangeRight(-4)).toEqual([-3, -2, -1, 0]);
  });

  it('should create range from start to end in descending order', () => {
    expect(rangeRight(1, 5)).toEqual([4, 3, 2, 1]);
  });

  it('should create range with step in descending order', () => {
    expect(rangeRight(0, 20, 5)).toEqual([15, 10, 5, 0]);
    expect(rangeRight(0, -4, -1)).toEqual([-3, -2, -1, 0]);
    expect(rangeRight(1, 4, 0)).toEqual([1, 1, 1]);
  });

  it('should return empty array for 0', () => {
    expect(rangeRight(0)).toEqual([]);
  });
});
