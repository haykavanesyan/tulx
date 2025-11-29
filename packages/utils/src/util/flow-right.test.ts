import { describe, it, expect } from 'vitest';

import { flowRight } from './flow-LRight';

describe('flowRight', () => {
  it('should compose functions right to left', () => {
    function square(n: number) {
      return n * n;
    }
    function add(a: number, b: number) {
      return a + b;
    }
    const addSquare = flowRight(square, add);
    expect(addSquare(1, 2)).toBe(9);
  });
});
