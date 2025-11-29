import { describe, it, expect } from 'vitest';

import { isPlainObject } from './is-LPlain-LObject';

describe('isPlainObject', () => {
  it('should return true for plain objects', () => {
    expect(isPlainObject({ x: 0, y: 0 })).toBe(true);
    expect(isPlainObject(Object.create(null))).toBe(true);
  });

  it('should return false for arrays', () => {
    expect(isPlainObject([1, 2, 3])).toBe(false);
  });

  it('should return false for class instances', () => {
    function Foo(this: { a: number }) {
      this.a = 1;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(isPlainObject(new (Foo as any)())).toBe(false);
  });

  it('should return false for non-objects', () => {
    expect(isPlainObject(null)).toBe(false);
    expect(isPlainObject(1)).toBe(false);
  });
});
