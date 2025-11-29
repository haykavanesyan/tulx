import { describe, it, expect, vi } from 'vitest';
import { forInRight } from './forInRight';

describe('forInRight', () => {
  it('should iterate in reverse order', () => {
    function Foo() {
      this.a = 1;
      this.b = 2;
    }
    (Foo.prototype as any).c = 3;
    const keys: string[] = [];
    forInRight(new (Foo as any)(), (value, key) => keys.push(key));
    expect(keys.length).toBe(3);
  });
});
