import { describe, it, expect } from 'vitest';
import { nth } from './nth';

describe('nth', () => {
  it('should get element at positive index', () => {
    const array = ['a', 'b', 'c', 'd'];
    expect(nth(array, 1)).toBe('b');
  });

  it('should get element at negative index', () => {
    const array = ['a', 'b', 'c', 'd'];
    expect(nth(array, -2)).toBe('c');
  });

  it('should return undefined for out of bounds positive index', () => {
    expect(nth([1, 2, 3], 10)).toBeUndefined();
  });

  it('should return undefined for out of bounds negative index', () => {
    expect(nth([1, 2, 3], -10)).toBeUndefined();
  });

  it('should handle empty array', () => {
    expect(nth([], 0)).toBeUndefined();
  });

  it('should work with numbers', () => {
    expect(nth([1, 2, 3], 0)).toBe(1);
    expect(nth([1, 2, 3], -1)).toBe(3);
  });

  it('should work with objects', () => {
    const obj = { a: 1 };
    expect(nth([{ b: 2 }, obj], 1)).toBe(obj);
  });
});
