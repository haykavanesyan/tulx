import { describe, it, expect } from 'vitest';
import { castArray } from './cast-array';

describe('castArray', () => {
  it('should return empty array when called without arguments', () => {
    expect(castArray()).toEqual([]);
  });

  it('should return array as-is', () => {
    const arr = [1, 2, 3];
    expect(castArray(arr)).toBe(arr);
  });

  it('should wrap primitives in array', () => {
    expect(castArray(1)).toEqual([1]);
    expect(castArray('abc')).toEqual(['abc']);
    expect(castArray(true)).toEqual([true]);
  });

  it('should wrap objects in array', () => {
    const obj = { a: 1 };
    expect(castArray(obj)).toEqual([obj]);
  });

  it('should wrap null and undefined', () => {
    expect(castArray(null)).toEqual([null]);
    expect(castArray(undefined)).toEqual([undefined]);
  });
});
