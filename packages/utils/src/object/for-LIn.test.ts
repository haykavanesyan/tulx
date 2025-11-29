import { describe, it, expect, vi } from 'vitest';
import { forIn } from './forIn';

describe('forIn', () => {
  it('should iterate over own and inherited properties', () => {
    function Foo() {
      this.a = 1;
      this.b = 2;
    }
    (Foo.prototype as any).c = 3;
    const iteratee = vi.fn();
    forIn(new (Foo as any)(), iteratee);
    expect(iteratee).toHaveBeenCalledTimes(3);
  });
});
