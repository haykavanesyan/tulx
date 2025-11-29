import { describe, it, expect } from 'vitest';
import { intersectionWith } from './intersection-with';

describe('intersectionWith', () => {
  it('should find intersection using comparator', () => {
    const objects = [
      { x: 1, y: 2 },
      { x: 2, y: 1 },
    ];
    const others = [
      { x: 1, y: 1 },
      { x: 1, y: 2 },
    ];
    const result = intersectionWith(
      objects,
      others,
      (a, b) => a.x === b.x && a.y === b.y
    );
    expect(result).toEqual([{ x: 1, y: 2 }]);
  });

  it('should handle empty arrays', () => {
    expect(intersectionWith([], [{ x: 1 }], (a, b) => a.x === b.x)).toEqual([]);
    expect(intersectionWith([{ x: 1 }], [], (a, b) => a.x === b.x)).toEqual([]);
  });

  it('should handle no intersection', () => {
    const objects = [{ x: 1 }];
    const others = [{ x: 2 }];
    expect(intersectionWith(objects, others, (a, b) => a.x === b.x)).toEqual(
      []
    );
  });
});
