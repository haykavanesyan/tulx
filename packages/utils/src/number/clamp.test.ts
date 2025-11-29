import { describe, it, expect } from 'vitest';

import { clamp } from './clamp';

describe('clamp', () => {
  it('should clamp number below lower bound', () => {
    expect(clamp(-10, -5, 5)).toBe(-5);
  });

  it('should clamp number above upper bound', () => {
    expect(clamp(10, -5, 5)).toBe(5);
  });

  it('should return number within bounds', () => {
    expect(clamp(3, -5, 5)).toBe(3);
  });

  it('should handle negative bounds', () => {
    expect(clamp(-10, -5, -1)).toBe(-5);
    expect(clamp(0, -5, -1)).toBe(-1);
  });

  it('should handle equal bounds', () => {
    expect(clamp(5, 5, 5)).toBe(5);
    expect(clamp(3, 5, 5)).toBe(5);
    expect(clamp(7, 5, 5)).toBe(5);
  });

  it('should handle floating point numbers', () => {
    expect(clamp(3.5, 2, 4)).toBe(3.5);
    expect(clamp(1.5, 2, 4)).toBe(2);
    expect(clamp(4.5, 2, 4)).toBe(4);
  });

  it('should handle zero', () => {
    expect(clamp(0, -1, 1)).toBe(0);
    expect(clamp(-2, -1, 1)).toBe(-1);
    expect(clamp(2, -1, 1)).toBe(1);
  });
});
