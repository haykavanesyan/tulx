import { describe, it, expect } from 'vitest';
import { uniqWith } from './uniq-with';

describe('uniqWith', () => {
  it('should remove duplicates using comparator', () => {
    const objects = [
      { x: 1, y: 2 },
      { x: 2, y: 1 },
      { x: 1, y: 2 },
    ];
    const result = uniqWith(objects, (a, b) => a.x === b.x && a.y === b.y);
    expect(result).toEqual([
      { x: 1, y: 2 },
      { x: 2, y: 1 },
    ]);
  });

  it('should handle empty array', () => {
    expect(uniqWith([], (a, b) => a === b)).toEqual([]);
  });

  it('should preserve first occurrence', () => {
    const objects = [{ x: 1 }, { x: 1 }, { x: 2 }];
    expect(uniqWith(objects, (a, b) => a.x === b.x)).toEqual([
      { x: 1 },
      { x: 2 },
    ]);
  });
});
