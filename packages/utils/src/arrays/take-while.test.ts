import { describe, it, expect, vi } from 'vitest';
import { takeWhile } from './take-while';

describe('takeWhile', () => {
  it('should take elements while predicate is true', () => {
    const users = [
      { user: 'barney', active: false },
      { user: 'fred', active: false },
      { user: 'pebbles', active: true },
    ];
    const result = takeWhile(users, (o) => !o.active);
    expect(result).toEqual([
      { user: 'barney', active: false },
      { user: 'fred', active: false },
    ]);
  });

  it('should return empty array when first element does not match', () => {
    expect(takeWhile([1, 2, 3], (n) => n > 10)).toEqual([]);
  });

  it('should return all elements when all match predicate', () => {
    expect(takeWhile([1, 2, 3], (n) => n < 10)).toEqual([1, 2, 3]);
  });

  it('should handle empty array', () => {
    expect(takeWhile([], (n) => n < 5)).toEqual([]);
  });

  it('should pass index and array to predicate', () => {
    const predicate = vi.fn((value, index, array) => value < 3);
    takeWhile([1, 2, 3, 4], predicate);
    expect(predicate).toHaveBeenCalledWith(1, 0, [1, 2, 3, 4]);
    expect(predicate).toHaveBeenCalledWith(2, 1, [1, 2, 3, 4]);
    expect(predicate).toHaveBeenCalledWith(3, 2, [1, 2, 3, 4]);
  });

  it('should not mutate original array', () => {
    const array = [1, 2, 3];
    takeWhile(array, (n) => n < 2);
    expect(array).toEqual([1, 2, 3]);
  });
});
