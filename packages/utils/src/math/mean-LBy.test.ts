import { describe, it, expect } from 'vitest';

import { meanBy } from './mean-LBy';

describe('meanBy', () => {
  it('should compute mean using iteratee function', () => {
    const objects = [{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }];
    expect(meanBy(objects, (o) => o.n)).toBe(5);
  });

  it('should compute mean using property path', () => {
    const objects = [{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }];
    expect(meanBy(objects, 'n')).toBe(5);
  });

  it('should return NaN for empty array', () => {
    expect(meanBy([], (o) => o.n)).toBeNaN();
  });

  it('should handle single element', () => {
    const objects = [{ n: 5 }];
    expect(meanBy(objects, (o) => o.n)).toBe(5);
  });

  it('should handle negative numbers', () => {
    const objects = [{ n: -5 }, { n: -2 }, { n: -8 }];
    expect(meanBy(objects, (o) => o.n)).toBe(-5);
  });

  it('should handle zero', () => {
    const objects = [{ n: 0 }, { n: 0 }, { n: 0 }];
    expect(meanBy(objects, (o) => o.n)).toBe(0);
  });
});
