import { describe, it, expect } from 'vitest';
import { ary } from './ary';

describe('ary', () => {
  it('should cap function to n arguments', () => {
    const func = (a: number, b: number) => a + b;
    const capped = ary(func, 2);
    expect(capped(1, 2, 3)).toBe(3); // Only uses first 2 args
  });

  it('should work with parseInt', () => {
    const capped = ary(parseInt, 1);
    expect(capped('6', 10)).toBe(6);
  });

  it('should handle n = 0', () => {
    const func = (a: number) => a;
    const capped = ary(func, 0);
    expect(capped(42)).toBeUndefined();
  });

  it('should preserve this context', () => {
    const obj = {
      value: 10,
      add: function (this: typeof obj, a: number) {
        return this.value + a;
      },
    };
    const capped = ary(obj.add, 1);
    expect(capped.call(obj, 5, 10)).toBe(15);
  });
});
