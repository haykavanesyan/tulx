import { describe, it, expect } from 'vitest';

import { minBy } from './min-LBy';

describe('minBy', () => {
  it('should return minimum value using iteratee function', () => {
    const objects = [{ n: 1 }, { n: 2 }];
    expect(minBy(objects, (o) => o.n)).toEqual({ n: 1 });
  });

  it('should return minimum value using property path', () => {
    const objects = [{ n: 1 }, { n: 2 }];
    expect(minBy(objects, 'n')).toEqual({ n: 1 });
  });

  it('should return undefined for empty array', () => {
    expect(minBy([], (o) => o.n)).toBeUndefined();
  });

  it('should handle single element', () => {
    const objects = [{ n: 5 }];
    expect(minBy(objects, (o) => o.n)).toEqual({ n: 5 });
  });

  it('should handle negative numbers', () => {
    const objects = [{ n: -5 }, { n: -2 }, { n: -8 }];
    expect(minBy(objects, (o) => o.n)).toEqual({ n: -8 });
  });

  it('should handle duplicates', () => {
    const objects = [{ n: 5 }, { n: 5 }, { n: 5 }];
    expect(minBy(objects, (o) => o.n)).toEqual({ n: 5 });
  });
});
