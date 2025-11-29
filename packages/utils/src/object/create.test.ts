import { describe, it, expect } from 'vitest';
import { create } from './create';

describe('create', () => {
  it('should create object with prototype', () => {
    function Foo() {
      this.a = 1;
    }
    const result = create(new (Foo as any)(), {
      b: { value: 2, enumerable: true },
    });
    expect(result.b).toBe(2);
    expect(result instanceof Foo).toBe(true);
  });
});
