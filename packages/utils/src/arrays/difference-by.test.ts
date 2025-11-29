import { describe, it, expect } from 'vitest';

import { differenceBy } from './difference-by';

describe('differenceBy', () => {
  it('should exclude values using iteratee function', () => {
    expect(differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor)).toEqual([1.2]);
  });

  it('should exclude values using property path', () => {
    expect(differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], 'x')).toEqual([
      { x: 2 },
    ]);
  });

  it('should handle empty arrays', () => {
    expect(differenceBy([], [1, 2], Math.floor)).toEqual([]);
    expect(differenceBy([1, 2], [], Math.floor)).toEqual([1, 2]);
  });

  it('should work with objects', () => {
    const array = [{ a: 1 }, { a: 2 }, { a: 3 }];
    const values = [{ a: 2 }];
    expect(differenceBy(array, values, 'a')).toEqual([{ a: 1 }, { a: 3 }]);
  });

  it('should handle no matches', () => {
    expect(differenceBy([1.1, 2.2], [1.1, 2.2], Math.floor)).toEqual([]);
  });
});
