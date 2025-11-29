import { describe, it, expect } from 'vitest';

import { concat } from './concat';

describe('concat', () => {
  it('should concatenate array with values', () => {
    const array = [1];
    expect(concat(array, 2, [3], [[4]])).toEqual([1, 2, 3, [4]]);
  });

  it('should concatenate multiple arrays', () => {
    expect(concat([1], [2], [3])).toEqual([1, 2, 3]);
  });

  it('should concatenate arrays and primitives', () => {
    expect(concat([1], 2, [3, 4], 5)).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle empty arrays', () => {
    expect(concat([], [1, 2])).toEqual([1, 2]);
    expect(concat([1, 2], [])).toEqual([1, 2]);
  });

  it('should handle no additional values', () => {
    expect(concat([1, 2, 3])).toEqual([1, 2, 3]);
  });

  it('should not mutate original array', () => {
    const array = [1, 2];
    concat(array, 3);
    expect(array).toEqual([1, 2]);
  });

  it('should handle nested arrays', () => {
    expect(concat([1], [[2]], [3])).toEqual([1, [2], 3]);
  });

  it('should work with different types', () => {
    expect(concat([1], 'a', [true], null)).toEqual([1, 'a', true, null]);
  });

  it('should handle objects', () => {
    const obj = { a: 1 };
    expect(concat([1], obj)).toEqual([1, obj]);
  });

  it('should handle empty input array', () => {
    expect(concat([], 1, 2, 3)).toEqual([1, 2, 3]);
  });
});
