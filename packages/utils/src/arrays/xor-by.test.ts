import { describe, it, expect } from 'vitest';
import { xorBy } from './xor-by';

describe('xorBy', () => {
  it('should return symmetric difference using iteratee', () => {
    expect(xorBy([2.1, 1.2], [2.3, 3.4], Math.floor)).toEqual([1.2, 3.4]);
  });

  it('should work with property path', () => {
    expect(xorBy([{ x: 1 }, { x: 2 }], [{ x: 2 }, { x: 3 }], 'x')).toEqual([
      { x: 1 },
      { x: 3 },
    ]);
  });

  it('should handle empty arrays', () => {
    expect(xorBy([], [1.1, 2.2], Math.floor)).toEqual([1.1, 2.2]);
  });

  it('should handle multiple arrays', () => {
    expect(xorBy([2.1], [1.2], [2.3], Math.floor)).toEqual([1.2]);
  });
});
