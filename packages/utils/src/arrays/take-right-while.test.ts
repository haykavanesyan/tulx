import { describe, it, expect, vi } from 'vitest';

import { takeRightWhile } from './take-right-while';

describe('takeRightWhile', () => {
  it('should take elements from end while predicate is true', () => {
    const users = [
      { user: 'barney', active: true },
      { user: 'fred', active: false },
      { user: 'pebbles', active: false },
    ];
    const result = takeRightWhile(users, (o) => !o.active);
    expect(result).toEqual([
      { user: 'fred', active: false },
      { user: 'pebbles', active: false },
    ]);
  });

  it('should return empty array when last element does not match', () => {
    expect(takeRightWhile([1, 2, 3], (n) => n > 10)).toEqual([]);
  });

  it('should return all elements when all match predicate', () => {
    // When all elements match, all are taken, so entire array is returned
    expect(takeRightWhile([1, 2, 3], (n) => n < 10)).toEqual([1, 2, 3]);
  });

  it('should handle empty array', () => {
    expect(takeRightWhile([], (n) => n < 5)).toEqual([]);
  });

  it('should pass index and array to predicate', () => {
    const predicate = vi.fn((value, _index, _array) => value < 3);
    takeRightWhile([1, 2, 3, 4], predicate);
    // Function iterates from end, so first call is with last element (index 3)
    expect(predicate).toHaveBeenCalledWith(4, 3, [1, 2, 3, 4]);
    // Stops when predicate returns false (4 < 3 is false), so no more calls
    expect(predicate).toHaveBeenCalledTimes(1);
  });

  it('should not mutate original array', () => {
    const array = [1, 2, 3];
    takeRightWhile(array, (n) => n > 2);
    expect(array).toEqual([1, 2, 3]);
  });
});
