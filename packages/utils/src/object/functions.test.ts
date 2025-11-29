import { describe, it, expect } from 'vitest';
import { functions } from './functions';

describe('functions', () => {
  it('should return own function property names', () => {
    function Foo() {
      this.a = () => 'a';
      this.b = () => 'b';
    }
    (Foo.prototype as any).c = () => 'c';
    expect(functions(new (Foo as any)())).toEqual(['a', 'b']);
  });
});
