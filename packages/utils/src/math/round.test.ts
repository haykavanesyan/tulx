import { describe, it, expect } from 'vitest';

import { round } from './round';

describe('round', () => {
  it('should round to integer', () => {
    expect(round(4.006)).toBe(4);
  });

  it('should round to specified precision', () => {
    expect(round(4.006, 2)).toBe(4.01);
  });

  it('should round with negative precision', () => {
    expect(round(4060, -2)).toBe(4100);
  });

  it('should handle zero precision', () => {
    expect(round(4.1)).toBe(4);
    expect(round(4.5)).toBe(5);
    expect(round(4.9)).toBe(5);
  });

  it('should handle negative numbers', () => {
    expect(round(-4.006)).toBe(-4);
    expect(round(-4.5)).toBe(-4);
  });

  it('should handle integers', () => {
    expect(round(5)).toBe(5);
    expect(round(5, 2)).toBe(5);
  });

  it('should handle zero', () => {
    expect(round(0)).toBe(0);
    expect(round(0, 2)).toBe(0);
  });
});
