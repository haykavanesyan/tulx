import { describe, it, expect, vi } from 'vitest';
import { dropWhile } from './drop-while';

describe('dropWhile', () => {
  it('should drop elements while predicate is true', () => {
    const users = [
      { user: 'barney', active: false },
      { user: 'fred', active: false },
      { user: 'pebbles', active: true },
    ];
    const result = dropWhile(users, (o) => !o.active);
    expect(result).toEqual([{ user: 'pebbles', active: true }]);
  });

  it('should return empty array when all elements match predicate', () => {
    // When all elements match, all are dropped, so empty array is returned
    expect(dropWhile([1, 2, 3], (n) => n < 10)).toEqual([]);
  });

  it('should return original array when no elements match predicate', () => {
    expect(dropWhile([1, 2, 3], (n) => n > 10)).toEqual([1, 2, 3]);
  });

  it('should handle empty array', () => {
    expect(dropWhile([], (n) => n < 5)).toEqual([]);
  });

  it('should pass index and array to predicate', () => {
    const predicate = vi.fn((value, index, array) => value < 3);
    dropWhile([1, 2, 3, 4], predicate);
    expect(predicate).toHaveBeenCalledWith(1, 0, [1, 2, 3, 4]);
    expect(predicate).toHaveBeenCalledWith(2, 1, [1, 2, 3, 4]);
    expect(predicate).toHaveBeenCalledWith(3, 2, [1, 2, 3, 4]);
  });

  it('should work with numbers', () => {
    expect(dropWhile([1, 2, 3, 4, 5], (n) => n < 3)).toEqual([3, 4, 5]);
  });

  it('should work with strings', () => {
    expect(dropWhile(['a', 'b', 'c'], (s) => s === 'a')).toEqual(['b', 'c']);
  });

  it('should not mutate original array', () => {
    const array = [1, 2, 3];
    dropWhile(array, (n) => n < 2);
    expect(array).toEqual([1, 2, 3]);
  });
});
