import { describe, it, expect } from 'vitest';

import { forInRight } from './for-LIn-LRight';

describe('forInRight', () => {
  it('should iterate in reverse order', () => {
    function Foo() {
      this.a = 1;
      this.b = 2;
    }
    Foo.prototype.c = 3;
    const keys: string[] = [];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    forInRight(new (Foo as any)(), (value, key) => keys.push(key));
    expect(keys.length).toBe(3);
  });
});
