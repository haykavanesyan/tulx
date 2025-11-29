import { describe, it, expect, vi } from 'vitest';
import { forEach } from './for-each';

describe('forEach', () => {
  it('should iterate over array', () => {
    const iteratee = vi.fn();
    forEach([1, 2], iteratee);
    expect(iteratee).toHaveBeenCalledTimes(2);
    expect(iteratee).toHaveBeenCalledWith(1, 0, [1, 2]);
    expect(iteratee).toHaveBeenCalledWith(2, 1, [1, 2]);
  });

  it('should iterate over object', () => {
    const iteratee = vi.fn();
    forEach({ a: 1, b: 2 }, iteratee);
    expect(iteratee).toHaveBeenCalledTimes(2);
  });

  it('should return collection', () => {
    const array = [1, 2];
    expect(forEach(array, () => {})).toBe(array);
  });

  it('should handle empty array', () => {
    const iteratee = vi.fn();
    forEach([], iteratee);
    expect(iteratee).not.toHaveBeenCalled();
  });

  it('should handle empty object', () => {
    const iteratee = vi.fn();
    forEach({}, iteratee);
    expect(iteratee).not.toHaveBeenCalled();
  });
});
