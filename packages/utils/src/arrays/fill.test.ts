import { describe, it, expect } from 'vitest';
import { fill } from './fill';

describe('fill', () => {
  it('should fill entire array with value', () => {
    const array = [1, 2, 3];
    expect(fill(array, 'a')).toEqual(['a', 'a', 'a']);
  });

  it('should fill array of specified length', () => {
    expect(fill(Array(3), 2)).toEqual([2, 2, 2]);
  });

  it('should fill from start to end', () => {
    expect(fill([4, 6, 8, 10], '*', 1, 3)).toEqual([4, '*', '*', 10]);
  });

  it('should mutate original array', () => {
    const array = [1, 2, 3];
    fill(array, 'a');
    expect(array).toEqual(['a', 'a', 'a']);
  });

  it('should handle negative start index', () => {
    expect(fill([1, 2, 3], 'a', -2)).toEqual([1, 'a', 'a']);
  });

  it('should handle negative end index', () => {
    expect(fill([1, 2, 3, 4], 'a', 1, -1)).toEqual([1, 'a', 'a', 4]);
  });

  it('should handle start beyond array length', () => {
    expect(fill([1, 2, 3], 'a', 10)).toEqual([1, 2, 3]);
  });

  it('should handle end beyond array length', () => {
    expect(fill([1, 2, 3], 'a', 0, 10)).toEqual(['a', 'a', 'a']);
  });

  it('should work with objects', () => {
    const obj = { a: 1 };
    const array = [1, 2, 3];
    fill(array, obj);
    expect(array[0]).toBe(obj);
    expect(array[1]).toBe(obj);
  });

  it('should handle empty array', () => {
    const array: unknown[] = [];
    expect(fill(array, 'a')).toEqual([]);
  });
});
