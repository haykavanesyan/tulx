import { describe, it, expect } from 'vitest';

import { flatMapDepth } from './flat-map-depth';

describe('flatMapDepth', () => {
  it('should flatten mapped results to specified depth', () => {
    function duplicate(n: number) {
      return [[[n, n]]];
    }
    // depth 2 means flatten 2 levels: [[[1,1]]] -> [[1,1]] -> [1,1]
    expect(flatMapDepth([1, 2], duplicate, 2)).toEqual([1, 1, 2, 2]);
  });

  it('should default to depth 1', () => {
    function duplicate(n: number) {
      return [[n, n]];
    }
    // depth 1 means flatten 1 level: [[1,1]] -> [1,1]
    expect(flatMapDepth([1, 2], duplicate)).toEqual([1, 1, 2, 2]);
  });

  it('should work with objects', () => {
    function duplicate(n: number) {
      return [[[n, n]]];
    }
    expect(flatMapDepth({ a: 1, b: 2 }, duplicate, 2)).toEqual([1, 1, 2, 2]);
  });

  it('should handle depth 0', () => {
    function duplicate(n: number) {
      return [[n, n]];
    }
    // depth 0 means no flattening, but each mapped result is still added: [[1,1]] stays as [[1,1]]
    expect(flatMapDepth([1, 2], duplicate, 0)).toEqual([
      [1, 1],
      [2, 2],
    ]);
  });

  it('should handle empty array', () => {
    expect(flatMapDepth([], (n) => [[n]], 2)).toEqual([]);
  });
});
