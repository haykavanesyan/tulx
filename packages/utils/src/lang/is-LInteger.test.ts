import { describe, it, expect } from 'vitest';

import { isInteger } from './is-LInteger';

describe('isInteger', () => {
  it('should return true for integers', () => {
    expect(isInteger(3)).toBe(true);
    expect(isInteger(-3)).toBe(true);
    expect(isInteger(0)).toBe(true);
  });

  it('should return false for non-integers', () => {
    expect(isInteger(Number.MIN_VALUE)).toBe(false);
    expect(isInteger(Infinity)).toBe(false);
    expect(isInteger(3.2)).toBe(false);
    expect(isInteger('3')).toBe(false);
  });
});
