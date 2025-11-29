import { describe, it, expect } from 'vitest';

import { forOwnRight } from './for-LOwn-LRight';

describe('forOwnRight', () => {
  it('should iterate in reverse order over own properties', () => {
    function Foo() {
      this.a = 1;
      this.b = 2;
    }
    Foo.prototype.c = 3;
    const keys: string[] = [];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    forOwnRight(new (Foo as any)(), (value, key) => keys.push(key));
    expect(keys.length).toBe(2);
  });
});
