import { describe, it, expect, vi } from 'vitest';

import { forIn } from './for-LIn';

describe('forIn', () => {
  it('should iterate over own and inherited properties', () => {
    function Foo() {
      this.a = 1;
      this.b = 2;
    }
    Foo.prototype.c = 3;
    const iteratee = vi.fn();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    forIn(new (Foo as any)(), iteratee);
    expect(iteratee).toHaveBeenCalledTimes(3);
  });
});
