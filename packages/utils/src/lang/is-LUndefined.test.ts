import { describe, it, expect } from 'vitest';
import { isUndefined } from './isUndefined';

describe('isUndefined', () => {
  it('should return true for undefined', () => {
    expect(isUndefined(undefined)).toBe(true);
    expect(isUndefined(void 0)).toBe(true);
  });

  it('should return false for non-undefined values', () => {
    expect(isUndefined(null)).toBe(false);
    expect(isUndefined(0)).toBe(false);
    expect(isUndefined('')).toBe(false);
  });
});
