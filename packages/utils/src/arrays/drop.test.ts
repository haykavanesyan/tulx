import { describe, it, expect } from 'vitest';
import { drop } from './drop';

describe('drop', () => {
  it('should drop one element by default', () => {
    expect(drop([1, 2, 3])).toEqual([2, 3]);
  });

  it('should drop specified number of elements', () => {
    expect(drop([1, 2, 3], 2)).toEqual([3]);
  });

  it('should return empty array when dropping more than length', () => {
    expect(drop([1, 2, 3], 5)).toEqual([]);
  });

  it('should return original array when dropping 0', () => {
    expect(drop([1, 2, 3], 0)).toEqual([1, 2, 3]);
  });

  it('should handle empty array', () => {
    expect(drop([], 1)).toEqual([]);
  });

  it('should handle dropping all elements', () => {
    expect(drop([1, 2, 3], 3)).toEqual([]);
  });

  it('should not mutate original array', () => {
    const array = [1, 2, 3];
    drop(array, 1);
    expect(array).toEqual([1, 2, 3]);
  });

  it('should work with strings', () => {
    expect(drop(['a', 'b', 'c'], 1)).toEqual(['b', 'c']);
  });

  it('should work with objects', () => {
    const arr = [{ a: 1 }, { b: 2 }, { c: 3 }];
    const result = drop(arr, 1);
    expect(result).toEqual([{ b: 2 }, { c: 3 }]);
  });

  it('should handle negative numbers', () => {
    // slice(-1) returns last element, so drop with -1 drops from negative index
    expect(drop([1, 2, 3], -1)).toEqual([3]);
  });
});
