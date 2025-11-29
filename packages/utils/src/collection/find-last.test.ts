import { describe, it, expect } from 'vitest';
import { findLast } from './find-last';

describe('findLast', () => {
  it('should find last matching element in array', () => {
    expect(findLast([1, 2, 3, 4], (n) => n % 2 === 1)).toBe(3);
  });

  it('should find last matching element in object', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(findLast(obj, (v) => v > 1)).toBe(3);
  });

  it('should start search from fromIndex', () => {
    expect(findLast([1, 2, 3, 2], (n) => n === 2, 2)).toBe(2);
  });

  it('should handle negative fromIndex', () => {
    expect(findLast([1, 2, 3], (n) => n === 2, -2)).toBe(2);
  });

  it('should search from end by default', () => {
    expect(findLast([1, 2, 3, 2], (n) => n === 2)).toBe(2);
  });

  it('should return undefined when no match', () => {
    expect(findLast([1, 2, 3], (n) => n > 10)).toBeUndefined();
  });

  it('should handle empty array', () => {
    expect(findLast([], (n) => n > 0)).toBeUndefined();
  });
});
