import { describe, it, expect } from 'vitest';
import { toPairsIn } from './toPairsIn';

describe('toPairsIn', () => {
  it('should return own and inherited pairs', () => {
    function Foo() {
      this.a = 1;
      this.b = 2;
    }
    (Foo.prototype as any).c = 3;
    expect(toPairsIn(new (Foo as any)())).toEqual([
      ['a', 1],
      ['b', 2],
      ['c', 3],
    ]);
  });
});
