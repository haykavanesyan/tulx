import { describe, it, expect } from 'vitest';

import { partial } from './partial';

describe('partial', () => {
  it('should partially apply arguments', () => {
    function greet(greeting: string, name: string) {
      return `${greeting} ${name}`;
    }
    const sayHelloTo = partial(greet, 'hello');
    expect(sayHelloTo('fred')).toBe('hello fred');
  });

  it('should prepend partials to arguments', () => {
    const add = (a: number, b: number, c: number) => a + b + c;
    const add1And2 = partial(add, 1, 2);
    expect(add1And2(3)).toBe(6);
  });

  it('should preserve this context', () => {
    const obj = {
      value: 10,
      add(this: typeof obj, a: number, b: number) {
        return this.value + a + b;
      },
    };
    const add5 = partial(obj.add, 5);
    expect(add5.call(obj, 3)).toBe(18);
  });
});
