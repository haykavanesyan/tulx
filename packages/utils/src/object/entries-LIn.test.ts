import { describe, it, expect } from 'vitest';

import { entriesIn } from './entries-LIn';

describe('entriesIn', () => {
  it('should return own and inherited entries', () => {
    function Foo() {
      this.a = 1;
      this.b = 2;
    }
    Foo.prototype.c = 3;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(entriesIn(new (Foo as any)())).toEqual([
      ['a', 1],
      ['b', 2],
      ['c', 3],
    ]);
  });
});
