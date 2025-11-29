import { describe, it, expect } from 'vitest';
import { uniqBy } from './uniq-by';

describe('uniqBy', () => {
  it('should remove duplicates using iteratee function', () => {
    expect(uniqBy([2.1, 1.2, 2.3], Math.floor)).toEqual([2.1, 1.2]);
  });

  it('should remove duplicates using property path', () => {
    expect(uniqBy([{ x: 1 }, { x: 2 }, { x: 1 }], 'x')).toEqual([
      { x: 1 },
      { x: 2 },
    ]);
  });

  it('should handle empty array', () => {
    expect(uniqBy([], Math.floor)).toEqual([]);
  });

  it('should preserve first occurrence', () => {
    expect(uniqBy([2.1, 2.2, 1.1], Math.floor)).toEqual([2.1, 1.1]);
  });
});
