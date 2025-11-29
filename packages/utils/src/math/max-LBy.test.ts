import { describe, it, expect } from 'vitest';
import { maxBy } from './maxBy';

describe('maxBy', () => {
  it('should return maximum value using iteratee function', () => {
    const objects = [{ n: 1 }, { n: 2 }];
    expect(maxBy(objects, (o) => o.n)).toEqual({ n: 2 });
  });

  it('should return maximum value using property path', () => {
    const objects = [{ n: 1 }, { n: 2 }];
    expect(maxBy(objects, 'n')).toEqual({ n: 2 });
  });

  it('should return undefined for empty array', () => {
    expect(maxBy([], (o) => o.n)).toBeUndefined();
  });

  it('should handle single element', () => {
    const objects = [{ n: 5 }];
    expect(maxBy(objects, (o) => o.n)).toEqual({ n: 5 });
  });

  it('should handle negative numbers', () => {
    const objects = [{ n: -5 }, { n: -2 }, { n: -8 }];
    expect(maxBy(objects, (o) => o.n)).toEqual({ n: -2 });
  });

  it('should handle duplicates', () => {
    const objects = [{ n: 5 }, { n: 5 }, { n: 5 }];
    expect(maxBy(objects, (o) => o.n)).toEqual({ n: 5 });
  });
});
