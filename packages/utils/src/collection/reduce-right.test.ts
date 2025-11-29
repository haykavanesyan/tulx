import { describe, it, expect, vi } from 'vitest';
import { reduceRight } from './reduce-right';

describe('reduceRight', () => {
  it('should reduce from right to left', () => {
    const array = [
      [0, 1],
      [2, 3],
      [4, 5],
    ];
    const result = reduceRight(
      array,
      (flattened, other) => flattened.concat(other),
      [] as number[]
    );
    expect(result).toEqual([4, 5, 2, 3, 0, 1]);
  });

  it('should work with objects', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const result = reduceRight(obj, (acc, value) => acc + value, 0);
    expect(result).toBe(6);
  });

  it('should handle empty array', () => {
    expect(reduceRight([], (acc, n) => acc + n, 0)).toBe(0);
  });

  it('should pass index and collection to iteratee', () => {
    const iteratee = vi.fn((acc, value, index) => acc + value);
    reduceRight([1, 2], iteratee, 0);
    expect(iteratee).toHaveBeenCalledWith(0, 2, 1, [1, 2]);
    expect(iteratee).toHaveBeenCalledWith(2, 1, 0, [1, 2]);
  });
});
