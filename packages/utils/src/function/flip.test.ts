import { describe, it, expect } from 'vitest';

import { flip } from './flip';

describe('flip', () => {
  it('should flip function arguments', () => {
    const flipped = flip((...args: unknown[]) => args);
    expect(flipped('a', 'b', 'c', 'd')).toEqual(['d', 'c', 'b', 'a']);
  });

  it('should work with two arguments', () => {
    const subtract = (a: number, b: number) => a - b;
    const flipped = flip(subtract);
    expect(flipped(5, 3)).toBe(-2);
  });

  it('should preserve this context', () => {
    const obj = {
      value: 10,
      subtract(this: typeof obj, a: number, b: number) {
        return this.value - a - b;
      },
    };
    const flipped = flip(obj.subtract);
    expect(flipped.call(obj, 3, 2)).toBe(5);
  });
});
