import { describe, it, expect, vi } from 'vitest';
import { filter } from './filter';

describe('filter', () => {
  it('should filter array elements', () => {
    const users = [
      { user: 'barney', active: true },
      { user: 'fred', active: false },
    ];
    expect(filter(users, (o) => !o.active)).toEqual([
      { user: 'fred', active: false },
    ]);
  });

  it('should filter object values', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(filter(obj, (v) => v > 1)).toEqual([2, 3]);
  });

  it('should pass index and collection to predicate', () => {
    const predicate = vi.fn((value, index) => value > 1);
    filter([1, 2, 3], predicate);
    expect(predicate).toHaveBeenCalledWith(1, 0, [1, 2, 3]);
    expect(predicate).toHaveBeenCalledWith(2, 1, [1, 2, 3]);
  });

  it('should handle empty array', () => {
    expect(filter([], (x) => x > 0)).toEqual([]);
  });

  it('should handle empty object', () => {
    expect(filter({}, (x) => x > 0)).toEqual([]);
  });

  it('should return empty array when no matches', () => {
    expect(filter([1, 2, 3], (x) => x > 10)).toEqual([]);
  });
});
