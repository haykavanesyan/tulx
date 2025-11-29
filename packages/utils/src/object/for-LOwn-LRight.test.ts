import { describe, it, expect, vi } from 'vitest';
import { forOwnRight } from './forOwnRight';

describe('forOwnRight', () => {
  it('should iterate in reverse order over own properties', () => {
    function Foo() {
      this.a = 1;
      this.b = 2;
    }
    (Foo.prototype as any).c = 3;
    const keys: string[] = [];
    forOwnRight(new (Foo as any)(), (value, key) => keys.push(key));
    expect(keys.length).toBe(2);
  });
});
