import { describe, it, expect } from 'vitest';

import { partition } from './partition';

describe('partition', () => {
  it('should partition array into truthy and falsey', () => {
    const users = [
      { user: 'barney', age: 36, active: false },
      { user: 'fred', age: 40, active: true },
    ];
    const result = partition(users, (o) => o.active);
    expect(result).toEqual([
      [{ user: 'fred', age: 40, active: true }],
      [{ user: 'barney', age: 36, active: false }],
    ]);
  });

  it('should work with objects', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const result = partition(obj, (v) => v > 1);
    expect(result).toEqual([[2, 3], [1]]);
  });

  it('should handle empty array', () => {
    expect(partition([], (x) => x > 0)).toEqual([[], []]);
  });

  it('should handle all truthy', () => {
    expect(partition([1, 2, 3], (x) => x > 0)).toEqual([[1, 2, 3], []]);
  });

  it('should handle all falsey', () => {
    expect(partition([0, -1, -2], (x) => x > 0)).toEqual([[], [0, -1, -2]]);
  });
});
