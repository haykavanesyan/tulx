import { describe, it, expect } from 'vitest';
import { isArray } from './isArray';

describe('isArray', () => {
  it('should return true for arrays', () => {
    expect(isArray([1, 2, 3])).toBe(true);
    expect(isArray([])).toBe(true);
  });

  it('should return false for non-arrays', () => {
    expect(isArray('abc')).toBe(false);
    expect(isArray(1)).toBe(false);
    expect(isArray(null)).toBe(false);
    expect(isArray(undefined)).toBe(false);
    expect(isArray({})).toBe(false);
    expect(isArray(() => {})).toBe(false);
  });
});
