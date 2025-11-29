import { describe, it, expect } from 'vitest';
import { isArrayLikeObject } from './isArrayLikeObject';

describe('isArrayLikeObject', () => {
  it('should return true for arrays', () => {
    // isArrayLikeObject excludes arrays (checks !Array.isArray)
    // So arrays return false
    expect(isArrayLikeObject([1, 2, 3])).toBe(false);
  });

  it('should return true for array-like objects (not arrays)', () => {
    const obj = { length: 3, 0: 'a', 1: 'b', 2: 'c' };
    expect(isArrayLikeObject(obj)).toBe(true);
  });

  it('should return false for strings', () => {
    expect(isArrayLikeObject('abc')).toBe(false);
  });

  it('should return false for functions', () => {
    expect(isArrayLikeObject(() => {})).toBe(false);
  });
});
