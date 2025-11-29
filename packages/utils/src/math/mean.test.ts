import { describe, it, expect } from 'vitest';

import { mean } from './mean';

describe('mean', () => {
  it('should compute mean of values', () => {
    expect(mean([4, 2, 8, 6])).toBe(5);
  });

  it('should return NaN for empty array', () => {
    expect(mean([])).toBeNaN();
  });

  it('should handle single element', () => {
    expect(mean([5])).toBe(5);
  });

  it('should handle negative numbers', () => {
    expect(mean([-5, -2, -8])).toBe(-5);
  });

  it('should handle mixed positive and negative', () => {
    expect(mean([-5, 2, -8, 6])).toBe(-1.25);
  });

  it('should handle floating point numbers', () => {
    expect(mean([1.5, 2.5, 1.2])).toBeCloseTo(1.7333333333, 10);
  });

  it('should handle zero', () => {
    expect(mean([0, 0, 0])).toBe(0);
  });
});
