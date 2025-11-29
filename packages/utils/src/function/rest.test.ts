import { describe, it, expect } from 'vitest';

import { rest } from './rest';

describe('rest', () => {
  it('should create function with rest parameter', () => {
    const say = rest(
      (what: string, names: string[]) => `${what} ${names.join(', ')}`
    );
    expect(say('hello', 'fred', 'barney', 'pebbles')).toBe(
      'hello fred, barney, pebbles'
    );
  });

  it('should use default start position', () => {
    const func = (a: string, b: string[]) => [a, ...b];
    const restFunc = rest(func);
    expect(restFunc('a', 'b', 'c')).toEqual(['a', 'b', 'c']);
  });

  it('should use custom start position', () => {
    const func = (a: string, b: string, c: string[]) => [a, b, ...c];
    const restFunc = rest(func, 2);
    expect(restFunc('a', 'b', 'c', 'd')).toEqual(['a', 'b', 'c', 'd']);
  });

  it('should preserve this context', () => {
    const obj = {
      value: 10,
      add: rest(function (this: typeof obj, a: number, rest: number[]) {
        return this.value + a + rest.reduce((sum, n) => sum + n, 0);
      }),
    };
    expect(obj.add(1, 2, 3)).toBe(16);
  });
});
