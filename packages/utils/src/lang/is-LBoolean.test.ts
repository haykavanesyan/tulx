import { describe, it, expect } from 'vitest';
import { isBoolean } from './isBoolean';

describe('isBoolean', () => {
  it('should return true for boolean primitives', () => {
    expect(isBoolean(true)).toBe(true);
    expect(isBoolean(false)).toBe(true);
  });

  it('should return true for Boolean objects', () => {
    expect(isBoolean(new Boolean(true))).toBe(true);
    expect(isBoolean(new Boolean(false))).toBe(true);
  });

  it('should return false for non-booleans', () => {
    expect(isBoolean(null)).toBe(false);
    expect(isBoolean(undefined)).toBe(false);
    expect(isBoolean(0)).toBe(false);
    expect(isBoolean(1)).toBe(false);
    expect(isBoolean('true')).toBe(false);
  });
});
