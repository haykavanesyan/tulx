import { describe, it, expect } from 'vitest';
import { divide } from './divide';

describe('divide', () => {
  it('should divide two numbers', () => {
    expect(divide(6, 4)).toBe(1.5);
  });

  it('should handle negative numbers', () => {
    expect(divide(-10, 2)).toBe(-5);
    expect(divide(10, -2)).toBe(-5);
    expect(divide(-10, -2)).toBe(5);
  });

  it('should handle zero dividend', () => {
    expect(divide(0, 5)).toBe(0);
  });

  it('should handle division by zero', () => {
    expect(divide(5, 0)).toBe(Infinity);
    expect(divide(-5, 0)).toBe(-Infinity);
  });

  it('should handle floating point numbers', () => {
    expect(divide(5.5, 2.5)).toBe(2.2);
    expect(divide(1, 3)).toBeCloseTo(0.3333333333, 10);
  });

  it('should handle one', () => {
    expect(divide(5, 1)).toBe(5);
  });
});
