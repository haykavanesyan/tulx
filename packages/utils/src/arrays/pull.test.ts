import { describe, it, expect } from 'vitest';

import { pull } from './pull';

describe('pull', () => {
  it('should remove specified values from array', () => {
    const array = ['a', 'b', 'c', 'a', 'b', 'c'];
    expect(pull(array, 'a', 'c')).toEqual(['b', 'b']);
  });

  it('should mutate original array', () => {
    const array = ['a', 'b', 'c'];
    pull(array, 'a');
    expect(array).toEqual(['b', 'c']);
  });

  it('should handle values not in array', () => {
    const array = ['a', 'b', 'c'];
    expect(pull(array, 'd')).toEqual(['a', 'b', 'c']);
  });

  it('should handle empty array', () => {
    const array: unknown[] = [];
    expect(pull(array, 'a')).toEqual([]);
  });

  it('should handle no values to remove', () => {
    const array = ['a', 'b', 'c'];
    expect(pull(array)).toEqual(['a', 'b', 'c']);
  });

  it('should work with numbers', () => {
    const array = [1, 2, 3, 1, 2];
    expect(pull(array, 1, 2)).toEqual([3]);
  });

  it('should remove all occurrences', () => {
    const array = [1, 2, 1, 2, 3];
    expect(pull(array, 1)).toEqual([2, 2, 3]);
  });
});
