import { describe, it, expect } from 'vitest';

import { toPairsIn } from './to-LPairs-LIn';

describe('toPairsIn', () => {
  it('should return own and inherited pairs', () => {
    function Foo() {
      this.a = 1;
      this.b = 2;
    }
    Foo.prototype.c = 3;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(toPairsIn(new (Foo as any)())).toEqual([
      ['a', 1],
      ['b', 2],
      ['c', 3],
    ]);
  });
});
