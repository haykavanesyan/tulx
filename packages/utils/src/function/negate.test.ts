import { describe, it, expect } from 'vitest';

import { negate } from './negate';

describe('negate', () => {
  it('should negate predicate result', () => {
    const isEven = (n: number) => n % 2 === 0;
    const isOdd = negate(isEven);
    expect(isOdd(1)).toBe(true);
    expect(isOdd(2)).toBe(false);
  });

  it('should pass arguments to predicate', () => {
    const greaterThan = (n: number, threshold: number) => n > threshold;
    const lessThanOrEqual = negate(greaterThan);
    expect(lessThanOrEqual(5, 10)).toBe(true);
    expect(lessThanOrEqual(15, 10)).toBe(false);
  });

  it('should preserve this context', () => {
    const obj = {
      threshold: 10,
      isGreater(this: typeof obj, n: number) {
        return n > this.threshold;
      },
    };
    const isLessOrEqual = negate(obj.isGreater);
    expect(isLessOrEqual.call(obj, 5)).toBe(true);
    expect(isLessOrEqual.call(obj, 15)).toBe(false);
  });
});
