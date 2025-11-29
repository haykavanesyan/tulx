import { describe, it, expect } from 'vitest';

import { subtract } from './subtract';

describe('subtract', () => {
  it('should subtract two numbers', () => {
    expect(subtract(6, 4)).toBe(2);
  });

  it('should handle negative numbers', () => {
    expect(subtract(-5, 3)).toBe(-8);
    expect(subtract(5, -3)).toBe(8);
    expect(subtract(-5, -3)).toBe(-2);
  });

  it('should handle zero', () => {
    expect(subtract(5, 0)).toBe(5);
    expect(subtract(0, 5)).toBe(-5);
    expect(subtract(0, 0)).toBe(0);
  });

  it('should handle floating point numbers', () => {
    expect(subtract(5.5, 2.5)).toBe(3);
    expect(subtract(0.3, 0.1)).toBeCloseTo(0.2, 10);
  });
});
