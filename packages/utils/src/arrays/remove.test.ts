import { describe, it, expect, vi } from 'vitest';
import { remove } from './remove';

describe('remove', () => {
  it('should remove elements matching predicate', () => {
    const array = [1, 2, 3, 4];
    const evens = remove(array, (n) => n % 2 === 0);
    expect(array).toEqual([1, 3]);
    expect(evens).toEqual([2, 4]);
  });

  it('should mutate original array', () => {
    const array = [1, 2, 3];
    remove(array, (n) => n > 1);
    expect(array).toEqual([1]);
  });

  it('should return empty array when no matches', () => {
    const array = [1, 2, 3];
    expect(remove(array, (n) => n > 10)).toEqual([]);
    expect(array).toEqual([1, 2, 3]);
  });

  it('should pass index and array to predicate', () => {
    const predicate = vi.fn((value, index) => index % 2 === 0);
    const array = [1, 2, 3, 4];
    remove(array, predicate);
    expect(predicate).toHaveBeenCalledWith(1, 0, array);
    expect(predicate).toHaveBeenCalledWith(2, 1, array);
  });

  it('should handle empty array', () => {
    const array: unknown[] = [];
    expect(remove(array, () => true)).toEqual([]);
  });
});
