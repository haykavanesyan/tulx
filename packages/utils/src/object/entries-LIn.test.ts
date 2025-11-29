import { describe, it, expect } from 'vitest';
import { entriesIn } from './entriesIn';

describe('entriesIn', () => {
  it('should return own and inherited entries', () => {
    function Foo() {
      this.a = 1;
      this.b = 2;
    }
    (Foo.prototype as any).c = 3;
    expect(entriesIn(new (Foo as any)())).toEqual([
      ['a', 1],
      ['b', 2],
      ['c', 3],
    ]);
  });
});
