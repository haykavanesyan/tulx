import { describe, it, expect } from 'vitest';

import { find } from './find';

describe('find', () => {
  it('should find first matching element in array', () => {
    const users = [
      { user: 'barney', age: 36, active: true },
      { user: 'fred', age: 40, active: false },
    ];
    expect(find(users, (o) => o.age < 40)).toEqual({
      user: 'barney',
      age: 36,
      active: true,
    });
  });

  it('should find first matching element in object', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(find(obj, (v) => v > 1)).toBe(2);
  });

  it('should start search from fromIndex', () => {
    expect(find([1, 2, 3, 2], (n) => n === 2, 2)).toBe(2);
  });

  it('should handle negative fromIndex', () => {
    expect(find([1, 2, 3], (n) => n === 2, -2)).toBe(2);
  });

  it('should return undefined when no match', () => {
    expect(find([1, 2, 3], (n) => n > 10)).toBeUndefined();
  });

  it('should handle empty array', () => {
    expect(find([], (n) => n > 0)).toBeUndefined();
  });
});
