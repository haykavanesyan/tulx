import { describe, it, expect } from 'vitest';
import { max } from './max';

describe('max', () => {
  it('should return maximum value from array', () => {
    expect(max([4, 2, 8, 6])).toBe(8);
  });

  it('should return undefined for empty array', () => {
    expect(max([])).toBeUndefined();
  });

  it('should handle single element', () => {
    expect(max([5])).toBe(5);
  });

  it('should handle negative numbers', () => {
    expect(max([-5, -2, -8])).toBe(-2);
  });

  it('should handle mixed positive and negative', () => {
    expect(max([-5, 2, -8, 6])).toBe(6);
  });

  it('should handle floating point numbers', () => {
    expect(max([1.5, 2.5, 1.2])).toBe(2.5);
  });

  it('should handle duplicates', () => {
    expect(max([5, 5, 5])).toBe(5);
  });
});
