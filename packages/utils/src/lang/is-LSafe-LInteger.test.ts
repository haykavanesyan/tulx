import { describe, it, expect } from 'vitest';
import { isSafeInteger } from './isSafeInteger';

describe('isSafeInteger', () => {
  it('should return true for safe integers', () => {
    expect(isSafeInteger(3)).toBe(true);
    expect(isSafeInteger(Number.MAX_SAFE_INTEGER)).toBe(true);
    expect(isSafeInteger(Number.MIN_SAFE_INTEGER)).toBe(true);
  });

  it('should return false for non-safe integers', () => {
    expect(isSafeInteger(Number.MIN_VALUE)).toBe(false);
    expect(isSafeInteger(Infinity)).toBe(false);
    expect(isSafeInteger(3.2)).toBe(false);
    expect(isSafeInteger('3')).toBe(false);
  });
});
