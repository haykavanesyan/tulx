import { describe, it, expect } from 'vitest';
import { at } from './at';

describe('at', () => {
  it('should get values at paths', () => {
    const object = { a: [{ b: { c: 3 } }, 4] };
    expect(at(object, ['a[0].b.c', 'a[1]'])).toEqual([3, 4]);
  });
});
