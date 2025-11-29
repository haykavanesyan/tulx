import { describe, it, expect } from 'vitest';

import { create } from './create';

describe('create', () => {
  it('should create object with prototype', () => {
    function Foo(this: { a: number }) {
      this.a = 1;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result = create(new (Foo as any)(), {
      b: { value: 2, enumerable: true },
    });
    expect(result.b).toBe(2);
    expect(result instanceof Foo).toBe(true);
  });
});
