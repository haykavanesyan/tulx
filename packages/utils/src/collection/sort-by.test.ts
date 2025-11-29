import { describe, it, expect } from 'vitest';

import { sortBy } from './sort-by';

describe('sortBy', () => {
  it('should sort by iteratees', () => {
    const users = [
      { user: 'fred', age: 48 },
      { user: 'barney', age: 36 },
      { user: 'fred', age: 40 },
      { user: 'barney', age: 34 },
    ];
    const result = sortBy(users, ['user', 'age']);
    expect(result[0]).toEqual({ user: 'barney', age: 34 });
    expect(result[1]).toEqual({ user: 'barney', age: 36 });
    expect(result[2]).toEqual({ user: 'fred', age: 40 });
    expect(result[3]).toEqual({ user: 'fred', age: 48 });
  });

  it('should work with function iteratees', () => {
    const result = sortBy([{ x: 1 }, { x: 2 }, { x: 1 }], [(o) => o.x]);
    expect(result[0].x).toBe(1);
    expect(result[1].x).toBe(1);
    expect(result[2].x).toBe(2);
  });

  it('should work with objects', () => {
    const obj = { a: { x: 2 }, b: { x: 1 } };
    const result = sortBy(obj, ['x']);
    expect(result[0].x).toBe(1);
    expect(result[1].x).toBe(2);
  });

  it('should handle empty array', () => {
    expect(sortBy([], ['x'])).toEqual([]);
  });

  it('should not mutate original array', () => {
    const array = [{ x: 2 }, { x: 1 }];
    sortBy(array, ['x']);
    expect(array[0].x).toBe(2);
  });
});
