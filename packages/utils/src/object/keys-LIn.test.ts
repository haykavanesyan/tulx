import { describe, it, expect } from 'vitest';
import { keysIn } from './keysIn';

describe('keysIn', () => {
  it('should return own and inherited keys', () => {
    function Foo() {
      this.a = 1;
      this.b = 2;
    }
    (Foo.prototype as any).c = 3;
    expect(keysIn(new (Foo as any)())).toEqual(['a', 'b', 'c']);
  });
});
