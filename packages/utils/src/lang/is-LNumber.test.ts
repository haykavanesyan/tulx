import { describe, it, expect } from 'vitest';
import { isNumber } from './isNumber';

describe('isNumber', () => {
  it('should return true for number primitives', () => {
    expect(isNumber(3)).toBe(true);
    expect(isNumber(Number.MIN_VALUE)).toBe(true);
    expect(isNumber(Infinity)).toBe(true);
    expect(isNumber(-Infinity)).toBe(true);
    expect(isNumber(NaN)).toBe(true);
  });

  it('should return true for Number objects', () => {
    expect(isNumber(new Number(3))).toBe(true);
  });

  it('should return false for non-numbers', () => {
    expect(isNumber('3')).toBe(false);
    expect(isNumber(null)).toBe(false);
    expect(isNumber(undefined)).toBe(false);
  });
});
