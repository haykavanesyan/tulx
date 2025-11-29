import { describe, it, expect } from 'vitest';

import { overArgs } from './over-args';

describe('overArgs', () => {
  it('should transform arguments with transforms', () => {
    function doubled(n: number) {
      return n * 2;
    }
    function square(n: number) {
      return n * n;
    }
    const func = overArgs((x: number, y: number) => [x, y], [square, doubled]);
    expect(func(9, 3)).toEqual([81, 6]);
  });

  it('should handle fewer transforms than arguments', () => {
    const func = overArgs(
      (x: number, y: number) => [x, y],
      [(n: number) => n * 2]
    );
    expect(func(5, 10)).toEqual([10, 10]);
  });

  it('should handle more transforms than arguments', () => {
    const func = overArgs(
      (x: number) => x,
      [(n: number) => n * 2, (n: number) => n * 3]
    );
    expect(func(5)).toBe(10);
  });

  it('should preserve this context', () => {
    const obj = {
      value: 10,
      add: overArgs(
        function (this: typeof obj, x: number, y: number) {
          return this.value + x + y;
        },
        [(n: number) => n * 2, (n: number) => n * 3]
      ),
    };
    expect(obj.add(1, 2)).toBe(18);
  });
});
