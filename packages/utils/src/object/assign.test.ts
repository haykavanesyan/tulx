import { describe, it, expect } from 'vitest';

import { assign } from './assign';

describe('assign', () => {
  it('should assign own properties', () => {
    function Foo() {
      this.a = 1;
    }
    function Bar() {
      this.c = 3;
    }
    Foo.prototype.b = 2;
    Bar.prototype.d = 4;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result = assign({ a: 0 }, new (Foo as any)(), new (Bar as any)());
    expect(result).toEqual({ a: 1, c: 3 });
  });

  it('should assign multiple sources', () => {
    const result = assign({}, { a: 1 }, { b: 2 });
    expect(result).toEqual({ a: 1, b: 2 });
  });
});
