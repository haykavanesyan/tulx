import { describe, it, expect } from 'vitest';
import { invertBy } from './invertBy';

describe('invertBy', () => {
  it('should invert with iteratee', () => {
    const object = { a: 1, b: 2, c: 1 };
    expect(invertBy(object)).toEqual({ '1': ['a', 'c'], '2': ['b'] });
  });

  it('should use custom iteratee', () => {
    const object = { a: 1, b: 2, c: 1 };
    expect(invertBy(object, (value) => 'group' + value)).toEqual({
      group1: ['a', 'c'],
      group2: ['b'],
    });
  });
});
