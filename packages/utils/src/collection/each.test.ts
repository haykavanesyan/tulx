import { describe, it, expect, vi } from 'vitest';
import { each } from './each';

describe('each', () => {
  it('should iterate over array', () => {
    const iteratee = vi.fn();
    each([1, 2], iteratee);
    expect(iteratee).toHaveBeenCalledTimes(2);
    expect(iteratee).toHaveBeenCalledWith(1, 0, [1, 2]);
    expect(iteratee).toHaveBeenCalledWith(2, 1, [1, 2]);
  });

  it('should iterate over object', () => {
    const iteratee = vi.fn();
    each({ a: 1, b: 2 }, iteratee);
    expect(iteratee).toHaveBeenCalledTimes(2);
    expect(iteratee).toHaveBeenCalledWith(1, 'a', { a: 1, b: 2 });
  });

  it('should return collection', () => {
    const array = [1, 2];
    expect(each(array, () => {})).toBe(array);
  });

  it('should handle empty array', () => {
    const iteratee = vi.fn();
    each([], iteratee);
    expect(iteratee).not.toHaveBeenCalled();
  });
});
