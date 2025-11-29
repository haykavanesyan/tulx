import { describe, it, expect } from 'vitest';
import { sortedIndexBy } from './sorted-index-by';

describe('sortedIndexBy', () => {
  it('should find insertion index using iteratee', () => {
    const objects = [{ x: 4 }, { x: 5 }];
    expect(sortedIndexBy(objects, { x: 4 }, (o) => o.x)).toBe(0);
  });

  it('should handle empty array', () => {
    expect(sortedIndexBy([], { x: 1 }, (o) => o.x)).toBe(0);
  });

  it('should work with numbers', () => {
    const objects = [{ x: 1 }, { x: 3 }, { x: 5 }];
    expect(sortedIndexBy(objects, { x: 4 }, (o) => o.x)).toBe(2);
  });
});
