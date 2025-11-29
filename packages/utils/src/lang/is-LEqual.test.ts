import { describe, it, expect } from 'vitest';
import { isEqual } from './isEqual';

describe('isEqual', () => {
  it('should return true for same references', () => {
    const object = { a: 1 };
    expect(isEqual(object, object)).toBe(true);
  });

  it('should return true for equal objects', () => {
    const object = { a: 1 };
    const other = { a: 1 };
    expect(isEqual(object, other)).toBe(true);
  });

  it('should return true for equal arrays', () => {
    expect(isEqual([1, 2, 3], [1, 2, 3])).toBe(true);
  });

  it('should return false for different values', () => {
    expect(isEqual({ a: 1 }, { a: 2 })).toBe(false);
    expect(isEqual([1, 2], [1, 2, 3])).toBe(false);
    expect(isEqual(null, undefined)).toBe(false);
  });

  it('should handle nested structures', () => {
    const obj1 = { a: { b: { c: 1 } } };
    const obj2 = { a: { b: { c: 1 } } };
    expect(isEqual(obj1, obj2)).toBe(true);
  });
});
