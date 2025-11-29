import { describe, it, expect } from 'vitest';

import { sortedUniqBy } from './sorted-uniq-by';

describe('sortedUniqBy', () => {
  it('should remove duplicates using iteratee', () => {
    expect(sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor)).toEqual([1.1, 2.3]);
  });

  it('should handle empty array', () => {
    expect(sortedUniqBy([], Math.floor)).toEqual([]);
  });

  it('should handle array with no duplicates', () => {
    expect(sortedUniqBy([1.1, 2.2, 3.3], Math.floor)).toEqual([1.1, 2.2, 3.3]);
  });

  it('should work with objects', () => {
    const objects = [{ x: 1 }, { x: 1 }, { x: 2 }];
    expect(sortedUniqBy(objects, (o) => o.x)).toEqual([{ x: 1 }, { x: 2 }]);
  });
});
