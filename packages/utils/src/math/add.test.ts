import { describe, it, expect } from 'vitest';

import { add } from './add';

describe('add', () => {
  it('should add two numbers', () => {
    expect(add(6, 4)).toBe(10);
  });

  it('should handle negative numbers', () => {
    expect(add(-5, 3)).toBe(-2);
    expect(add(5, -3)).toBe(2);
    expect(add(-5, -3)).toBe(-8);
  });

  it('should handle zero', () => {
    expect(add(0, 5)).toBe(5);
    expect(add(5, 0)).toBe(5);
    expect(add(0, 0)).toBe(0);
  });

  it('should handle floating point numbers', () => {
    expect(add(1.5, 2.5)).toBe(4);
    expect(add(0.1, 0.2)).toBeCloseTo(0.3, 10);
  });
});
