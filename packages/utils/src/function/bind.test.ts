import { describe, it, expect } from 'vitest';
import { bind } from './bind';

describe('bind', () => {
  it('should bind function with this and partials', () => {
    const greet = function (
      this: { user: string },
      greeting: string,
      punctuation: string
    ) {
      return greeting + ' ' + this.user + punctuation;
    };
    const object = { user: 'fred' };
    const bound = bind(greet, object, 'hi');
    expect(bound('!')).toBe('hi fred!');
  });

  it('should prepend partials to arguments', () => {
    const add = (a: number, b: number, c: number) => a + b + c;
    const bound = bind(add, null, 1, 2);
    expect(bound(3)).toBe(6);
  });

  it('should preserve this context', () => {
    const obj = { value: 42 };
    const func = function (this: typeof obj) {
      return this.value;
    };
    const bound = bind(func, obj);
    expect(bound()).toBe(42);
  });
});
