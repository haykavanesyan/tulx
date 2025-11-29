import { describe, it, expect } from 'vitest';
import { includes } from './includes';

describe('includes', () => {
  it('should return true when value is in array', () => {
    expect(includes([1, 2, 3], 1)).toBe(true);
  });

  it('should return false when value is not in array', () => {
    expect(includes([1, 2, 3], 1, 2)).toBe(false);
  });

  it('should work with objects', () => {
    expect(includes({ a: 1, b: 2 }, 1)).toBe(true);
    expect(includes({ a: 1, b: 2 }, 3)).toBe(false);
  });

  it('should work with strings', () => {
    expect(includes('abcd', 'bc')).toBe(true);
    expect(includes('abcd', 'xy')).toBe(false);
  });

  it('should handle fromIndex', () => {
    expect(includes([1, 2, 3], 1, 1)).toBe(false);
  });

  it('should handle negative fromIndex', () => {
    expect(includes([1, 2, 3], 2, -2)).toBe(true);
  });

  it('should return false for empty array', () => {
    expect(includes([], 1)).toBe(false);
  });
});
