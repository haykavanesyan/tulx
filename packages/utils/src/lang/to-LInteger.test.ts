import { describe, it, expect } from 'vitest';
import { toInteger } from './toInteger';

describe('toInteger', () => {
  it('should convert numbers to integers', () => {
    expect(toInteger(3.2)).toBe(3);
    expect(toInteger(-3.2)).toBe(-3);
  });

  it('should handle edge cases', () => {
    expect(toInteger(Number.MIN_VALUE)).toBe(0);
    // Infinity becomes 0 when truncated after conversion
    expect(toInteger(Infinity)).toBe(0);
    expect(toInteger(-Infinity)).toBe(0);
  });

  it('should convert strings to integers', () => {
    expect(toInteger('3.2')).toBe(3);
  });
});
