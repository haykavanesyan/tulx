import { describe, it, expect, vi } from 'vitest';

import { forOwn } from './for-LOwn';

describe('forOwn', () => {
  it('should iterate over own properties only', () => {
    function Foo() {
      this.a = 1;
      this.b = 2;
    }
    Foo.prototype.c = 3;
    const iteratee = vi.fn();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    forOwn(new (Foo as any)(), iteratee);
    expect(iteratee).toHaveBeenCalledTimes(2);
  });
});
