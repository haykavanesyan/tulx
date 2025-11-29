import { describe, it, expect } from 'vitest';
import { eq } from './eq';

describe('eq', () => {
  it('should return true for same values', () => {
    const object = { a: 1 };
    expect(eq(object, object)).toBe(true);
    expect(eq('a', 'a')).toBe(true);
    expect(eq(1, 1)).toBe(true);
  });

  it('should return true for NaN', () => {
    expect(eq(NaN, NaN)).toBe(true);
  });

  it('should return false for different values', () => {
    const object = { a: 1 };
    const other = { a: 1 };
    expect(eq(object, other)).toBe(false);
    expect(eq('a', Object('a'))).toBe(false);
    expect(eq(1, 2)).toBe(false);
  });
});
