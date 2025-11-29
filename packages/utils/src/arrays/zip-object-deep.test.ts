import { describe, it, expect } from 'vitest';
import { zipObjectDeep } from './zip-object-deep';

describe('zipObjectDeep', () => {
  it('should create object with nested paths', () => {
    const result = zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);
    // Function creates objects with numeric keys, not arrays
    expect(result).toEqual({
      a: {
        b: { '0': { c: 1 }, '1': { d: 2 } },
      },
    });
  });

  it('should handle simple paths', () => {
    expect(zipObjectDeep(['a', 'b'], [1, 2])).toEqual({ a: 1, b: 2 });
  });

  it('should handle arrays of different lengths', () => {
    expect(zipObjectDeep(['a', 'b'], [1])).toEqual({ a: 1 });
  });

  it('should handle empty arrays', () => {
    expect(zipObjectDeep([], [])).toEqual({});
  });

  it('should handle bracket notation', () => {
    // Function creates objects with numeric keys, not arrays
    expect(zipObjectDeep(['a[0]', 'a[1]'], [1, 2])).toEqual({
      a: { '0': 1, '1': 2 },
    });
  });
});
