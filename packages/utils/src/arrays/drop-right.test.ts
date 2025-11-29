import { describe, it, expect } from 'vitest';

import { dropRight } from './drop-right';

describe('dropRight', () => {
  it('should drop one element from end by default', () => {
    expect(dropRight([1, 2, 3])).toEqual([1, 2]);
  });

  it('should drop specified number of elements from end', () => {
    expect(dropRight([1, 2, 3], 2)).toEqual([1]);
  });

  it('should handle dropping more than length', () => {
    // When n > length, length - n is negative, slice(0, negative) returns elements from start
    // slice(0, -2) with length 3 returns [1]
    expect(dropRight([1, 2, 3], 5)).toEqual([1]);
  });

  it('should return original array when dropping 0', () => {
    expect(dropRight([1, 2, 3], 0)).toEqual([1, 2, 3]);
  });

  it('should handle empty array', () => {
    expect(dropRight([], 1)).toEqual([]);
  });

  it('should handle dropping all elements', () => {
    expect(dropRight([1, 2, 3], 3)).toEqual([]);
  });

  it('should not mutate original array', () => {
    const array = [1, 2, 3];
    dropRight(array, 1);
    expect(array).toEqual([1, 2, 3]);
  });

  it('should work with strings', () => {
    expect(dropRight(['a', 'b', 'c'], 1)).toEqual(['a', 'b']);
  });

  it('should work with objects', () => {
    const arr = [{ a: 1 }, { b: 2 }, { c: 3 }];
    const result = dropRight(arr, 1);
    expect(result).toEqual([{ a: 1 }, { b: 2 }]);
  });
});
