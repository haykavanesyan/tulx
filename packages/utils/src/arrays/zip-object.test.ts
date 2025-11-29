import { describe, it, expect } from 'vitest';

import { zipObject } from './zip-object';

describe('zipObject', () => {
  it('should create object from props and values', () => {
    expect(zipObject(['a', 'b'], [1, 2])).toEqual({ a: 1, b: 2 });
  });

  it('should handle arrays of different lengths', () => {
    expect(zipObject(['a', 'b'], [1])).toEqual({ a: 1 });
    expect(zipObject(['a'], [1, 2])).toEqual({ a: 1 });
  });

  it('should convert numeric keys to strings', () => {
    expect(zipObject([1, 2], ['a', 'b'])).toEqual({ '1': 'a', '2': 'b' });
  });

  it('should handle empty arrays', () => {
    expect(zipObject([], [])).toEqual({});
  });

  it('should work with mixed key types', () => {
    expect(zipObject(['a', 1, 'b'], [1, 2, 3])).toEqual({ a: 1, '1': 2, b: 3 });
  });
});
