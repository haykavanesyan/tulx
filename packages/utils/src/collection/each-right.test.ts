import { describe, it, expect, vi } from 'vitest';

import { eachRight } from './each-right';

describe('eachRight', () => {
  it('should iterate from right to left', () => {
    const iteratee = vi.fn();
    eachRight([1, 2], iteratee);
    expect(iteratee).toHaveBeenCalledTimes(2);
    expect(iteratee).toHaveBeenCalledWith(2, 1, [1, 2]);
    expect(iteratee).toHaveBeenCalledWith(1, 0, [1, 2]);
  });

  it('should iterate over object from right to left', () => {
    const iteratee = vi.fn();
    eachRight({ a: 1, b: 2 }, iteratee);
    expect(iteratee).toHaveBeenCalledTimes(2);
  });

  it('should return collection', () => {
    const array = [1, 2];
    expect(eachRight(array, () => {})).toBe(array);
  });

  it('should handle empty array', () => {
    const iteratee = vi.fn();
    eachRight([], iteratee);
    expect(iteratee).not.toHaveBeenCalled();
  });
});
