import { describe, it, expect, vi } from 'vitest';
import { forOwn } from './forOwn';

describe('forOwn', () => {
  it('should iterate over own properties only', () => {
    function Foo() {
      this.a = 1;
      this.b = 2;
    }
    (Foo.prototype as any).c = 3;
    const iteratee = vi.fn();
    forOwn(new (Foo as any)(), iteratee);
    expect(iteratee).toHaveBeenCalledTimes(2);
  });
});
