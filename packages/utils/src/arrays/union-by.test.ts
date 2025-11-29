import { describe, it, expect } from 'vitest';
import { unionBy } from './union-by';

describe('unionBy', () => {
  it('should create union using iteratee function', () => {
    expect(unionBy([2.1], [1.2, 2.3], Math.floor)).toEqual([2.1, 1.2]);
  });

  it('should create union using property path', () => {
    expect(unionBy([{ x: 1 }, { x: 2 }], [{ x: 2 }, { x: 3 }], 'x')).toEqual([
      { x: 1 },
      { x: 2 },
      { x: 3 },
    ]);
  });

  it('should handle empty arrays', () => {
    expect(unionBy([], [1, 2], Math.floor)).toEqual([1, 2]);
    expect(unionBy([1, 2], [], Math.floor)).toEqual([1, 2]);
  });

  it('should remove duplicates based on iteratee', () => {
    expect(unionBy([2.1, 2.2], [2.3], Math.floor)).toEqual([2.1]);
  });

  it('should handle multiple arrays', () => {
    expect(unionBy([2.1], [1.2], [2.3], Math.floor)).toEqual([2.1, 1.2]);
  });
});
