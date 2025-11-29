import { describe, it, expect } from 'vitest';

import { pullAll } from './pull-all';

describe('pullAll', () => {
  it('should remove specified values from array', () => {
    const array = ['a', 'b', 'c', 'a', 'b', 'c'];
    expect(pullAll(array, ['a', 'c'])).toEqual(['b', 'b']);
  });

  it('should mutate original array', () => {
    const array = ['a', 'b', 'c'];
    pullAll(array, ['a']);
    expect(array).toEqual(['b', 'c']);
  });

  it('should handle values not in array', () => {
    const array = ['a', 'b', 'c'];
    expect(pullAll(array, ['d'])).toEqual(['a', 'b', 'c']);
  });

  it('should handle empty array', () => {
    const array: unknown[] = [];
    expect(pullAll(array, ['a'])).toEqual([]);
  });

  it('should handle empty values array', () => {
    const array = ['a', 'b', 'c'];
    expect(pullAll(array, [])).toEqual(['a', 'b', 'c']);
  });

  it('should work with numbers', () => {
    const array = [1, 2, 3, 1, 2];
    expect(pullAll(array, [1, 2])).toEqual([3]);
  });
});
