import { describe, it, expect } from 'vitest';

import { valuesIn } from './values-LIn';

describe('valuesIn', () => {
  it('should return own and inherited values', () => {
    function Foo() {
      this.a = 1;
      this.b = 2;
    }
    Foo.prototype.c = 3;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(valuesIn(new (Foo as any)())).toEqual([1, 2, 3]);
  });
});
