import { describe, it, expect } from 'vitest';
import { isNil } from './isNil';

describe('isNil', () => {
  it('should return true for null', () => {
    expect(isNil(null)).toBe(true);
  });

  it('should return true for undefined', () => {
    expect(isNil(undefined)).toBe(true);
    expect(isNil(void 0)).toBe(true);
  });

  it('should return false for non-nil values', () => {
    expect(isNil(NaN)).toBe(false);
    expect(isNil(0)).toBe(false);
    expect(isNil('')).toBe(false);
    expect(isNil(false)).toBe(false);
  });
});
