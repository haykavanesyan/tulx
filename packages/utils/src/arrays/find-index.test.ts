import { describe, it, expect, vi } from 'vitest';

import { findIndex } from './find-index';

describe('findIndex', () => {
  it('should find index of first matching element', () => {
    const users = [
      { user: 'barney', active: false },
      { user: 'fred', active: false },
      { user: 'pebbles', active: true },
    ];
    expect(findIndex(users, (o) => o.user === 'barney')).toBe(0);
    expect(findIndex(users, (o) => o.active)).toBe(2);
  });

  it('should return -1 when no element matches', () => {
    expect(findIndex([1, 2, 3], (n) => n > 10)).toBe(-1);
  });

  it('should start search from fromIndex', () => {
    expect(findIndex([1, 2, 3, 2], (n) => n === 2, 2)).toBe(3);
  });

  it('should handle negative fromIndex', () => {
    expect(findIndex([1, 2, 3], (n) => n === 2, -2)).toBe(1);
  });

  it('should handle empty array', () => {
    expect(findIndex([], (n) => n > 0)).toBe(-1);
  });

  it('should pass index and array to predicate', () => {
    const predicate = vi.fn((value, _index, _array) => value === 2);
    findIndex([1, 2, 3], predicate);
    expect(predicate).toHaveBeenCalledWith(1, 0, [1, 2, 3]);
    expect(predicate).toHaveBeenCalledWith(2, 1, [1, 2, 3]);
  });

  it('should work with numbers', () => {
    expect(findIndex([1, 2, 3, 4], (n) => n % 2 === 0)).toBe(1);
  });

  it('should work with strings', () => {
    expect(findIndex(['a', 'b', 'c'], (s) => s === 'b')).toBe(1);
  });
});
