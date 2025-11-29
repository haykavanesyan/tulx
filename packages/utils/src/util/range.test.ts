import { describe, it, expect } from 'vitest';

import { range } from './range';

describe('range', () => {
  it('should create range from 0 to n', () => {
    expect(range(4)).toEqual([0, 1, 2, 3]);
    expect(range(-4)).toEqual([0, -1, -2, -3]);
  });

  it('should create range from start to end', () => {
    expect(range(1, 5)).toEqual([1, 2, 3, 4]);
  });

  it('should create range with step', () => {
    expect(range(0, 20, 5)).toEqual([0, 5, 10, 15]);
    expect(range(0, -4, -1)).toEqual([0, -1, -2, -3]);
    expect(range(1, 4, 0)).toEqual([1, 1, 1]);
  });

  it('should return empty array for 0', () => {
    expect(range(0)).toEqual([]);
  });
});
