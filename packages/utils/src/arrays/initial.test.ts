import { describe, it, expect } from 'vitest';

import { initial } from './initial';

describe('initial', () => {
  it('should return all but last element', () => {
    expect(initial([1, 2, 3])).toEqual([1, 2]);
  });

  it('should return empty array for single element', () => {
    expect(initial([1])).toEqual([]);
  });

  it('should return empty array for empty input', () => {
    expect(initial([])).toEqual([]);
  });

  it('should work with strings', () => {
    expect(initial(['a', 'b', 'c'])).toEqual(['a', 'b']);
  });

  it('should work with objects', () => {
    const arr = [{ a: 1 }, { b: 2 }, { c: 3 }];
    const result = initial(arr);
    expect(result).toEqual([{ a: 1 }, { b: 2 }]);
  });

  it('should not mutate original array', () => {
    const array = [1, 2, 3];
    initial(array);
    expect(array).toEqual([1, 2, 3]);
  });
});
