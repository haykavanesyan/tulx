import { describe, it, expect } from 'vitest';
import { rearg } from './rearg';

describe('rearg', () => {
  it('should rearrange function arguments', () => {
    const rearged = rearg(
      (a: string, b: string, c: string) => [a, b, c],
      [2, 0, 1]
    );
    expect(rearged('b', 'c', 'a')).toEqual(['a', 'b', 'c']);
  });

  it('should work with two arguments', () => {
    const subtract = (a: number, b: number) => a - b;
    const rearged = rearg(subtract, [1, 0]);
    expect(rearged(5, 3)).toBe(-2);
  });

  it('should handle partial indexes', () => {
    const func = (a: string, b: string, c: string) => [a, b, c];
    const rearged = rearg(func, [1, 0]);
    expect(rearged('a', 'b', 'c')).toEqual(['b', 'a', undefined]);
  });

  it('should preserve this context', () => {
    const obj = {
      value: 10,
      subtract: function (this: typeof obj, a: number, b: number) {
        return this.value - a - b;
      },
    };
    const rearged = rearg(obj.subtract, [1, 0]);
    expect(rearged.call(obj, 3, 2)).toBe(5);
  });
});
