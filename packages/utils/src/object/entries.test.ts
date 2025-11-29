import { describe, it, expect } from 'vitest';
import { entries } from './entries';

describe('entries', () => {
  it('should return own enumerable entries', () => {
    function Foo() {
      this.a = 1;
      this.b = 2;
    }
    (Foo.prototype as any).c = 3;
    expect(entries(new (Foo as any)())).toEqual([
      ['a', 1],
      ['b', 2],
    ]);
  });
});
