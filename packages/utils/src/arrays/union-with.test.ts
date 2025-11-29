import { describe, it, expect } from 'vitest';
import { unionWith } from './union-with';

describe('unionWith', () => {
  it('should create union using comparator', () => {
    const objects = [
      { x: 1, y: 2 },
      { x: 2, y: 1 },
    ];
    const others = [
      { x: 1, y: 1 },
      { x: 1, y: 2 },
    ];
    const result = unionWith(
      objects,
      others,
      (a, b) => a.x === b.x && a.y === b.y
    );
    expect(result).toEqual([
      { x: 1, y: 2 },
      { x: 2, y: 1 },
      { x: 1, y: 1 },
    ]);
  });

  it('should handle empty arrays', () => {
    expect(unionWith([], [{ x: 1 }], (a, b) => a.x === b.x)).toEqual([
      { x: 1 },
    ]);
    expect(unionWith([{ x: 1 }], [], (a, b) => a.x === b.x)).toEqual([
      { x: 1 },
    ]);
  });

  it('should remove duplicates based on comparator', () => {
    const objects = [{ x: 1 }];
    const others = [{ x: 1 }];
    expect(unionWith(objects, others, (a, b) => a.x === b.x)).toEqual([
      { x: 1 },
    ]);
  });
});
