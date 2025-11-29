import { describe, it, expect } from 'vitest';
import { curryRight } from './curry-right';

describe('curryRight', () => {
  it('should curry function from right', () => {
    const abc = (a: string, b: string, c: string) => [a, b, c];
    const curried = curryRight(abc);
    expect(curried('c')('b')('a')).toEqual(['a', 'b', 'c']);
  });

  it('should allow multiple arguments at once', () => {
    const abc = (a: string, b: string, c: string) => [a, b, c];
    const curried = curryRight(abc);
    // curryRight applies args from right: 'c','b' are stored, then 'a' is prepended
    // So when called with 'c','b', then 'a', the args become ['a', 'c', 'b']
    expect(curried('c', 'b')('a')).toEqual(['a', 'c', 'b']);
    expect(curried('c', 'b', 'a')).toEqual(['c', 'b', 'a']);
  });

  it('should work with custom arity', () => {
    const add = (a: number, b: number) => a + b;
    const curried = curryRight(add, 2);
    expect(curried(2)(1)).toBe(3);
  });
});
