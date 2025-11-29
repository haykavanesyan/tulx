import { describe, it, expect } from 'vitest';
import { pullAt } from './pull-at';

describe('pullAt', () => {
  it('should remove elements at specified indexes', () => {
    const array = ['a', 'b', 'c', 'd'];
    const pulled = pullAt(array, [1, 3]);
    expect(pulled).toEqual(['b', 'd']);
    expect(array).toEqual(['a', 'c']);
  });

  it('should mutate original array', () => {
    const array = [1, 2, 3];
    pullAt(array, [0]);
    expect(array).toEqual([2, 3]);
  });

  it('should handle out of bounds indexes', () => {
    const array = [1, 2, 3];
    const pulled = pullAt(array, [10, 1]);
    expect(pulled).toEqual([2]);
    expect(array).toEqual([1, 3]);
  });

  it('should handle negative indexes', () => {
    const array = [1, 2, 3];
    const pulled = pullAt(array, [-1]);
    expect(pulled).toEqual([]);
  });

  it('should handle empty indexes array', () => {
    const array = [1, 2, 3];
    expect(pullAt(array, [])).toEqual([]);
    expect(array).toEqual([1, 2, 3]);
  });

  it('should return removed elements in order', () => {
    const array = ['a', 'b', 'c', 'd', 'e'];
    const pulled = pullAt(array, [3, 1, 0]);
    expect(pulled).toEqual(['a', 'b', 'd']);
  });
});
