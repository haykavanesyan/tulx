import { describe, it, expect } from 'vitest';

import { toPlainObject } from './to-LPlain-LObject';

describe('toPlainObject', () => {
  it('should convert objects to plain objects', () => {
    function Foo(this: { b: number }) {
      this.b = 2;
    }
    Foo.prototype.c = 3;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result = toPlainObject(new (Foo as any)());
    expect(result).toEqual({ b: 2, c: 3 });
  });

  it('should return empty object for null/undefined', () => {
    expect(toPlainObject(null)).toEqual({});
    expect(toPlainObject(undefined)).toEqual({});
  });
});
