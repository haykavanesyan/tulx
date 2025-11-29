import { describe, it, expect } from 'vitest';

import { pullAllWith } from './pull-all-with';

describe('pullAllWith', () => {
  it('should remove values using comparator', () => {
    const array = [
      { x: 1, y: 2 },
      { x: 3, y: 4 },
      { x: 5, y: 6 },
    ];
    expect(
      pullAllWith(array, [{ x: 3, y: 4 }], (a, b) => a.x === b.x && a.y === b.y)
    ).toEqual([
      { x: 1, y: 2 },
      { x: 5, y: 6 },
    ]);
  });

  it('should mutate original array', () => {
    const array = [{ x: 1 }, { x: 2 }];
    pullAllWith(array, [{ x: 1 }], (a, b) => a.x === b.x);
    expect(array).toEqual([{ x: 2 }]);
  });

  it('should handle empty arrays', () => {
    const array: unknown[] = [];
    expect(
      pullAllWith(
        array,
        [{ x: 1 }],
        (a, b) => (a as { x: number }).x === (b as { x: number }).x
      )
    ).toEqual([]);
  });
});
