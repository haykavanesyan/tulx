import { describe, it, expect } from 'vitest';
import { transform } from './transform';

describe('transform', () => {
  it('should transform array', () => {
    const result = transform<number, number[]>(
      [2, 3, 4],
      (result, n) => {
        result.push((n *= n));
        return n % 2 === 0 ? result : false;
      },
      []
    );
    expect(result).toEqual([4, 9]);
  });

  it('should transform object', () => {
    const result = transform(
      { a: 1, b: 2, c: 1 },
      (result, value, key) => {
        (result[value] || (result[value] = [])).push(key);
        return result;
      },
      {} as Record<number, string[]>
    );
    expect(result).toEqual({ 1: ['a', 'c'], 2: ['b'] });
  });
});
