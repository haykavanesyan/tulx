import { describe, it, expect } from 'vitest';
import { intersectionBy } from './intersection-by';

describe('intersectionBy', () => {
  it('should find intersection using iteratee function', () => {
    expect(intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor)).toEqual([2.1]);
  });

  it('should find intersection using property path', () => {
    expect(
      intersectionBy([{ x: 1 }, { x: 2 }], [{ x: 2 }, { x: 3 }], 'x')
    ).toEqual([{ x: 2 }]);
  });

  it('should handle empty arrays', () => {
    expect(intersectionBy([], [1, 2], Math.floor)).toEqual([]);
    expect(intersectionBy([1, 2], [], Math.floor)).toEqual([]);
  });

  it('should handle no intersection', () => {
    expect(intersectionBy([1.1, 2.2], [3.3, 4.4], Math.floor)).toEqual([]);
  });

  it('should handle multiple arrays', () => {
    expect(
      intersectionBy([2.1, 1.2], [2.3, 3.4], [2.5, 4.5], Math.floor)
    ).toEqual([2.1]);
  });
});
