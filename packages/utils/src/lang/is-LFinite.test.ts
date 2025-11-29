import { describe, it, expect } from 'vitest';

import { isFinite } from './is-LFinite';

describe('isFinite', () => {
  it('should return true for finite numbers', () => {
    expect(isFinite(3)).toBe(true);
    expect(isFinite(Number.MIN_VALUE)).toBe(true);
    expect(isFinite(-3)).toBe(true);
  });

  it('should return false for infinite numbers', () => {
    expect(isFinite(Infinity)).toBe(false);
    expect(isFinite(-Infinity)).toBe(false);
  });

  it('should return false for non-numbers', () => {
    expect(isFinite('3')).toBe(false);
    expect(isFinite(NaN)).toBe(false);
  });
});
