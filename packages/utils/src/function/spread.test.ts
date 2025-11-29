import { describe, it, expect } from 'vitest';

import { spread } from './spread';

describe('spread', () => {
  it('should spread array arguments', () => {
    const say = spread((who: string, what: string) => `${who} says ${what}`);
    expect(say(['fred', 'hello'])).toBe('fred says hello');
  });

  it('should use default start position', () => {
    const add = (a: number, b: number) => a + b;
    const spreadAdd = spread(add);
    expect(spreadAdd([1, 2])).toBe(3);
  });

  it('should use custom start position', () => {
    const add = (a: number, b: number) => a + b;
    const spreadAdd = spread(add, 1);
    expect(spreadAdd([0, 1, 2])).toBe(3);
  });

  it('should preserve this context', () => {
    const obj = {
      value: 10,
      add: spread(function (this: typeof obj, a: number, b: number) {
        return this.value + a + b;
      }),
    };
    expect(obj.add([1, 2])).toBe(13);
  });
});
