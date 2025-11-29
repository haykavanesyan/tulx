import { describe, it, expect } from 'vitest';
import { reject } from './reject';

describe('reject', () => {
  it('should reject elements matching predicate', () => {
    const users = [
      { user: 'barney', age: 36, active: false },
      { user: 'fred', age: 40, active: true },
    ];
    expect(reject(users, (o) => o.active)).toEqual([
      { user: 'barney', age: 36, active: false },
    ]);
  });

  it('should work with objects', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(reject(obj, (v) => v > 1)).toEqual([1]);
  });

  it('should handle empty array', () => {
    expect(reject([], (x) => x > 0)).toEqual([]);
  });

  it('should return empty array when all match', () => {
    expect(reject([1, 2, 3], (x) => x > 0)).toEqual([]);
  });

  it('should return all when none match', () => {
    expect(reject([1, 2, 3], (x) => x > 10)).toEqual([1, 2, 3]);
  });
});
