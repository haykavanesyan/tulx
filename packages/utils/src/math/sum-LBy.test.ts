import { describe, it, expect } from 'vitest';
import { sumBy } from './sumBy';

describe('sumBy', () => {
  it('should sum values using iteratee function', () => {
    const objects = [{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }];
    expect(sumBy(objects, (o) => o.n)).toBe(20);
  });

  it('should sum values using property path', () => {
    const objects = [{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }];
    expect(sumBy(objects, 'n')).toBe(20);
  });

  it('should return 0 for empty array', () => {
    expect(sumBy([], (o) => o.n)).toBe(0);
  });

  it('should handle single element', () => {
    const objects = [{ n: 5 }];
    expect(sumBy(objects, (o) => o.n)).toBe(5);
  });

  it('should handle negative numbers', () => {
    const objects = [{ n: -5 }, { n: -2 }, { n: -8 }];
    expect(sumBy(objects, (o) => o.n)).toBe(-15);
  });

  it('should handle zero', () => {
    const objects = [{ n: 0 }, { n: 0 }, { n: 0 }];
    expect(sumBy(objects, (o) => o.n)).toBe(0);
  });
});
