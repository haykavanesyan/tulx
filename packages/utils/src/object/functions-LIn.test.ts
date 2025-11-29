import { describe, it, expect } from 'vitest';

import { functionsIn } from './functions-LIn';

describe('functionsIn', () => {
  it('should return own and inherited function property names', () => {
    function Foo() {
      this.a = () => 'a';
      this.b = () => 'b';
    }
    Foo.prototype.c = () => 'c';
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(functionsIn(new (Foo as any)())).toEqual(['a', 'b', 'c']);
  });
});
