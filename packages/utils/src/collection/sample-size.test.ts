import { describe, it, expect } from 'vitest';

import { sampleSize } from './sample-size';

describe('sampleSize', () => {
  it('should return n random elements', () => {
    const array = [1, 2, 3];
    const result = sampleSize(array, 2);
    expect(result.length).toBe(2);
    result.forEach((item) => {
      expect(array).toContain(item);
    });
  });

  it('should return all elements when n exceeds length', () => {
    const array = [1, 2, 3];
    const result = sampleSize(array, 4);
    expect(result.length).toBe(3);
  });

  it('should return empty array when n is 0', () => {
    expect(sampleSize([1, 2, 3], 0)).toEqual([]);
  });

  it('should default to 1', () => {
    const array = [1, 2, 3];
    const result = sampleSize(array);
    expect(result.length).toBe(1);
  });

  it('should work with objects', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const result = sampleSize(obj, 2);
    expect(result.length).toBe(2);
  });

  it('should return unique elements', () => {
    const array = [1, 2, 3];
    const result = sampleSize(array, 3);
    expect(new Set(result).size).toBe(3);
  });
});
