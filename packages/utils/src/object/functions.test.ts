import { describe, it, expect } from 'vitest';

import { functions } from './functions';

describe('functions', () => {
  it('should return own function property names', () => {
    function Foo() {
      this.a = () => 'a';
      this.b = () => 'b';
    }
    Foo.prototype.c = () => 'c';
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(functions(new (Foo as any)())).toEqual(['a', 'b']);
  });
});
