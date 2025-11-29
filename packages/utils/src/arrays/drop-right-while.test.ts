import { describe, it, expect, vi } from 'vitest';
import { dropRightWhile } from './drop-right-while';

describe('dropRightWhile', () => {
  it('should drop elements from end while predicate is true', () => {
    const users = [
      { user: 'barney', active: true },
      { user: 'fred', active: false },
      { user: 'pebbles', active: false },
    ];
    const result = dropRightWhile(users, (o) => !o.active);
    expect(result).toEqual([{ user: 'barney', active: true }]);
  });

  it('should return empty array when all elements match predicate', () => {
    // When all elements match, all are dropped, so empty array is returned
    expect(dropRightWhile([1, 2, 3], (n) => n < 10)).toEqual([]);
  });

  it('should return original array when no elements match predicate', () => {
    expect(dropRightWhile([1, 2, 3], (n) => n > 10)).toEqual([1, 2, 3]);
  });

  it('should handle empty array', () => {
    expect(dropRightWhile([], (n) => n < 5)).toEqual([]);
  });

  it('should pass index and array to predicate', () => {
    const predicate = vi.fn((value, index, array) => value < 3);
    dropRightWhile([1, 2, 3, 4], predicate);
    // Function iterates from end, so first call is with last element (index 3)
    expect(predicate).toHaveBeenCalledWith(4, 3, [1, 2, 3, 4]);
    // Stops when predicate returns false (4 < 3 is false), so no more calls
    expect(predicate).toHaveBeenCalledTimes(1);
  });

  it('should not mutate original array', () => {
    const array = [1, 2, 3];
    dropRightWhile(array, (n) => n > 2);
    expect(array).toEqual([1, 2, 3]);
  });
});
