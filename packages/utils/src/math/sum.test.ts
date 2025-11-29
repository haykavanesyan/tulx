import { describe, it, expect } from 'vitest';

import { sum } from './sum';

describe('sum', () => {
  it('should sum values in array', () => {
    expect(sum([4, 2, 8, 6])).toBe(20);
  });

  it('should return 0 for empty array', () => {
    expect(sum([])).toBe(0);
  });

  it('should handle single element', () => {
    expect(sum([5])).toBe(5);
  });

  it('should handle negative numbers', () => {
    expect(sum([-5, -2, -8])).toBe(-15);
  });

  it('should handle mixed positive and negative', () => {
    expect(sum([-5, 2, -8, 6])).toBe(-5);
  });

  it('should handle floating point numbers', () => {
    expect(sum([1.5, 2.5, 1.2])).toBeCloseTo(5.2, 10);
  });

  it('should handle zero', () => {
    expect(sum([0, 0, 0])).toBe(0);
  });
});
