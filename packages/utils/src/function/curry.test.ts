import { describe, it, expect } from 'vitest';
import { curry } from './curry';

describe('curry', () => {
  it('should curry function', () => {
    const abc = (a: string, b: string, c: string) => [a, b, c];
    const curried = curry(abc);
    expect(curried('a')('b')('c')).toEqual(['a', 'b', 'c']);
  });

  it('should allow multiple arguments at once', () => {
    const abc = (a: string, b: string, c: string) => [a, b, c];
    const curried = curry(abc);
    expect(curried('a', 'b')('c')).toEqual(['a', 'b', 'c']);
    expect(curried('a', 'b', 'c')).toEqual(['a', 'b', 'c']);
  });

  it('should work with custom arity', () => {
    const add = (a: number, b: number) => a + b;
    const curried = curry(add, 2);
    expect(curried(1)(2)).toBe(3);
  });

  it('should preserve this context', () => {
    const obj = {
      value: 10,
      add: curry(function (this: typeof obj, a: number, b: number) {
        return this.value + a + b;
      }),
    };
    expect(obj.add(1)(2)).toBe(13);
  });
});
