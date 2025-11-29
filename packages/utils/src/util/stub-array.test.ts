import { describe, it, expect } from 'vitest';
import { stubArray } from './stubArray';

describe('stubArray', () => {
  it('should return new empty array', () => {
    const arrays = [stubArray(), stubArray()];
    expect(arrays).toEqual([[], []]);
    expect(arrays[0]).not.toBe(arrays[1]);
  });
});
