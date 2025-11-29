import { describe, it, expect } from 'vitest';
import { orderBy } from './order-by';

describe('orderBy', () => {
  it('should sort by iteratees with orders', () => {
    const users = [
      { user: 'fred', age: 48 },
      { user: 'barney', age: 34 },
      { user: 'fred', age: 40 },
      { user: 'barney', age: 36 },
    ];
    const result = orderBy(users, ['user', 'age'], ['asc', 'desc']);
    expect(result[0]).toEqual({ user: 'barney', age: 36 });
    expect(result[1]).toEqual({ user: 'barney', age: 34 });
    expect(result[2]).toEqual({ user: 'fred', age: 48 });
    expect(result[3]).toEqual({ user: 'fred', age: 40 });
  });

  it('should default to asc order', () => {
    const result = orderBy([{ x: 2 }, { x: 1 }], ['x']);
    expect(result[0].x).toBe(1);
    expect(result[1].x).toBe(2);
  });

  it('should work with objects', () => {
    const obj = { a: { x: 2 }, b: { x: 1 } };
    const result = orderBy(obj, ['x'], ['desc']);
    expect(result[0].x).toBe(2);
    expect(result[1].x).toBe(1);
  });

  it('should handle empty array', () => {
    expect(orderBy([], ['x'], ['asc'])).toEqual([]);
  });

  it('should not mutate original array', () => {
    const array = [{ x: 2 }, { x: 1 }];
    orderBy(array, ['x'], ['asc']);
    expect(array[0].x).toBe(2);
  });
});
