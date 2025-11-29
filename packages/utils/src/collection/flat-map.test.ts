import { describe, it, expect } from 'vitest';
import { flatMap } from './flat-map';

describe('flatMap', () => {
  it('should flat map array values', () => {
    function duplicate(n: number) {
      return [n, n];
    }
    expect(flatMap([1, 2], duplicate)).toEqual([1, 1, 2, 2]);
  });

  it('should work with objects', () => {
    function duplicate(n: number) {
      return [n, n];
    }
    expect(flatMap({ a: 1, b: 2 }, duplicate)).toEqual([1, 1, 2, 2]);
  });

  it('should handle non-array returns', () => {
    expect(flatMap([1, 2], (n) => n * 2)).toEqual([2, 4]);
  });

  it('should handle empty array', () => {
    expect(flatMap([], (n) => [n, n])).toEqual([]);
  });

  it('should flatten nested arrays', () => {
    expect(flatMap([1, 2], (n) => [[n], [n]])).toEqual([[1], [1], [2], [2]]);
  });
});
