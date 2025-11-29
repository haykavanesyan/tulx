import { describe, it, expect } from 'vitest';
import { functionsIn } from './functionsIn';

describe('functionsIn', () => {
  it('should return own and inherited function property names', () => {
    function Foo() {
      this.a = () => 'a';
      this.b = () => 'b';
    }
    (Foo.prototype as any).c = () => 'c';
    expect(functionsIn(new (Foo as any)())).toEqual(['a', 'b', 'c']);
  });
});
