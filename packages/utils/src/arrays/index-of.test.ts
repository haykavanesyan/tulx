import { describe, it, expect } from 'vitest';

import { indexOf } from './index-of';

describe('indexOf', () => {
  it('should find index of first occurrence', () => {
    expect(indexOf([1, 2, 1, 2], 2)).toBe(1);
  });

  it('should start search from fromIndex', () => {
    expect(indexOf([1, 2, 1, 2], 2, 2)).toBe(3);
  });

  it('should return -1 when value not found', () => {
    expect(indexOf([1, 2, 3], 4)).toBe(-1);
  });

  it('should handle empty array', () => {
    expect(indexOf([], 1)).toBe(-1);
  });

  it('should handle negative fromIndex', () => {
    expect(indexOf([1, 2, 3, 2], 2, -2)).toBe(3);
  });

  it('should work with strings', () => {
    expect(indexOf(['a', 'b', 'c'], 'b')).toBe(1);
  });

  it('should use strict equality', () => {
    expect(indexOf([1, 2, 3], '2')).toBe(-1);
    expect(indexOf([1, 2, 3], 2)).toBe(1);
  });

  it('should handle NaN', () => {
    expect(indexOf([1, NaN, 3], NaN)).toBe(-1); // NaN !== NaN
  });

  it('should handle objects', () => {
    const obj = { a: 1 };
    expect(indexOf([{ a: 1 }, obj, { a: 1 }], obj)).toBe(1);
  });
});
