import { describe, it, expect } from 'vitest';

import { sortedLastIndexBy } from './sorted-last-index-by';

describe('sortedLastIndexBy', () => {
  it('should find last insertion index using iteratee', () => {
    const objects = [{ x: 4 }, { x: 5 }];
    expect(sortedLastIndexBy(objects, { x: 5 }, (o) => o.x)).toBe(2);
  });

  it('should handle empty array', () => {
    expect(sortedLastIndexBy([], { x: 1 }, (o) => o.x)).toBe(0);
  });

  it('should work with duplicates', () => {
    const objects = [{ x: 1 }, { x: 2 }, { x: 2 }, { x: 3 }];
    expect(sortedLastIndexBy(objects, { x: 2 }, (o) => o.x)).toBe(3);
  });
});
