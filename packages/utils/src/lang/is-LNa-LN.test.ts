import { describe, it, expect } from 'vitest';

import { isNaN } from './is-LNa-LN';

describe('isNaN', () => {
  it('should return true for NaN', () => {
    expect(isNaN(NaN)).toBe(true);
    // Number(NaN) is NaN, but new Number(NaN) is a Number object, not NaN
    expect(isNaN(Number(NaN))).toBe(true);
  });

  it('should return true for undefined', () => {
    // Number(undefined) is NaN
    expect(isNaN(Number(undefined))).toBe(true);
  });

  it('should return false for null', () => {
    expect(isNaN(null)).toBe(false);
  });

  it('should return false for numbers', () => {
    expect(isNaN(3)).toBe(false);
    expect(isNaN(0)).toBe(false);
  });
});
