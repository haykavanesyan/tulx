import { describe, it, expect } from 'vitest';

import { flatMapDeep } from './flat-map-deep';

describe('flatMapDeep', () => {
  it('should recursively flatten mapped results', () => {
    function duplicate(n: number) {
      return [[[n, n]]];
    }
    expect(flatMapDeep([1, 2], duplicate)).toEqual([1, 1, 2, 2]);
  });

  it('should work with objects', () => {
    function duplicate(n: number) {
      return [[[n, n]]];
    }
    expect(flatMapDeep({ a: 1, b: 2 }, duplicate)).toEqual([1, 1, 2, 2]);
  });

  it('should handle non-array returns', () => {
    expect(flatMapDeep([1, 2], (n) => n * 2)).toEqual([2, 4]);
  });

  it('should handle empty array', () => {
    expect(flatMapDeep([], (n) => [[[n]]])).toEqual([]);
  });

  it('should handle deeply nested arrays', () => {
    expect(flatMapDeep([1], (n) => [[[[n, n]]]])).toEqual([1, 1]);
  });
});
