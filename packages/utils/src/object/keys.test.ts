import { describe, it, expect } from 'vitest';

import { keys } from './keys';

describe('keys', () => {
  it('should return own enumerable keys', () => {
    function Foo() {
      this.a = 1;
      this.b = 2;
    }
    Foo.prototype.c = 3;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(keys(new (Foo as any)())).toEqual(['a', 'b']);
  });
});
