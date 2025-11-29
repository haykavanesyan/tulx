import { describe, it, expect } from 'vitest';

import { tail } from './tail';

describe('tail', () => {
  it('should return all but first element', () => {
    expect(tail([1, 2, 3])).toEqual([2, 3]);
  });

  it('should return empty array for single element', () => {
    expect(tail([1])).toEqual([]);
  });

  it('should return empty array for empty input', () => {
    expect(tail([])).toEqual([]);
  });

  it('should work with strings', () => {
    expect(tail(['a', 'b', 'c'])).toEqual(['b', 'c']);
  });

  it('should work with objects', () => {
    const arr = [{ a: 1 }, { b: 2 }, { c: 3 }];
    const result = tail(arr);
    expect(result).toEqual([{ b: 2 }, { c: 3 }]);
  });

  it('should not mutate original array', () => {
    const array = [1, 2, 3];
    tail(array);
    expect(array).toEqual([1, 2, 3]);
  });
});
