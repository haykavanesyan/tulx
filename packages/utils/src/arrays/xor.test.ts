import { describe, it, expect } from 'vitest';

import { xor } from './xor';

describe('xor', () => {
  it('should return symmetric difference', () => {
    expect(xor([2, 1], [2, 3])).toEqual([1, 3]);
  });

  it('should handle multiple arrays', () => {
    expect(xor([1, 2], [2, 3], [3, 4])).toEqual([1, 4]);
  });

  it('should handle empty arrays', () => {
    expect(xor([], [1, 2])).toEqual([1, 2]);
    expect(xor([1, 2], [])).toEqual([1, 2]);
  });

  it('should handle no arrays', () => {
    expect(xor()).toEqual([]);
  });

  it('should remove duplicates within arrays', () => {
    expect(xor([1, 1, 2], [2, 2, 3])).toEqual([1, 3]);
  });

  it('should work with strings', () => {
    expect(xor(['a', 'b'], ['b', 'c'])).toEqual(['a', 'c']);
  });
});
