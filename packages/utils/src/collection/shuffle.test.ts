import { describe, it, expect } from 'vitest';

import { shuffle } from './shuffle';

describe('shuffle', () => {
  it('should return shuffled array', () => {
    const array = [1, 2, 3, 4];
    const result = shuffle(array);
    expect(result.length).toBe(4);
    expect(result.sort()).toEqual([1, 2, 3, 4]);
  });

  it('should not mutate original array', () => {
    const array = [1, 2, 3];
    shuffle(array);
    expect(array).toEqual([1, 2, 3]);
  });

  it('should work with objects', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const result = shuffle(obj);
    expect(result.length).toBe(3);
    expect(result.sort()).toEqual([1, 2, 3]);
  });

  it('should handle empty array', () => {
    expect(shuffle([])).toEqual([]);
  });

  it('should handle single element', () => {
    expect(shuffle([42])).toEqual([42]);
  });
});
