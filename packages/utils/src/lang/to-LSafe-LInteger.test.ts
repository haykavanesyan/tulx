import { describe, it, expect } from 'vitest';

import { toSafeInteger } from './to-LSafe-LInteger';

describe('toSafeInteger', () => {
  it('should convert numbers to safe integers', () => {
    expect(toSafeInteger(3.2)).toBe(3);
    expect(toSafeInteger(-3.2)).toBe(-3);
  });

  it('should clamp to MAX_SAFE_INTEGER', () => {
    expect(toSafeInteger(Infinity)).toBe(Number.MAX_SAFE_INTEGER);
    expect(toSafeInteger(-Infinity)).toBe(Number.MIN_SAFE_INTEGER);
  });

  it('should convert strings to safe integers', () => {
    expect(toSafeInteger('3.2')).toBe(3);
  });
});
