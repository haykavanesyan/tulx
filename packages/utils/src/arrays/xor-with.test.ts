import { describe, it, expect } from 'vitest';

import { xorWith } from './xor-with';

describe('xorWith', () => {
  it('should return symmetric difference using comparator', () => {
    const objects = [
      { x: 1, y: 2 },
      { x: 2, y: 1 },
    ];
    const others = [
      { x: 1, y: 1 },
      { x: 1, y: 2 },
    ];
    const result = xorWith(
      objects,
      others,
      (a, b) => a.x === b.x && a.y === b.y
    );
    expect(result).toEqual([
      { x: 2, y: 1 },
      { x: 1, y: 1 },
    ]);
  });

  it('should handle empty arrays', () => {
    expect(xorWith([], [{ x: 1 }], (a, b) => a.x === b.x)).toEqual([{ x: 1 }]);
  });

  it('should handle multiple arrays', () => {
    const arr1 = [{ x: 1 }];
    const arr2 = [{ x: 2 }];
    const arr3 = [{ x: 1 }];
    expect(xorWith(arr1, arr2, arr3, (a, b) => a.x === b.x)).toEqual([
      { x: 2 },
    ]);
  });
});
