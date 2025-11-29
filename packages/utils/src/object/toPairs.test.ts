import { describe, it, expect } from 'vitest';
import { toPairs } from './toPairs';

describe('toPairs', () => {
  it('should return own enumerable pairs', () => {
    function Foo() {
      this.a = 1;
      this.b = 2;
    }
    (Foo.prototype as any).c = 3;
    expect(toPairs(new (Foo as any)())).toEqual([
      ['a', 1],
      ['b', 2],
    ]);
  });
});
