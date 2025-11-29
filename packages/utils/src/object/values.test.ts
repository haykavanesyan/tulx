import { describe, it, expect } from 'vitest';
import { values } from './values';

describe('values', () => {
  it('should return own enumerable values', () => {
    function Foo() {
      this.a = 1;
      this.b = 2;
    }
    (Foo.prototype as any).c = 3;
    expect(values(new (Foo as any)())).toEqual([1, 2]);
  });
});
