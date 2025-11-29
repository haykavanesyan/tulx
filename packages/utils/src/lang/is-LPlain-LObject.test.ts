import { describe, it, expect } from 'vitest';
import { isPlainObject } from './isPlainObject';

describe('isPlainObject', () => {
  it('should return true for plain objects', () => {
    expect(isPlainObject({ x: 0, y: 0 })).toBe(true);
    expect(isPlainObject(Object.create(null))).toBe(true);
  });

  it('should return false for arrays', () => {
    expect(isPlainObject([1, 2, 3])).toBe(false);
  });

  it('should return false for class instances', () => {
    function Foo() {
      this.a = 1;
    }
    expect(isPlainObject(new (Foo as any)())).toBe(false);
  });

  it('should return false for non-objects', () => {
    expect(isPlainObject(null)).toBe(false);
    expect(isPlainObject(1)).toBe(false);
  });
});
