import { describe, it, expect } from 'vitest';
import { flow } from './flow';

describe('flow', () => {
  it('should compose functions left to right', () => {
    function square(n: number) {
      return n * n;
    }
    function add(a: number, b: number) {
      return a + b;
    }
    const addSquare = flow(add, square);
    expect(addSquare(1, 2)).toBe(9);
  });
});
