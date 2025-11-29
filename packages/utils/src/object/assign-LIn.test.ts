import { describe, it, expect } from 'vitest';
import { assignIn } from './assignIn';

describe('assignIn', () => {
  it('should assign own and inherited properties', () => {
    function Foo() {
      this.a = 1;
    }
    function Bar() {
      this.c = 3;
    }
    (Foo.prototype as any).b = 2;
    (Bar.prototype as any).d = 4;
    const result = assignIn({ a: 0 }, new (Foo as any)(), new (Bar as any)());
    expect(result).toEqual({ a: 1, b: 2, c: 3, d: 4 });
  });
});
