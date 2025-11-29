import { describe, it, expect, vi } from 'vitest';
import { reduce } from './reduce';

describe('reduce', () => {
  it('should reduce array to value', () => {
    expect(reduce([1, 2], (sum, n) => sum + n, 0)).toBe(3);
  });

  it('should reduce object to value', () => {
    const result = reduce(
      { a: 1, b: 2, c: 1 },
      (acc, value, key) => {
        (acc[value] || (acc[value] = [])).push(key);
        return acc;
      },
      {} as Record<number, string[]>
    );
    expect(result).toEqual({ 1: ['a', 'c'], 2: ['b'] });
  });

  it('should pass index and collection to iteratee', () => {
    const iteratee = vi.fn((acc, value, index) => acc + value);
    reduce([1, 2], iteratee, 0);
    expect(iteratee).toHaveBeenCalledWith(0, 1, 0, [1, 2]);
    expect(iteratee).toHaveBeenCalledWith(1, 2, 1, [1, 2]);
  });

  it('should handle empty array', () => {
    expect(reduce([], (acc, n) => acc + n, 0)).toBe(0);
  });

  it('should handle empty object', () => {
    expect(reduce({}, (acc) => acc, 0)).toBe(0);
  });
});
