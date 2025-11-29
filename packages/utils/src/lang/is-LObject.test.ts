import { describe, it, expect } from 'vitest';
import { isObject } from './isObject';

describe('isObject', () => {
  it('should return true for objects', () => {
    expect(isObject({})).toBe(true);
    expect(isObject([1, 2, 3])).toBe(true);
    expect(isObject(() => {})).toBe(true);
  });

  it('should return false for null', () => {
    expect(isObject(null)).toBe(false);
  });

  it('should return false for primitives', () => {
    expect(isObject(1)).toBe(false);
    expect(isObject('abc')).toBe(false);
    expect(isObject(true)).toBe(false);
  });
});
