import { describe, it, expect } from 'vitest';
import { valuesIn } from './valuesIn';

describe('valuesIn', () => {
  it('should return own and inherited values', () => {
    function Foo() {
      this.a = 1;
      this.b = 2;
    }
    (Foo.prototype as any).c = 3;
    expect(valuesIn(new (Foo as any)())).toEqual([1, 2, 3]);
  });
});
