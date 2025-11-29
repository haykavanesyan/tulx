import { describe, it, expect } from 'vitest';
import { keys } from './keys';

describe('keys', () => {
  it('should return own enumerable keys', () => {
    function Foo() {
      this.a = 1;
      this.b = 2;
    }
    (Foo.prototype as any).c = 3;
    expect(keys(new (Foo as any)())).toEqual(['a', 'b']);
  });
});
