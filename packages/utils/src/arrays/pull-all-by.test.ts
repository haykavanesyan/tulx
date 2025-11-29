import { describe, it, expect } from 'vitest';

import { pullAllBy } from './pull-all-by';

describe('pullAllBy', () => {
  it('should remove values using iteratee', () => {
    const array = [{ x: 1 }, { x: 2 }, { x: 3 }, { x: 1 }];
    expect(pullAllBy(array, [{ x: 1 }, { x: 3 }], 'x')).toEqual([{ x: 2 }]);
  });

  it('should mutate original array', () => {
    const array = [{ x: 1 }, { x: 2 }];
    pullAllBy(array, [{ x: 1 }], 'x');
    expect(array).toEqual([{ x: 2 }]);
  });

  it('should work with function iteratee', () => {
    const array = [2.1, 1.2, 2.3];
    expect(pullAllBy(array, [2.4], Math.floor)).toEqual([1.2]);
  });

  it('should handle empty arrays', () => {
    const array: unknown[] = [];
    expect(pullAllBy(array, [{ x: 1 }], 'x')).toEqual([]);
  });
});
