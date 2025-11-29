import { describe, it, expect } from 'vitest';
import { toNumber } from './toNumber';

describe('toNumber', () => {
  it('should convert numbers', () => {
    expect(toNumber(3.2)).toBe(3.2);
    expect(toNumber(Number.MIN_VALUE)).toBe(Number.MIN_VALUE);
    expect(toNumber(Infinity)).toBe(Infinity);
  });

  it('should convert strings to numbers', () => {
    expect(toNumber('3.2')).toBe(3.2);
    expect(toNumber('10')).toBe(10);
  });

  it('should handle edge cases', () => {
    expect(toNumber('')).toBe(0);
    expect(toNumber('abc')).toBeNaN();
  });
});
