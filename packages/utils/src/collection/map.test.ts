import { describe, it, expect, vi } from 'vitest';
import { map } from './map';

describe('map', () => {
  it('should map array values', () => {
    function square(n: number) {
      return n * n;
    }
    expect(map([4, 8], square)).toEqual([16, 64]);
  });

  it('should map object values', () => {
    function square(n: number) {
      return n * n;
    }
    expect(map({ a: 4, b: 8 }, square)).toEqual([16, 64]);
  });

  it('should pass index and collection to iteratee', () => {
    const iteratee = vi.fn((value, index) => value + index);
    map([1, 2], iteratee);
    expect(iteratee).toHaveBeenCalledWith(1, 0, [1, 2]);
    expect(iteratee).toHaveBeenCalledWith(2, 1, [1, 2]);
  });

  it('should handle empty array', () => {
    expect(map([], (x) => x * 2)).toEqual([]);
  });

  it('should handle empty object', () => {
    expect(map({}, (x) => x * 2)).toEqual([]);
  });

  it('should work with different return types', () => {
    expect(map([1, 2], (n) => String(n))).toEqual(['1', '2']);
  });
});
