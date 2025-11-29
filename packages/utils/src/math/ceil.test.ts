import { describe, it, expect } from 'vitest';

import { ceil } from './ceil';

describe('ceil', () => {
  it('should round up to integer', () => {
    expect(ceil(4.006)).toBe(5);
  });

  it('should round up to specified precision', () => {
    expect(ceil(6.004, 2)).toBe(6.01);
  });

  it('should round up with negative precision', () => {
    expect(ceil(6040, -2)).toBe(6100);
  });

  it('should handle zero precision', () => {
    expect(ceil(4.1)).toBe(5);
    expect(ceil(4.9)).toBe(5);
  });

  it('should handle negative numbers', () => {
    expect(ceil(-4.006)).toBe(-4);
    expect(ceil(-4.1)).toBe(-4);
  });

  it('should handle integers', () => {
    expect(ceil(5)).toBe(5);
    expect(ceil(5, 2)).toBe(5);
  });

  it('should handle zero', () => {
    expect(ceil(0)).toBe(0);
    expect(ceil(0, 2)).toBe(0);
  });
});
