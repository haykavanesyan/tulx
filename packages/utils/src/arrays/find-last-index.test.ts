import { describe, it, expect, vi } from 'vitest';
import { findLastIndex } from './find-last-index';

describe('findLastIndex', () => {
  it('should find last index of matching element', () => {
    const users = [
      { user: 'barney', active: true },
      { user: 'fred', active: false },
      { user: 'pebbles', active: false },
    ];
    expect(findLastIndex(users, (o) => o.user === 'pebbles')).toBe(2);
    expect(findLastIndex(users, (o) => o.active)).toBe(0);
  });

  it('should return -1 when no element matches', () => {
    expect(findLastIndex([1, 2, 3], (n) => n > 10)).toBe(-1);
  });

  it('should start search from fromIndex', () => {
    expect(findLastIndex([1, 2, 3, 2], (n) => n === 2, 2)).toBe(1);
  });

  it('should handle negative fromIndex', () => {
    expect(findLastIndex([1, 2, 3], (n) => n === 2, -2)).toBe(1);
  });

  it('should handle empty array', () => {
    expect(findLastIndex([], (n) => n > 0)).toBe(-1);
  });

  it('should search from end by default', () => {
    expect(findLastIndex([1, 2, 3, 2], (n) => n === 2)).toBe(3);
  });

  it('should pass index and array to predicate', () => {
    const predicate = vi.fn((value, index, array) => value === 2);
    findLastIndex([1, 2, 3], predicate);
    expect(predicate).toHaveBeenCalledWith(3, 2, [1, 2, 3]);
    expect(predicate).toHaveBeenCalledWith(2, 1, [1, 2, 3]);
  });
});
