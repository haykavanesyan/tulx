import { describe, it, expect } from 'vitest';
import { multiply } from './multiply';

describe('multiply', () => {
  it('should multiply two numbers', () => {
    expect(multiply(6, 4)).toBe(24);
  });

  it('should handle negative numbers', () => {
    expect(multiply(-5, 3)).toBe(-15);
    expect(multiply(5, -3)).toBe(-15);
    expect(multiply(-5, -3)).toBe(15);
  });

  it('should handle zero', () => {
    expect(multiply(0, 5)).toBe(0);
    expect(multiply(5, 0)).toBe(0);
    expect(multiply(0, 0)).toBe(0);
  });

  it('should handle floating point numbers', () => {
    expect(multiply(2.5, 4)).toBe(10);
    expect(multiply(0.5, 0.5)).toBe(0.25);
  });

  it('should handle one', () => {
    expect(multiply(5, 1)).toBe(5);
    expect(multiply(1, 5)).toBe(5);
  });
});
