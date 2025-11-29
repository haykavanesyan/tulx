import { describe, it, expect } from 'vitest';
import { partialRight } from './partial-right';

describe('partialRight', () => {
  it('should partially apply arguments from right', () => {
    function greet(greeting: string, name: string) {
      return greeting + ' ' + name;
    }
    const greetFred = partialRight(greet, 'fred');
    expect(greetFred('hi')).toBe('hi fred');
  });

  it('should append partials to arguments', () => {
    const add = (a: number, b: number, c: number) => a + b + c;
    const add3 = partialRight(add, 3);
    expect(add3(1, 2)).toBe(6);
  });

  it('should preserve this context', () => {
    const obj = {
      value: 10,
      add: function (this: typeof obj, a: number, b: number) {
        return this.value + a + b;
      },
    };
    const add5 = partialRight(obj.add, 5);
    expect(add5.call(obj, 3)).toBe(18);
  });
});
