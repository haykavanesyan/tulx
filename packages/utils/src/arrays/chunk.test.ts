import { describe, it, expect } from 'vitest';
import { chunk } from './chunk';

describe('chunk', () => {
  it('should split array into chunks of specified size', () => {
    expect(chunk(['a', 'b', 'c', 'd'], 2)).toEqual([
      ['a', 'b'],
      ['c', 'd'],
    ]);
  });

  it('should handle uneven splits', () => {
    expect(chunk(['a', 'b', 'c', 'd'], 3)).toEqual([['a', 'b', 'c'], ['d']]);
  });

  it('should return empty array for size <= 0', () => {
    expect(chunk([1, 2, 3], 0)).toEqual([]);
    expect(chunk([1, 2, 3], -1)).toEqual([]);
  });

  it('should return empty array for empty input', () => {
    expect(chunk([], 2)).toEqual([]);
  });

  it('should handle size larger than array length', () => {
    expect(chunk([1, 2, 3], 10)).toEqual([[1, 2, 3]]);
  });

  it('should handle size of 1', () => {
    expect(chunk([1, 2, 3], 1)).toEqual([[1], [2], [3]]);
  });

  it('should work with numbers', () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
  });

  it('should work with objects', () => {
    const arr = [{ a: 1 }, { a: 2 }, { a: 3 }];
    const result = chunk(arr, 2);
    expect(result).toEqual([[{ a: 1 }, { a: 2 }], [{ a: 3 }]]);
  });

  it('should preserve references', () => {
    const obj = { a: 1 };
    const arr = [obj, { b: 2 }];
    const result = chunk(arr, 1);
    expect(result[0][0]).toBe(obj);
  });
});
