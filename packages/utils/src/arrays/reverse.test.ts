import { describe, it, expect } from 'vitest';

import { reverse } from './reverse';

describe('reverse', () => {
  it('should reverse array', () => {
    const array = [1, 2, 3];
    expect(reverse(array)).toEqual([3, 2, 1]);
  });

  it('should mutate original array', () => {
    const array = [1, 2, 3];
    reverse(array);
    expect(array).toEqual([3, 2, 1]);
  });

  it('should handle empty array', () => {
    const array: unknown[] = [];
    expect(reverse(array)).toEqual([]);
  });

  it('should handle single element', () => {
    const array = [1];
    expect(reverse(array)).toEqual([1]);
  });

  it('should work with strings', () => {
    const array = ['a', 'b', 'c'];
    expect(reverse(array)).toEqual(['c', 'b', 'a']);
  });

  it('should preserve object references', () => {
    const obj1 = { a: 1 };
    const obj2 = { b: 2 };
    const array = [obj1, obj2];
    const result = reverse(array);
    expect(result[0]).toBe(obj2);
    expect(result[1]).toBe(obj1);
  });
});
