import { describe, it, expect } from 'vitest';
import { unary } from './unary';

describe('unary', () => {
  it('should cap function to one argument', () => {
    const func = (a: number) => a * 2;
    const unaryFunc = unary(func);
    expect(unaryFunc(1, 2)).toBe(2); // Only uses first arg
  });

  it('should work with parseInt', () => {
    const unaryParseInt = unary(parseInt);
    expect(unaryParseInt('6', 10)).toBe(6);
  });

  it('should preserve this context', () => {
    const obj = {
      value: 10,
      add: function (this: typeof obj, a: number) {
        return this.value + a;
      },
    };
    const unaryAdd = unary(obj.add);
    expect(unaryAdd.call(obj, 5, 10)).toBe(15); // Only uses first arg (5)
  });
});
