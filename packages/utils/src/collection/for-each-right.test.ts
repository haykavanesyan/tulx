import { describe, it, expect, vi } from 'vitest';
import { forEachRight } from './for-each-right';

describe('forEachRight', () => {
  it('should iterate from right to left', () => {
    const iteratee = vi.fn();
    forEachRight([1, 2], iteratee);
    expect(iteratee).toHaveBeenCalledTimes(2);
    expect(iteratee).toHaveBeenCalledWith(2, 1, [1, 2]);
    expect(iteratee).toHaveBeenCalledWith(1, 0, [1, 2]);
  });

  it('should iterate over object from right to left', () => {
    const iteratee = vi.fn();
    forEachRight({ a: 1, b: 2 }, iteratee);
    expect(iteratee).toHaveBeenCalledTimes(2);
  });

  it('should return collection', () => {
    const array = [1, 2];
    expect(forEachRight(array, () => {})).toBe(array);
  });

  it('should handle empty array', () => {
    const iteratee = vi.fn();
    forEachRight([], iteratee);
    expect(iteratee).not.toHaveBeenCalled();
  });
});
