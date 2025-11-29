import { describe, it, expect } from 'vitest';
import { min } from './min';

describe('min', () => {
  it('should return minimum value from array', () => {
    expect(min([4, 2, 8, 6])).toBe(2);
  });

  it('should return undefined for empty array', () => {
    expect(min([])).toBeUndefined();
  });

  it('should handle single element', () => {
    expect(min([5])).toBe(5);
  });

  it('should handle negative numbers', () => {
    expect(min([-5, -2, -8])).toBe(-8);
  });

  it('should handle mixed positive and negative', () => {
    expect(min([-5, 2, -8, 6])).toBe(-8);
  });

  it('should handle floating point numbers', () => {
    expect(min([1.5, 2.5, 1.2])).toBe(1.2);
  });

  it('should handle duplicates', () => {
    expect(min([5, 5, 5])).toBe(5);
  });
});
