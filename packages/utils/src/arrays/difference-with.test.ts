import { describe, it, expect } from 'vitest';

import { differenceWith } from './difference-with';

describe('differenceWith', () => {
  it('should exclude values using comparator', () => {
    const objects = [
      { x: 1, y: 2 },
      { x: 2, y: 1 },
    ];
    const result = differenceWith(
      objects,
      [{ x: 1, y: 2 }],
      (a, b) => a.x === b.x && a.y === b.y
    );
    expect(result).toEqual([{ x: 2, y: 1 }]);
  });

  it('should handle empty arrays', () => {
    expect(differenceWith([], [{ x: 1 }], (a, b) => a.x === b.x)).toEqual([]);
    expect(differenceWith([{ x: 1 }], [], (a, b) => a.x === b.x)).toEqual([
      { x: 1 },
    ]);
  });

  it('should handle no matches', () => {
    const objects = [{ x: 1 }];
    expect(differenceWith(objects, [{ x: 2 }], (a, b) => a.x === b.x)).toEqual([
      { x: 1 },
    ]);
  });
});
