import { describe, it, expect } from 'vitest';

import { floor } from './floor';

describe('floor', () => {
  it('should round down to integer', () => {
    expect(floor(4.006)).toBe(4);
  });

  it('should round down to specified precision', () => {
    expect(floor(0.046, 2)).toBe(0.04);
  });

  it('should round down with negative precision', () => {
    expect(floor(4060, -2)).toBe(4000);
  });

  it('should handle zero precision', () => {
    expect(floor(4.1)).toBe(4);
    expect(floor(4.9)).toBe(4);
  });

  it('should handle negative numbers', () => {
    expect(floor(-4.006)).toBe(-5);
    expect(floor(-4.1)).toBe(-5);
  });

  it('should handle integers', () => {
    expect(floor(5)).toBe(5);
    expect(floor(5, 2)).toBe(5);
  });

  it('should handle zero', () => {
    expect(floor(0)).toBe(0);
    expect(floor(0, 2)).toBe(0);
  });
});
