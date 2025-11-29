import { describe, it, expect, vi } from 'vitest';

import { zipWith } from './zip-with';

describe('zipWith', () => {
  it('should combine grouped values with iteratee', () => {
    const result = zipWith(
      [1, 2],
      [10, 20],
      [100, 200],
      (a, b, c) => a + b + c
    );
    expect(result).toEqual([111, 222]);
  });

  it('should handle arrays of different lengths', () => {
    const result = zipWith([1, 2], [10], (a, b) => (a ?? 0) + (b ?? 0));
    expect(result).toEqual([11, 2]);
  });

  it('should handle empty arrays', () => {
    expect(zipWith([], (a) => a)).toEqual([]);
  });

  it('should handle less than 2 arguments', () => {
    expect(zipWith()).toEqual([]);
    expect(zipWith([1, 2])).toEqual([]);
  });

  it('should work with different iteratees', () => {
    expect(zipWith([1, 2], [3, 4], (a, b) => a * b)).toEqual([3, 8]);
  });

  it('should pass undefined for missing values', () => {
    const iteratee = vi.fn((a, b) => (a ?? 0) + (b ?? 0));
    zipWith([1], [2, 3], iteratee);
    expect(iteratee).toHaveBeenCalledWith(1, 2);
    expect(iteratee).toHaveBeenCalledWith(undefined, 3);
  });
});
