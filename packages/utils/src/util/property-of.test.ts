import { describe, it, expect } from 'vitest';

import { propertyOf } from './property-of';

describe('propertyOf', () => {
  it('should get value at path of object', () => {
    const array = [0, 1, 2];
    const object = { a: array, b: array, c: array };
    const result = ['a[2]', 'c[0]'].map(propertyOf(object));
    expect(result).toEqual([2, 0]);
  });
});
