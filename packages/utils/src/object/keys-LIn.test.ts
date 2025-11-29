import { describe, it, expect } from 'vitest';

import { keysIn } from './keys-LIn';

describe('keysIn', () => {
  it('should return own and inherited keys', () => {
    function Foo() {
      this.a = 1;
      this.b = 2;
    }
    Foo.prototype.c = 3;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(keysIn(new (Foo as any)())).toEqual(['a', 'b', 'c']);
  });
});
